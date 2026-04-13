import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Users, Heart, Star, TrendingUp, Briefcase, Zap, CheckCircle, Coffee, Smile, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayEmployeeFeedback = () => {
  const faqItems = [
    {
      question: "What is the employee feedback for Speshway Solutions?",
      answer: "Employees consistently rate Speshway highly for its inclusive work culture, strong mentorship, and commitment to work-life balance. We maintain a 4.8/5 rating on Glassdoor and AmbitionBox."
    },
    {
      question: "Is there a lot of pressure at Speshway?",
      answer: "While our projects are challenging, we prioritize employee well-being and provide a supportive environment that encourages growth without undue stress. Our flexible working hours also help manage workload effectively."
    },
    {
      question: "How does Speshway handle employee growth?",
      answer: "We have clear career development plans, regular performance reviews, and provide access to a wide range of learning resources and certifications to help employees advance in their careers."
    },
    {
      question: "What are the benefits of working at Speshway?",
      answer: "Benefits include competitive salaries, performance bonuses, health insurance, remote work options, flexible hours, and regular team-building activities."
    }
  ];

  const breadcrumbItems = [
    { name: "Culture", item: "/speshway-employee-feedback" },
    { name: "Employee Feedback", item: "/speshway-employee-feedback" }
  ];

  const employeeFeedback = [
    {
      name: "Anjali Sharma",
      role: "Frontend Developer",
      content: "Speshway is a place where your ideas are truly valued. The mentorship I've received here has been instrumental in my growth from a junior to a senior developer in just two years.",
      rating: 5
    },
    {
      name: "Rohan Gupta",
      role: "Backend Lead",
      content: "The culture of transparency and collaboration at Speshway is something you won't find in many larger IT firms. I love the freedom to innovate and the support from leadership.",
      rating: 5
    },
    {
      name: "Meera Nair",
      role: "UI/UX Designer",
      content: "The focus on work-life balance and mental well-being is what makes Speshway special. I feel empowered to do my best work while also having time for my personal life.",
      rating: 5
    },
    {
      name: "Siddharth V.",
      role: "Project Manager",
      content: "Managing projects at Speshway is a rewarding experience because of the talented and dedicated team members. We work together as one cohesive unit to deliver excellence.",
      rating: 5
    }
  ];

  return (
    <SEOLayout
      title="Speshway Employee Feedback: Life Inside Our Company"
      description="Read authentic employee feedback and reviews from Speshway Solutions. Discover why our team members love working here and how we foster a culture of excellence."
      keywords="speshway employee feedback, speshway company culture reviews, working at speshway solutions, speshway employee benefits, speshway job reviews"
      canonical="/speshway-employee-feedback"
      h1="Speshway Employee Feedback: A Glimpse Into Our Vibrant Culture"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="bg-red-100 p-4 rounded-full">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
             </div>
             <div>
                <h4 className="font-bold text-lg">92% Happiness Index</h4>
                <p className="text-sm text-muted-foreground">Based on our internal annual employee survey.</p>
             </div>
          </div>
          <div className="flex items-center gap-1">
             {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
             ))}
             <span className="ml-2 font-bold text-xl">4.8/5 Work Culture</span>
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          Our employees are the heart and soul of <strong>Speshway Solutions</strong>. We believe that when our team thrives, our company thrives. This page shares the honest experiences of our employees, highlighting the culture, growth, and community we've built together.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
          {employeeFeedback.map((e, i) => (
            <div key={i} className="p-8 border rounded-3xl bg-card hover:bg-accent/5 transition-all relative group">
               <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                     <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
               </div>
               <p className="text-lg leading-relaxed mb-8">"{e.content}"</p>
               <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary">
                     {e.name[0]}
                  </div>
                  <div>
                     <h4 className="font-bold">{e.name}</h4>
                     <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{e.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Our Core Culture Pillars</h2>
        <p>
          At Speshway, we are guided by a set of values that define how we interact with each other and our clients. These pillars are consistently mentioned in employee feedback as the foundation of our success:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 my-8 not-prose list-none p-0">
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <Zap className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Innovation Over Hierarchy</span>
              <span className="text-sm text-muted-foreground">The best idea wins, regardless of the role or seniority of the person proposing it.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <Smile className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Psychological Safety</span>
              <span className="text-sm text-muted-foreground">A safe environment where everyone feels comfortable sharing their thoughts and making mistakes.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <Coffee className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Work-Life Integration</span>
              <span className="text-sm text-muted-foreground">Flexible policies that support both professional excellence and personal well-being.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-5 border rounded-2xl bg-muted/20">
            <Award className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Merit-Based Growth</span>
              <span className="text-sm text-muted-foreground">Opportunities for advancement are based on performance, skill, and contribution.</span>
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. The Mentorship Experience</h2>
        <p>
          One of the most praised aspects of working at Speshway is our <strong>mentorship program</strong>. Every new joiner is paired with an experienced team member who provides guidance, support, and technical feedback. This helps new employees integrate quickly and start making an impact from day one.
        </p>
        <p>
          "My mentor was always there for me, not just to review my code but to help me understand the broader project goals and company vision. It's a level of support I've never experienced elsewhere," says one of our junior developers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Building Community: Beyond the Office</h2>
        <p>
          We believe that a strong team is built on more than just work. Our Hyderabad office at T-Hub is a hub for community-building activities. From tech talks and hackathons to regular team outings and sports tournaments, we make sure there's plenty of opportunities to connect beyond our desks.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Employee Recognition and Rewards</h2>
        <p>
          We celebrate success at Speshway. Our "Employee of the Month" and "Star Performer" awards are highly coveted and come with significant rewards. We also have regular peer-recognition programs where team members can shout out their colleagues for their hard work and support.
        </p>

        <div className="bg-primary text-primary-foreground p-12 rounded-[2.5rem] my-16 text-center not-prose shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Join a Team that Values You</h3>
            <p className="mb-10 opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to be part of a culture that empowers your growth and celebrates your success? Explore our open roles and find your place at Speshway Solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" variant="secondary" className="px-12 h-16 text-lg font-bold rounded-2xl border-none">
                <Link to="/career">View Open Roles</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-16 text-lg font-bold rounded-2xl border-none">
                <Link to="/about">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Excellence Through Empowerment</h2>
        <p>
          In conclusion, the feedback from our team members is clear: <strong>Speshway Solutions is a place where you can thrive.</strong> We are committed to maintaining and improving our work culture, ensuring that every employee feels valued, supported, and empowered to reach their full potential. Join us and experience the difference for yourself.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayEmployeeFeedback;
