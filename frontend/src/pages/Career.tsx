
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations";
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Helmet } from "react-helmet-async";

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at Speshway Solutions | Open Positions</title>
        <meta name="description" content="Work at Speshway Solutions. Browse open positions and join a high-growth team building innovative IT products and services." />
        <meta name="keywords" content="Speshway careers, jobs at Speshway, IT jobs, software jobs, join Speshway" />
        <link rel="canonical" href="https://www.speshway.com/career" />
        <meta property="og:title" content="Careers at Speshway Solutions" />
        <meta property="og:description" content="Browse open positions and join our team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/career" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Careers at Speshway Solutions" />
        <meta name="twitter:description" content="Browse open positions and join our team." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://www.speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Careers","item":"https://www.speshway.com/career"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Speshway Solutions Private Limited",
          "url":"https://www.speshway.com/",
          "logo":"https://www.speshway.com/logo.png"
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

      

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Why Join Speshway?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              We offer more than just a job – we provide an environment where you can thrive
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center group hover-lift hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
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

      

      <Footer />
    </div>
  );
};

export default Career;
