import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/animations";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in IT solutions, recognized for excellence, innovation, and lasting client partnerships.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, innovation, excellence, and customer success guide everything we do at Speshway Solutions.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse team of passionate experts dedicated to delivering world-class solutions and exceptional service.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "200+", label: "Team Members" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Speshway Solutions | Best Software Company in Hyderabad | T-Hub</title>
        <meta name="description" content="Learn about Speshway Solutions Private Limited, a top software company in Hyderabad based in T-Hub. Discover our mission, values, and why we are the best choice for your digital needs." />
        <meta name="keywords" content="about Speshway, software company in hyderabad, best IT company Hyderabad, Speshway Solutions T-Hub, software development team, registered IT firm India,mobile app development company in Hyderabad,AI solutions provider Hyderabad,cloud computing services India,best web developers in Hyderabad,cybersecurity company Hyderabad,DevOps consulting services,software testing services Hyderabad,UI/UX design services Hyderabad,enterprise software solutions Hyderabad,registered software company in Madhapur,top-rated IT consultancy Hyderabad" />
        <link rel="canonical" href="https://speshway.com/about" />
        <meta property="og:title" content="About Speshway Solutions | Best Software Company in Hyderabad" />
        <meta property="og:description" content="Speshway Solutions is a registered IT services provider at T-Hub, Hyderabad. Learn more about our professional journey since 2017." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/about" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Speshway Solutions | Top IT Company" />
        <meta name="twitter:description" content="Speshway Solutions is a real and registered IT services provider in Hyderabad." />
        <link rel="me" href="https://www.instagram.com/speshwaysolutionsofficial/" />
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
            }
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block sm:inline">About</span>{" "}
              <span className="block sm:inline text-primary whitespace-nowrap">Speshway Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A registered and trusted digital transformation partner since 2017. We pride ourselves on being a real, transparent, and innovative IT solutions provider.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">A Legacy of Trust</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2017, <strong>Speshway Solutions Private Limited</strong> is a legally registered IT services company headquartered in the tech hub of Hyderabad. We began with a simple yet powerful vision: to bridge
                  the gap between businesses and cutting-edge technology with complete integrity.
                </p>
                <p>
                  As a legitimate player in the IT industry, we have grown from a small passionate team into a full-service provider serving global clients. Our physical presence in Hyderabad and our transparent business practices are a testament to our commitment to being a reliable partner.
                </p>
                <p>
                  We are aware of fraudulent activities where individuals misuse our name. We want to reassure our clients and job seekers that Speshway Solutions is a real company with a track record of over 300+ successful projects and a dedicated team of 200+ professionals.
                </p>
                <p>
                  Today, we continue to deliver tangible results, building lasting relationships based on trust, excellence, and innovation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Company Details Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Official Company Details</h2>
            <p className="text-lg text-muted-foreground">Speshway Solutions Pvt Ltd is a fully registered and compliant IT firm in India.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20 bg-card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-primary w-6 h-6" /> Registration Proof
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Company Name:</strong> Speshway Solutions Private Limited</li>
                <li><strong>Entity Type:</strong> Private Limited Company</li>
                <li><strong>Incorporation Year:</strong> 2017</li>
                <li><strong>Status:</strong> Active & Compliant</li>
              </ul>
            </Card>

            <Card className="p-8 border-primary/20 bg-card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-primary w-6 h-6" /> Head Office
              </h3>
              <address className="not-italic text-muted-foreground space-y-2">
                <p><strong>T-Hub</strong></p>
                <p>Plot No 1/C, Sy No 83/1, Raidurgam,</p>
                <p>Knowledge City Rd, panmaktha,</p>
                <p>Hyderabad, Serilingampalle (M),</p>
                <p>Telangana 500032, India</p>
              </address>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
            <div className="relative border-l-2 border-primary/30 pl-6 space-y-8 ml-4 md:ml-auto md:mr-auto md:w-fit">
              <div className="relative">
                <div className="absolute -left-[31px] bg-primary w-4 h-4 rounded-full mt-1.5"></div>
                <h4 className="text-lg font-bold">2017 - Inception</h4>
                <p className="text-muted-foreground">Speshway Solutions Pvt Ltd was officially registered and commenced operations.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] bg-primary w-4 h-4 rounded-full mt-1.5"></div>
                <h4 className="text-lg font-bold">2019 - Expansion</h4>
                <p className="text-muted-foreground">Expanded our team to 50+ experts and acquired global clients.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] bg-primary w-4 h-4 rounded-full mt-1.5"></div>
                <h4 className="text-lg font-bold">2022 - T-Hub Move</h4>
                <p className="text-muted-foreground">Moved our headquarters to T-Hub, Hyderabad, India's premier innovation hub.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] bg-primary w-4 h-4 rounded-full mt-1.5"></div>
                <h4 className="text-lg font-bold">2026 - Present</h4>
                <p className="text-muted-foreground">Leading the industry with 300+ successful projects and a 200+ strong workforce.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values and principles that shape every decision and project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
