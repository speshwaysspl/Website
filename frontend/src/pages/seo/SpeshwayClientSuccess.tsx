import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Quote, Star, TrendingUp, CheckCircle2, Award, ThumbsUp } from "lucide-react";

const SpeshwayClientSuccess = () => {
  const faqItems = [
    {
      question: "What do clients say about Speshway Solutions?",
      answer: "Clients consistently praise Speshway for our technical expertise, timely delivery, and transparent communication throughout the development lifecycle."
    },
    {
      question: "Has Speshway worked with international clients?",
      answer: "Yes, we have successfully delivered projects for clients in North America, Europe, and the Middle East, as well as several prominent Indian businesses."
    },
    {
      question: "How does Speshway ensure project success?",
      answer: "We follow an agile development methodology with regular client updates, rigorous testing, and post-launch support."
    }
  ];

  const breadcrumbItems = [
    { name: "Portfolio", item: "/portfolio" },
    { name: "Client Success Stories", item: "/speshway-solutions-client-success-stories-and-reviews" }
  ];

  const testimonials = [
    {
      name: "Mark T.",
      position: "CTO, Fintech Startup (USA)",
      text: "The team at Speshway delivered a complex mobile app on time and within budget. Their understanding of React Native is exceptional."
    },
    {
      name: "Sandeep K.",
      position: "Founder, E-commerce Brand (India)",
      text: "Our website traffic increased by 150% after Speshway optimized our SEO and redesigned our frontend. Highly recommended!"
    },
    {
      name: "Elena R.",
      position: "Project Manager, Logistics Co. (UK)",
      text: "Professional, skilled, and reliable. Speshway is our go-to partner for all things cloud and backend development."
    }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Client Success Stories & Global Reviews"
      description="Read authentic client testimonials and success stories from Speshway Solutions. Learn how we've helped businesses worldwide scale through expert IT services."
      keywords="speshway client reviews, speshway solutions success stories, speshway project reviews, speshway solutions pvt ltd testimonials, speshway services feedback"
      canonical="/speshway-solutions-client-success-stories-and-reviews"
      h1="Client Success: Delivering Impactful Results at Speshway"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          Our success is measured by the success of our clients. <strong>Speshway Solutions</strong> has partnered with dozens of organizations to build digital products that drive revenue, improve efficiency, and enhance user experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-16 not-prose">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border rounded-3xl bg-muted/20 relative">
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-sm italic text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.position}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-8">Key Project Milestones</h2>
        <div className="space-y-8">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, title: "Scaling for Growth", desc: "Helped a healthcare startup scale their user base from 1k to 100k active users using AWS serverless architecture." },
            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Seamless Migration", desc: "Migrated a legacy ERP system to a modern web-based platform with zero data loss and minimal downtime." },
            { icon: <Award className="w-6 h-6" />, title: "Award-Winning UX", desc: "Designed an intuitive interface for a financial app that saw a 40% increase in daily user engagement." }
          ].map((m, i) => (
            <div key={i} className="flex gap-6 p-6 border rounded-2xl bg-muted/5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                {m.icon}
              </div>
              <div>
                <h3 className="font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Why Clients Choose Speshway Solutions</h2>
        <p>
          In a crowded market of IT providers, Speshway stands out because of our commitment to <strong>transparency and quality</strong>. We don't just write code; we solve business problems.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
            <ThumbsUp className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-bold text-green-900 text-sm">Transparent Pricing</p>
              <p className="text-xs text-green-800">No hidden costs or surprise invoices.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
            <ThumbsUp className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-bold text-green-900 text-sm">Agile Methodology</p>
              <p className="text-xs text-green-800">Regular sprints and feedback loops.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="mb-10 text-muted-foreground max-w-xl mx-auto">
            Ready to take your digital presence to the next level? Join our list of satisfied global clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayClientSuccess;
