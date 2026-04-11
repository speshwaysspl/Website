import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FraudNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Is Speshway Solutions Real or Fake? | Official Fraud Alert & Verification</title>
        <meta name="description" content="Wondering if Speshway Solutions is real or fake? Get the facts here. Learn about our official recruitment process and how to identify fraudulent job offers and unauthorized communications." />
        <meta name="keywords" content="Speshway Solutions real or fake, is speshway real, speshway solutions legitimacy, speshway solutions fake, recruitment scam, Speshway Solutions, job offer verification" />
        <link rel="canonical" href="https://www.speshway.com/fraud-notice" />
        <meta property="og:title" content="Is Speshway Solutions Real or Fake? | Official Fraud Alert" />
        <meta property="og:description" content="Beware of fraudulent job offers. Learn how to identify and report scams and verify Speshway Solutions legitimacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/fraud-notice" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Is Speshway Solutions Real or Fake? | Official Fraud Alert" />
        <meta name="twitter:description" content="Beware of fraudulent job offers. Learn how to identify and report scams." />
        <link rel="me" href="https://www.instagram.com/speshwaysolutionsofficial/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://www.speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Fraud Alert","item":"https://www.speshway.com/fraud-notice"}
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Is Speshway Solutions a real or fake company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Speshway Solutions Private Limited is a legitimate, registered IT services company based in Hyderabad, India. We are committed to transparency and integrity in our recruitment and business operations."
            }
          }]
        })}</script>
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">Legitimacy & Fraud Alert</h1>
              <h2 className="text-xl sm:text-2xl text-red-600 font-semibold mb-6">
                Protecting You from Fake Offers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Is Speshway Solutions real or fake? We are a registered IT services company. We've compiled this guide to help you verify authentic communications and avoid recruitment scams.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Transparency</h3>
                <p className="text-muted-foreground mb-4">
                  Speshway Solutions Private Limited is a legally registered entity. We pride ourselves on our professional standards and ethical business practices. Unfortunately, some malicious actors may misuse our name to deceive job seekers.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">How to Verify if a Communication is Real</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li><strong>Official Email Domains:</strong> All official communications from us will come from <code className="bg-muted px-1 rounded">@speshway.com</code>. We do not use generic email services like Gmail, Yahoo, or Outlook for official recruitment unless specified on our careers page.</li>
                  <li><strong>No Fees:</strong> Speshway Solutions **never** charges any fees for recruitment, interviews, or job placements. If you are asked for money, it is a scam.</li>
                  <li><strong>Official Website:</strong> Always verify job listings on our official website: <a href="https://www.speshway.com" className="text-primary hover:underline">www.speshway.com</a>.</li>
                  <li><strong>Physical Presence:</strong> We are located at our registered office in Hyderabad. You can visit us or contact us via our official phone numbers.</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Scam Red Flags</h3>
                <p className="text-muted-foreground mb-4">
                  Some job candidates have reported receiving fraudulent job offers from individuals falsely claiming to represent Speshway Solutions. These scams often involve:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Requests for "processing fees" or "security deposits".</li>
                  <li>Offers that seem "too good to be true" with very high salaries for minimal experience.</li>
                  <li>Poorly written emails with grammatical errors and low-quality logos.</li>
                  <li>Urgent demands to provide personal information or make payments immediately.</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-red-500">Official Instagram & Social Verification</h3>
                <p className="text-muted-foreground mb-6">
                  We have been alerted to unauthorized Instagram accounts and other social media pages making false claims about Speshway Solutions. To protect yourself, please follow **only** our official handles. Any other account claiming to represent us is **fake and fraudulent**.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href="https://www.instagram.com/speshwaysolutionsofficial/" 
                    target="_blank" 
                    rel="noopener noreferrer me" 
                    aria-label="Visit our official Instagram account"
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Official Instagram Account</div>
                      <div className="text-primary font-medium">@speshwaysolutionsofficial</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/" 
                    target="_blank" 
                    rel="noopener noreferrer me" 
                    aria-label="Visit our official LinkedIn page"
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-[#0077b5]/20 bg-[#0077b5]/5 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0077b5] flex items-center justify-center text-white">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Official LinkedIn Page</div>
                      <div className="text-[#0077b5] font-medium">Speshway Solutions</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Report a Suspicious Communication</h3>
                <p className="text-muted-foreground mb-4">
                  If you receive any job offers or messages that you suspect are fraudulent, please report them to us immediately:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="mailto:info@speshway.com" aria-label="Email General Inquiries" className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                    <Mail className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">General Inquiries</div>
                      <div className="text-sm text-muted-foreground">info@speshway.com</div>
                    </div>
                  </a>
                  <a href="mailto:info@speshway.com" aria-label="Email Recruitment Verification" className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                    <Mail className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Recruitment Verification</div>
                      <div className="text-sm text-muted-foreground">info@speshway.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-6 italic">
                Disclaimer: Speshway Solutions is not liable for any loss or damage incurred as a result of dealing with fraudulent entities. We aim to protect candidates by sharing this information.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FraudNotice;
