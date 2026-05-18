import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverScale, ScrollParallaxItem } from "@/components/animations";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Helmet } from "react-helmet-async";
import { getOptimizedImageUrl } from "@/lib/utils";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Mail, 
  Users, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp, 
  Layers, 
  Sparkles,
  Zap,
  Building,
  Target
} from "lucide-react";

const Team = () => {
  const { data: team, isLoading, error } = useQuery({
    queryKey: ['team'],
    queryFn: () => api.get('/team').then(res => res.data),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mx-auto" />
          <p className="text-neutral-400 text-sm font-semibold tracking-wider uppercase animate-pulse">Assembling Elite Squads...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-4 max-w-md p-6 border border-red-500/20 bg-red-950/10 rounded-3xl">
          <p className="text-red-400 text-base font-bold">Error loading elite team members</p>
          <p className="text-neutral-400 text-xs leading-relaxed">
            There was an issue connecting to our servers. Please refresh the page or contact support if the issue persists.
          </p>
        </div>
      </div>
    );
  }

  const displayTeam = Array.isArray(team) && team.length > 0 ? team : [
    { _id: 'demo-1', name: 'Alex Johnson', role: 'Chief Technical Officer', bio: 'Architecting scalable high-throughput cloud networks and microservices.', color: 'from-purple-500 to-pink-500', image: null, linkedin: 'https://linkedin.com', email: 'alex@speshway.com' },
    { _id: 'demo-2', name: 'Priya Sharma', role: 'Principal AI Engineer', bio: 'Pioneering custom neural models, LLM pipelines, and predictive analytics integrations.', color: 'from-blue-500 to-cyan-500', image: null, linkedin: 'https://linkedin.com', email: 'priya@speshway.com' },
    { _id: 'demo-3', name: 'Daniel Kim', role: 'Lead UX Architect', bio: 'Crafting immersive human-computer interfaces and premium design paradigms.', color: 'from-emerald-500 to-teal-500', image: null, linkedin: 'https://linkedin.com', email: 'daniel@speshway.com' },
  ];

  const coreDirectives = [
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Innovation First",
      desc: "We continuously bypass old conventions, exploring next-generation paradigms to solve complex technological challenges."
    },
    {
      icon: <Users className="w-6 h-6 text-sky-400" />,
      title: "Synergized Unity",
      desc: "Our cross-functional teams operate in complete sync, blending software engineering, product strategy, and design flawlessly."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Exponential Growth",
      desc: "We foster an atmosphere of relentless learning, vertical career trajectory, and constant skill ascension."
    }
  ];

  const lifeAspects = [
    {
      emoji: "💡",
      title: "Elite Engineering",
      desc: "Tackling enterprise hurdles using dynamic technology stacks.",
      color: "from-indigo-500/20 to-transparent border-indigo-500/10"
    },
    {
      emoji: "🏢",
      title: "T-Hub Ecosystem",
      desc: "Collaborating within India's largest innovation community in Hyderabad.",
      color: "from-sky-500/20 to-transparent border-sky-500/10"
    },
    {
      emoji: "🚀",
      title: "Launch Jubilations",
      desc: "Celebrating project deployments, client success milestones, and work updates.",
      color: "from-purple-500/20 to-transparent border-purple-500/10"
    },
    {
      emoji: "📚",
      title: "Continuous Upskill",
      desc: "Allocating budgets for masterclasses, certifications, and tech workshops.",
      color: "from-emerald-500/20 to-transparent border-emerald-500/10"
    },
    {
      emoji: "🎯",
      title: "Synergy Outings",
      desc: "Connecting through gaming nights, off-site getaways, and sports.",
      color: "from-orange-500/20 to-transparent border-orange-500/10"
    },
    {
      emoji: "🌍",
      title: "Inclusive Culture",
      desc: "Supporting split workspaces, diverse minds, and psychological safety.",
      color: "from-pink-500/20 to-transparent border-pink-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 selection:text-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Meet the Elite Engineering Team | Speshway Solutions Hyderabad</title>
        <meta name="description" content={`Meet the expert software engineers, product designers, and AI specialists at Speshway Solutions. Explore our premium work culture at T-Hub Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "Speshway team",
          "official speshway solutions team",
          "software engineer company in hyderabad",
          "T-Hub team members"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/team" />
      </Helmet>

      <Navbar />

      {/* Cyber Hero Banner */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle dot matrix grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <Sparkles className="w-3.5 h-3.5" /> Elite Engineering Minds
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                The Architecture of <br />
                <span className="text-indigo-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Speshway Solutions</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Meet the elite team of software engineers, solution architects, and creative strategists designing responsive digital ecosystems inside T-Hub Hyderabad.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Meet Our Leaders & Architects
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
                Experienced specialists driving client growth with next-generation custom products.
              </p>
            </ScrollReveal>
          </div>

          {displayTeam && displayTeam.length > 0 ? (
            <StaggerContainer staggerDelay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {displayTeam.map((member: any, index: number) => (
                  <StaggerItem key={member._id || index}>
                    <ScrollParallaxItem direction={index % 2 === 0 ? "left" : "right"} intensity="strong">
                      <Card className="overflow-hidden bg-white/[0.01] border border-white/5 backdrop-blur-xl hover:border-indigo-500/30 hover:bg-indigo-500/[0.01] transition-all duration-500 group rounded-[2rem] hover:shadow-[0_20px_40px_rgba(99,102,241,0.05)] flex flex-col h-full">
                        
                        {/* Member Photo Area */}
                        {member.image?.url ? (
                          <div className={`h-64 sm:h-72 bg-gradient-to-br ${member.color || 'from-indigo-600 to-purple-600'} flex items-center justify-center relative overflow-hidden shrink-0`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            <img
                              src={getOptimizedImageUrl(member.image.url)}
                              alt={member.name}
                              className="w-40 h-40 sm:w-44 sm:h-44 object-cover object-center rounded-full border-4 border-white/10 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className={`h-64 sm:h-72 bg-gradient-to-br ${member.color || 'from-indigo-600 to-purple-600'} flex items-center justify-center relative overflow-hidden shrink-0`}>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                              <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">{member.name.charAt(0)}</span>
                            </div>
                          </div>
                        )}

                        {/* Details Area */}
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                              <Zap className="w-3 h-3 animate-pulse" /> {member.role}
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed pt-2">{member.bio}</p>
                          </div>

                          <div className="flex space-x-3 pt-6 border-t border-white/5 mt-6">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name}'s LinkedIn Profile`}
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                              >
                                <Linkedin size={18} className="text-neutral-400 group-hover:text-blue-400 transition-colors" />
                              </a>
                            )}
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                aria-label={`Email ${member.name}`}
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                              >
                                <Mail size={18} className="text-neutral-400 group-hover:text-indigo-400 transition-colors" />
                              </a>
                            )}
                          </div>
                        </div>

                      </Card>
                    </ScrollParallaxItem>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400">No team members available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Core Directives / Creed */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                The Speshway Creed
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
                These principles guide how our software engineers and consultants build client digital frameworks.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreDirectives.map((directive, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 border border-white/5 bg-black/40 hover:border-indigo-500/20 rounded-3xl transition-all duration-500 flex flex-col items-center text-center space-y-4 group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                    {directive.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {directive.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {directive.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid: Life & Synergy */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Life & Synergy at T-Hub
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
                Get an inside look at our collaborative workspaces and technical bonding cycles in Hyderabad.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {lifeAspects.map((aspect, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className={`p-8 bg-gradient-to-b ${aspect.color} border hover:-translate-y-1 rounded-3xl transition-all duration-500 group flex flex-col justify-between h-56`}>
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {aspect.emoji}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{aspect.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {aspect.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Join Section */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="p-8 md:p-16 bg-gradient-to-br from-indigo-950/20 via-black to-black border-2 border-indigo-500/10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Target className="w-48 h-48 rotate-12 text-indigo-500" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Want to Craft Next-Gen Tech?
                </h3>
                <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                  We are always looking for ambitious engineers, visionary designers, and technical prodigies who are ready to build state-of-the-art products. Explore our Hyderabad positions today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-md mx-auto">
                  <Link 
                    to="/career" 
                    className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl transition-all duration-300 gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] whitespace-nowrap"
                  >
                    Explore Open Roles <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                  <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-bold text-xs uppercase rounded-2xl transition-all duration-300 whitespace-nowrap">
                    <Link to="/contact" className="inline-flex items-center gap-1.5">
                      Get in Touch
                    </Link>
                  </Button>
                </div>

                <div className="mt-12 not-prose flex justify-center">
                  <InternalLinks 
                    layout="chips"
                    title="Verified resources for company transparency"
                  />
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
