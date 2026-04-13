import SEOLayout from "@/components/SEOLayout";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Users, Award, CheckCircle, Star, Target, Zap, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayCareerReview = () => {
  const faqItems = [
    {
      question: "Is Speshway Solutions good for a career?",
      answer: "Yes, Speshway Solutions is highly recommended for tech professionals due to its innovative projects, strong mentorship, and clear career growth paths. It's especially beneficial for developers looking for exposure to modern tech stacks.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Yes, Speshway Solutions is highly recommended for tech professionals due to its innovative projects, strong mentorship, and clear career growth paths. It is especially beneficial for developers looking for exposure to modern tech stacks.
          </p>
          <p className="text-sm text-muted-foreground">
            To validate this from multiple angles, you can review{" "}
            <a
              href="/speshway-employee-feedback"
              className="text-primary font-semibold hover:underline"
              title="Read real Speshway employee feedback about culture and careers"
            >
              our employee feedback
            </a>{" "}
            and{" "}
            <a
              href="/speshway-solutions-review-2026"
              className="text-primary font-semibold hover:underline"
              title="See how Speshway is rated in the 2026 company review"
            >
              2026 company review
            </a>
            .
          </p>
        </div>
      )
    },
    {
      question: "What is the average tenure at Speshway?",
      answer: "The average tenure at Speshway is significantly higher than the industry average for IT services, thanks to our employee-first policies and growth opportunities."
    },
    {
      question: "Does Speshway provide training for freshers?",
      answer: "Absolutely. We have a dedicated 'Speshway Academy' program that provides intensive training and mentorship to fresh graduates to help them become industry-ready developers."
    },
    {
      question: "Are there remote work options at Speshway?",
      answer: "Yes, Speshway offers flexible work arrangements, including hybrid and fully remote options for various roles, ensuring a healthy work-life balance."
    }
  ];

  const breadcrumbItems = [
    { name: "Careers", item: "/career" },
    { name: "Career Review", item: "/speshway-career-review" }
  ];

  return (
    <SEOLayout
      title="Speshway Career Review: Is it the Best Place to Work?"
      description="Looking for a Speshway career review? Discover the employee experience, growth opportunities, benefits, and why techies are choosing Speshway for their next role."
      keywords="speshway career review, speshway solutions employee experience, speshway jobs hyderabad, speshway developer salary, speshway career growth"
      canonical="/speshway-career-review"
      h1="Speshway Career Review: Building Your Future with Excellence"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
             <TrendingUp className="w-4 h-4" /> Top Choice for Tech Careers
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
             <Users className="w-4 h-4" /> 200+ Active Employees
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
             <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 4.8/5 Career Growth Rating
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          In a competitive job market, choosing the right employer can define your professional journey. This <strong>Speshway Career Review</strong> provides an honest look at what it's like to work for one of the most innovative IT companies in Hyderabad.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Why Choose a Career at Speshway?</h2>
        <p>
          At Speshway, we don't just offer jobs; we offer careers. Our mission is to empower our team members to reach their full potential. We believe in <strong>meritocracy</strong> and provide every individual with the tools and support they need to succeed.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
          <div className="p-6 border rounded-2xl bg-card hover:border-primary/50 transition-all group">
            <Target className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold mb-2">High-Impact Projects</h4>
            <p className="text-sm text-muted-foreground">Work on solutions that solve real-world problems for global clients across various industries.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card hover:border-primary/50 transition-all group">
            <GraduationCap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold mb-2">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground">Access to premium learning resources, certifications, and internal knowledge-sharing sessions.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card hover:border-primary/50 transition-all group">
            <Zap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold mb-2">Modern Tech Stack</h4>
            <p className="text-sm text-muted-foreground">Stay ahead of the curve by working with React, Node.js, Python, AWS, and more.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card hover:border-primary/50 transition-all group">
            <Users className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold mb-2">Great Community</h4>
            <p className="text-sm text-muted-foreground">Be part of a supportive team that values collaboration, diversity, and fun.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Career Growth & Mentorship</h2>
        <p>
          One of the standout features of a Speshway career is the <strong>mentorship program</strong>. Every new employee is paired with a mentor who helps them navigate the company's culture and technical landscape.
        </p>
        <p>
          We have clear career ladders for both technical and managerial roles. Whether you want to become a Principal Engineer or a Project Director, we have a path for you. Regular performance reviews and feedback loops ensure that you are always moving forward.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Employee Benefits & Well-being</h2>
        <p>
          We understand that our employees have lives outside of work. That's why we offer a comprehensive benefits package designed to support your physical, mental, and financial health:
        </p>
        <ul className="grid md:grid-cols-3 gap-4 my-8 not-prose list-none p-0">
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Competitive Salary</li>
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Health Insurance</li>
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Flexible Working Hours</li>
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Performance Bonuses</li>
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Learning Allowances</li>
          <li className="flex items-center gap-2 text-sm font-semibold bg-muted/50 p-4 rounded-xl border"><CheckCircle className="w-4 h-4 text-green-600" /> Remote Work Options</li>
        </ul>

        <div className="my-10 not-prose">
          <InternalLinks
            layout="chips"
            title="People also search for Speshway careers and employee reviews"
          />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Life at Speshway: Beyond the Desk</h2>
        <p>
          Work should be fun! Our Hyderabad office at T-Hub is a hub of activity. From hackathons and tech meetups to team outings and festival celebrations, there's always something happening at Speshway. 
        </p>
        <p>
          We foster a culture of <strong>psychological safety</strong>, where everyone feels comfortable sharing their thoughts and being themselves. This sense of belonging is a key reason why our team is so dedicated and passionate.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. What We Look For</h2>
        <p>
          We are always looking for talented, passionate individuals to join our team. If you are:
        </p>
        <ul>
          <li><strong>Curious:</strong> You love learning new things and solving problems.</li>
          <li><strong>Collaborative:</strong> You enjoy working with others to achieve a common goal.</li>
          <li><strong>Customer-Focused:</strong> You care about the impact your work has on the user.</li>
          <li><strong>Committed to Excellence:</strong> You take pride in the quality of your work.</li>
        </ul>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl my-16 text-center not-prose relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Award className="w-32 h-32 rotate-12" />
          </div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Your Next Career Milestone Awaits</h3>
          <p className="mb-10 opacity-90 text-lg max-w-2xl mx-auto relative z-10">
            Join a company that values your growth as much as you do. Explore our open positions and find your perfect role at Speshway Solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button asChild size="lg" variant="secondary" className="px-10 h-14 text-lg font-bold">
              <Link to="/career">Browse All Jobs</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-14 text-lg font-bold">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: A Career that Matters</h2>
        <p>
          In conclusion, a career at Speshway Solutions is more than just a job. It's an opportunity to grow, innovate, and make a real difference. If you're looking for a workplace that values your talent and supports your ambitions, Speshway is the place for you. Join us in building the future of technology.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayCareerReview;
