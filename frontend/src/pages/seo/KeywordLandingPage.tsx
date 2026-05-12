import SEOLayout from "@/components/SEOLayout";
import { useParams, Link, Navigate } from "react-router-dom";
import { SEO_KEYWORDS } from "@/lib/seo-utils";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const KeywordLandingPage = () => {
  const { slug } = useParams();

  // Find the keyword that matches this slug
  const allKeywords = Object.values(SEO_KEYWORDS).flat();
  const keyword = allKeywords.find(k => 
    k.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") === slug
  );

  if (!keyword) {
    return <Navigate to="/404" replace />;
  }

  // Determine category for context
  const isMobile = SEO_KEYWORDS.mobile.includes(keyword);
  const isWebsite = SEO_KEYWORDS.website.includes(keyword);
  const isSoftware = SEO_KEYWORDS.software.includes(keyword);
  const isArea = SEO_KEYWORDS.areaBased.includes(keyword);

  const faqItems = [
    {
      question: `Does Speshway Solutions provide ${keyword}?`,
      answer: `Yes, Speshway Solutions is a leading provider of ${keyword} in Hyderabad, offering scalable and innovative solutions tailored to your business needs.`
    },
    {
      question: "Where is Speshway Solutions located?",
      answer: "We are located at T-Hub, Knowledge City, Hyderabad, which is India's largest innovation hub."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can reach out to us via our contact page or call us directly at +91 9100006020 for a free consultation."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", item: "/services" },
    { name: keyword, item: `/${slug}` }
  ];

  return (
    <SEOLayout
      title={`${keyword} | Speshway Solutions Hyderabad`}
      description={`Expert ${keyword} by Speshway Solutions. We provide high-quality, scalable, and secure IT solutions at T-Hub Hyderabad. Get a free consultation today.`}
      keywords={`${keyword}, speshway solutions, it services hyderabad, software development, ${slug.replace(/-/g, " ")}`}
      canonical={`/${slug}`}
      h1={keyword}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section className="space-y-8">
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 mb-12">
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            Looking for professional <span className="text-primary font-bold">{keyword}</span>? 
            Speshway Solutions specializes in delivering top-tier digital experiences that help businesses scale effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center py-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us for {keyword}?</h2>
            <ul className="space-y-4">
              {[
                "Expert team with years of industry experience",
                "Scalable and secure architecture",
                "Agile development methodology",
                "Transparent communication and regular updates",
                "Post-launch support and maintenance"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted/30 rounded-3xl p-2">
            <div className="bg-background rounded-2xl p-8 border shadow-sm">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                   {isMobile ? <Smartphone /> : isWebsite ? <Globe /> : isSoftware ? <Code2 /> : <Zap />}
                 </div>
                 <h3 className="text-xl font-bold">Service Excellence</h3>
               </div>
               <p className="text-muted-foreground mb-6">
                 Our approach to <strong>{keyword}</strong> combines innovation with reliability. We ensure that every solution we build is ready for the future.
               </p>
               <Button asChild className="w-full group">
                 <Link to="/contact">
                   Discuss Your Project
                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
            </div>
          </div>
        </div>

        <div className="py-12 border-y border-border/50">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 />, name: "Development" },
              { icon: <Search />, name: "SEO Optimization" },
              { icon: <ShieldCheck />, name: "Security" },
              { icon: <Users />, name: "Consultation" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg bg-background border flex items-center justify-center text-primary mb-3">
                  {item.icon}
                </div>
                <div className="font-semibold text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none pt-8">
          <h2 className="text-3xl font-bold">Expert Solutions in Hyderabad</h2>
          <p>
            Based at <strong>T-Hub Hyderabad</strong>, Speshway Solutions has established itself as a premier partner for {keyword}. 
            Our strategic location in India's technology capital allows us to tap into the best talent and infrastructure to serve our global clients.
          </p>
          <p>
            Whether you are a startup looking for your first MVP or an enterprise needing complex {keyword}, our team is equipped to handle 
            projects of any scale. We don't just write code; we build business solutions that drive real results.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl my-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Transform Your Business Today</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to implement {keyword} for your company? Let's talk about how Speshway Solutions can help you achieve your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default KeywordLandingPage;
