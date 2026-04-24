import SEOLayout from "@/components/SEOLayout";
import { Code2, Server, Database, Smartphone, Layout, Cpu } from "lucide-react";

const SpeshwayTechnologyStack = () => {
  const faqItems = [
    {
      question: "What technologies does Speshway Solutions use?",
      answer: "Speshway specializes in modern stacks including React.js, Node.js, Python, Flutter, and AWS cloud infrastructure."
    },
    {
      question: "Is Speshway a service-based or product-based company?",
      answer: "Speshway is primarily an IT services and software development company providing custom solutions to global clients, while also developing internal SaaS products."
    },
    {
      question: "Does Speshway provide AI and Machine Learning services?",
      answer: "Yes, we have a dedicated team for AI/ML integration, helping businesses automate processes and gain data-driven insights."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", item: "/services" },
    { name: "Technology Stack", item: "/speshway-solutions-technology-stack-and-services" }
  ];

  const techItems = [
    { icon: <Layout className="w-6 h-6" />, name: "Frontend", tech: "React, Next.js, Tailwind CSS, Vue.js" },
    { icon: <Server className="w-6 h-6" />, name: "Backend", tech: "Node.js, Express, Python (Django/FastAPI), Go" },
    { icon: <Database className="w-6 h-6" />, name: "Database", tech: "MongoDB, PostgreSQL, Redis, Firebase" },
    { icon: <Smartphone className="w-6 h-6" />, name: "Mobile", tech: "Flutter, React Native, Swift, Kotlin" },
    { icon: <Cpu className="w-6 h-6" />, name: "DevOps/AI", tech: "AWS, Docker, Kubernetes, TensorFlow, OpenAI" },
    { icon: <Code2 className="w-6 h-6" />, name: "Languages", tech: "TypeScript, JavaScript, Python, C++, Java" }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Technology Stack & Modern IT Services"
      description="Explore the advanced technology stack used by Speshway Solutions. From React and Node.js to AI/ML and Cloud DevOps, learn about our technical expertise and services."
      keywords="speshway technology stack, speshway solutions services, speshway software development, speshway tech stack hyderabad, speshway it services review"
      canonical="/speshway-solutions-technology-stack-and-services"
      h1="Technology Stack & Expertise: Speshway Solutions Private Limited"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          At <strong>Speshway Solutions</strong>, we leverage the latest technological advancements to build scalable, high-performance software. Our tech stack is chosen for its efficiency, security, and ability to solve complex business challenges.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 not-prose">
          {techItems.map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.tech}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Our Core Service Offerings</h2>
        <p>
          Speshway is more than just a coding agency. We are a full-cycle software development partner. Our services include:
        </p>
        <ul className="space-y-4 my-8">
          <li>
            <strong>Custom Web Applications:</strong> Building responsive, SEO-friendly, and high-conversion web platforms using the MERN/MEAN stack.
          </li>
          <li>
            <strong>Mobile App Development:</strong> Creating seamless cross-platform experiences for iOS and Android using Flutter and React Native.
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> Infrastructure automation and management on AWS, Azure, and GCP to ensure 99.9% uptime.
          </li>
          <li>
            <strong>Digital Transformation:</strong> Helping traditional businesses move to the digital cloud with modern architectures.
          </li>
        </ul>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl my-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Something Great?</h2>
            <p className="mb-8 opacity-90">
              Our technical experts are ready to help you choose the right stack for your next project. Let's discuss your vision.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Tech Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Why Our Tech Stack Matters</h2>
        <p>
          Choosing the right technology is the difference between a product that scales and one that fails. At Speshway, we prioritize:
        </p>
        <ul>
          <li><strong>Performance:</strong> Fast load times and smooth interactions.</li>
          <li><strong>Scalability:</strong> Systems that grow with your user base.</li>
          <li><strong>Security:</strong> Built-in protection against common vulnerabilities.</li>
          <li><strong>Maintainability:</strong> Clean code that is easy to update and extend.</li>
        </ul>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayTechnologyStack;
