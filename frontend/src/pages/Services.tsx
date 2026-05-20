import { Code, Smartphone, Cloud, Brain, Database, Shield, Globe, ArrowRight, Sparkles, Target, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

const GlowCard = ({ children, className = "", cardClassName = "", onClick }: { children: React.ReactNode, className?: string, cardClassName?: string, onClick?: () => void }) => {
  return (
    <div className={`relative group cursor-pointer ${className}`} onClick={onClick}>
      {/* Outer Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-teal-500 via-indigo-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition duration-700 group-hover:duration-300 pointer-events-none"></div>

      {/* Card Wrapper */}
      <Card className={`relative h-full bg-gray-950/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden rounded-2xl group-hover:-translate-y-1.5 group-hover:border-indigo-500/30 transition-all duration-500 ease-out ${cardClassName}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 h-full">{children}</div>
      </Card>
    </div>
  );
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
      description: "Custom enterprise software solutions tailored to your unique business needs, scaling legacy workflows seamlessly.",
      icon: "Code",
      features: ["Custom CRM/ERP Systems", "Legacy Database Migration", "Restful API Integration", "Enterprise Security Architecture"]
    },
    {
      _id: 'default-2',
      title: "Mobile App Development",
      description: "High-performance iOS and Android applications built with modern frameworks to engage users globally.",
      icon: "Smartphone",
      features: ["React Native Cross-Platform", "Flutter Native Interfaces", "App Store & Play Store Handover", "Push Notification Pipelines"]
    },
    {
      _id: 'default-3',
      title: "Web Development",
      description: "Responsive and SEO-friendly corporate websites and web apps that drive conversions and scale indefinitely.",
      icon: "Globe",
      features: ["E-commerce & Payments", "Corporate SaaS Platforms", "Fast Static Sites & headless CMS", "Core Web Vitals Optimization"]
    },
    {
      _id: 'default-4',
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructures, automated deployments, and continuous integration models to optimize stability.",
      icon: "Cloud",
      features: ["AWS, Azure & GCP Architecting", "Secure Cloud Migrations", "CI/CD Deployment Automation", "24/7 Kubernetes Monitoring"]
    },
    {
      _id: 'default-5',
      title: "Data Analytics & BI",
      description: "Transform raw scattered database states into sleek dashboard visualizations and actionable forecasts.",
      icon: "Database",
      features: ["PowerBI & Tableau Boards", "Secure Data Warehousing", "Automated Business Reports", "Predictive Analytics Models"]
    },
    {
      _id: 'default-6',
      title: "Cyber Security & Audits",
      description: "Comprehensive security shielding, threat modeling, and compliance evaluations to secure modern businesses.",
      icon: "Shield",
      features: ["Vulnerability Audits", "Penetration Assessments", "Regulatory Compliance Guardrails", "Active Firewall Shielding"]
    }
  ];

  const services = servicesData && servicesData.length > 0 ? servicesData : fallbackServices;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Pause/resume Lenis smooth scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      (window as any).lenis?.stop();
    } else {
      (window as any).lenis?.start();
    }
    return () => {
      (window as any).lenis?.start();
    };
  }, [isModalOpen]);

  // Parallax Hero Scroll Setup
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const physicsScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const heroY = useTransform(physicsScrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(physicsScrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(physicsScrollY, [0, 500], [1, 0.96]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-between">
        <Navbar />
        <section className="flex-grow flex items-center justify-center py-32">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-indigo-400 font-extrabold text-sm uppercase tracking-widest animate-pulse">Loading Services...</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-between">
        <Navbar />
        <section className="flex-grow flex items-center justify-center py-32">
          <div className="text-center max-w-md p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-md">
            <p className="text-red-400 font-bold mb-4">Error loading services. Please try again later.</p>
            <Button onClick={() => window.location.reload()} className="bg-red-500 hover:bg-red-600 text-white">Retry Connection</Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-foreground selection:bg-primary/30 relative overflow-hidden" ref={containerRef}>
      <Helmet>
        <title>IT Services in Hyderabad | {SEO_KEYWORDS.seoTitles[0]} | Speshway Solutions</title>
        <meta name="description" content={`Discover professional IT services from Speshway Solutions at T-Hub Hyderabad. We specialize in ${SEO_KEYWORDS.seoTitles[0]}, ${SEO_KEYWORDS.primary[0]}, and ${SEO_KEYWORDS.primary[1]}. Best IT Company in Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.website,
          ...SEO_KEYWORDS.mobile,
          ...SEO_KEYWORDS.software,
          "Speshway services",
          "official speshway solutions",
          "T-Hub IT services",
          "SEO_KEYWORDS"
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
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://speshway.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://speshway.com/services" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden flex items-center justify-center">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-extrabold text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Digital Visions
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1] text-center flex flex-col items-center">
              <span className="block mb-2 md:mb-3">Our Premium</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400">
                IT Services & Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              We engineer world-class software, enterprise web applications, and high-performance mobile apps. Based in Hyderabad, our state-of-the-art technical architectures drive global business growth and digital acceleration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 border-t border-white/5 bg-gray-950/20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service: any, index: number) => {
                const IconComponent = iconMap[service.icon] || Code;
                return (
                  <motion.div
                    key={service._id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col h-full group"
                  >
                    <GlowCard
                      className="h-full"
                      cardClassName="p-8 flex flex-col justify-between"
                      onClick={() => { setSelectedService(service); setIsModalOpen(true); }}
                    >
                      <div className="space-y-6">
                        {/* Icon Badge */}
                        <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="text-indigo-400 w-6 h-6" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                          {service.description}
                        </p>

                        {/* Features Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {(service.features || []).slice(0, 3).map((feature: string, idx: number) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:border-indigo-500/10 group-hover:bg-indigo-500/[0.01] transition-colors"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative group">
            {/* Glow behind the CTA card on hover */}
            <div className="absolute -inset-1 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition duration-700 bg-indigo-500/40 pointer-events-none" />

            <Card className="relative bg-gray-950/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-12 md:p-16 overflow-hidden text-center shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/30">
              {/* Decorative internal blob */}
              <div className="absolute -right-24 -bottom-24 w-80 h-80 blur-[100px] opacity-10 bg-indigo-500 rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Target className="w-3.5 h-3.5" />
                  Connect With Experts
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500 leading-tight">
                  Looking for a Trusted Technology Partner in Hyderabad?
                </h2>
                <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                  Whether you require customized enterprise software development or an end-to-end startup MVP to launch your vision, we deliver rapid, scalable execution with zero coordination chaos.
                </p>
                <div className="pt-6">
                  <Link to="/contact">
                    <Button size="lg" className="px-8 py-6 bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                      Get a Free Demo &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-20 border-t border-white/5 bg-gray-950/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <InternalLinks
            title="Speshway Industry Insights"
            layout="chips"
            limit={10}
          />
        </div>
      </section>

      <Footer />

      {/* Modern Glassmorphic Dialog Modal */}
      {isModalOpen && selectedService && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent
            data-lenis-prevent
            className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[92vw] max-w-lg bg-gray-950/95 border border-white/10 backdrop-blur-3xl text-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] md:max-h-[85vh] focus:outline-none custom-modal-scroll gap-0">
            {/* Custom Webkit scrollbar styles */}
            <style>{`
              .custom-modal-scroll::-webkit-scrollbar {
                width: 5px;
              }
              .custom-modal-scroll::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-modal-scroll::-webkit-scrollbar-thumb {
                background: rgba(99, 102, 241, 0.25);
                border-radius: 99px;
              }
              .custom-modal-scroll::-webkit-scrollbar-thumb:hover {
                background: rgba(99, 102, 241, 0.45);
              }
            `}</style>

            <DialogHeader className="space-y-4 pb-4 border-b border-white/5 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center shrink-0">
                  {iconMap[selectedService.icon] ? (
                    (() => {
                      const DialogIcon = iconMap[selectedService.icon];
                      return <DialogIcon className="text-indigo-400 w-5 h-5" />;
                    })()
                  ) : (
                    <Code className="text-indigo-400 w-5 h-5" />
                  )}
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">{selectedService.title}</DialogTitle>
              </div>
              <DialogDescription className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                {selectedService.description}
              </DialogDescription>
            </DialogHeader>

            {/* Middle content body */}
            <div className="mt-6 space-y-5 w-full">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                Service Scope Features
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {(selectedService.features || []).map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300 font-semibold hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="mt-8 pt-4 border-t border-white/5 flex justify-end w-full">
              <Button 
                onClick={() => setIsModalOpen(false)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                Close Scope Details
              </Button>
            </div> */}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Services;
