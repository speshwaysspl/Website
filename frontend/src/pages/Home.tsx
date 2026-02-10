import { Link } from "react-router-dom";
import { ArrowRight, Code, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/happyFamily.png";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, ScrollReveal, ParallaxHero, ScrollParallaxItem } from "@/components/animations";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

const Home = () => {
  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: () => api.get('/clients').then(res => {
      // Handle both array response and wrapped response
      const data = res.data;
      return Array.isArray(data) ? data : (data?.data || data || []);
    }),
  });

  const { data: banners } = useQuery({
    queryKey: ['home-banners'],
    queryFn: () => api.get('/home-banners').then(res => res.data),
  });

  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: () => api.get('/settings').then(res => res.data),
  });

  const [heroIndex, setHeroIndex] = useState(0);
  const activeBanners = Array.isArray(banners)
    ? banners.filter((b: any) => b.isActive).sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  useEffect(() => {
    setHeroIndex(0);
  }, [activeBanners.length]);

  useEffect(() => {
    if (activeBanners.length > 1) {
      const id = setInterval(() => {
        setHeroIndex((i) => (i + 1) % activeBanners.length);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [activeBanners.length]);

  const heroBgSrc = activeBanners.length > 0
    ? activeBanners[heroIndex]?.image?.url
    : heroImage;

  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to match your unique business needs.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensuring rapid deployment without compromising quality.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business, from startup to enterprise.",
    },
  ];

  const toRgba = (hex: string, alpha: number) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Speshway Solutions | Leading IT Solutions Provider</title>
        <meta name="description" content="Speshway Solutions delivers innovative IT services: custom software, cloud, mobile, AI, and secure infrastructure. Transform your business with technology." />
        <meta name="keywords" content="speshway, speshway solutions, speshway it solutions, speshway software company, it services company in india, custom software development company, automation and testing services" />
        <link rel="canonical" href="https://www.speshway.com/" />
        <meta property="og:title" content="Speshway Solutions | Leading IT Solutions Provider" />
        <meta property="og:description" content="Innovative IT solutions that drive digital transformation and growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SpeshwayM56509" />
        <meta name="twitter:title" content="Speshway Solutions | Leading IT Solutions Provider" />
        <meta name="twitter:description" content="Innovative IT solutions that drive digital transformation and growth." />
        <meta name="twitter:image" content="https://www.speshway.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Speshway Solutions Private Limited",
          "url": "https://www.speshway.com/",
          "logo": "https://www.speshway.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61584485021568",
            "https://www.linkedin.com/company/speshwaysolutions",
            "https://x.com/SpeshwayM56509"
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Speshway Solutions Private Limited",
          "url": "https://www.speshway.com/",
          "logo": "https://www.speshway.com/logo.png",
          "image": "https://www.speshway.com/logo.png",
          "telephone": "+91-0000000000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": "IN"
          },
          "priceRange": "$$$"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Speshway Solutions",
          "url": "https://www.speshway.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.speshway.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}</script>
      </Helmet>
      <Navbar />

      <ParallaxHero backgroundImage={heroBgSrc}>
        
        {settings?.showHeroSection !== false && (
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block relative">
                {(() => {
                  const effect = settings?.welcomeBadgeEffect || 'pulse';
                const baseAnimate: any = { opacity: 1, x: 0 };
                const pulseAnimate: any = {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    `0 0 0px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0)}`,
                    `0 0 18px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.35)}`,
                    `0 0 0px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0)}`,
                  ],
                };
                const glowAnimate: any = {
                  boxShadow: [
                    `0 0 0px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0)}`,
                    `0 0 28px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.55)}`,
                    `0 0 0px ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0)}`,
                  ],
                };
                const bounceAnimate: any = { y: [0, -4, 0] };
                const tiltAnimate: any = { rotate: [-1.5, 1.5, -1.5] };
                const rotateAnimate: any = { rotate: [0, 360] };
                const wiggleAnimate: any = { rotate: [-3, 3, -3] };

                const animate =
                  effect === 'pulse' ? { ...baseAnimate, ...pulseAnimate } :
                  effect === 'glow' ? { ...baseAnimate, ...glowAnimate } :
                  effect === 'bounce' ? { ...baseAnimate, ...bounceAnimate } :
                  effect === 'tilt' ? { ...baseAnimate, ...tiltAnimate } :
                  effect === 'rotate' ? { ...baseAnimate, ...rotateAnimate } :
                  effect === 'wiggle' ? { ...baseAnimate, ...wiggleAnimate } :
                  effect === 'combo' ? { ...baseAnimate, ...pulseAnimate, ...bounceAnimate } :
                  baseAnimate;

                const transition =
                  effect === 'pulse' || effect === 'glow' || effect === 'bounce' || effect === 'tilt' || effect === 'wiggle' || effect === 'combo'
                    ? { duration: 1.1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
                    : effect === 'rotate'
                      ? { duration: 6, ease: 'linear', repeat: Infinity }
                      : { duration: 0.6, ease: 'easeOut' };
                const showShimmer = effect === 'shimmer' || effect === 'combo';
                const showGradientShift = effect === 'gradient-shift';
                const arrowAnimate = (effect === 'slide-arrow' || effect === 'combo') ? { x: [0, 3, 0] } : {};
                const arrowTransition = (effect === 'slide-arrow' || effect === 'combo')
                  ? { duration: 1.2, ease: 'easeInOut', repeat: Infinity }
                  : { duration: 0.6, ease: 'easeOut' };

                return (
                  <motion.span
                    className="relative overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold border transition-transform duration-300 hover:scale-110"
                    style={{
                      color: settings?.welcomeBadgeColor || undefined,
                      borderColor: settings?.welcomeBadgeColor || undefined,
                      backgroundColor: settings?.welcomeBadgeColor ? toRgba(settings?.welcomeBadgeColor, 0.12) : undefined,
                    }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={animate}
                    transition={transition as any}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span className="inline-flex items-center gap-2">
                      {settings?.welcomeBadgeText || 'Welcome to the Future of IT'}
                      <motion.span
                        initial={{ x: 0 }}
                        animate={arrowAnimate}
                        transition={arrowTransition}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </span>
                    {showShimmer && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, transparent 0%, ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.35)} 50%, transparent 100%)`,
                          mixBlendMode: 'plus-lighter',
                        }}
                        initial={{ x: '100%' }}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
                      />
                    )}
                    {showGradientShift && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.15)} 0%, ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.45)} 50%, ${toRgba(settings?.welcomeBadgeColor || '#3b82f6', 0.15)} 100%)`,
                          mixBlendMode: 'plus-lighter',
                        }}
                        initial={{ x: '-100%' }}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                      />
                    )}
                  </motion.span>
                );
              })()}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-600 leading-tight drop-shadow animate-fade-in-up" style={{ color: settings?.heroTitleColor || undefined }}>
              {settings?.heroTitle || 'Build Reliable Digital Solutions with Speshway'}
            </h1>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto drop-shadow animate-fade-in-up [animation-delay:.1s]" style={{ color: settings?.heroSubtitleColor || undefined }}>
              {settings?.heroSubtitle || 'Speshway Solutions helps startups and enterprises design, develop, and maintain full-stack software, automation, and IT solutions that drive real business growth.'}
            </p>
            
          </div>
        </ScrollReveal>
        )}
      </ParallaxHero>

      <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StaggerItem>
                <ScrollParallaxItem direction="left" intensity="strong" mobileOnly={false}>
                  <HoverScale scale={1.05}>
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center group hover:border-primary/50 transition-all">
                      <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100+</div>
                      <div className="text-muted-foreground">Projects Delivered</div>
                    </Card>
                  </HoverScale>
                </ScrollParallaxItem>
              </StaggerItem>
              <StaggerItem>
                <ScrollParallaxItem direction="right" intensity="strong" mobileOnly={false}>
                  <HoverScale scale={1.05}>
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center group hover:border-primary/50 transition-all">
                      <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">76+</div>
                      <div className="text-muted-foreground">Happy Clients</div>
                    </Card>
                  </HoverScale>
                </ScrollParallaxItem>
              </StaggerItem>
              <StaggerItem>
                <ScrollParallaxItem direction="left" intensity="strong" mobileOnly={false}>
                  <HoverScale scale={1.05}>
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center group hover:border-primary/50 transition-all">
                      <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">200+</div>
                      <div className="text-muted-foreground">Team Members</div>
                    </Card>
                  </HoverScale>
                </ScrollParallaxItem>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Speshway?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <ScrollParallaxItem direction={index % 2 === 0 ? "left" : "right"} intensity="strong" mobileOnly={false}>
                    <HoverScale>
                      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all">
                          <feature.icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </Card>
                    </HoverScale>
                  </ScrollParallaxItem>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Trusted Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proud to serve industry leaders across various sectors
            </p>
          </div>
          {clients && clients.length > 0 ? (
            <div className="marquee-wrap">
              <div className="marquee">
                {clients.filter((client: any) => client.isActive).map((client: any) => (
                  <Card
                    key={client._id}
                    className="p-4 client-card text-center flex flex-col items-center gap-0 cursor-pointer"
                    onClick={() => { if (client.website) window.open(client.website, '_blank'); }}
                    role={client.website ? 'link' : 'button'}
                    aria-label={`Open ${client.name}`}
                  >
                    {client.logo && (
                      <img src={client.logo} alt={client.name} className="w-32 h-32 object-contain rounded" />
                    )}
                  </Card>
                ))}
                {clients.filter((client: any) => client.isActive).map((client: any) => (
                  <Card
                    key={`${client._id}-dup`}
                    className="p-4 client-card text-center flex flex-col items-center gap-0 cursor-pointer"
                    onClick={() => { if (client.website) window.open(client.website, '_blank'); }}
                    role={client.website ? 'link' : 'button'}
                    aria-hidden
                  >
                    {client.logo && (
                      <img src={client.logo} alt={client.name} className="w-32 h-32 object-contain rounded" />
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground">No clients added yet. Admin can add clients from the admin panel.</p>
            </div>
          )}
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Home;
