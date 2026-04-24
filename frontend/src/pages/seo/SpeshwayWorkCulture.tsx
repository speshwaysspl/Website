import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Coffee, Heart, Zap, Users2, Rocket, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayWorkCulture = () => {
  const faqItems = [
    {
      question: "What is the work culture at Speshway Hyderabad?",
      answer: "Speshway fosters a collaborative, innovative, and high-growth culture. Operating from T-Hub, we maintain a startup-like energy where every voice is heard."
    },
    {
      question: "What are the working hours at Speshway Solutions?",
      answer: "We follow standard business hours from 9:30 AM to 6:30 PM, with a focus on productivity and work-life balance."
    },
    {
      question: "Does Speshway offer work-from-home options?",
      answer: "We follow a hybrid model depending on project requirements, allowing flexibility while maintaining the benefits of in-person collaboration at our T-Hub office."
    }
  ];

  const breadcrumbItems = [
    { name: "Careers", item: "/career" },
    { name: "Work Culture", item: "/life-at-speshway-solutions-work-culture-reviews" }
  ];

  const values = [
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Innovation", desc: "Always pushing the boundaries of what's possible." },
    { icon: <Users2 className="w-6 h-6 text-blue-500" />, title: "Collaboration", desc: "Teamwork makes the dream work." },
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Empathy", desc: "Understanding and respecting every team member." },
    { icon: <Coffee className="w-6 h-6 text-orange-500" />, title: "Balance", desc: "Work hard, play hard, and rest well." },
    { icon: <Rocket className="w-6 h-6 text-purple-500" />, title: "Growth", desc: "Continuous learning and career advancement." },
    { icon: <Sun className="w-6 h-6 text-amber-500" />, title: "Transparency", desc: "Open communication at all levels." }
  ];

  return (
    <SEOLayout
      title="Life at Speshway: Authentic Work Culture & Employee Reviews"
      description="Discover the vibrant work culture at Speshway Solutions Hyderabad. Read about our T-Hub office environment, employee benefits, and career growth opportunities."
      keywords="life at speshway, speshway solutions work culture, speshway employee reviews, speshway hyderabad office life, work at t-hub hyderabad, speshway solutions reviews"
      canonical="/life-at-speshway-solutions-work-culture-reviews"
      h1="Life at Speshway: Where Innovation Meets Collaboration"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          Ever wondered what it's like to work at <strong>Speshway Solutions</strong>? Based in the heart of Hyderabad's tech ecosystem at T-Hub, we are a team of passionate creators, problem-solvers, and innovators building the future of IT.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          {values.map((v, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-muted/20">
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">The T-Hub Advantage</h2>
        <p>
          Working at Speshway means working at <strong>T-Hub</strong>, Asia's largest innovation hub. This environment provides our employees with unique networking opportunities, exposure to the latest startup trends, and a workspace that inspires creativity every single day.
        </p>
        <div className="bg-muted p-8 rounded-3xl my-10 border">
          <h3 className="text-xl font-bold mb-4">Why Employees Love Speshway</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Modern Office Infrastructure</li>
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Flexible Hybrid Work Policy</li>
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Regular Team Outings & Events</li>
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Skill Development Workshops</li>
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Performance-Based Incentives</li>
            <li className="flex items-center gap-2 text-sm"><span className="text-primary font-bold">✓</span> Supportive Leadership Team</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Real Employee Feedback</h2>
        <p>
          We take pride in our team's satisfaction. Our <strong>employee reviews</strong> consistently highlight the professional growth and supportive environment at Speshway Solutions.
        </p>
        <div className="space-y-6 my-10">
          <div className="p-6 border rounded-2xl italic text-muted-foreground bg-muted/10">
            "The energy at Speshway is infectious. Working on global projects from the T-Hub office has given me immense exposure to the international IT standards."
            <span className="block mt-4 not-italic font-bold text-foreground">— Software Engineer (2+ Years at Speshway)</span>
          </div>
          <div className="p-6 border rounded-2xl italic text-muted-foreground bg-muted/10">
            "Unlike traditional corporate jobs, Speshway encourages taking ownership. The leadership is very approachable and genuinely cares about our career paths."
            <span className="block mt-4 not-italic font-bold text-foreground">— Senior UI/UX Designer</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
            We are always looking for talented individuals who share our passion for technology and innovation. Explore our open positions and take the next step in your career.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/career">View Current Openings</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayWorkCulture;
