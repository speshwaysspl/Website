import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Award, Trophy, Star, Medal, Landmark, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayCompanyAwards = () => {
  const faqItems = [
    {
      question: "Has Speshway Solutions won any awards?",
      answer: "Speshway has been recognized as one of the fastest-growing tech startups in the T-Hub ecosystem and has received accolades for our innovative approach to software development."
    },
    {
      question: "Is Speshway certified for quality standards?",
      answer: "We follow industry-standard quality assurance processes and are currently in the process of obtaining ISO 27001 certification for information security management."
    },
    {
      question: "What makes Speshway a top-rated company?",
      answer: "Our commitment to delivering high-quality products, our transparent client communication, and our high employee satisfaction ratings contribute to our reputation."
    }
  ];

  const breadcrumbItems = [
    { name: "About", item: "/about" },
    { name: "Awards & Recognition", item: "/speshway-solutions-company-awards-and-recognition" }
  ];

  const recognitions = [
    { icon: <Trophy className="w-8 h-8 text-yellow-500" />, title: "T-Hub Resident Startup", desc: "Recognized as a high-potential startup in the T-Hub ecosystem." },
    { icon: <Medal className="w-8 h-8 text-blue-500" />, title: "Innovation Excellence", desc: "Awarded for implementing cutting-edge AI solutions in logistics." },
    { icon: <Star className="w-8 h-8 text-orange-500" />, title: "Top Rated on Clutch", desc: "Maintaining a 4.9-star rating for service delivery and technical expertise." },
    { icon: <Landmark className="w-8 h-8 text-purple-500" />, title: "MSME Registered", desc: "Proudly registered under the MSME initiative of the Government of India." }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Awards, Recognition & Certifications"
      description="Explore the awards and industry recognition earned by Speshway Solutions Private Limited. Learn about our commitment to excellence and our standing in the tech community."
      keywords="speshway awards, speshway solutions recognition, speshway certifications, speshway solutions reviews, top tech companies hyderabad, speshway achievement"
      canonical="/speshway-solutions-company-awards-and-recognition"
      h1="Awards & Recognition: Speshway's Journey of Excellence"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          Recognition is a reflection of hard work and commitment. <strong>Speshway Solutions Private Limited</strong> is proud to have earned several accolades and certifications that validate our position as a reliable and innovative IT partner in the Hyderabad tech ecosystem. Our journey at T-Hub has been marked by continuous innovation and a drive for excellence.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 my-16 not-prose">
          {recognitions.map((r, i) => (
            <div key={i} className="p-8 border rounded-3xl bg-muted/20 flex gap-6 items-start hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 bg-background p-4 rounded-2xl shadow-sm">{r.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Our Commitment to Global Quality Standards</h2>
        <p>
          Beyond awards, our true recognition comes from the success of our clients. However, we maintain strict adherence to quality standards to ensure every project meets international benchmarks. Our development center in Hyderabad follows rigorous quality control protocols to deliver bug-free, high-performance software.
        </p>
        <div className="grid md:grid-cols-3 gap-6 my-10">
          <div className="p-8 border rounded-3xl text-center bg-card hover:border-primary/50 transition-colors">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">99.9% Uptime</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">For all deployed enterprise solutions and cloud infrastructures.</p>
          </div>
          <div className="p-8 border rounded-3xl text-center bg-card hover:border-primary/50 transition-colors">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Clean Code</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Adhering to SOLID principles, DRY, and modern architecture patterns.</p>
          </div>
          <div className="p-8 border rounded-3xl text-center bg-card hover:border-primary/50 transition-colors">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Global Support</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Round-the-clock maintenance and proactive technical assistance.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Industry Recognition in the Hyderabad IT Hub</h2>
        <p>
          As a prominent player in the Hyderabad IT corridor, Speshway Solutions has been featured in several tech publications for our work in AI, Mobile App Development, and Enterprise Digital Transformation. Our location at <strong>T-Hub</strong> allows us to collaborate with the brightest minds in the industry, further enhancing our service capabilities.
        </p>
        <p>
          For businesses looking to partner with an IT firm, awards and certifications serve as a <strong>trust signal</strong>. At Speshway Solutions, we leverage our recognized expertise to provide our clients with a competitive edge in their respective markets.
        </p>
        <p>
          We continue to strive for excellence, with several new certifications and industry partnerships in the pipeline for 2026 and beyond, focusing on emerging technologies like Generative AI and Blockchain.
        </p>

        <div className="bg-primary/5 p-12 rounded-3xl my-16 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Award className="w-32 h-32" />
          </div>
          <Award className="w-20 h-20 text-primary/30 mx-auto mb-6 relative z-10" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Partner with an Award-Winning Team</h2>
          <p className="mb-8 text-muted-foreground text-lg max-w-2xl mx-auto relative z-10">
            Experience the difference of working with a recognized leader in software development. Let's discuss how our award-winning approach can scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayCompanyAwards;
