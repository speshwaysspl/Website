import { Code, Smartphone, Cloud, Brain, Database, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { StaggerContainer, StaggerItem, HoverScale, FadeIn, ScrollReveal, ScrollParallaxItem } from "@/components/animations";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

// Icon mapping
const iconMap: { [key: string]: any } = {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Shield,
};

const Services = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: () => api.get('/services').then(res => res.data),
  });

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
        <title>Services | Speshway Solutions | IT Services in Hyderabad</title>
        <meta name="description" content="Explore Speshway Solutions services in Hyderabad: custom software development, mobile app development, website development, DevOps, software testing, and more." />
        <meta name="keywords" content="Speshway services, IT solution in hyderabad, software development, app devlopment, website devlopment, devops, software testing, software engineer company in hyderbad" />
        <link rel="canonical" href="https://www.speshway.com/services" />
        <meta property="og:title" content="Services | Speshway Solutions | IT Services in Hyderabad" />
        <meta property="og:description" content="Comprehensive IT solutions in Hyderabad: Software, App, Web Development, DevOps & Testing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/services" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Services | Speshway Solutions | IT Services in Hyderabad" />
        <meta name="twitter:description" content="Comprehensive IT solutions in Hyderabad: Software, App, Web Development, DevOps & Testing." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://www.speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Services","item":"https://www.speshway.com/services"}
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
               "addressLocality": "Hyderabad",
               "addressRegion": "Telangana",
               "postalCode": "500032",
               "addressCountry": "IN"
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive IT solutions tailored to your business needs. From development to deployment, we've got you
                covered.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see exactly what you're looking for? We specialize in creating custom solutions tailored to your
              unique requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Discuss Your Project
              </Button>
            </Link>
          </Card>
          </ScrollParallaxItem>
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
