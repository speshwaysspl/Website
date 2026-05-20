import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { getOptimizedImageUrl } from "@/lib/utils";
import api from "@/lib/api";
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  Clock, 
  Sparkles,
  ExternalLink,
  BookOpen,
  Eye,
  ChevronRight
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollReveal } from "@/components/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface BlogItem {
  _id: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
  location?: string;
  readMoreLink?: string;
  image?: { url: string };
  additionalImages?: { url: string; publicId: string }[];
}

const fallbackGalleryItems: BlogItem[] = [
  {
    _id: 'fallback-1',
    title: 'The Future of AI in Software Development',
    description: 'Explore how artificial intelligence is revolutionizing the software development lifecycle, from automated coding to intelligent testing. Artificial intelligence is no longer just a futuristic concept; it is an active force redesigning every tier of technology. In software engineering, code generation utilities, neural debuggers, and machine learning test runners are enabling developer squads to build products twice as fast. As large language models grow more advanced, we will transition from assistants that autocomplete syntax to full-scale agents capable of managing complete application layers.',
    category: 'Technology',
    date: '2023-10-26T10:00:00Z',
    image: { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200' },
  },
  {
    _id: 'fallback-2',
    title: 'Mastering Mobile App UI/UX Design',
    description: 'A deep dive into the principles and best practices for creating intuitive and engaging user interfaces for mobile applications. Mobile design requires intense attention to ergonomics, thumb-reach zones, layout hierarchies, and smooth micro-interactions. High-fidelity layouts need to feel alive; they need dynamic tactile vibrations, quick spring animations, glassmorphism layers, and responsive adaptation parameters that make navigating digital environments second nature.',
    category: 'Design',
    date: '2023-09-15T10:00:00Z',
    image: { url: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200' },
  },
  {
    _id: 'fallback-3',
    title: 'Cloud Computing Trends for 2024',
    description: 'An overview of the most significant trends shaping the cloud computing landscape, including serverless, edge computing, and hybrid clouds. The expansion of edge networks is moving computational tasks closer to the user, drastically shrinking latencies and opening up doors for instantaneous machine learning inferences at the edge. Additionally, cloud optimization parameters and green computing frameworks are helping enterprises scale their cloud infrastructure sustainably.',
    category: 'Cloud',
    date: '2023-11-01T10:00:00Z',
    image: { url: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=1200' },
  },
  {
    _id: 'fallback-4',
    title: 'Digital Transformation Strategies for Enterprises',
    description: 'Key strategies and insights for large organizations looking to successfully navigate their digital transformation journey. Standard legacy applications must yield to fast microservices, event-driven web environments, and cloud architecture clusters. Speshway has been at the forefront of driving these digital transformations, partnering with enterprises to seamlessly upgrade operational layers and deliver maximum user value.',
    category: 'Business',
    date: '2023-08-20T10:00:00Z',
    image: { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const [item, setItem] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const autoplayPlugin = useMemo(() => 
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MFYxNzVIMTc1VjE3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/gallery/${id}`);
        // Axios nesting fix: extract nested data field if present, else fallback
        const blogData = res.data?.data || res.data;
        if (blogData && blogData._id) {
          setItem(blogData);
        } else {
          throw new Error('Empty payload returned');
        }
      } catch (e: any) {
        console.warn('API error fetching blog details, searching local fallback...', e);
        // Resilient fallback lookup
        const local = fallbackGalleryItems.find(f => f._id === id);
        if (local) {
          setItem(local);
        } else {
          setError(e.message || 'Error loading blog post');
        }
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchItem();
  }, [id]);

  const canonical = `https://speshway.com/blog/${id}`;
  const displayDate = item?.date 
    ? new Date(item.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';

  const getCategoryColor = (category: string) => {
    const colors = {
      'Fests': 'bg-purple-500/10 border-purple-500/20 text-purple-300',
      'Awards': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300',
      'Fun Activities': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
      'Team Moments': 'bg-sky-500/10 border-sky-500/20 text-sky-300',
      'Technology': 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
      'Design': 'bg-rose-500/10 border-rose-500/20 text-rose-300',
      'Cloud': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
      'Business': 'bg-amber-500/10 border-amber-500/20 text-amber-300'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-500/10 border-slate-500/20 text-slate-300';
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 overflow-hidden font-sans relative">
      <Helmet>
        <title>{item ? `${item.title} | Speshway Blog` : 'Blog Insights | Speshway Solutions'}</title>
        <meta name="description" content={item?.description ? item.description.substring(0, 160) : 'Read the latest update from Speshway Solutions.'} />
        <meta name="keywords" content="Speshway blog, company news, technology, events, awards" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={item ? `${item.title} | Speshway Blog` : 'Speshway Blog Post'} />
        <meta property="og:description" content={item?.description || 'Latest update from Speshway Solutions.'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={item?.image?.url || 'https://speshway.com/logo.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={item ? `${item.title} | Speshway Blog` : 'Speshway Blog Post'} />
        <meta name="twitter:description" content={item?.description || 'Latest update from Speshway Solutions.'} />
        <meta name="twitter:image" content={item?.image?.url || 'https://speshway.com/logo.png'} />
      </Helmet>

      {/* Cybernetic Ambient Light Blooms */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-[20%] left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] -z-10" />

      {/* Top Banner Cover Image */}
      {item?.image?.url && (
        <div className="w-full h-[40vh] sm:h-[55vh] md:h-[65vh] relative overflow-hidden bg-[#030712]">
          <img 
            src={getOptimizedImageUrl(item.image.url)} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-90"
            loading="eager"
          />
          {/* Bottom mask fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />
        </div>
      )}

      {/* Core Article Layout */}
      <section className={`${item?.image?.url ? '-mt-24 sm:-mt-32' : 'pt-36'} pb-24 relative z-10`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Float Back Nav Bar */}
          <div className="mb-8 flex items-center justify-between">
            <Link to="/blog">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-white hover:border-indigo-500/30 transition-all shadow-xl hover:-translate-y-0.5">
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </button>
            </Link>
            {item?.category && (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
            )}
          </div>

          {/* Skeleton Load State */}
          {loading && (
            <div className="p-8 sm:p-12 rounded-[36px] border border-white/5 bg-white/[0.01] backdrop-blur-xl space-y-6">
              <Skeleton className="h-4 w-1/4 bg-white/5" />
              <Skeleton className="h-12 w-3/4 bg-white/5" />
              <div className="flex gap-4">
                <Skeleton className="h-4 w-1/5 bg-white/5" />
                <Skeleton className="h-4 w-1/5 bg-white/5" />
              </div>
              <Skeleton className="h-4 w-full bg-white/5" />
              <Skeleton className="h-4 w-full bg-white/5" />
              <Skeleton className="h-4 w-5/6 bg-white/5" />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="p-8 sm:p-12 rounded-[36px] border border-red-500/10 bg-red-500/[0.02] text-center space-y-6">
              <h3 className="text-2xl font-black text-red-400">Failed to Load Article</h3>
              <p className="text-gray-400 max-w-md mx-auto text-sm font-semibold">{error}</p>
              <Link to="/blog">
                <Button className="bg-indigo-500 hover:bg-indigo-600 font-extrabold px-6 rounded-xl">
                  Return to Blog List
                </Button>
              </Link>
            </div>
          )}

          {/* Active Article Content */}
          {item && !loading && (
            <ScrollReveal>
              <div className="p-8 sm:p-12 md:p-16 rounded-[36px] border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-3xl space-y-8">
                
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.18em] border-b border-white/5 pb-6">
                  {displayDate && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      Published on {displayDate}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      {item.location}
                    </span>
                  )}
                  <span className="flex items-center gap-2 ml-auto">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    5 Min Read
                  </span>
                </div>

                {/* Article Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  {item.title}
                </h1>

                {/* Main Article Copy */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium whitespace-pre-line tracking-wide">
                  {item.description}
                </p>

                {/* Additional Screenshots Carousel (if uploaded by admin) */}
                {item.additionalImages && item.additionalImages.length > 0 && (
                  <div className="pt-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xs font-black uppercase tracking-[0.22em] text-indigo-400">
                        Event Showcase & Media Previews
                      </h3>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent" />
                    </div>

                    <div className="relative group/carousel">
                      <Carousel
                        className="w-full"
                        plugins={[autoplayPlugin]}
                        opts={{
                          loop: true,
                          align: "start",
                        }}
                      >
                        <CarouselContent>
                          {item.additionalImages.map((img, idx) => (
                            <CarouselItem key={idx} className="basis-full sm:basis-1/2">
                              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl relative flex items-center justify-center p-1 group">
                                <img 
                                  src={getOptimizedImageUrl(img.url)} 
                                  alt={`Media ${idx + 1}`}
                                  className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                                  onError={handleImageError}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 scale-125" />
                        <CarouselNext className="right-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 scale-125" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {/* External Read More CTA */}
                {item.readMoreLink && (
                  <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                        Want to read the full story?
                      </h4>
                      <p className="text-xs text-gray-400 font-medium">
                        This article is linked to an external blog post or official document.
                      </p>
                    </div>
                    <a 
                      href={item.readMoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5">
                        Read Full Story
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <InternalLinks 
            title="Discover More Speshway Company Insights" 
            layout="chips"
            limit={12}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
