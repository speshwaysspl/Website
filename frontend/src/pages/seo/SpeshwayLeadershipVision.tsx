import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Target, Eye, Users, ShieldCheck, TrendingUp, Globe } from "lucide-react";

const SpeshwayLeadershipVision = () => {
  const faqItems = [
    {
      question: "Who leads Speshway Solutions?",
      answer: "Speshway is led by a team of experienced tech visionaries and industry veterans with over a decade of experience in software development and business strategy."
    },
    {
      question: "What is Speshway's long-term vision?",
      answer: "Our vision is to become a global leader in providing innovative IT solutions that empower businesses to scale through digital transformation."
    },
    {
      question: "What are Speshway's core leadership values?",
      answer: "Integrity, innovation, and client-centricity are the pillars of our leadership team's approach to business."
    }
  ];

  const breadcrumbItems = [
    { name: "About", item: "/about" },
    { name: "Leadership & Vision", item: "/speshway-solutions-leadership-team-and-vision" }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Leadership Team, Mission & Future Vision"
      description="Meet the leadership behind Speshway Solutions Private Limited. Learn about our mission to revolutionize IT services and our vision for the future of digital transformation."
      keywords="speshway leadership, speshway solutions founders, speshway company vision, speshway solutions mission, speshway solutions pvt ltd management"
      canonical="/speshway-solutions-leadership-team-and-vision"
      h1="Leadership & Vision: The Driving Force of Speshway Solutions"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          Behind every successful company is a team of visionary leaders. <strong>Speshway Solutions</strong> is guided by a leadership team that combines technical excellence with strategic business insight, all while maintaining the highest standards of integrity.
        </p>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses of all sizes with cutting-edge technology solutions that are not only innovative but also accessible and reliable. We strive to be the bridge between complex business challenges and elegant software solutions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted global partner for digital transformation, recognized for our commitment to quality, transparency, and the sustainable growth of our clients and employees alike.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-8 text-center">Our Leadership Philosophy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Integrity First", desc: "Honesty in every interaction." },
            { icon: <TrendingUp className="w-5 h-5" />, title: "Growth Mindset", desc: "Never stop learning and evolving." },
            { icon: <Users className="w-5 h-5" />, title: "People-Centric", desc: "Investing in our team's success." },
            { icon: <Globe className="w-5 h-5" />, title: "Global Excellence", desc: "Striving for world-class quality." }
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-muted/30 text-center">
              <div className="mx-auto w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm text-primary">
                {item.icon}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Building a Legacy of Trust</h2>
        <p>
          The leadership at Speshway Solutions understands that in the IT industry, trust is the most valuable currency. That's why we've implemented transparent processes across all departments—from recruitment to project delivery.
        </p>
        <p>
          Our leaders are actively involved in the <strong>T-Hub ecosystem</strong>, mentoring startups and contributing to the tech community in Hyderabad. This involvement keeps us at the forefront of innovation while ensuring we stay grounded in our core values.
        </p>

        <div className="bg-muted p-10 rounded-3xl my-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Learn More About Us</h2>
          <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
            Want to know more about our journey and the team behind our success? Visit our official About page.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">Our Company Journey</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayLeadershipVision;
