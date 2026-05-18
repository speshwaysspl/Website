import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getOptimizedImageUrl } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ExternalLink, Compass, Shield, Database, Sparkles } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [id]);

  const fallbackProjects: Record<string, any> = {
    "default-1": {
      _id: 'default-1',
      title: "Enterprise E-commerce Platform",
      description: "A highly scalable custom e-commerce engine developed to handle over 100k daily active sessions. Built with modern micro-frontend setups and integrated with AWS cloud infrastructure for rapid, reliable delivery.",
      category: "Web Development",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS DevOps", "Docker", "Tailwind CSS", "Redux Toolkit", "TypeScript"],
      status: "completed",
      features: ["Custom Inventory Engine", "Multi-gate Checkout Integration", "Sub-second Static Page Generation", "Dynamic User Analytics"],
      results: [
        { value: "140%", label: "Mobile Conversions" },
        { value: "0.8s", label: "Page Load Speed" }
      ],
      image: { url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" },
      screenshots: [
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    "default-2": {
      _id: 'default-2',
      title: "FinTech Banking Application",
      description: "A secure, biometric-protected mobile finance and asset tracking application built for global markets. Encoded using industry-standard banking encryption protocols and Flutter interfaces.",
      category: "Mobile App Development",
      technologies: ["Flutter", "Firebase", "Stripe API", "Node.js", "Express.js", "Dart", "Provider", "Biometrics SDK"],
      status: "completed",
      features: ["Biometric Login Vault", "Real-Time Ledger System", "Instant Push Transaction pipelines", "Cross-Platform Optimization"],
      results: [
        { value: "99.99%", label: "App Uptime" },
        { value: "4.9★", label: "Store Rating" }
      ],
      image: { url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800" },
      screenshots: [
        { url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    "default-3": {
      _id: 'default-3',
      title: "AI-Powered BI Analytics Suite",
      description: "An advanced business intelligence dashboard incorporating machine learning scripts to analyze multi-million row SQL database states and return clean predictive trend forecasts.",
      category: "AI & Data Science",
      technologies: ["Python", "TensorFlow", "React.js", "PostgreSQL", "FastAPI", "Pandas", "Scikit-Learn", "D3.js"],
      status: "completed",
      features: ["Automated Forecasting Scripts", "High-Volume SQL Queries", "Interactive Chart dashboards", "Dynamic Alert Notifications"],
      results: [
        { value: "85%", label: "Data Discovery Speed" },
        { value: "30%", label: "Error Reductions" }
      ],
      image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
      screenshots: [
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    "default-4": {
      _id: 'default-4',
      title: "Cloud Devops Automation Suite",
      description: "An automated multi-region deployment automation and cluster management setup built to simplify scalable staging workflows and prevent server downtime during rolling releases.",
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD Pipeline", "Terraform", "Ansible", "Prometheus", "Grafana"],
      status: "completed",
      features: ["Rolling Release setups", "Auto-Scaling cluster bounds", "VPC Security Boundaries", "Kubernetes Log Aggregation"],
      results: [
        { value: "90%", label: "Faster Deployments" },
        { value: "0ms", label: "Rolling Downtime" }
      ],
      image: { url: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800" },
      screenshots: [
        { url: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800" },
        { url: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=800" }
      ]
    }
  };

  const isFallback = id && fallbackProjects[id];

  const { data: projectData, isLoading, error } = useQuery({
    queryKey: ['portfolio', id],
    queryFn: () => api.get(`/portfolios/${id}`).then(res => res.data),
    enabled: !!id && !isFallback,
  });

  const project = isFallback ? fallbackProjects[id!] : projectData;

  // Parallax Hero Banner Scroll
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const physicsScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const bannerY = useTransform(physicsScrollY, [0, 600], [0, 180]);
  const bannerOpacity = useTransform(physicsScrollY, [0, 400], [1, 0.2]);
  const bannerScale = useTransform(physicsScrollY, [0, 600], [1, 1.15]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center py-32">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-indigo-400 font-extrabold text-sm uppercase tracking-widest animate-pulse">Loading Case Study...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error && !project) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center py-32">
          <div className="text-center max-w-md p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-md">
            <p className="text-red-400 font-bold mb-4">Error loading project. It may have been deleted or the link is invalid.</p>
            <Button onClick={() => navigate("/projects")} className="bg-indigo-500 hover:bg-indigo-600 text-white">Back to Projects</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const projectImage = project?.image?.url || "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="min-h-screen bg-[#030712] text-foreground selection:bg-indigo-500/30 overflow-hidden relative">
      <Helmet>
        <title>{project?.title} | Speshway Solutions Portfolio</title>
        <meta name="description" content={project?.description} />
        <link rel="canonical" href={`https://speshway.com/projects/${id}`} />
      </Helmet>

      {/* Floating Action Header Bar */}
      <div className="absolute top-10 left-4 sm:left-10 z-40">
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-950/80 border border-white/10 hover:border-indigo-500/30 text-xs font-bold text-gray-300 hover:text-indigo-400 backdrop-blur-xl transition-all shadow-2xl group hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </button>
      </div>

      {/* Parallax Media Banner Hero */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden flex items-end" ref={bannerRef}>
        <motion.div
          style={{ y: bannerY, opacity: bannerOpacity, scale: bannerScale }}
          className="absolute inset-0 z-0 origin-bottom"
        >
          <img
            src={getOptimizedImageUrl(projectImage)}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
          {/* Multi-layered cinematic gradient masking overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-transparent z-10" />
        </motion.div>

        {/* Hero Meta Information Container */}
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl relative z-20 pb-12 sm:pb-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.15em] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              {project?.category}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              {project?.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Premium Apple-Style Split Grid Content Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column - Core Description & Architecture (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-12">

              {/* Detailed Project Overview */}
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  Product Case Overview
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-indigo-500/30 to-transparent w-full mb-6" />
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                  {project?.description}
                </p>
              </div>

              {/* Core Features & Deliverable Architecture */}
              {project?.features && project?.features.length > 0 && (
                <div className="space-y-5">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-indigo-400" />
                    Product Architecture & Core Deliverables
                  </h2>
                  <div className="h-0.5 bg-gradient-to-r from-indigo-500/30 to-transparent w-full mb-6" />
                  <ul className="grid grid-cols-1 gap-3">
                    {project.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] text-xs sm:text-sm text-gray-300 font-semibold transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Right Column - Stats, Outcomes, Metadata Card (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">

              {/* Outcome Metrics Container */}
              {project?.results && project?.results.length > 0 && (
                <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-xl space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400">
                    Product Outcomes
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {project.results.map((result: any, idx: number) => (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl text-center group hover:border-indigo-500/20 transition-all">
                        <div className="text-4xl sm:text-5xl font-black mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 tracking-tight group-hover:scale-105 transition-transform duration-300">
                          {result.value}
                        </div>
                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status and Actions Card */}
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-xl space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400">
                  Project Parameters
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start py-3.5 border-b border-white/5 text-xs sm:text-sm gap-4">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider shrink-0 pt-0.5">Release State</span>
                    <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-extrabold uppercase text-indigo-300 text-right">
                      {project?.status === 'in_progress' ? 'In Development' : 'Production Live'}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-3.5 text-xs sm:text-sm gap-4">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider shrink-0 pt-0.5">Client Industry</span>
                    <span className="text-gray-200 font-bold text-right leading-relaxed max-w-[65%]">{project?.category || "IT Solutions"}</span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <Button
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-extrabold py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5"
                  disabled={!project?.demoUrl}
                  onClick={() => {
                    if (project.demoUrl) {
                      window.open(project.demoUrl, '_blank');
                    }
                  }}
                >
                  <ExternalLink size={16} className="mr-2 shrink-0" />
                  View Live Deployment &rarr;
                </Button>
              </div>
            </div>
          </div>

          {/* Full-width Technology Stack Utilized */}
          <div className="mt-20 space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-400" />
              Technology Stack Utilized
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-indigo-500/30 to-transparent w-full" />
            <div className="flex flex-wrap gap-2.5 pt-2">
              {project?.technologies?.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/10 text-xs sm:text-sm text-gray-300 font-bold uppercase tracking-wider rounded-2xl transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Screenshots Gallery Carousel */}
          {project?.screenshots && project.screenshots.length > 0 && (
            <div className="mt-20 space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Project Screenshots & Interface Previews
              </h2>
              <div className="h-0.5 bg-gradient-to-r from-indigo-500/30 to-transparent w-full" />
              
              <div className="relative mt-6 group/carousel">
                {/* Scrollable Container with hide-scrollbar and glass styles */}
                <div 
                  className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                  id="screenshot-carousel-container"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {project.screenshots.map((scr: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl relative group/item flex items-center justify-center"
                    >
                      <img 
                        src={getOptimizedImageUrl(scr.url)} 
                        alt={`Screenshot ${idx + 1}`} 
                        className="w-full h-full object-contain transition-transform duration-700 group-hover/item:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/90 bg-indigo-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-indigo-500/30">
                          Screenshot {idx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Glassmorphic Carousel Navigation buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button 
                    onClick={() => {
                      const container = document.getElementById('screenshot-carousel-container');
                      if (container) container.scrollLeft -= 500;
                    }}
                    className="p-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-gray-300 hover:text-white transition-all shadow-xl backdrop-blur-md"
                    aria-label="Previous screenshot"
                  >
                    &larr;
                  </button>
                  <button 
                    onClick={() => {
                      const container = document.getElementById('screenshot-carousel-container');
                      if (container) container.scrollLeft += 500;
                    }}
                    className="p-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-gray-300 hover:text-white transition-all shadow-xl backdrop-blur-md"
                    aria-label="Next screenshot"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
