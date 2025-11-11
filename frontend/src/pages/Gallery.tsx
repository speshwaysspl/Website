import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Grid, 
  List,
  Filter,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Users,
  PartyPopper,
  Eye,
  Image
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

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
  formattedDate?: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

const Gallery = () => {
  const { toast } = useToast();
  
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 12,
    hasNext: false,
    hasPrev: false
  });

  const [categories, setCategories] = useState([
    { value: 'all', label: 'All Categories', icon: Sparkles }
  ]);

  useEffect(() => {
    fetchCategories();
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    fetchGalleryItems();
  }, [selectedCategory, pagination.currentPage]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/gallery/categories`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to fetch categories' }));
        throw new Error(errorData.message || 'Failed to fetch categories');
      }
      
      const data = await response.json();
      const categoryIcons: { [key: string]: any } = {
        'Fests': PartyPopper,
        'Awards': Award,
        'Fun Activities': Users,
        'Team Moments': Users
      };
      
      const categoryOptions = [
        { value: 'all', label: 'All Categories', icon: Sparkles },
        ...data.data.map((category: string) => ({
          value: category,
          label: category,
          icon: categoryIcons[category] || Users
        }))
      ];
      
      setCategories(categoryOptions);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to fetch categories",
        variant: "destructive"
      });
    }
  };

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      const categoryParam = selectedCategory !== 'all' ? `&category=${selectedCategory}` : '';
      const response = await fetch(
        `${API_URL}/gallery?page=${pagination.currentPage}&limit=${pagination.itemsPerPage}${categoryParam}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to fetch gallery items' }));
        throw new Error(errorData.message || 'Failed to fetch gallery items');
      }

      const data = await response.json();
      setGalleryItems(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load gallery items",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Fests': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      'Awards': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
      'Fun Activities': 'bg-gradient-to-r from-green-500 to-teal-500 text-white',
      'Team Moments': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Fests': PartyPopper,
      'Awards': Award,
      'Fun Activities': Users,
      'Team Moments': Users
    };
    return icons[category as keyof typeof icons] || Sparkles;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MFYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIyNSAxMjVIMjAwVjE3NUgyMjVWMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTc1IDE3NUgxNTBWMjAwSDE3NVYxNzVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yMjUgMTc1SDIwMFYyMDBIMjI1VjE3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, currentPage: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const GalleryCard = ({ item }: { item: GalleryItem }) => {
    const CategoryIcon = getCategoryIcon(item.category);
    
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MFYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIyNSAxMjVIMjAwVjE3NUgyMjVWMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTc1IDE3NUgxNTBWMjAwSDE3NVYxNzVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yMjUgMTc1SDIwMFYyMDBIMjI1VjE3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
    };
    
    if (viewMode === 'list') {
      return (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <div className="flex">
            <div className="w-48 h-32 flex-shrink-0">
              <img 
                src={item.image.url} 
                alt={item.title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedItem(item)}
                onError={handleImageError}
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge className={getCategoryColor(item.category)}>
                    <CategoryIcon size={12} className="mr-1" />
                    {item.category}
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedItem(item)}
                >
                  <Eye size={16} />
                </Button>
              </div>
              <h3 className="text-xl font-semibold mb-2 line-clamp-1">{item.title}</h3>
              <p className="text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{formatDate(item.date)}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={item.image.url} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            onClick={() => setSelectedItem(item)}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelectedItem(item)}
                className="w-full"
              >
                <Eye size={16} className="mr-2" />
                View Details
              </Button>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(item.category)}>
              <CategoryIcon size={12} className="mr-1" />
              {item.category}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {item.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {item.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span className="line-clamp-1">{item.location}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="aspect-video" />
          <CardHeader>
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-2/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-3 w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our journey through memorable moments, achievements, and celebrations
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setPagination(prev => ({ ...prev, currentPage: 1 }));
                    }}
                    className="flex items-center gap-2"
                  >
                    <Icon size={16} />
                    {category.label}
                  </Button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} className="mr-2" />
                Grid View
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List size={16} className="mr-2" />
                List View
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <>
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                  : "space-y-6 mb-12"
                }>
                  {galleryItems.map((item) => (
                    <GalleryCard key={item._id} item={item} />
                  ))}
                </div>

                {galleryItems.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                      <Image className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      No gallery items found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedCategory === 'all' 
                        ? "Check back later for amazing content!"
                        : `No items available in ${categories.find(c => c.value === selectedCategory)?.label}`
                      }
                    </p>
                    {selectedCategory !== 'all' && (
                      <Button
                        variant="outline"
                        onClick={() => setSelectedCategory('all')}
                      >
                        View All Categories
                      </Button>
                    )}
                  </div>
                )}

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(pagination.currentPage - 1)}
                      disabled={!pagination.hasPrev}
                    >
                      <ChevronLeft size={16} />
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(pagination.totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        const isActive = pageNum === pagination.currentPage;
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={isActive ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(pageNum)}
                            className="min-w-10"
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(pagination.currentPage + 1)}
                      disabled={!pagination.hasNext}
                    >
                      Next
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedItem.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={selectedItem.image.url} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(selectedItem.category)}>
                      {getCategoryIcon(selectedItem.category) && 
                        React.createElement(getCategoryIcon(selectedItem.category), { size: 12, className: "mr-1" })
                      }
                      {selectedItem.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    {selectedItem.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{selectedItem.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(selectedItem.date)}</span>
                    </div>
                  </div>
                  
                  {selectedItem.readMoreLink && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedItem.readMoreLink, '_blank')}
                      className="w-full sm:w-auto"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Read More
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;