import React, { useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Calendar, 
  Award, 
  ChevronRight, 
  AlertTriangle, 
  Heart, 
  MapPin, 
  TrendingUp, 
  Users, 
  Laptop, 
  BookOpen, 
  Coffee, 
  Compass, 
  Briefcase,
  Layers,
  Smile,
  HeartHandshake
} from "lucide-react";
import { StaggerContainer, StaggerItem, HoverScale, FadeIn, ScrollReveal } from "@/components/animations";

const Career = () => {
  const { data: jobs, isLoading } = useQuery({
    queryKey: ['jobs-open'],
    queryFn: () => api.get('/jobs?status=open').then(res => res.data),
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages and performance incentives.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your dependents.",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      icon: Calendar,
      title: "Flexible PTO & Holidays",
      description: "Generous paid time off plans to recharge and enjoy life with family.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "Annual allocations for online courses, professional certifications, and conferences.",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      icon: Laptop,
      title: "Hybrid Work Flow",
      description: "Flexible parameters supporting split home/office arrangements cleanly.",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      icon: TrendingUp,
      title: "Accelerated Growth",
      description: "Transparent milestones for vertical advancement and executive mentorship.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
  ];

  const lifeAtSpeshway = [
    {
      icon: Users,
      title: "High-Caliber Squads",
      description: "Work alongside elite minds to deliver complex technological applications.",
      color: "text-indigo-400 bg-indigo-500/5 border-indigo-500/15"
    },
    {
      icon: Laptop,
      title: "State-of-the-Art Workspace",
      description: "Sleek, ergonomic setups in our premium office space inside T-Hub Hyderabad.",
      color: "text-sky-400 bg-sky-500/5 border-sky-500/15"
    },
    {
      icon: Award,
      title: "Milestone Jubilations",
      description: "Celebrating launches, client achievements, and professional anniversaries.",
      color: "text-yellow-400 bg-yellow-500/5 border-yellow-500/15"
    },
    {
      icon: Layers,
      title: "Continuous Skill-Up",
      description: "Interactive tech workshops, code reviews, and industry-insiders sessions.",
      color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/15"
    },
    {
      icon: Smile,
      title: "Vibrant Team Bonding",
      description: "Memorable getaways, weekend activities, sports challenges, and gaming nights.",
      color: "text-pink-400 bg-pink-500/5 border-pink-500/15"
    },
    {
      icon: Compass,
      title: "Innovation Hackathons",
      description: "Step away from routine tasks to brainstorm, hack, and pitch experimental utilities.",
      color: "text-purple-400 bg-purple-500/5 border-purple-500/15"
    },
    {
      icon: Coffee,
      title: "Premium Amenities",
      description: "Fully stocked snack bar, artisanal espresso hubs, and relaxing wellness zones.",
      color: "text-amber-400 bg-amber-500/5 border-amber-500/15"
    },
    {
      icon: HeartHandshake,
      title: "Inclusive & Empowering",
      description: "A supportive environment prioritizing diverse standpoints and collaborative success.",
      color: "text-rose-400 bg-rose-500/5 border-rose-500/15"
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 overflow-hidden font-sans relative">
      <Helmet>
        <title>Careers | Join the Speshway Squad | Speshway Solutions Hyderabad</title>
        <meta name="description" content={`Join the team at Speshway Solutions, specializing in ${SEO_KEYWORDS.seoTitles[0]} and IT services in Hyderabad. Explore career opportunities at T-Hub.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "Speshway careers",
          "jobs in hyderabad",
          "T-Hub jobs"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/career" />
      </Helmet>

      <Navbar />

      {/* Ambient Neon Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-[20%] left-1/3 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[180px] -z-10" />

      {/* Hero Header Section */}
      <section className="pt-40 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Build the Future of Tech
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                Shape the Next Gen <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Digital Landscape</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Join an elite squad of engineers, designers, and strategists inside T-Hub Hyderabad developing state-of-the-art enterprise platforms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Glowing Fraud Warning Alert Card */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="p-8 rounded-[36px] border border-red-500/25 bg-red-500/[0.03] backdrop-blur-2xl shadow-3xl relative overflow-hidden group">
              {/* Soft background warning glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -z-10" />
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)] animate-pulse">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-red-200 uppercase tracking-wide">
                    Zero-Fee Hiring Guarantee
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-semibold">
                    Speshway Solutions operates a strict, zero-tolerance policy against recruitment fraud. We **never** solicit registration fees, background checking deposits, training charges, or hardware fees at any phase of our interview track. 
                  </p>
                  <p className="text-xs text-red-400/80 font-bold leading-normal">
                    ⚠️ If you receive an offer demanding currency or commercial transfers under the name of Speshway Solutions, it is a cybercrime scam. Please protect yourself immediately.
                  </p>
                  <div className="pt-2">
                    <Link to="/fraud-notice">
                      <Button variant="outline" className="text-red-300 hover:text-white border-red-500/30 bg-red-500/5 hover:bg-red-500/10 font-extrabold text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all">
                        Read Verification & Fraud Guide
                        <ChevronRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Open Positions Stream */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Active Career Tracks</h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-black pt-1">
                  Find your perfect match
                </p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent ml-4" />
            </div>
          </ScrollReveal>

          {/* Jobs Listing Container */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, idx) => (
                  <Skeleton key={idx} className="h-40 w-full rounded-3xl bg-white/5 border-white/5" />
                ))}
              </div>
            ) : jobs && jobs.length > 0 ? (
              <StaggerContainer staggerDelay={0.08}>
                {jobs.map((job: any) => (
                  <StaggerItem key={job._id}>
                    <Link to={`/career/${job._id}`} className="group block">
                      <Card className="p-8 bg-white/[0.01] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 shadow-2xl relative rounded-3xl overflow-hidden flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="space-y-3.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase tracking-widest shadow-lg">
                              Open Position
                            </span>
                            {job.experience && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[9px] font-black uppercase tracking-widest shadow-lg">
                                {job.experience} Exp
                              </span>
                            )}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors leading-tight">
                            {job.title}
                          </h3>

                          <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2 max-w-2xl">
                            {job.description}
                          </p>

                          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                            <MapPin className="w-4 h-4 text-indigo-400" />
                            <span>T-Hub Hyderabad / Hybrid</span>
                          </div>
                        </div>

                        <div className="flex-shrink-0 w-full sm:w-auto pt-2 sm:pt-0">
                          <Button className="w-full bg-indigo-500 group-hover:bg-indigo-600 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:scale-[1.03] flex items-center justify-center gap-1.5">
                            Apply Track
                            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="p-16 rounded-[36px] border border-white/5 bg-white/[0.01] backdrop-blur-xl text-center space-y-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500/15 to-indigo-500/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/25 shadow-xl">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">No Active Tracks Right Now</h3>
                <p className="text-gray-400 max-w-sm mx-auto text-xs font-semibold leading-relaxed">
                  We aren't recruiting for specific technical roles at this moment, but we always welcome exceptional CVs!
                </p>
                <div className="pt-2">
                  <Link to="/send-resume">
                    <Button className="bg-indigo-500 hover:bg-indigo-600 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      Submit Your CV Speculatively
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Benefits & Culture Section */}
      <section className="py-24 relative bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-md">
                <Heart className="w-3.5 h-3.5" />
                Our Compensation Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Workspaces Engineered <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">To Empower</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-medium">
                We craft professional rewards systems to keep our engineers happy, healthy, and growing.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.06}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <StaggerItem key={idx}>
                    <Card className="p-8 bg-[#030712]/50 border border-white/5 hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] backdrop-blur-xl rounded-3xl transition-all duration-500 group flex flex-col h-full space-y-4 relative overflow-hidden shadow-2xl">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${benefit.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-black text-white leading-normal pt-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed flex-1">
                        {benefit.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Life at Speshway cultural highlights */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Vibrant Culture
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Vibrant Life at <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Speshway Solutions</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-medium">
                Get an inside look at our dynamic work ethics, collaborative activities, and team bonding sessions.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {lifeAtSpeshway.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <StaggerItem key={idx}>
                    <Card className="p-6 bg-white/[0.01] border border-white/5 hover:border-indigo-500/20 hover:bg-[#030712]/40 rounded-3xl transition-all duration-500 group flex flex-col h-full space-y-4 shadow-xl">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="text-base font-black text-white leading-normal pt-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs font-semibold leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Large Glowing SPECULATIVE CTA Box */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="p-10 sm:p-14 md:p-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.02] via-[#030712]/50 to-transparent backdrop-blur-xl text-center space-y-8 relative shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Don't Find Your Ideal Role?
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-semibold">
                  We are perpetually searching for brilliant programmers, graphic creators, and product visionaries. Send us your speculative resume to join our database, and we'll contact you the moment a suitable track opens.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/send-resume">
                  <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xs uppercase tracking-widest px-8 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 hover:scale-[1.02]">
                    Send Speculative CV
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-20 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <InternalLinks 
            title="Explore More Speshway Career Insights" 
            layout="chips"
            limit={10}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
