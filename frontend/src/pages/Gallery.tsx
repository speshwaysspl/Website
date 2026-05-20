import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award,
  Users,
  PartyPopper,
  Eye,
  Image as ImageIcon,
  Sparkles,
  BookOpen,
  Clock,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InternalLinks from '@/components/InternalLinks';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { StaggerContainer, StaggerItem, HoverScale, FadeIn, ScrollReveal } from "@/components/animations";
import { Helmet } from "react-helmet-async";
import { getOptimizedImageUrl } from "@/lib/utils";
import api, { getBaseUrl } from "@/lib/api";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { m, AnimatePresence } from "framer-motion";

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location?: string;
  readMoreLink?: string;
  image: {
    url: string;
    publicId: string;
  };
  additionalImages?: {
    url: string;
    publicId: string;
  }[];
  formattedDate?: string;
  createdAt?: string;
}

const Gallery = () => {
  const { toast } = useToast();
  
  const [galleryItemsData, setGalleryItemsData] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readIds, setReadIds] = useState<Set<string>>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('galleryReadIds') || '[]');
      return new Set(Array.isArray(saved) ? saved : []);
    } catch {
      return new Set<string>();
    }
  });

  const autoplayPlugin = React.useMemo(() => 
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  []);

  const isNewItem = (item: GalleryItem) => {
    const dateStr = item.createdAt || item.date;
    if (!dateStr) return false;
    const itemDate = new Date(dateStr).getTime();
    const days30 = 30 * 24 * 60 * 60 * 1000;
    return Date.now() - itemDate <= days30;
  };

  const fallbackGalleryItems: GalleryItem[] = [
    {
      _id: 'fallback-1',
      title: 'The Future of AI in Software Development',
      description: 'Explore how artificial intelligence is revolutionizing the software development lifecycle, from automated coding to intelligent testing.',
      category: 'Technology',
      date: '2023-10-26T10:00:00Z',
      image: { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', publicId: 'fallback-ai-dev' },
      formattedDate: 'October 26, 2023',
    },
    {
      _id: 'fallback-2',
      title: 'Mastering Mobile App UI/UX Design',
      description: 'A deep dive into the principles and best practices for creating intuitive and engaging user interfaces for mobile applications.',
      category: 'Design',
      date: '2023-09-15T10:00:00Z',
      image: { url: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800', publicId: 'fallback-mobile-uiux' },
      formattedDate: 'September 15, 2023',
    },
    {
      _id: 'fallback-3',
      title: 'Cloud Computing Trends for 2024',
      description: 'An overview of the most significant trends shaping the cloud computing landscape, including serverless, edge computing, and hybrid clouds.',
      category: 'Cloud',
      date: '2023-11-01T10:00:00Z',
      image: { url: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800', publicId: 'fallback-cloud-trends' },
      formattedDate: 'November 1, 2023',
    },
    {
      _id: 'fallback-4',
      title: 'Digital Transformation Strategies for Enterprises',
      description: 'Key strategies and insights for large organizations looking to successfully navigate their digital transformation journey.',
      category: 'Business',
      date: '2023-08-20T10:00:00Z',
      image: { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', publicId: 'fallback-digital-xform' },
      formattedDate: 'August 20, 2023',
    },
  ];

  const galleryItems = galleryItemsData && galleryItemsData.length > 0 ? galleryItemsData : fallbackGalleryItems;

  const fetchGalleryItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/gallery?limit=1000');
      const data = response.data;
      const items = Array.isArray(data) ? data : (data.data || []);
      setGalleryItemsData(items);
    } catch (error: any) {
      console.error('Error fetching gallery items:', error);
      toast({
        title: 'Error',
        description: error.message || 'Could not load gallery items.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await api.get('/gallery/categories');
      const data = response.data;
      const list: string[] = Array.isArray(data) ? data : (data.data || []);
      setCategories(list);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }, []);

  useEffect(() => {
    fetchGalleryItems();
    fetchCategories();
  }, [fetchGalleryItems, fetchCategories]);

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

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Fests': PartyPopper,
      'Awards': Award,
      'Fun Activities': Users,
      'Team Moments': Users,
      'Technology': Sparkles,
      'Design': Sparkles,
      'Cloud': Sparkles,
      'Business': Sparkles
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MFYxNzVIMTc1VjE3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  // Filter items dynamically based on tabs, dropdown filters, and search query
  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = selectedCategory === 'all' || (item.category || 'Uncategorized').toLowerCase() === selectedCategory.toLowerCase();
    
    let statusMatch = true;
    if (selectedStatus === 'new') statusMatch = isNewItem(item);
    else if (selectedStatus === 'read') statusMatch = readIds.has(item._id);
    else if (selectedStatus === 'unread') statusMatch = !readIds.has(item._id);

    const searchMatch = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.category || '').toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;
  });

  // Pick the first item as featured spotlight (only when viewing "all" categories and search is empty)
  const showSpotlight = selectedCategory === 'all' && selectedStatus === 'all' && searchQuery === '' && filteredItems.length > 0;
  const spotlightItem = showSpotlight ? filteredItems[0] : null;
  const gridItems = showSpotlight ? filteredItems.slice(1) : filteredItems;

  const BlogCard = ({ item }: { item: GalleryItem }) => {
    const CategoryIcon = getCategoryIcon(item.category);
    return (
      <Link 
        to={`/blog/${item._id}`} 
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] hover:-translate-y-2 shadow-2xl"
        onClick={() => {
          // Add to read IDs
          const updated = new Set(readIds).add(item._id);
          setReadIds(updated);
          localStorage.setItem('galleryReadIds', JSON.stringify(Array.from(updated)));
        }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Blog Image Frame */}
        <div className="aspect-[16/10] relative overflow-hidden bg-[#030712]/50">
          <img 
            src={getOptimizedImageUrl(item.image.url)} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
          {/* Subtle vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
          
          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md ${getCategoryColor(item.category)}`}>
              <CategoryIcon className="w-3 h-3" />
              {item.category}
            </span>
          </div>

          {/* New Tag Indicator */}
          {isNewItem(item) && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 text-black text-[9px] font-black uppercase tracking-widest shadow-lg">
                New
              </span>
            </div>
          )}
        </div>

        {/* Card Metadata & Content */}
        <div className="flex-1 flex flex-col p-6 space-y-4">
          <div className="flex items-center gap-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              {formatDate(item.date)}
            </span>
            {item.location && (
              <span className="flex items-center gap-1 max-w-[150px] truncate">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {item.location}
              </span>
            )}
            <span className="flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              5 Min Read
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug line-clamp-2">
            {item.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3">
            {item.description}
          </p>

          {/* Learn More Button aligned at bottom */}
          <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between text-indigo-400 group-hover:text-indigo-300 font-extrabold text-xs uppercase tracking-widest transition-colors">
            <span>Read Full Story</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </Link>
    );
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden p-0 space-y-6">
          <Skeleton className="aspect-[16/10] bg-white/5 w-full" />
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-1/3 bg-white/5" />
              <Skeleton className="h-4 w-1/4 bg-white/5" />
            </div>
            <Skeleton className="h-6 w-3/4 bg-white/5" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-5/6 bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 overflow-hidden font-sans">
      <Helmet>
        <title>Blog & Insights | Speshway Solutions</title>
        <meta name="description" content={`Stay updated with the Speshway Solutions blog, covering technology insights, company news, fests, and life at Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "Speshway blog",
          "company news",
          "technology insights"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/blog" />
      </Helmet>

      <Navbar />

      {/* Cybernetic Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-[400px] right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px] -z-10" />

      {/* Hero Header Section */}
      <section className="pt-40 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Speshway Insights
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                Stories, News &<br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Tech Innovations</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Explore our engineering updates, memorable achievements, dynamic cultural moments, and industry-leading resources.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dynamic Search & Category Filter Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-xl space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar Input */}
              <div className="relative w-full md:w-[320px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#030712]/50 border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>

              {/* Status & Secondary Dropdowns */}
              <div className="flex gap-3 w-full md:w-auto items-center justify-end">
                <div className="w-full sm:w-[180px]">
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full bg-[#030712]/50 border-white/10 text-xs py-5 rounded-2xl font-bold uppercase tracking-wider text-gray-300 focus:ring-0">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-950 border-white/10">
                      <SelectItem className="text-xs uppercase tracking-wider font-semibold text-gray-300" value="all">All Articles</SelectItem>
                      <SelectItem className="text-xs uppercase tracking-wider font-semibold text-gray-300" value="new">New Releases</SelectItem>
                      <SelectItem className="text-xs uppercase tracking-wider font-semibold text-gray-300" value="unread">Unread</SelectItem>
                      <SelectItem className="text-xs uppercase tracking-wider font-semibold text-gray-300" value="read">Read</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Glowing Sliding Tabs for Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth border-t border-white/5 pt-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border transition-all duration-300 ${
                  selectedCategory === 'all' 
                    ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                    : 'bg-transparent border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                }`}
              >
                All Updates
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border transition-all duration-300 ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                      : 'bg-transparent border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Spotlight Banner & Blog Grid */}
      <section className="pb-32 pt-8">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div className="space-y-12">
              
              {/* Feature Spotlight Post Banner */}
              {showSpotlight && spotlightItem && (
                <ScrollReveal>
                  <Link 
                    to={`/blog/${spotlightItem._id}`}
                    onClick={() => {
                      const updated = new Set(readIds).add(spotlightItem._id);
                      setReadIds(updated);
                      localStorage.setItem('galleryReadIds', JSON.stringify(Array.from(updated)));
                    }}
                    className="group block relative w-full aspect-video md:aspect-[21/10] rounded-[36px] overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-3xl hover:border-indigo-500/20 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 h-full w-full">
                      {/* Left: Featured Image */}
                      <div className="md:col-span-7 h-full w-full relative overflow-hidden bg-[#030712]">
                        <img 
                          src={getOptimizedImageUrl(spotlightItem.image.url)} 
                          alt={spotlightItem.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent" />
                      </div>

                      {/* Right: Meta Content */}
                      <div className="md:col-span-5 flex flex-col justify-center p-8 md:p-12 space-y-6">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest bg-indigo-500/15 border-indigo-500/25 text-indigo-300">
                            <Sparkles className="w-3 h-3" />
                            Spotlight Feature
                          </span>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${getCategoryColor(spotlightItem.category)}`}>
                            {spotlightItem.category}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-indigo-300 transition-colors leading-tight line-clamp-3">
                          {spotlightItem.title}
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium line-clamp-4">
                          {spotlightItem.description}
                        </p>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-indigo-400 font-extrabold text-xs uppercase tracking-widest transition-colors">
                          <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                              {formatDate(spotlightItem.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-indigo-400" />
                              5 Min Read
                            </span>
                          </div>
                          <span className="group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5">
                            Read Article &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )}

              {/* No Results Fallback */}
              {filteredItems.length === 0 && (
                <div className="text-center py-20 rounded-[36px] bg-white/[0.01] border border-white/5 backdrop-blur-xl">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 rounded-full flex items-center justify-center border border-indigo-500/20">
                    <ImageIcon className="w-10 h-10 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">No Articles Found</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm font-semibold">
                    We couldn't find any articles matching your filters or search terms. Try searching something else!
                  </p>
                </div>
              )}

              {/* Core Articles Grid */}
              {gridItems.length > 0 && (
                <div className="space-y-6">
                  {showSpotlight && (
                    <div className="flex items-center gap-4 pt-6">
                      <h3 className="text-xs font-black uppercase tracking-[0.22em] text-indigo-400">
                        More Insights & Stories
                      </h3>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent" />
                    </div>
                  )}
                  <StaggerContainer staggerDelay={0.08}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {gridItems.map((item, idx) => (
                        <StaggerItem key={item._id}>
                          <BlogCard item={item} />
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-20 bg-white/[0.01] border-t border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <InternalLinks 
            title="Explore More Speshway Insights & News" 
            layout="chips"
            limit={12}
          />
        </div>
      </section>

      <Footer />

      {/* Legacy/Safety Image Detail Modal with lenis prevention */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent data-lenis-prevent className="max-w-[90vw] w-full max-h-[95vh] overflow-y-auto p-0 gap-0 bg-background/95 backdrop-blur-md border-none shadow-2xl">
          {selectedItem && (
            <div className="p-6 sm:p-8">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 aspect-video rounded-xl overflow-hidden relative group shadow-lg">
                  {selectedItem.additionalImages && selectedItem.additionalImages.length > 0 ? (
                    <Carousel
                      className="w-full h-full"
                      plugins={[autoplayPlugin]}
                      opts={{
                        loop: true,
                        align: "start",
                      }}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="w-full h-full aspect-video bg-black/5 rounded-lg overflow-hidden">
                            <img 
                              src={getOptimizedImageUrl(selectedItem.image.url)} 
                              alt={selectedItem.title}
                              className="w-full h-full object-contain"
                              onError={handleImageError}
                            />
                          </div>
                        </CarouselItem>
                        {selectedItem.additionalImages.map((img: any, index: number) => (
                          <CarouselItem key={index}>
                            <div className="w-full h-full aspect-video bg-black/5 rounded-lg overflow-hidden">
                              <img 
                                src={getOptimizedImageUrl(img.url)} 
                                alt={`${selectedItem.title} ${index + 1}`}
                                className="w-full h-full object-contain"
                                onError={handleImageError}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 scale-125" />
                      <CarouselNext className="right-4 scale-125" />
                    </Carousel>
                  ) : (
                    <div className="w-full h-full aspect-video bg-black/5 rounded-lg overflow-hidden">
                      <img 
                        src={getOptimizedImageUrl(selectedItem.image.url)} 
                        alt={selectedItem.title}
                        className="w-full h-full object-contain"
                        onError={handleImageError}
                      />
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <Badge className={`${getCategoryColor(selectedItem.category)} text-sm py-1 px-3 shadow-sm`}>
                      {selectedItem.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-muted-foreground pt-4 border-t">
                    {selectedItem.location && (
                      <div className="flex items-center gap-2.5">
                        <MapPin size={18} className="text-primary" />
                        <span>{selectedItem.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2.5">
                      <Calendar size={18} className="text-primary" />
                      <span>{formatDate(selectedItem.date)}</span>
                    </div>
                  </div>
                  
                  {selectedItem.readMoreLink && (
                    <div className="pt-4">
                      <Button
                        variant="default"
                        size="lg"
                        onClick={() => window.open(selectedItem.readMoreLink, '_blank')}
                        className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Read Full Story
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
