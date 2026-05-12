import { Code, Smartphone, Cloud, Brain, Database, Shield, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { StaggerContainer, StaggerItem, HoverScale, FadeIn, ScrollReveal, ScrollParallaxItem } from "@/components/animations";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";

// Icon mapping
const iconMap: { [key: string]: any } = {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Shield,
  Globe,
};

const Services = () => {
  const { data: servicesData, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: () => api.get('/services').then(res => res.data),
  });

  // Fallback services if database is empty or loading fails
  const fallbackServices = [
    {
      _id: 'default-1',
      title: "Software Development",
      description: "Custom enterprise software solutions tailored to your business needs.",
      icon: "Code",
      features: ["Custom CRM/ERP", "Legacy Migration", "API Integration"]
    },
    {
      _id: 'default-2',
      title: "Mobile App Development",
      description: "High-performance iOS and Android applications built with modern frameworks.",
      icon: "Smartphone",
      features: ["React Native", "Flutter", "Native Apps"]
    },
    {
      _id: 'default-3',
      title: "Web Development",
      description: "Responsive and SEO-friendly websites that drive growth and engagement.",
      icon: "Globe",
      features: ["E-commerce", "Corporate Sites", "Web Apps"]
    },
    {
      _id: 'default-4',
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: "Cloud",
      features: ["AWS/Azure", "Cloud Migration", "DevOps"]
    },
    {
      _id: 'default-5',
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our analytics solutions.",
      icon: "Database",
      features: ["BI Dashboards", "Data Mining", "Predictive Analytics"]
    },
    {
      _id: 'default-6',
      title: "Cyber Security",
      description: "Protect your digital assets with our comprehensive security audits and solutions.",
      icon: "Shield",
      features: ["Security Audits", "Threat Protection", "Compliance"]
    }
  ];

  const services = servicesData && servicesData.length > 0 ? servicesData : fallbackServices;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center">Loading...</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-red-500">Error loading services</div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Speshway services | {SEO_KEYWORDS.seoTitles[0]} | Official Speshway Solutions | T-Hub</title>
        <meta name="description" content="Explore official IT services from Speshway Solutions at T-Hub Hyderabad: custom software, mobile apps, and cloud solutions. Best IT Company in Hyderabad for professional digital services." />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.website,
          ...SEO_KEYWORDS.mobile,
          ...SEO_KEYWORDS.software,
          "Speshway services",
          "official speshway solutions",
          "T-Hub IT services"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/services" />
        <meta property="og:title" content={`IT Services | ${SEO_KEYWORDS.seoTitles[1]} | Hyderabad`} />
        <meta property="og:description" content="Official IT solutions at T-Hub Hyderabad: Software, App, Web Development, DevOps & Testing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/services" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Services | Speshway Solutions | IT Services in Hyderabad" />
        <meta name="twitter:description" content="Comprehensive IT solutions in Hyderabad: Software, App, Web Development, DevOps & Testing." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Services","item":"https://speshway.com/services"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "IT Solutions",
          "provider": {
             "@type": "LocalBusiness",
             "name": "Speshway Solutions Private Limited",
             "address": {
               "@type": "PostalAddress",
               "streetAddress": "T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd, panmaktha",
               "addressLocality": "Hyderabad, Serilingampalle (M)",
               "addressRegion": "Telangana",
               "postalCode": "500032",
               "addressCountry": "IN"
             },
             "geo": {
               "@type": "GeoCoordinates",
               "latitude": "17.4340",
               "longitude": "78.3844"
             }
           },
          "areaServed": {
            "@type": "City",
            "name": "Hyderabad"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Software Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "App Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "DevOps Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Software Testing"
                }
              }
            ]
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">{SEO_KEYWORDS.primary[4]}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                As a {SEO_KEYWORDS.highRanking[4]}, we provide comprehensive solutions including {SEO_KEYWORDS.mobile[0]}, {SEO_KEYWORDS.website[0]}, and {SEO_KEYWORDS.software[0]}.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services && services.length > 0 ? (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service: any, index: number) => {
                  const IconComponent = iconMap[service.icon] || Code;
                  return (
                    <StaggerItem key={service._id || index}>
                      <ScrollParallaxItem direction={index % 2 === 0 ? "left" : "right"} intensity="strong">
                      <HoverScale>
                        <Card
                          className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 transform group hover:shadow-lg hover:shadow-primary/10 hover-lift hover-glow animate-fade-in-up animate-scale-in h-64 overflow-hidden"
                        >
                          <div className="flex h-full flex-col pb-12">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="text-primary" size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                            <div className="text-sm text-muted-foreground mb-3 overflow-hidden max-h-16">
                              {service.description}
                            </div>
                            <ul className="space-y-1 mb-3 overflow-hidden max-h-16">
                              {(service.features || []).slice(0, 3).map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-center text-xs text-muted-foreground truncate">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute bottom-4 left-4 right-4"
                              onClick={() => { setSelectedService(service); setIsModalOpen(true); }}
                            >
                              See More
                            </Button>
                          </div>
                        </Card>
                      </HoverScale>
                      </ScrollParallaxItem>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollParallaxItem direction="left" intensity="strong">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-border text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4">Looking for the {SEO_KEYWORDS.highRanking[4]}?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you need {SEO_KEYWORDS.longTail[2]} or {SEO_KEYWORDS.longTail[8]}, we are here to help you scale.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Get a Free Consultation
              </Button>
            </Link>
          </Card>
          </ScrollParallaxItem>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <InternalLinks 
            title="Speshway Industry Insights" 
            layout="chips"
            limit={10}
          />
        </div>
      </section>

      <Footer />

      {isModalOpen && selectedService && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedService.title}</DialogTitle>
              <DialogDescription>
                <div className="mt-2 text-sm text-muted-foreground">{selectedService.description}</div>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Features</h4>
              <ul className="space-y-2">
                {(selectedService.features || []).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Services;
