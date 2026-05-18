import { Target, Eye, Award, Users, Code, Smartphone, Cloud, Lightbulb, Sparkles, ChevronRight, ArrowRight, Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, animate } from "framer-motion";

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

const GlowCard = ({ children, className = "", cardClassName = "" }: { children: React.ReactNode, className?: string, cardClassName?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-teal-500 via-indigo-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition duration-700 group-hover:duration-300"></div>
      <Card className={`relative h-full bg-gray-950/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden rounded-2xl group-hover:-translate-y-1 group-hover:border-indigo-500/30 transition-all duration-500 ease-out ${cardClassName}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-50"></div>
        <div className="relative z-10 h-full">{children}</div>
      </Card>
    </div>
  );
};

const About = () => {
  const { scrollY } = useScroll();
  const physicsScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const heroY = useTransform(physicsScrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(physicsScrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(physicsScrollY, [0, 500], [1, 0.96]);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.",
      color: "bg-blue-500/10 text-blue-400",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in IT solutions, recognized for excellence, innovation, and lasting client partnerships.",
      color: "bg-purple-500/10 text-purple-400",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, innovation, excellence, and customer success guide everything we do at Speshway Solutions.",
      color: "bg-amber-500/10 text-amber-400",
      borderColor: "group-hover:border-amber-500/50",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse team of passionate experts dedicated to delivering world-class solutions and exceptional service.",
      color: "bg-emerald-500/10 text-emerald-400",
      borderColor: "group-hover:border-emerald-500/50",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Building bespoke software solutions tailored to your unique business needs, from concept to deployment.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Crafting intuitive and high-performance mobile applications for iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description: "Designing, deploying, and managing scalable cloud infrastructures and streamlined DevOps pipelines.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation Consulting",
      description: "Guiding businesses through their digital journey with strategic consulting and innovative technology adoption.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: 100, suffix: "+", color: "teal" },
    { label: "Happy Clients", value: 100, suffix: "+", color: "indigo" },
    { label: "Team Members", value: 200, suffix: "+", color: "purple" },
    { label: "Years Experience", value: 15, suffix: "+", color: "fuchsia" }
  ];

  const process = [
    { title: "Discovery", description: "We dive deep into your requirements and business goals.", color: "from-blue-500/20 to-cyan-500/20", icon: Sparkles },
    { title: "Planning", description: "Strategic roadmap and architecture design for your project.", color: "from-purple-500/20 to-indigo-500/20", icon: ChevronRight },
    { title: "Development", description: "Agile development with regular updates and feedback loops.", color: "from-emerald-500/20 to-teal-500/20", icon: Code },
    { title: "Delivery", description: "Rigorous testing and seamless deployment of your solution.", color: "from-amber-500/20 to-orange-500/20", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>About Speshway Solutions | {SEO_KEYWORDS.seoTitles[0]} | T-Hub</title>
        <meta name="description" content={`Learn about Speshway Solutions, the best choice for ${SEO_KEYWORDS.seoTitles[0]} and IT services in Hyderabad. Discover our mission and expertise at T-Hub.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "about Speshway",
          "software company in hyderabad",
          "Speshway Solutions T-Hub",
          "SEO_KEYWORDS"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/about" />
        <meta property="og:title" content={`About Speshway Solutions | ${SEO_KEYWORDS.seoTitles[4]}`} />
        <meta property="og:description" content="Speshway Solutions is a registered IT services provider at T-Hub, Hyderabad. Learn more about our professional journey since 2017." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/about" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Speshway Solutions | Top IT Company" />
        <meta name="twitter:description" content="Speshway Solutions is a real and registered IT services provider in Hyderabad." />
        <link rel="me" href="https://www.facebook.com/people/Speshway-Solutions/61584485021568/" />
        <link rel="me" href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/" />
        <link rel="me" href="https://x.com/SpeshwayM56509" />
        <link rel="me" href="https://www.instagram.com/speshwaysolutionsofficial/" />
        <link rel="me" href="https://www.youtube.com/@speshwaysolutions" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden flex flex-col items-center justify-center">
        {/* Vibrant Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10000ms]" />

        {/* Grid pattern overlay */}
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
            className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-xl hover:bg-indigo-500/20 transition-colors cursor-pointer group shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <span className="text-sm font-semibold text-indigo-100 tracking-wide">
              Trusted Since 2017
            </span>
            <ChevronRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-8 max-w-5xl leading-tight">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 drop-shadow-md">Innovation</span> through <span className="text-indigo-300 italic font-serif">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Speshway Solutions is your dedicated partner in digital transformation, delivering high-impact IT solutions that scale with your vision.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-gray-950/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2">Our Collaborative Culture</p>
                  <p className="text-gray-300 text-sm font-medium">Innovation thrives where passion meets purpose.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Us</span></h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Founded in 2017, <strong className="text-gray-200">Speshway Solutions Private Limited</strong> is a legally registered IT services company headquartered in the tech hub of Hyderabad. We began with a simple yet powerful vision: to bridge the gap between businesses and cutting-edge technology with complete integrity.
                </p>
                <p>
                  As a legitimate player in the IT industry, we have grown from a small passionate team into a full-service provider serving global clients. Our physical presence in Hyderabad and our transparent business practices are a testament to our commitment to being a reliable partner.
                </p>
                <div className="p-6 bg-indigo-500/5 border-l-4 border-indigo-500 rounded-r-2xl backdrop-blur-md border-y border-r border-white/5 shadow-inner">
                  <p className="italic text-gray-200 font-medium">
                    "We are aware of fraudulent activities where individuals misuse our name. We want to reassure our clients that Speshway Solutions is a real company with a track record of over 300+ successful projects."
                  </p>
                </div>
                <p>
                  Today, we continue to deliver tangible results, building lasting relationships based on trust, excellence, and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Expertise</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Leveraging cutting-edge technologies to deliver innovative and impactful solutions across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col h-full group"
              >
                <GlowCard className="h-full" cardClassName="flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <item.icon className="w-8 h-8 mb-2 text-indigo-400" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-gray-950/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Process</span></h2>
            <p className="text-xl text-gray-400 font-medium">How we bring your ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-md"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border border-white/10`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-20 text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Journey</span></h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 transform -translate-x-1/2 rounded-full hidden md:block" />
            <div className="space-y-16">
              {[
                { year: "2017", title: "Inception", desc: "Speshway Solutions Pvt Ltd was officially registered and commenced operations." },
                { year: "2019", title: "Expansion", desc: "Expanded our team to 50+ experts and acquired global clients." },
                { year: "2022", title: "T-Hub Move", desc: "Moved our headquarters to T-Hub, Hyderabad, India's premier innovation hub." },
                { year: "2024", title: "Global Recognition", desc: "Certified as a top IT solution provider in Hyderabad and recognized by industry leaders." },
                { year: "2026", title: "Present", desc: "Leading the industry with 300+ successful projects and a 200+ strong workforce." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold mb-3 text-sm">{item.year}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-950 border-4 border-indigo-500/40 rounded-full z-10 relative flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-gray-950/20">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Drives</span> Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Our core values and principles that shape every decision and project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex h-full group"
              >
                <GlowCard className="w-full" cardClassName="p-8">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border border-white/5`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-indigo-400 transition-colors">{value.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-indigo-950/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="relative group cursor-pointer">
                {/* Glow behind the card on hover */}
                <div className={`absolute -inset-1 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700 ease-in-out ${
                  stat.color === 'teal' ? 'bg-teal-500/40' : 
                  stat.color === 'indigo' ? 'bg-indigo-500/40' : 
                  stat.color === 'purple' ? 'bg-purple-500/40' : 'bg-fuchsia-500/40'
                }`}></div>

                {/* The Card itself */}
                <Card className="relative h-full bg-gray-950/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-10 overflow-hidden group-hover:-translate-y-3 transition-all duration-500 ease-out shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  {/* Decorative internal blob */}
                  <div className={`absolute -right-16 -bottom-16 w-64 h-64 blur-[80px] opacity-20 rounded-full transition-opacity duration-500 group-hover:opacity-40 ${
                    stat.color === 'teal' ? 'bg-teal-500' : 
                    stat.color === 'indigo' ? 'bg-indigo-500' : 
                    stat.color === 'purple' ? 'bg-purple-500' : 'bg-fuchsia-500'
                  }`} />

                  {/* Internal top gradient border effect */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: i * 0.1, bounce: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative z-10 flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500">
                      <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                  </motion.div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 border-t border-white/5 bg-gray-950/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Us</span></h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">Follow our official profiles for the latest updates, industry insights, and company news.</p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/", color: "hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 hover:shadow-[#0077b5]/10 hover:text-[#0077b5]", icon: Linkedin },
                { name: "Instagram", url: "https://www.instagram.com/speshwaysolutionsofficial/", color: "hover:bg-[#e4405f]/10 hover:border-[#e4405f]/50 hover:shadow-[#e4405f]/10 hover:text-[#e4405f]", icon: Instagram },
                { name: "Facebook", url: "https://www.facebook.com/people/Speshway-Solutions/61584485021568/", color: "hover:bg-[#1877f2]/10 hover:border-[#1877f2]/50 hover:shadow-[#1877f2]/10 hover:text-[#1877f2]", icon: Facebook },
                { name: "Twitter", url: "https://x.com/SpeshwayM56509", color: "hover:bg-white/5 hover:border-white/20 hover:shadow-white/5 hover:text-white", icon: Twitter },
                { name: "YouTube", url: "https://www.youtube.com/@speshwaysolutions", color: "hover:bg-[#ff0000]/10 hover:border-[#ff0000]/50 hover:shadow-[#ff0000]/10 hover:text-[#ff0000]", icon: Youtube }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3 md:px-6 md:py-3.5 rounded-2xl font-bold bg-white/[0.02] border border-white/5 text-gray-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2.5 shadow-lg w-full sm:w-auto ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 border-t border-white/5 bg-gray-950/40">
        <div className="container mx-auto px-4">
          <InternalLinks 
            title="Learn More About Our Legitimacy & Reviews" 
            layout="chips"
            limit={10}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
