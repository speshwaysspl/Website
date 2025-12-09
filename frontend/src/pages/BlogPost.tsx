import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const RAW_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
const API_URL = RAW_API_URL.endsWith('/api')
  ? RAW_API_URL
  : `${RAW_API_URL.replace(/\/+$/, '')}/api`;

interface BlogItem {
  _id: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
  location?: string;
  readMoreLink?: string;
  image?: { url: string };
}

const BlogPost = () => {
  const { id } = useParams();
  const [item, setItem] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/gallery/${id}`);
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setItem(data);
      } catch (e: any) {
        setError(e.message || 'Error loading blog post');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchItem();
  }, [id]);

  const canonical = `https://www.speshway.com/blog/${id}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{item ? `${item.title} | Speshway Blog` : 'Blog Post | Speshway Blog'}</title>
        <meta name="description" content={item?.description || 'Read the latest update from Speshway Solutions.'} />
        <meta name="keywords" content="Speshway blog, company news, technology, events, awards" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={item ? `${item.title} | Speshway Blog` : 'Speshway Blog Post'} />
        <meta property="og:description" content={item?.description || 'Latest update from Speshway Solutions.'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={item?.image?.url || 'https://www.speshway.com/logo.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={item ? `${item.title} | Speshway Blog` : 'Speshway Blog Post'} />
        <meta name="twitter:description" content={item?.description || 'Latest update from Speshway Solutions.'} />
        <meta name="twitter:image" content={item?.image?.url || 'https://www.speshway.com/logo.png'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": item?.title || 'Speshway Blog Post',
          "description": item?.description || 'Latest update from Speshway Solutions.',
          "image": item?.image?.url || 'https://www.speshway.com/logo.png',
          "datePublished": item?.date || new Date().toISOString(),
          "author": {"@type":"Organization","name":"Speshway Solutions"},
          "publisher": {"@type":"Organization","name":"Speshway Solutions","logo":{"@type":"ImageObject","url":"https://www.speshway.com/logo.png"}},
          "mainEntityOfPage": canonical,
          "url": canonical
        })}</script>
      </Helmet>
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {loading && <Card className="p-6">Loading...</Card>}
          {error && <Card className="p-6 text-red-600">{error}</Card>}
          {item && (
            <Card className="overflow-hidden">
              {item.image?.url && (
                <img src={item.image.url} alt={item.title} className="w-full h-auto" />
              )}
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <div className="flex gap-3 mb-6 text-sm text-muted-foreground">
                  {item.category && <span>Category: {item.category}</span>}
                  {item.date && <span>Date: {new Date(item.date).toLocaleDateString()}</span>}
                  {item.location && <span>Location: {item.location}</span>}
                </div>
                <Link to="/blog">
                  <Button variant="outline">Back to Blog</Button>
                </Link>
              </div>
            </Card>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
