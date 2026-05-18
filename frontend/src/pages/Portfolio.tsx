import { ExternalLink, X, Compass, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Helmet } from "react-helmet-async";
import { getOptimizedImageUrl } from "@/lib/utils";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();

  const { data: projectsData, isLoading, error } = useQuery({
    queryKey: ['portfolios'],
    queryFn: () => api.get('/portfolios').then(res => res.data),
  });

  // Fallback projects if database is empty or loading fails
  const fallbackProjects = [
    {
      _id: 'default-1',
      title: "Enterprise E-commerce Platform",
      description: "A highly scalable custom e-commerce engine developed to handle over 100k daily active sessions. Built with modern micro-frontend setups and integrated with AWS cloud infrastructure for rapid, reliable delivery.",
      category: "Web Development",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS DevOps"],
      status: "completed",
      features: ["Custom Inventory Engine", "Multi-gate Checkout Integration", "Sub-second Static Page Generation", "Dynamic User Analytics"],
      results: [
        { value: "140%", label: "Mobile Conversions" },
        { value: "0.8s", label: "Page Load Speed" }
      ],
      image: { url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" }
    },
    {
      _id: 'default-2',
      title: "FinTech Banking Application",
      description: "A secure, biometric-protected mobile finance and asset tracking application built for global markets. Encoded using industry-standard banking encryption protocols and Flutter interfaces.",
      category: "Mobile App Development",
      technologies: ["Flutter", "Firebase", "Stripe API", "Node.js"],
      status: "completed",
      features: ["Biometric Login Vault", "Real-Time Ledger System", "Instant Push Transaction pipelines", "Cross-Platform Optimization"],
      results: [
        { value: "99.99%", label: "App Uptime" },
        { value: "4.9★", label: "Store Rating" }
      ],
      image: { url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800" }
    },
    {
      _id: 'default-3',
      title: "AI-Powered BI Analytics Suite",
      description: "An advanced business intelligence dashboard incorporating machine learning scripts to analyze multi-million row SQL database states and return clean predictive trend forecasts.",
      category: "AI & Data Science",
      technologies: ["Python", "TensorFlow", "React.js", "PostgreSQL"],
      status: "completed",
      features: ["Automated Forecasting Scripts", "High-Volume SQL Queries", "Interactive Chart dashboards", "Dynamic Alert Notifications"],
      results: [
        { value: "85%", label: "Data Discovery Speed" },
        { value: "30%", label: "Error Reductions" }
      ],
      image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
    },
    {
      _id: 'default-4',
      title: "Cloud Devops Automation Suite",
      description: "An automated multi-region deployment automation and cluster management setup built to simplify scalable staging workflows and prevent server downtime during rolling releases.",
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD Pipeline"],
      status: "completed",
      features: ["Rolling Release setups", "Auto-Scaling cluster bounds", "VPC Security Boundaries", "Kubernetes Log Aggregation"],
      results: [
        { value: "90%", label: "Faster Deployments" },
        { value: "0ms", label: "Rolling Downtime" }
      ],
      image: { url: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800" }
    }
  ];

  const projects = projectsData && projectsData.length > 0 ? projectsData : fallbackProjects;

  const openProjectDetails = (project: any) => {
    navigate(`/projects/${project._id}`);
  };

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
            <p className="text-indigo-400 font-extrabold text-sm uppercase tracking-widest animate-pulse">Loading Portfolio...</p>
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
            <p className="text-red-400 font-bold mb-4">Error loading portfolio. Please try again later.</p>
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
        <title>Projects | {SEO_KEYWORDS.seoTitles[0]} | Speshway Solutions Portfolio</title>
        <meta name="description" content={`Explore our portfolio featuring ${SEO_KEYWORDS.seoTitles[0]}, app development, and software solutions by Speshway Solutions, the best IT company in Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "Speshway projects",
          "case studies",
          "software solutions",
          "client success",
          "web development portfolio",
          "app development projects",
          "SEO_KEYWORDS"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/projects" />
        <meta property="og:title" content="Projects | Speshway Solutions | Web & App Development Portfolio" />
        <meta property="og:description" content="See how we deliver reliable, scalable, and secure solutions in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/projects" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://speshway.com/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://speshway.com/projects" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-15%] w-[45%] h-[45%] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

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
              Proven Global Deliverables
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1] text-center flex flex-col items-center">
              <span className="block mb-2 md:mb-3">Our Featured</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400">
                Case Studies & Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Showcasing next-generation software products, responsive web platforms, and mobile apps built to accelerate scale for global companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 border-t border-white/5 bg-gray-950/20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {projects && projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, index: number) => (
                <motion.div
                  key={project._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => openProjectDetails(project)}
                >
                  {/* Card Image Area (Same as Home Page project card aspect-[4/3] rounded-2xl border-white/5 shadow-2xl) */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-card border border-white/5 shadow-2xl">
                    {project.image?.url ? (
                      <img
                        src={getOptimizedImageUrl(project.image.url)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-teal-900/50 flex items-center justify-center">
                        <div className="text-5xl font-bold text-white/10 uppercase">{project.title.charAt(0)}</div>
                      </div>
                    )}
                  </div>

                  {/* Card Meta Content Area (Same as Home Page card) */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                    {project.category}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden z-10 bg-gray-950/40">
        <div className="absolute -left-20 top-1/4 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Target className="w-3.5 h-3.5" />
                Proven Track Record
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Project Success Metrics</h2>
              <p className="text-lg text-gray-400 font-medium">Quantified numbers highlighting our relentless engineering standards.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '98%', label: 'Client Satisfaction', gradient: 'from-indigo-400 to-violet-500' },
                { value: '500+', label: 'Projects Delivered', gradient: 'from-teal-400 to-indigo-500' },
                { value: '95%', label: 'On-Time Releases', gradient: 'from-purple-400 to-teal-500' },
                { value: '50+', label: 'Industries Served', gradient: 'from-indigo-400 to-teal-400' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-500/20">
                  <div className={`text-4xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} tracking-tight group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-20 border-t border-white/5 bg-gray-950/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <InternalLinks
            title="Explore More Speshway Projects & Services"
            layout="chips"
            limit={12}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
