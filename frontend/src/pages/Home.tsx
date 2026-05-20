import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Code, Zap, Shield, TrendingUp, CheckCircle, MapPin, Briefcase, PhoneCall, Sparkles, ChevronRight, LayoutTemplate, Layers, Cpu, Globe, Database, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { motion, useScroll, useTransform, useSpring, useInView, animate, useMotionValueEvent } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState, useRef } from "react";
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { getOptimizedImageUrl } from "@/lib/utils";
import { SEO_KEYWORDS, SPESHWAY_INTERNAL_LINK_PAGES } from "@/lib/seo-utils";

function AnimatedCounter({ from, to, suffix = "", duration = 2.5 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

const GlowCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition duration-700 group-hover:duration-300"></div>
      <Card className="relative h-full bg-gray-900/40 backdrop-blur-xl border-white/5 shadow-2xl overflow-hidden rounded-2xl group-hover:-translate-y-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-br from-white-[0.08] to-transparent opacity-50"></div>
        <div className="relative z-10">{children}</div>
      </Card>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, title, description, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.5 }}
      className="flex flex-col gap-4 p-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <Icon size={26} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const expertiseItems = [
  {
    id: "01",
    title: "Web Development",
    desc: "Building scalable, highly interactive web applications using cutting-edge frameworks.",
    points: ["Custom UI/UX Design", "React & Next.js Frameworks", "Robust Node.js Backend", "SEO-Optimized Architectures"],
    tags: [SEO_KEYWORDS.website[0], SEO_KEYWORDS.website[2]],
    icon: Globe,
    color: "teal",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "02",
    title: "Mobile Application",
    desc: "Native and cross-platform mobile experiences that engage users and drive exponential growth.",
    points: ["iOS & Android Native", "Flutter & React Native", "Scalable Cloud Backends", "High-Performance UI"],
    tags: [SEO_KEYWORDS.mobile[0], SEO_KEYWORDS.mobile[1]],
    icon: MonitorSmartphone,
    color: "indigo",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "03",
    title: "Business & Payroll Software",
    desc: "Enterprise-grade systems including ERP, CRM, and bespoke operational and payroll software.",
    points: ["Custom ERP Solutions", "Automated Payroll", "Secure Cloud Infrastructure"],
    tags: [SEO_KEYWORDS.software[0], SEO_KEYWORDS.software[1]],
    icon: Database,
    color: "fuchsia",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [activeExpertise, setActiveExpertise] = useState(0);
  const expertiseContainerRef = useRef<HTMLDivElement>(null);

  // Removed unused continuous fluid scroll transforms since we are switching to native sticky scrolling
  const heroImage = "/happyFamily.jpg";
  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: () => api.get('/clients').then(res => {
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

  const { data: latestProjects } = useQuery({
    queryKey: ['projects', 'latest'],
    queryFn: () => api.get('/portfolios').then(res => res.data?.slice(0, 3)),
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

  const heroBgSrc = getOptimizedImageUrl(activeBanners.length > 0
    ? activeBanners[heroIndex]?.image?.url
    : heroImage);

  const firstBanner = getOptimizedImageUrl(activeBanners.length > 0 ? activeBanners[0]?.image?.url : heroImage);

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

  // Refined Physics-based scroll
  const { scrollY } = useScroll();
  const physicsScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });

  // Dynamic Parallax transforms
  const heroY = useTransform(physicsScrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(physicsScrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(physicsScrollY, [0, 500], [1, 0.95]);

  // Stats sliding overlapping parallax
  const statsY = useTransform(physicsScrollY, [0, 1200], [150, -100]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>Speshway Solutions | Best IT Company in Hyderabad | Website and App Development Company in Hyderabad | Best IT Company</title>
        <meta name="description" content={`Speshway Solutions is the ${SEO_KEYWORDS.highRanking[0]} at T-Hub. We provide ${SEO_KEYWORDS.seoTitles[0]}, ${SEO_KEYWORDS.primary[0]}, and ${SEO_KEYWORDS.primary[1]}.`} />
        {/* Keywords and schema preserved... */}
      </Helmet>

      <Navbar />

      {/* Hero Section - Vibrant SaaS Style */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden flex flex-col items-center justify-center">
        {/* Vibrant Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none animate-pulse [animation-duration:8000ms]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse [animation-duration:10000ms]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-fuchsia-600/15 blur-[150px] rounded-full pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-xl hover:bg-indigo-500/20 transition-colors cursor-pointer group shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <span className="text-sm font-semibold text-indigo-100 tracking-wide">
              {settings?.welcomeBadgeText || 'Welcome to the Future of IT'}
            </span>
            <ChevronRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.15]"
          >
            <span className="text-gray-50 drop-shadow-sm">
              We Build Websites & Mobile Apps to{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 drop-shadow-md">
              Grow Your Business
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed font-medium"
          >
            We specialize in building high-performance websites, scalable web applications, and intuitive mobile apps to accelerate your digital transformation and drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-5 mb-16"
          >
            <Button onClick={() => navigate('/contact')} size="lg" className="h-14 px-8 text-lg rounded-2xl bg-gray-50 text-gray-950 hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] font-semibold">
              Get Estimation <ArrowRight className="ml-2 w-5 h-5 text-indigo-600" />
            </Button>
            <Button onClick={() => navigate('/services')} size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 font-semibold backdrop-blur-md">
              Our Services
            </Button>
          </motion.div>

          {/* Trust Signals
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl opacity-80"
          >
            {[
              { icon: Code, text: "Custom Software Solutions" },
              { icon: TrendingUp, text: "Scalable Architectures" },
              { icon: Shield, text: "Enterprise-Grade Security" },
              { icon: Zap, text: "High-Performance Apps" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md text-gray-300">
                <item.icon className="w-4 h-4 text-teal-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div> */}
        </motion.div>


      </section>

      {/* Trusted Clients Marquee */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">
            Trusted by innovative teams worldwide
          </p>
          {clients && clients.length > 0 && (
            <div className="marquee-wrap">
              <div className="marquee">
                {clients.filter((client: any) => client.isActive).map((client: any) => (
                  <div key={client._id} className="mx-10 flex items-center justify-center">
                    {client.logo && (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 w-auto object-contain drop-shadow-md opacity-50 hover:opacity-100 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
                      />
                    )}
                  </div>
                ))}
                {clients.filter((client: any) => client.isActive).map((client: any) => (
                  <div key={`${client._id}-dup`} className="mx-10 flex items-center justify-center" aria-hidden="true">
                    {client.logo && (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 w-auto object-contain drop-shadow-md opacity-50 hover:opacity-100 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Parallax Section */}
      <section className="pt-32 pb-16 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div style={{ y: statsY }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Projects Delivered", value: 100, suffix: "+" },
              { label: "Happy Clients", value: 100, suffix: "+" },
              { label: "Team Members", value: 200, suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="relative group cursor-pointer">
                {/* Glow behind the card on hover */}
                <div className={`absolute -inset-1 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700 ease-in-out ${i === 0 ? 'bg-teal-500/40' : i === 1 ? 'bg-indigo-500/40' : 'bg-fuchsia-500/40'}`}></div>

                {/* The Card itself */}
                <Card className="relative h-full bg-[#0a0f1c]/80 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-10 md:p-14 overflow-hidden group-hover:-translate-y-3 transition-all duration-500 ease-out shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  {/* Decorative internal blob */}
                  <div className={`absolute -right-16 -bottom-16 w-64 h-64 blur-[80px] opacity-20 rounded-full transition-opacity duration-500 group-hover:opacity-40 ${i === 0 ? 'bg-teal-500' : i === 1 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`} />

                  {/* Internal top gradient border effect */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: i * 0.15, bounce: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative z-10 flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500">
                      <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                  </motion.div>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll-Spy Layout: Core Expertise */}
      <section className="relative bg-[#030712] pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">

            {/* Left Side: Sticky Nav */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 z-10 space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide uppercase"
                >
                  Core Expertise
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight text-gray-50 leading-tight"
                >
                  From concept to flawless execution.
                </motion.h2>
              </div>

              <div className="hidden lg:flex flex-col gap-3">
                {expertiseItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-4 xl:p-5 rounded-3xl border transition-all duration-500 cursor-pointer ${activeExpertise === index
                        ? 'bg-gray-900/80 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]'
                        : 'bg-transparent border-transparent opacity-40 hover:opacity-100 hover:bg-gray-900/40'
                      }`}
                    onClick={() => {
                      const element = document.getElementById(`expertise-card-${index}`);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 120;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <span className={`text-sm font-bold pt-1 ${activeExpertise === index ? 'text-indigo-400' : 'text-gray-500'}`}>{item.id}</span>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 ${activeExpertise === index ? 'text-gray-100' : 'text-gray-400'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed ${activeExpertise === index ? 'text-gray-400' : 'hidden'}`}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Normal Scrolling Cards */}
            <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-32 mt-12 lg:mt-0">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  id={`expertise-card-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-40% 0px -40% 0px", once: false }}
                  onViewportEnter={() => setActiveExpertise(index)}
                  className="w-full"
                >
                  <GlowCard className="w-full shadow-2xl">
                    <div className="flex flex-col bg-[#0a0f1c]/90 relative overflow-hidden group rounded-2xl">

                      {/* Image Section */}
                      <div className="h-56 md:h-72 w-full relative overflow-hidden shrink-0 border-b border-white/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent"></div>

                        <div className={`absolute bottom-6 left-8 w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner backdrop-blur-md ${index === 0 ? 'bg-teal-500/20 text-teal-400 border-teal-500/30' : index === 1 ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30'}`}>
                          <item.icon size={28} />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-10 flex flex-col relative z-10">
                        <div className="mb-3">
                          <span className={`font-bold text-xs uppercase tracking-widest ${index === 0 ? 'text-teal-400' : index === 1 ? 'text-indigo-400' : 'text-fuchsia-400'}`}>{item.id} • {item.title}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-100 leading-tight drop-shadow-md">
                          {item.title === 'Web Development' ? 'Highly interactive web platforms.' : item.title === 'Mobile Application' ? 'Native and cross-platform apps.' : 'Enterprise operational software.'}
                        </h3>

                        <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg">
                          {item.desc}
                        </p>

                        {/* Points List */}
                        <ul className="space-y-3">
                          {item.points.map((point, i) => (
                            <li key={i} className="flex items-center text-gray-300 text-sm font-medium">
                              <CheckCircle className={`w-5 h-5 mr-3 shrink-0 ${index === 0 ? 'text-teal-500' : index === 1 ? 'text-indigo-500' : 'text-fuchsia-500'}`} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Speshway (Features Grid) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[200px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-600/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Speshway?</h2>
            <p className="text-xl text-gray-400 font-medium">The robust infrastructure for your digital transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <GlowCard key={i}>
                <FeatureItem {...feature} delay={i * 0.15} />
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Our Featured Projects</h2>
              <p className="text-gray-400 text-lg max-w-xl">A glimpse into our portfolio of high-performance digital solutions.</p>
            </div>
            <Button onClick={() => navigate('/projects')} variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all group backdrop-blur-md">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(latestProjects?.length > 0 ? latestProjects : [
              { _id: "default-3", title: "FinTech Dashboard", category: "Web Application", image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" } },
              { _id: "default-2", title: "HealthTrack Mobile App", category: "iOS & Android", image: { url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800" } },
              { _id: "default-1", title: "Premium E-commerce", category: "Custom Platform", image: { url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" } },
            ]).map((project: any, i: number) => (
              <motion.div 
                key={project._id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/projects/${project._id || i}`)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-card border border-white/5 shadow-2xl">
                  <img src={getOptimizedImageUrl(project.image?.url)} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-indigo-400 font-semibold text-sm">View Case Study &rarr;</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm font-semibold tracking-wide uppercase">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="pt-10 pb-20 bg-background overflow-hidden relative">
        {/* Fading Edges for the marquee */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center mb-12 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4"
          >
            Powering Modern Ecosystems
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Built with next-generation technologies.
          </motion.h3>
        </div>

        <div className="flex flex-col gap-5">
          {/* Row 1 - Moves Left */}
          <div className="flex whitespace-nowrap overflow-visible">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
              className="flex gap-4 items-center pr-4"
            >
              {[
                "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL",
                "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL"
              ].map((tech, idx) => (
                <div key={idx} className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(255,255,255,0.01)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:-translate-y-1">
                  <span className="text-base font-semibold text-gray-300 tracking-wider">
                    {tech}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Moves Right */}
          <div className="flex whitespace-nowrap overflow-visible -ml-48">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
              className="flex gap-4 items-center pr-4"
            >
              {[
                "Flutter", "React Native", "Swift", "Kotlin", "Tailwind CSS", "Framer Motion", "Redis", "Firebase", "Stripe", "Vercel",
                "Flutter", "React Native", "Swift", "Kotlin", "Tailwind CSS", "Framer Motion", "Redis", "Firebase", "Stripe", "Vercel"
              ].map((tech, idx) => (
                <div key={idx} className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(255,255,255,0.01)] hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:-translate-y-1">
                  <span className="text-base font-semibold text-gray-300 tracking-wider">
                    {tech}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
