import { useState } from "react";
import { Mail, Phone, MapPin, Send, FileText } from "lucide-react";
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
        <link rel="me" href="https://www.youtube.com/@speshwaysolutions" />
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
              "https://www.youtube.com/@speshwaysolutions"
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
              <StaggerItem key={index}>
                <HoverScale>
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
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/", color: "bg-[#0077b5]" },
                { name: "Instagram", url: "https://www.instagram.com/speshwaysolutionsofficial/", color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" },
                { name: "Facebook", url: "https://www.facebook.com/people/Speshway-Solutions/61584485021568/", color: "bg-[#1877f2]" },
                { name: "Twitter", url: "https://x.com/SpeshwayM56509", color: "bg-[#000000]" },
                { name: "YouTube", url: "https://www.youtube.com/@speshwaysolutions", color: "bg-[#ff0000]" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:opacity-90 transition-opacity flex items-center gap-2`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 sm:p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover-glow animate-scale-in">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Fill out the form below and we'll respond within 24 hours</p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Looking for a job?</strong> We're always looking for talented individuals to join our team.
                  </p>
                  <Link to="/send-resume">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <FileText size={16} className="mr-2" />
                      Submit Your Resume
                    </Button>
                  </Link>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your project..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 group"
                  >
                    Send Message
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </Card>
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
