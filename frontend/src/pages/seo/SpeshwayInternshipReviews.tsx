import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Users, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayInternshipReviews = () => {
  const faqItems = [
    {
      question: "Are Speshway internships real or fake?",
      answer: "Speshway internships are 100% real and structured programs designed for students and freshers. We provide hands-on experience on live projects in Web Development, AI, and Digital Marketing."
    },
    {
      question: "Does Speshway charge for internships?",
      answer: "No, Speshway Solutions does not charge any 'training fee' or 'security deposit' for internships. Our selection is based purely on merit and technical interviews."
    },
    {
      question: "What do interns say about Speshway in Hyderabad?",
      answer: "Interns at Speshway highlight the supportive culture, mentorship from senior developers, and the opportunity to work at T-Hub, which provides a high-energy startup environment."
    }
  ];

  const breadcrumbItems = [
    { name: "Reviews", item: "/speshway-career-review" },
    { name: "Internship Program", item: "/speshway-internship-program-reviews-hyderabad" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Speshway Solutions IT Internship Program",
    "description": "Professional internship program in Hyderabad for software development and digital services.",
    "provider": {
      "@type": "Organization",
      "name": "Speshway Solutions Private Limited",
      "sameAs": "https://speshway.com"
    }
  };

  return (
    <SEOLayout
      title="Speshway Internship Reviews - Real Experience at T-Hub Hyderabad"
      description="Read authentic Speshway internship reviews. Learn about our zero-fee internship policy, project exposure at T-Hub, and career growth for freshers."
      keywords="speshway internship reviews, speshway solutions hyderabad internship, speshway real or fake internship, speshway solutions pvt ltd reviews, internship at t-hub hyderabad"
      canonical="/speshway-internship-program-reviews-hyderabad"
      h1="Speshway Solutions Internship Program: Authentic Reviews & Guide"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      schema={[schema]}
    >
      <section>
        <p className="lead">
          Looking for a <strong>real internship at Speshway Solutions</strong>? Our program at T-Hub Hyderabad is designed to bridge the gap between academic learning and industry requirements. Read our intern stories and learn why we are a trusted choice for freshers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
          {[
            { icon: <GraduationCap className="w-8 h-8 text-primary" />, title: "Live Projects", desc: "Work on actual client applications, not just dummy exercises." },
            { icon: <Users className="w-8 h-8 text-primary" />, title: "Mentorship", desc: "One-on-one guidance from experienced software engineers." },
            { icon: <Award className="w-8 h-8 text-primary" />, title: "Certification", desc: "Recognized internship certificate upon successful completion." }
          ].map((item, i) => (
            <div key={i} className="bg-muted/50 p-6 rounded-2xl border hover:shadow-md transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Real Intern Stories at Speshway Hyderabad</h2>
        <p>
          Our interns don't just sit on the sidelines; they are integral parts of our development sprints. Whether it's building responsive UI components or optimizing backend APIs, the learning curve is steep and rewarding.
        </p>
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-lg text-muted-foreground">
          "The experience of working at T-Hub with the Speshway team was transformative. I learned more about React and Node.js in 3 months than I did in 3 years of college." 
          <span className="block mt-2 font-bold text-foreground">— Anjali R., Former Web Dev Intern</span>
        </blockquote>

        <h2 className="text-2xl font-bold mt-10 mb-6">Zero-Fee Policy: Why Speshway is Genuine</h2>
        <p>
          One of the biggest concerns for students is "Is this internship real or a scam?". At Speshway, we have a <strong>strict zero-fee policy</strong>. We never ask for money for registration, documentation, or training. If someone asks you for money in Speshway's name, it is a scam.
        </p>

        <div className="bg-primary/5 p-8 rounded-2xl my-12 border border-primary/20">
          <h3 className="text-xl font-bold mb-4">How to Apply for a Speshway Internship?</h3>
          <p className="mb-6">
            We regularly post openings on our official <Link to="/career" className="text-primary hover:underline">Careers Page</Link> and LinkedIn. The process involves:
          </p>
          <ol className="space-y-3">
            <li className="flex gap-3"><strong>1. Resume Shortlisting:</strong> Based on your projects and skills.</li>
            <li className="flex gap-3"><strong>2. Technical Assessment:</strong> A small task to test your logic.</li>
            <li className="flex gap-3"><strong>3. HR Interview:</strong> To understand your goals and fit.</li>
          </ol>
          <div className="mt-8">
            <Button asChild>
              <Link to="/career">Explore Internship Openings</Link>
            </Button>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayInternshipReviews;
