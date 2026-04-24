import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations";
import { Mail, Instagram, Linkedin, Shield, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FraudNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Speshway Solutions: Real or Fake? | Official Verification & Fraud Alert</title>
        <meta name="description" content="Is Speshway Solutions real or fake? Get official verification here. Learn how to identify fraudulent job offers and avoid recruitment scams. Speshway Solutions is a registered IT company in Hyderabad." />
        <meta name="keywords" content="Speshway Solutions real or fake, is speshway real, speshway solutions legitimacy, speshway solutions fake, recruitment scam, Speshway Solutions, job offer verification, speshway solutions official verification, speshway hyderabad scam alert, speshway recruitment fraud, payment collection scam speshway, speshway solutions reviews, speshway solutions hyderabad real, speshway solutions authentic" />
        <link rel="canonical" href="https://speshway.com/fraud-notice" />
        <meta property="og:title" content="Is Speshway Solutions Real or Fake? | Official Fraud Alert" />
        <meta property="og:description" content="Beware of fraudulent job offers and fake reports. Learn how to identify and report scams and verify Speshway Solutions legitimacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speshway.com/fraud-notice" />
        <meta property="og:image" content="https://speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Is Speshway Solutions Real or Fake? | Official Fraud Alert" />
        <meta name="twitter:description" content="Beware of fraudulent job offers and fake reports. Learn how to identify and report scams." />
        <link rel="me" href="https://www.instagram.com/speshwaysolutionsofficial/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Speshway Solutions Private Limited",
          "url": "https://speshway.com/",
          "logo": "https://speshway.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61584485021568",
            "https://x.com/SpeshwayM56509",
            "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/",
            "https://www.instagram.com/speshwaysolutionsofficial/"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Speshway Solutions",
            "description": "A registered IT services company based in Hyderabad."
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Fraud Alert","item":"https://speshway.com/fraud-notice"}
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
          }, {
            "@type": "Question",
            "name": "Does Speshway Solutions collect payments for jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Speshway Solutions never collects any payments, security deposits, or processing fees for job applications or interviews. Any such request is a scam."
            }
          }, {
            "@type": "Question",
            "name": "Are the scam reports on social media about Speshway true?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most reports of 'scams' on social media platforms like Instagram are based on fraudulent actors misusing our company name. We urge candidates to only trust official communications from @speshway.com and our official Instagram handle @speshwaysolutionsofficial."
            }
          }]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Speshway Solutions Private Limited"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Organization",
            "name": "Speshway Solutions"
          },
          "reviewBody": "Official verification of Speshway Solutions legitimacy and fraud alert to protect job seekers."
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
                  <li><strong>Official Website:</strong> Always verify job listings on our official website: <a href="https://speshway.com" className="text-primary hover:underline">speshway.com</a>.</li>
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
                  We have been alerted to unauthorized social media accounts making false "scam risk" claims about Speshway Solutions. These accounts are often misinformed or are intentionally spreading fake reports based on fraudulent job offers sent by <strong>third-party scammers</strong> misusing our name.
                </p>
                <p className="text-muted-foreground mb-6">
                  To protect yourself, please follow **only** our official handles. Any other account or report claiming to represent us or labeling us as a "scam" based on unofficial communications is **fake**.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                  <h4 className="font-bold mb-3">More Resources for Verification:</h4>
                  <ul className="space-y-2">
                    <li><Link to="/is-speshway-real-or-fake" className="text-primary hover:underline flex items-center gap-2">Is Speshway Solutions Real? <span className="text-xs bg-primary/20 px-2 py-0.5 rounded">Detailed Guide</span></Link></li>
                    <li><Link to="/speshway-hyderabad-company-review" className="text-primary hover:underline flex items-center gap-2">Official Company Details & Address</Link></li>
                    <li><Link to="/speshway-solutions-review-2026" className="text-primary hover:underline flex items-center gap-2">Verified Speshway Reviews</Link></li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-6 italic">
                Disclaimer: Speshway Solutions is not liable for any loss or damage incurred as a result of dealing with fraudulent entities. We aim to protect candidates by sharing this information.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-foreground mb-4">Official Status & Verification</h2>
              <p className="text-xl text-muted-foreground">
                Speshway Solutions Private Limited is a registered IT services company. We value transparency and want to ensure you are interacting with our official channels.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Registered Entity</h3>
                <p className="text-muted-foreground text-sm">
                  We are a legally registered company in Hyderabad, operating from T-Hub, India's largest innovation hub.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">No Recruitment Fees</h3>
                <p className="text-muted-foreground text-sm">
                  Speshway **never** charges any fees for interviews or job placements. Any request for payment is a scam.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Official Socials</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Verify our official Instagram <span className="text-primary font-semibold">@speshwaysolutionsofficial</span> to avoid fake reports.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FraudNotice;
