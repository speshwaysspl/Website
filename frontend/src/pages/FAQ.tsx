import React, { useState, useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, ScrollReveal } from "@/components/animations";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { 
  Search, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  ChevronRight,
  Filter,
  CheckCircle,
  FileCheck
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: 'trust' | 'services' | 'process';
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'trust' | 'services' | 'process'>('all');

  const faqs: FAQItem[] = [
    {
      question: "Is Speshway Solutions a real or fake company?",
      answer:
        "Speshway Solutions Private Limited is a fully legitimate, registered IT services company based in Hyderabad, India. Operating since 2017, we have successfully partnered with over 150+ international clients, delivering 300+ advanced software applications. You are welcome to verify our physical operations and visit our modern workspaces directly at our registered office inside T-Hub, Raidurgam, Hyderabad.",
      category: 'trust'
    },
    {
      question: "Is Speshway fake or a scam?",
      answer:
        "No, Speshway Solutions is absolutely NOT a scam or fake. We are a verified, legal, and operational corporate entity. Unfortunately, malicious online fraudsters occasionally misuse our brand name to circulate fake job descriptions and demand illegal security deposits. Please note: Speshway operates a strict Zero-Fee Hiring Policy and will NEVER request money, hardware fees, or training charges from applicants. Always verify official corporate offers through our official @speshway.com email addresses.",
      category: 'trust'
    },
    {
      question: "What services does Speshway Solutions offer?",
      answer:
        "We offer a complete suite of enterprise IT solutions, including custom web development (React, Next.js), cross-platform mobile apps (Flutter, React Native), robust cloud solutions (AWS, Azure), artificial intelligence & machine learning integrations, database management, and comprehensive cybersecurity frameworks tailored to scale growing operations.",
      category: 'services'
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timelines depend entirely on the scale and functional complexity of the project. A streamlined marketing platform typically launches in 4-6 weeks, while a complex, multitenant enterprise SaaS or marketplace portal may require 3-6 months. We establish highly detailed sprint timelines during the blueprinting phase, ensuring transparency at every stage.",
      category: 'process'
    },
    {
      question: "What is your development process?",
      answer:
        "We employ a high-transparency Agile development lifecycle divided into: 1) Architecture Blueprinting & Discovery, 2) Interactive Figma Prototyping & UX, 3) Active Sprint-Driven Coding & Parallel QA, 4) Secure Deployment, and 5) Long-Term Post-Launch SLA Support to guarantee seamless software stability.",
      category: 'process'
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely. We offer complete Post-Launch Maintenance SLAs that include regular security patching, performance optimization, database backups, API updates, and feature upgrades to keep your software modern and resilient under high traffic volumes.",
      category: 'process'
    },
    {
      question: "What technologies do you work with?",
      answer:
        "Our engineering squad specializes in cutting-edge ecosystems including React, Next.js, Node.js, Python, Golang, React Native, Flutter, AWS, Azure, GCP, MongoDB, and PostgreSQL. We leverage modern containerization, serverless architectures, and CI/CD automation to deliver maximum speeds.",
      category: 'services'
    },
    {
      question: "How do you ensure project security?",
      answer:
        "Security is woven directly into our codebase from day one. We enforce end-to-end HTTPS/TLS data encryptions, secure JSON Web Token authentication, automated penetration testing, regular dependency vulnerability audits, and full compliance parameters to keep user records safe.",
      category: 'services'
    },
    {
      question: "What are your payment terms?",
      answer:
        "We utilize an output-based, milestone billing schedule: 30% upon blueprint completion, 40% tied to developmental staging goals, and 30% upon final production sign-off. For complex enterprise integrations, we customize commercial terms to sync cleanly with budget quarters.",
      category: 'process'
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "Yes. We excel at team integrations, whether you require specialized staff augmentation to accelerate a shipping goal, senior system consultants to review architecture, or a dedicated squad to handle development end-to-end under your engineering leads.",
      category: 'process'
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, we sign comprehensive, legally binding Non-Disclosure Agreements (NDAs) prior to any detailed project discussions. We implement strict internal access parameters to ensure your proprietary ideas, business logic, and user databases remain confidential.",
      category: 'trust'
    },
    {
      question: "What if I need to scale my project in the future?",
      answer:
        "We design all application architectures with microservice compatibility and high horizontal scalability. Whether you need to accommodate user spikes, migrate to serverless networks, or add complex sub-systems, we make expanding your application easy.",
      category: 'services'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Inquiries', icon: HelpCircle },
    { id: 'trust', label: 'Trust & Authenticity', icon: ShieldCheck },
    { id: 'services', label: 'Services & Tech', icon: FileCheck },
    { id: 'process', label: 'Process & Delivery', icon: CheckCircle },
  ] as const;

  // Filtered FAQs based on category selection and search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 overflow-hidden font-sans relative">
      <Helmet>
        <title>FAQ | Legitimacy, Services & Operations | Speshway Solutions Hyderabad</title>
        <meta name="description" content={`Find official answers about ${SEO_KEYWORDS.seoTitles[0]}, IT services, and project verification at Speshway Solutions, the best IT company in Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.highRanking,
          "Speshway Solutions real or fake",
          "is speshway real",
          "Speshway FAQ",
          "IT questions"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/faq" />
      </Helmet>

      <Navbar />

      {/* Cybernetic Ambient Light Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-[20%] left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] -z-10" />

      {/* Hero Header Section */}
      <section className="pt-40 pb-16 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
                <HelpCircle className="w-3.5 h-3.5" />
                Get Quick Answers
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                Frequently Asked <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Questions</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Have inquiries about Speshway's legitimacy, security parameters, and project execution? Find complete, high-fidelity answers directly from our directors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dynamic Search & Category Pill Filters */}
      <section className="pb-12 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl space-y-8">
          
          {/* Dynamic Search Input */}
          <ScrollReveal>
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search inquiries (e.g. real, scam, process, security...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4.5 rounded-2xl bg-white/[0.01] border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-indigo-500/[0.01] transition-all duration-300 text-sm font-semibold shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Sliding Category Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-500 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-[1.02]'
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Accordion Stream Grid */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="p-1 sm:p-6 md:p-8 rounded-[36px] border border-white/5 bg-white/[0.01] backdrop-blur-2xl shadow-3xl">
              
              {filteredFaqs.length > 0 ? (
                <StaggerContainer staggerDelay={0.06}>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFaqs.map((faq, idx) => (
                      <StaggerItem key={idx}>
                        <AccordionItem
                          value={`item-${idx}`}
                          className="border border-white/5 hover:border-indigo-500/20 data-[state=open]:border-indigo-500/30 bg-[#030712]/30 data-[state=open]:bg-indigo-500/[0.01] rounded-2xl px-6 sm:px-8 transition-all duration-300 overflow-hidden shadow-xl"
                        >
                          <AccordionTrigger className="text-left py-6 hover:text-indigo-400 text-white transition-colors [&[data-state=open]>svg]:rotate-180">
                            <span className="text-base sm:text-lg font-black tracking-tight leading-snug pr-4 flex items-start gap-3">
                              <span className="text-indigo-400 text-sm font-black pt-1">Q{idx + 1}.</span>
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium pb-6 pt-1 pl-7 border-t border-white/5 mt-1">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </StaggerItem>
                    ))}
                  </Accordion>
                </StaggerContainer>
              ) : (
                <div className="p-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white">No Matching Questions Found</h3>
                  <p className="text-gray-400 text-xs font-semibold leading-relaxed max-w-sm mx-auto">
                    We couldn't find any inquiries matching "{searchQuery}". Try searching for other terms like 'scam', 'real', 'security', or 'support'.
                  </p>
                  <div className="pt-2">
                    <button 
                      onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} 
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-wider text-indigo-400 hover:text-white"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* "Still Have Questions?" Glowing CTA Card */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="p-10 sm:p-14 md:p-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.02] via-[#030712]/50 to-transparent backdrop-blur-xl text-center space-y-8 relative shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Still Have Inquiries?
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-semibold">
                  Can't find the answers you're looking for? Our executive team is available round-the-clock to clarify corporate processes or help launch your project.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/contact">
                  <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xs uppercase tracking-widest px-8 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 hover:scale-[1.02]">
                    Contact Executive Team
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
            title="Explore More Speshway Information" 
            layout="chips"
            limit={10}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
