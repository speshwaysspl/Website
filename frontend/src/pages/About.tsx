import { Target, Eye, Award, Users, Code, Smartphone, Cloud, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations";
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.",
      color: "bg-blue-500/10 text-blue-600",
      borderColor: "hover:border-blue-500/50",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in IT solutions, recognized for excellence, innovation, and lasting client partnerships.",
      color: "bg-purple-500/10 text-purple-600",
      borderColor: "hover:border-purple-500/50",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, innovation, excellence, and customer success guide everything we do at Speshway Solutions.",
      color: "bg-amber-500/10 text-amber-600",
      borderColor: "hover:border-amber-500/50",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse team of passionate experts dedicated to delivering world-class solutions and exceptional service.",
      color: "bg-emerald-500/10 text-emerald-600",
      borderColor: "hover:border-emerald-500/50",
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
    { number: "100+", label: "Projects Completed", icon: Award, color: "text-blue-600" },
    { number: "100+", label: "Happy Clients", icon: Users, color: "text-emerald-600" },
    { number: "200+", label: "Team Members", icon: Code, color: "text-purple-600" },
    { number: "15+", label: "Years Experience", icon: Lightbulb, color: "text-amber-600" },
  ];

  const process = [
    { title: "Discovery", description: "We dive deep into your requirements and business goals.", color: "bg-blue-500" },
    { title: "Planning", description: "Strategic roadmap and architecture design for your project.", color: "bg-purple-500" },
    { title: "Development", description: "Agile development with regular updates and feedback loops.", color: "bg-emerald-500" },
    { title: "Delivery", description: "Rigorous testing and seamless deployment of your solution.", color: "bg-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Speshway Solutions | {SEO_KEYWORDS.seoTitles[4]} | T-Hub</title>
        <meta name="description" content="Learn about Speshway Solutions Private Limited, a top software company in Hyderabad based in T-Hub. Discover our mission, values, and why we are the best choice for your digital needs." />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.primary.slice(0, 5),
          ...SEO_KEYWORDS.highRanking.slice(0, 5),
          ...SEO_KEYWORDS.areaBased.slice(0, 5),
          "about Speshway",
          "software company in hyderabad",
          "Speshway Solutions T-Hub"
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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type":"ListItem","position":1,"name":"Home","item":"https://speshway.com/"},
            {"@type":"ListItem","position":2,"name":"About","item":"https://speshway.com/about"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Speshway Solutions Private Limited",
            "alternateName": "Speshway Solutions",
            "foundingDate": "2017",
            "url": "https://speshway.com",
            "logo": "https://speshway.com/logo.png",
            "image": "https://speshway.com/logo.png",
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
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9100006020",
              "contactType": "customer service",
              "email": "info@speshway.com"
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-bounce">
              <Award size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Trusted Since 2017</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Empowering <span className="text-primary">Innovation</span> through <span className="text-secondary italic">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Speshway Solutions is your dedicated partner in digital transformation, delivering high-impact IT solutions that scale with your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2">Our Collaborative Culture</p>
                  <p className="text-white/80">Innovation thrives where passion meets purpose.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">About  <span className="text-primary">Us</span></h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2017, <strong>Speshway Solutions Private Limited</strong> is a legally registered IT services company headquartered in the tech hub of Hyderabad. We began with a simple yet powerful vision: to bridge
                  the gap between businesses and cutting-edge technology with complete integrity.
                </p>
                <p>
                  As a legitimate player in the IT industry, we have grown from a small passionate team into a full-service provider serving global clients. Our physical presence in Hyderabad and our transparent business practices are a testament to our commitment to being a reliable partner.
                </p>
                <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                  <p className="italic text-foreground">
                    "We are aware of fraudulent activities where individuals misuse our name. We want to reassure our clients that Speshway Solutions is a real company with a track record of over 300+ successful projects."
                  </p>
                </div>
                <p>
                  Today, we continue to deliver tangible results, building lasting relationships based on trust, excellence, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core <span className="text-primary">Expertise</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver innovative and impactful solutions across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {expertise.map((item, index) => (
              <div key={index} className="flex flex-col h-full">
                <Card
                  className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 group h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <item.icon className="w-8 h-8 mb-2 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our <span className="text-primary">Process</span></h2>
            <p className="text-xl text-muted-foreground">How we bring your ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
            {process.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg ring-8 ring-background`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Company Details Section */}
      <section className="py-24 bg-muted/20 border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Official <span className="text-primary">Company</span> Details</h2>
            <p className="text-xl text-muted-foreground">Speshway Solutions Pvt Ltd is a fully registered and compliant IT firm in India.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-10 border-primary/20 bg-card hover:shadow-xl transition-shadow h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Registration Proof</h3>
              </div>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold text-foreground">Company Name</span>
                  <span>Speshway Solutions Private Limited</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold text-foreground">Entity Type</span>
                  <span>Private Limited Company</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-semibold text-foreground">Incorporation Year</span>
                  <span>2017</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-foreground">Status</span>
                  <span className="text-emerald-500 font-bold">Active & Compliant</span>
                </li>
              </ul>
            </Card>

            <Card className="p-10 border-primary/20 bg-card hover:shadow-xl transition-shadow h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Head Office</h3>
              </div>
              <address className="not-italic text-lg text-muted-foreground space-y-4">
                <p className="text-2xl font-bold text-foreground mb-4">T-Hub</p>
                <div className="space-y-2">
                  <p>Plot No 1/C, Sy No 83/1, Raidurgam,</p>
                  <p>Knowledge City Rd, panmaktha,</p>
                  <p>Hyderabad, Serilingampalle (M),</p>
                  <p>Telangana 500032, India</p>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://goo.gl/maps/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline flex items-center gap-2"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </address>
            </Card>
          </div>

          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-16">Our <span className="text-primary">Journey</span></h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 rounded-full hidden md:block opacity-20" />
              <div className="space-y-16">
                {[
                  { year: "2017", title: "Inception", desc: "Speshway Solutions Pvt Ltd was officially registered and commenced operations." },
                  { year: "2019", title: "Expansion", desc: "Expanded our team to 50+ experts and acquired global clients." },
                  { year: "2022", title: "T-Hub Move", desc: "Moved our headquarters to T-Hub, Hyderabad, India's premier innovation hub." },
                  { year: "2024", title: "Global Recognition", desc: "Certified as a top IT solution provider in Hyderabad and recognized by industry leaders." },
                  { year: "2026", title: "Present", desc: "Leading the industry with 300+ successful projects and a 200+ strong workforce." }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className={`inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold mb-3`}>{item.year}</div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-lg">{item.desc}</p>
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-background border-4 border-primary rounded-full z-10 relative flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What <span className="text-primary">Drives</span> Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values and principles that shape every decision and project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {values.map((value, index) => (
              <div key={index} className="flex h-full">
                <Card
                  className={`p-8 bg-card/50 backdrop-blur-sm border-border ${value.borderColor} transition-all duration-500 group h-full w-full`}
                >
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-background shadow-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className={`text-5xl md:text-6xl font-bold mb-3 ${stat.color}`}>{stat.number}</div>
                <div className="text-muted-foreground font-bold text-lg uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Connect With <span className="text-primary">Us</span></h2>
            <p className="text-xl text-muted-foreground mb-12">Follow our official profiles for the latest updates, industry insights, and company news.</p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/", color: "bg-[#0077b5]", icon: "https://cdn.simpleicons.org/linkedin/white" },
                { name: "Instagram", url: "https://www.instagram.com/speshwaysolutionsofficial/", color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", icon: "https://cdn.simpleicons.org/instagram/white" },
                { name: "Facebook", url: "https://www.facebook.com/people/Speshway-Solutions/61584485021568/", color: "bg-[#1877f2]", icon: "https://cdn.simpleicons.org/facebook/white" },
                { name: "Twitter", url: "https://x.com/SpeshwayM56509", color: "bg-[#000000]", icon: "https://cdn.simpleicons.org/x/white" },
                { name: "YouTube", url: "https://www.youtube.com/@speshwaysolutions", color: "bg-[#ff0000]", icon: "https://cdn.simpleicons.org/youtube/white" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-lg`}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-muted/20">
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
