
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Helmet } from "react-helmet-async";
import { SEO_KEYWORDS } from "@/lib/seo-utils";

const Career = () => {
  const { data: jobs } = useQuery({
    queryKey: ['jobs-open'],
    queryFn: () => api.get('/jobs?status=open').then(res => res.data),
  });
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and family",
    },
    {
      icon: "🏖️",
      title: "Flexible PTO",
      description: "Generous paid time off and holidays",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible work-from-home options",
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear paths for advancement and development",
    },
  ];

  const lifeAtSpeshway = [
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Working together on innovative projects",
    },
    {
      icon: "💻",
      title: "Modern Workspace",
      description: "Comfortable and inspiring environment",
    },
    {
      icon: "🎉",
      title: "Celebrating Success",
      description: "Milestones and achievements",
    },
    {
      icon: "📚",
      title: "Learning & Growth",
      description: "Continuous skill development",
    },
    {
      icon: "🥳",
      title: "Team Building",
      description: "Fun activities and bonding",
    },
    {
      icon: "💡",
      title: "Innovation Workshops",
      description: "Creative problem solving",
    },
    {
      icon: "☕",
      title: "Great Amenities",
      description: "Comfort and convenience",
    },
    {
      icon: "🌍",
      title: "Diversity & Inclusion",
      description: "Celebrating our differences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers | Official Speshway Solutions | {SEO_KEYWORDS.googleBusiness[5]} in Hyderabad</title>
        <meta name="description" content="Join the official team at Speshway Solutions, T-Hub Hyderabad. Verify official job alerts and avoid recruitment scams. Speshway Solutions never charges for job offers." />
        <meta name="keywords" content={[
          ...SEO_KEYWORDS.website.slice(0, 3),
          ...SEO_KEYWORDS.googleBusiness.slice(5, 8),
          "Speshway careers",
          "official speshway solutions",
          "jobs in hyderabad",
          "T-Hub jobs"
        ].join(", ")} />
        <link rel="canonical" href="https://speshway.com/career" />
        <meta property="og:title" content={`Careers | Official Speshway Solutions | ${SEO_KEYWORDS.googleBusiness[5]}`} />
        <meta property="og:description" content="Join the official best software company in Hyderabad at T-Hub. Browse open positions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/career" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Careers at Speshway Solutions" />
        <meta name="twitter:description" content="Browse open positions and join our team." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Careers","item":"https://speshway.com/career"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Speshway Solutions Private Limited",
          "url":"https://speshway.com/",
          "logo":"https://speshway.com/logo.png"
        })}</script>
      </Helmet>
      <Navbar />

      {/* Open Positions */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Explore our current job openings and apply for roles that fit your skills.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:gap-6">
            {jobs && jobs.length > 0 ? (
              jobs.map((job: any) => (
                <Link to={`/career/${job._id}`} key={job._id} className="group">
                  <Card className="p-5 sm:p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Open</span>
                    </div>
                    {job.experience && <p className="text-sm text-muted-foreground mt-1">Experience: {job.experience}</p>}
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{job.description}</p>
                    <div className="mt-3">
                      <Button variant="outline">View Details</Button>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <Card className="p-6 text-center">No open positions right now</Card>
            )}
          </div>
        </div>
      </section>

      

      {/* Zero Fee Hiring Alert */}
      <section className="py-10 bg-red-50/50 dark:bg-red-950/10 border-y border-red-100 dark:border-red-900/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">We do NOT charge money for jobs</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Speshway Solutions has a strict <strong>Zero-Fee Hiring Policy</strong>. We never ask candidates for any registration fees, security deposits, or training charges. If someone asks you for money promising a job at Speshway, it is a scam.
          </p>
          <Link to="/is-speshway-real-or-fake">
            <Button variant="outline" className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-900/20">
              Read Our Fraud Alert & Verification Guide
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Culture</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              What makes Speshway a great place to work and grow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-3 sm:p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center group hover-lift hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Speshway Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Life at Speshway</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Get a glimpse into our vibrant workplace culture and team activities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto">
            {lifeAtSpeshway.map((item, index) => (
              <Card
                key={index}
                className="p-3 sm:p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center group hover-lift hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Card className="p-6 sm:p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border text-center max-w-3xl mx-auto hover-glow animate-scale-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Don't See Your Role?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
              We're always on the lookout for exceptional talent. Send us your resume and let's talk about how you can
              contribute to our team.
            </p>
            <Link to="/send-resume">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                Send Your Resume
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
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
