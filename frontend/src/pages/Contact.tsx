import { useState } from "react";
import { Mail, Phone, MapPin, Send, FileText, Linkedin, Instagram, Facebook, Twitter, Youtube, User, Clock, Sparkles, ArrowRight, Check, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import api from "@/lib/api";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, ScrollReveal } from "@/components/animations";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await api.post("/contact/submit", {
        ...formData,
        type: "contact",
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@speshway.com",
      link: "mailto:info@speshway.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9100006020",
      link: "tel:+919100006020",
    },
    {
      icon: MapPin,
      title: "India Office",
      content: "T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd, panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032",
      link: "https://maps.google.com/?q=T-Hub,+Plot+No+1%2FC,+Sy+No+83%2F1,+Raidurgam,+Knowledge+City+Rd,+panmaktha,+Hyderabad,+Serilingampalle+(M),+Telangana+500032",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | {SEO_KEYWORDS.seoTitles[0]} | Speshway Solutions</title>
        <meta name="description" content={`Contact the official Speshway Solutions team at T-Hub Hyderabad. Get in touch for ${SEO_KEYWORDS.seoTitles[0]}, ${SEO_KEYWORDS.primary[0]}, and ${SEO_KEYWORDS.primary[1]}. Best IT Company in Hyderabad.`} />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.seoTitles,
          ...SEO_KEYWORDS.primary,
          ...SEO_KEYWORDS.seoKeywords,
          ...SEO_KEYWORDS.googleBusiness,
          ...SEO_KEYWORDS.highRanking,
          "Speshway contact",
          "software company near me",
          "IT consultation Hyderabad",
          "SEO_KEYWORDS"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/contact" />
        <meta property="og:title" content={`Contact Official Speshway Solutions | ${SEO_KEYWORDS.seoTitles[3]}`} />
        <meta property="og:description" content="Get a free consultation with the official best software company in Hyderabad at T-Hub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/contact" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Speshway Solutions" />
        <meta name="twitter:description" content="Get a free consultation with our experts." />
        <link rel="me" href="https://www.facebook.com/people/Speshway-Solutions/61584485021568/" />
        <link rel="me" href="https://x.com/SpeshwayM56509" />
        <link rel="me" href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/" />
        <link rel="me" href="https://www.instagram.com/speshwaysolutionsofficial/" />
        <link rel="me" href="https://www.youtube.com/@speshwaysolutionspvtltd" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"ContactPage",
          "url":"https://speshway.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Speshway Solutions Private Limited",
            "image": "https://speshway.com/logo.png",
            "telephone": "+91 9100006020",
            "email": "info@speshway.com",
            "priceRange": "$$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "10:00",
              "closes": "18:00"
            },
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
            },
            "sameAs": [
              "https://www.facebook.com/people/Speshway-Solutions/61584485021568/",
              "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/",
              "https://x.com/SpeshwayM56509",
              "https://www.instagram.com/speshwaysolutionsofficial/",
              "https://www.youtube.com/@speshwaysolutionspvtltd"
            ]
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Have a question or want to discuss a project? We'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverScale className="h-full">
                  <Card
                    className="h-full p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center group hover-lift hover-glow flex flex-col justify-start"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300 break-words line-clamp-3"
                    >
                      {info.content}
                    </a>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Connect With Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">Follow our official channels for more updates</p>
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/", color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]", icon: Linkedin },
                { name: "Instagram", url: "https://www.instagram.com/speshwaysolutionsofficial/", color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(220,39,67,0.4)]", icon: Instagram },
                { name: "Facebook", url: "https://www.facebook.com/people/Speshway-Solutions/61584485021568/", color: "hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]", icon: Facebook },
                { name: "Twitter", url: "https://x.com/SpeshwayM56509", color: "hover:bg-black hover:text-white hover:border-neutral-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]", icon: Twitter },
                { name: "YouTube", url: "https://www.youtube.com/@speshwaysolutionspvtltd", color: "hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]", icon: Youtube }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl ${social.color}`}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Premium Brand Desk Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Information Cards Stack */}
              <div className="space-y-6">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-extrabold text-xs uppercase tracking-widest mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    Always Operational
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                    Let’s engineer something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400">extraordinary</span> together.
                  </h2>
                  <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed mb-6">
                    Have an innovative vision, software specification, or general query? Submit your desk enquiry, and our elite engineering desk at T-Hub will connect with you.
                  </p>
                </ScrollReveal>

                {/* Guaranteed Response Card */}
                <ScrollReveal>
                  <Card className="p-5 bg-indigo-950/20 backdrop-blur-xl border-white/5 rounded-2xl flex items-start gap-4 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shrink-0">
                      <Clock className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-1">Guaranteed Reply SLA</h4>
                      <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                        We respect your time. All corporate inquiries are reviewed and handled within <span className="text-teal-400 font-bold">24 business hours</span> by our technical architects.
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* T-Hub Operational Hours Card */}
                <ScrollReveal>
                  <Card className="p-5 bg-teal-950/10 backdrop-blur-xl border-white/5 rounded-2xl flex items-start gap-4 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-1">Official Workspace</h4>
                      <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                        Located inside the world’s largest innovation ecosystem — <strong className="text-white">T-Hub Hyderabad</strong>. Visits are hosted strictly via prior appointments.
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Bottom recruitment callout */}
              <ScrollReveal>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-950 border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute right-0 bottom-0 w-24 h-24 bg-indigo-500/10 blur-xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        We're Hiring
                      </div>
                      <h4 className="text-sm font-bold text-white">Looking for custom growth paths?</h4>
                      <p className="text-xs text-gray-400">Join our engineering expedition at T-Hub.</p>
                    </div>
                    <Link to="/send-resume" className="shrink-0">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto rounded-xl border-white/10 hover:border-white/20 hover:bg-white/5 h-10 px-4 text-xs font-bold uppercase tracking-wide gap-1">
                        Apply Now
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: High-UX Animated Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <Card className="p-6 sm:p-8 md:p-10 bg-[#090e1a]/40 backdrop-blur-2xl border border-white/5 hover:border-white/10 shadow-3xl rounded-[2.5rem] relative overflow-hidden transition-all duration-300">
                  
                  {/* Form Heading */}
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">Send Us a Message</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Please fill out this form to connect with our corporate desk.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Two Column Grid for Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name Input with Icon */}
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                          <User size={18} />
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name *"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none text-white text-sm sm:text-base font-medium placeholder-gray-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                          <Mail size={18} />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Corporate email address *"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none text-white text-sm sm:text-base font-medium placeholder-gray-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Two Column Grid for Phone and Subject input */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Phone Input */}
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                          <Phone size={18} />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Contact phone number"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none text-white text-sm sm:text-base font-medium placeholder-gray-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner"
                        />
                      </div>

                      {/* Subject Input */}
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                          <MessageSquare size={18} />
                        </div>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this regarding? *"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none text-white text-sm sm:text-base font-medium placeholder-gray-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* High-UX Topic Quick Selection - Chips on Tablet/Desktop, Dropdown on Mobile */}
                    <div className="space-y-3">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Or select a quick topic:
                      </label>
                      
                      {/* Mobile Dropdown (shown only on mobile < md) */}
                      <div className="block md:hidden">
                        <select
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, subject: e.target.value }));
                          }}
                          className="w-full px-4 py-3.5 rounded-2xl bg-gray-950 border border-white/10 text-white text-[10px] font-extrabold uppercase tracking-wider focus:border-indigo-500/50 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25rem',
                            backgroundRepeat: 'no-repeat',
                            paddingRight: '2.5rem'
                          }}
                        >
                          <option value="" disabled className="text-gray-600 bg-gray-950">-- Select A Topic --</option>
                          {[
                            "Web Development",
                            "Mobile Applications",
                            "Business ERP/Payroll",
                            "Digital Transformation",
                            "General Partnership"
                          ].map((topic) => (
                            <option key={topic} value={topic} className="text-white bg-gray-950 py-2">
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Desktop Chips (hidden on mobile < md) */}
                      <div className="hidden md:flex flex-wrap gap-2">
                        {[
                          "Web Development",
                          "Mobile Applications",
                          "Business ERP/Payroll",
                          "Digital Transformation",
                          "General Partnership"
                        ].map((topic) => {
                          const isSelected = formData.subject.toLowerCase() === topic.toLowerCase();
                          return (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, subject: topic }));
                              }}
                              className={`px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-wider rounded-full border transition-all duration-300 flex items-center gap-1.5 active:scale-95 ${
                                isSelected
                                  ? "bg-indigo-500 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                                  : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                              {topic}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us details about your project, timeline, or inquiries... *"
                        rows={5}
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] focus:outline-none text-white text-sm sm:text-base font-medium placeholder-gray-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 shadow-inner resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 hover:from-indigo-400 hover:to-purple-400 text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group border border-indigo-500/20"
                    >
                      <span>Send Inquiries Desk</span>
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </form>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
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

export default Contact;
