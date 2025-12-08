import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/animations';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: settings, refetch } = useQuery({
    queryKey: ['settings'],
    queryFn: () => api.get('/settings').then(res => res.data),
  });

  const [heroTitleColor, setHeroTitleColor] = useState('');
  const [heroSubtitleColor, setHeroSubtitleColor] = useState('');
  const [welcomeBadgeColor, setWelcomeBadgeColor] = useState('');
  const [welcomeBadgeEffect, setWelcomeBadgeEffect] = useState('');
  const initializedRef = useRef(false);

  const updateMutation = useMutation({
    mutationFn: async (payload: { heroTitleColor?: string; heroSubtitleColor?: string; welcomeBadgeColor?: string; welcomeBadgeEffect?: string }) => {
      const res = await api.put('/settings', payload);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['settings'], data);
    },
    onError: (error: any) => {
      toast({ title: 'Failed to update settings', description: error.message, variant: 'destructive' });
    }
  });

  useEffect(() => {
    if (settings) {
      setHeroTitleColor(settings.heroTitleColor || '');
      setHeroSubtitleColor(settings.heroSubtitleColor || '');
      setWelcomeBadgeColor(settings.welcomeBadgeColor || '');
      setWelcomeBadgeEffect(settings.welcomeBadgeEffect || 'pulse');
      initializedRef.current = true;
    }
  }, [settings]);

  useEffect(() => {
    if (!initializedRef.current) return;
    const id = setTimeout(() => {
      updateMutation.mutate({ heroTitleColor });
    }, 250);
    return () => clearTimeout(id);
  }, [heroTitleColor]);

  useEffect(() => {
    if (!initializedRef.current) return;
    const id = setTimeout(() => {
      updateMutation.mutate({ heroSubtitleColor });
    }, 250);
    return () => clearTimeout(id);
  }, [heroSubtitleColor]);

  useEffect(() => {
    if (!initializedRef.current) return;
    const id = setTimeout(() => {
      updateMutation.mutate({ welcomeBadgeColor });
    }, 250);
    return () => clearTimeout(id);
  }, [welcomeBadgeColor]);

  useEffect(() => {
    if (!initializedRef.current) return;
    const id = setTimeout(() => {
      updateMutation.mutate({ welcomeBadgeEffect });
    }, 250);
    return () => clearTimeout(id);
  }, [welcomeBadgeEffect]);

  

  const handleSave = async () => {
    try {
      await api.put('/settings', { heroTitleColor, heroSubtitleColor, welcomeBadgeColor, welcomeBadgeEffect });
      toast({ title: 'Settings updated' });
      refetch();
    } catch (error: any) {
      toast({ title: 'Failed to update settings', description: error.message, variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-6">
            <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>
              <ArrowLeft size={16} className="mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <ScrollReveal>
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="heroTitleColor">Hero Title Color</Label>
                  <div className="flex items-center gap-3">
                    <Input id="heroTitleColor" value={heroTitleColor} onChange={(e) => setHeroTitleColor(e.target.value)} placeholder="#0ea5e9" />
                    <Input type="color" value={heroTitleColor || '#000000'} onChange={(e) => setHeroTitleColor(e.target.value)} className="w-12 p-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heroSubtitleColor">Hero Subtitle Color</Label>
                  <div className="flex items-center gap-3">
                    <Input id="heroSubtitleColor" value={heroSubtitleColor} onChange={(e) => setHeroSubtitleColor(e.target.value)} placeholder="#0ea5e9" />
                    <Input type="color" value={heroSubtitleColor || '#000000'} onChange={(e) => setHeroSubtitleColor(e.target.value)} className="w-12 p-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="welcomeBadgeColor">Welcome Badge Color</Label>
                  <div className="flex items-center gap-3">
                    <Input id="welcomeBadgeColor" value={welcomeBadgeColor} onChange={(e) => setWelcomeBadgeColor(e.target.value)} placeholder="#3b82f6" />
                    <Input type="color" value={welcomeBadgeColor || '#3b82f6'} onChange={(e) => setWelcomeBadgeColor(e.target.value)} className="w-12 p-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Welcome Badge Effect</Label>
                  <Select value={welcomeBadgeEffect} onValueChange={setWelcomeBadgeEffect}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select effect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="pulse">Pulse</SelectItem>
                      <SelectItem value="shimmer">Shimmer</SelectItem>
                      <SelectItem value="slide-arrow">Slide Right + Arrow</SelectItem>
                      <SelectItem value="combo">Combo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleSave} className="flex-1">Save Changes</Button>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-muted-foreground">Preview</div>
                  <div className="mt-2 space-y-3">
                    <div>
                      <span className="px-4 py-2 rounded-full border text-sm font-semibold" style={{ color: welcomeBadgeColor || undefined, borderColor: welcomeBadgeColor || undefined, backgroundColor: welcomeBadgeColor ? `${welcomeBadgeColor}20` : undefined }}>Welcome to the Future of IT ({welcomeBadgeEffect})</span>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: heroTitleColor || undefined }}>Transform Your Business with Advanced Technology</h2>
                    <p className="mt-1" style={{ color: heroSubtitleColor || undefined }}>SpeshwaySolutions delivers innovative IT solutions that drive digital transformation and accelerate business growth in the modern era.</p>
                    <div className="flex gap-3 pt-2">
                      <Button>Get Started</Button>
                      <Button variant="outline">Explore Services</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SettingsPage;
