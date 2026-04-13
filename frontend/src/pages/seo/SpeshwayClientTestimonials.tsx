import SEOLayout from "@/components/SEOLayout";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { MessageSquare, Quote, Star, CheckCircle, Award, Users, Globe, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayClientTestimonials = () => {
  const faqItems = [
    {
      question: "What do clients say about Speshway Solutions?",
      answer: "Clients consistently praise Speshway for its technical expertise, transparent communication, and ability to deliver high-quality, scalable solutions on time and within budget.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Clients consistently praise Speshway for its technical expertise, transparent communication, and ability to deliver high-quality, scalable solutions on time and within budget.
          </p>
          <p className="text-sm text-muted-foreground">
            You can see this reflected in{" "}
            <a
              href="/speshway-solutions-review-2026"
              className="text-primary font-semibold hover:underline"
              title="Read the detailed Speshway Solutions review for 2026"
            >
              our 2026 company review
            </a>{" "}
            and{" "}
            <a
              href="/speshway-solutions-trust-score"
              className="text-primary font-semibold hover:underline"
              title="Check the Speshway Solutions trust score based on client satisfaction"
            >
              verified trust score report
            </a>
            .
          </p>
        </div>
      )
    },
    {
      question: "Can I speak with a past Speshway client?",
      answer: "Yes, we can arrange reference calls with our past clients for major project inquiries, subject to mutual agreement and non-disclosure terms."
    },
    {
      question: "Which industries does Speshway have testimonials from?",
      answer: "We have testimonials from clients across diverse industries including FinTech, E-commerce, Healthcare, EdTech, and Logistics."
    },
    {
      question: "Are these testimonials verified?",
      answer: "Absolutely. All our testimonials are from real clients and can be verified through independent platforms like Clutch and GoodFirms."
    }
  ];

  const breadcrumbItems = [
    { name: "Social Proof", item: "/speshway-client-testimonials" },
    { name: "Client Testimonials", item: "/speshway-client-testimonials" }
  ];

  const testimonials = [
    {
      name: "David Miller",
      role: "CTO, FinTech Startup (USA)",
      content: "Speshway Solutions transformed our complex requirements into a seamless, high-performance platform. Their attention to detail and proactive communication made them a true partner in our success.",
      rating: 5,
      industry: "FinTech"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager, E-commerce Platform (UK)",
      content: "The team at Speshway is exceptional. They not only delivered our mobile app on time but also provided valuable insights that improved the overall user experience. Highly recommended!",
      rating: 5,
      industry: "E-commerce"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder, HealthTech Solutions (India)",
      content: "Building a HIPAA-compliant platform was a major challenge. Speshway's deep understanding of security and compliance was crucial in getting our product to market safely.",
      rating: 5,
      industry: "Healthcare"
    },
    {
      name: "Elena Rodriguez",
      role: "CEO, EdTech Innovation (UAE)",
      content: "Speshway's agility and technical depth are unmatched. They've been our primary technology partner for over two years, and we couldn't be happier with the results.",
      rating: 5,
      industry: "EdTech"
    }
  ];

  return (
    <SEOLayout
      title="Speshway Client Testimonials: Real Stories of Success"
      description="Read real client testimonials and success stories from Speshway Solutions. Discover why businesses worldwide trust us for their technology needs."
      keywords="speshway client testimonials, speshway solutions reviews, speshway customer feedback, speshway project success stories, speshway client satisfaction"
      canonical="/speshway-client-testimonials"
      h1="Speshway Client Testimonials: Voices of Global Success"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="bg-primary/10 p-4 rounded-full">
                <Users className="w-8 h-8 text-primary" />
             </div>
             <div>
                <h4 className="font-bold text-lg">1,000+ Happy Clients</h4>
                <p className="text-sm text-muted-foreground">Serving businesses across 15+ countries.</p>
             </div>
          </div>
          <div className="flex items-center gap-1">
             {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             ))}
             <span className="ml-2 font-bold text-xl">4.9/5 Average</span>
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          At <strong>Speshway Solutions</strong>, our success is measured by the success of our clients. Over the years, we've had the privilege of partnering with visionaries and industry leaders across the globe. Here are some of their stories in their own words.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border rounded-3xl bg-card hover:shadow-lg transition-all relative overflow-hidden group">
               <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
               <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                     <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
               </div>
               <p className="text-lg leading-relaxed italic mb-8 relative z-10">"{t.content}"</p>
               <div className="flex items-center gap-4 relative z-10 border-t pt-6">
                  <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary">
                     <User className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold">{t.name}</h4>
                     <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Why Clients Choose Speshway Solutions</h2>
        <p>
          Our testimonials reflect our core values and the way we approach every project. Clients consistently highlight several key reasons for their partnership with us:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 my-8 not-prose list-none p-0">
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <span className="font-bold block">Technical Expertise</span>
              <span className="text-sm text-muted-foreground">Deep understanding of modern tech stacks and architectural best practices.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <span className="font-bold block">Transparent Communication</span>
              <span className="text-sm text-muted-foreground">Regular updates, clear reporting, and a proactive approach to problem-solving.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <span className="font-bold block">Commitment to Quality</span>
              <span className="text-sm text-muted-foreground">Rigorous QA processes and a focus on delivering bug-free, scalable code.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <span className="font-bold block">Agile Methodology</span>
              <span className="text-sm text-muted-foreground">Flexible development cycles that adapt to changing business needs.</span>
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Case Study: Scalable E-commerce for the Global Market</h2>
        <p>
          One of our most successful projects involved building a cross-border e-commerce platform for a UK-based client. The challenge was to handle millions of transactions while maintaining sub-second page loads. 
        </p>
        <p>
          Using a microservices architecture and a globally distributed cloud setup, our team delivered a platform that not only met but exceeded the client's expectations. The platform saw a 40% increase in conversion rates within the first three months of launch.
        </p>

        <div className="my-10 not-prose">
          <InternalLinks
            layout="chips"
            title="People also search for Speshway testimonials and trust"
          />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Building Trust Through Results</h2>
        <p>
          Testimonials are more than just words; they are a testament to the <strong>long-term relationships</strong> we build with our clients. Over 60% of our business comes from repeat clients and referrals, which is the ultimate indicator of client satisfaction.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Our Global Impact</h2>
        <p>
          Speshway's impact is truly global. From helping a healthcare startup in India digitize patient records to enabling a FinTech giant in the USA streamline its payment processing, our solutions are making a difference across continents.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
           <div className="p-6 border rounded-2xl bg-card text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-sm">USA</h4>
           </div>
           <div className="p-6 border rounded-2xl bg-card text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-sm">UK</h4>
           </div>
           <div className="p-6 border rounded-2xl bg-card text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-sm">UAE</h4>
           </div>
           <div className="p-6 border rounded-2xl bg-card text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-sm">India</h4>
           </div>
        </div>

        <div className="bg-primary text-primary-foreground p-12 rounded-[2rem] my-16 text-center not-prose shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <MessageSquare className="w-32 h-32" />
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Be Our Next Success Story</h3>
          <p className="mb-10 opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to build something extraordinary? Partner with Speshway and join the ranks of our successful clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" variant="secondary" className="px-12 h-16 text-lg font-bold rounded-2xl">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-16 text-lg font-bold rounded-2xl">
              <Link to="/projects">Explore Our Portfolio</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Your Partner in Digital Transformation</h2>
        <p>
          In conclusion, <strong>Speshway Solutions</strong> is proud of the impact we've made for our clients. These testimonials are a reminder of why we do what we do—to build technology that empowers businesses and improves lives. We look forward to many more years of successful partnerships and innovation.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayClientTestimonials;
