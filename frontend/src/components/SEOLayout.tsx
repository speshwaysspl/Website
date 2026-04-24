import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CheckCircle, ShieldCheck, Star, ArrowRight, MessageSquare, Briefcase, MapPin, Building, Info, FileCheck, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "./SEO";
import InternalLinks from "./InternalLinks";
import { buildSpeshwaySiteNavigationSchema } from "@/lib/seo-utils";

interface FAQItem {
  question: string;
  answer: string;
  richAnswer?: React.ReactNode;
}

interface SEOLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  h1: string;
  faqItems: FAQItem[];
  breadcrumbItems: { name: string; item: string }[];
  summaryBox?: React.ReactNode;
  schema?: any[];
}

const SEOLayout = ({
  children,
  title,
  description,
  keywords,
  canonical,
  h1,
  faqItems,
  breadcrumbItems,
  summaryBox,
  schema = []
}: SEOLayoutProps) => {
  const siteUrl = "https://speshway.com";
  const navigationSchema = buildSpeshwaySiteNavigationSchema(siteUrl);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        faqSchema={faqItems}
        breadcrumbSchema={breadcrumbItems}
        schema={[navigationSchema, ...schema]}
      />
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-muted-foreground/50">/</span>
                <Link to={item.item} className="hover:text-primary transition-colors">{item.name}</Link>
              </React.Fragment>
            ))}
          </nav>

          {/* H1 Heading */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              {h1}
            </h1>
            
            {/* Review Summary Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-bold text-xl">4.8/5</span>
                  </div>
                  <p className="text-muted-foreground">Based on 1,200+ verified employee and client reviews.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Verified Company</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border shadow-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Legit & Registered</span>
                  </div>
                </div>
              </div>
              {summaryBox && <div className="mt-6 pt-6 border-t border-primary/10">{summaryBox}</div>}
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none">
              {children}

              {/* FAQ Section */}
              <section className="mt-16 pt-12 border-t not-prose">
                <h2 className="text-3xl font-bold mb-8">People Also Ask (FAQs)</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.richAnswer ?? faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              <section className="mt-16 pt-12 border-t not-prose">
                <InternalLinks layout="cards" />
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Sticky CTA */}
              <div className="sticky top-28 space-y-8">
                <div className="bg-card border rounded-2xl p-6 shadow-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Building className="w-24 h-24" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">Verify Speshway Solutions</h3>
                  <p className="text-muted-foreground text-sm mb-6 relative z-10">
                    Confused about a job offer or company details? Get instant verification from our official team.
                  </p>
                  <div className="space-y-3 relative z-10">
                    <Button asChild className="w-full justify-between py-6">
                      <Link to="/contact">
                        Contact Support <MessageSquare className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-between py-6">
                      <Link to="/career">
                        Join Our Team <Briefcase className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Trust Signals Widget */}
                <div className="bg-muted/50 rounded-2xl p-6 border border-dashed border-muted-foreground/20">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Trust Indicators</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle className="w-3 h-3 text-green-600" /></div>
                      <div>
                        <span className="text-sm font-semibold block">CIN Verified</span>
                        <span className="text-xs text-muted-foreground">Ministry of Corporate Affairs Registered</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 p-1 rounded-full"><MapPin className="w-3 h-3 text-blue-600" /></div>
                      <div>
                        <span className="text-sm font-semibold block">T-Hub Presence</span>
                        <span className="text-xs text-muted-foreground">Operating from Asia's Largest Innovation Hub</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-orange-100 p-1 rounded-full"><Users className="w-3 h-3 text-orange-600" /></div>
                      <div>
                        <span className="text-sm font-semibold block">200+ Employees</span>
                        <span className="text-xs text-muted-foreground">Growing community of IT professionals</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Floating Sticky CTA Mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
        <Button asChild className="w-full shadow-2xl py-7 rounded-2xl text-lg font-bold">
          <Link to="/contact">
            Verify Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default SEOLayout;
