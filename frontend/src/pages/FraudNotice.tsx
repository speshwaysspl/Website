import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations";
import { Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FraudNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fraud Alert | Speshway Solutions</title>
        <meta name="description" content="Official fraud alert from Speshway Solutions. Protect yourself from fake job offers and unauthorized communications." />
        <meta name="keywords" content="Speshway fraud alert, fake job offers, recruitment scam, Speshway Solutions" />
        <link rel="canonical" href="https://www.speshway.com/fraud-notice" />
        <meta property="og:title" content="Fraud Alert | Speshway Solutions" />
        <meta property="og:description" content="Beware of fraudulent job offers. Learn how to identify and report scams." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speshway.com/fraud-notice" />
        <meta property="og:image" content="https://www.speshway.com/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Fraud Alert | Speshway Solutions" />
        <meta name="twitter:description" content="Beware of fraudulent job offers. Learn how to identify and report scams." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://www.speshway.com/"},
            {"@type":"ListItem","position":2,"name":"Fraud Alert","item":"https://www.speshway.com/fraud-notice"}
          ]
        })}</script>
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">Fraud Alert</h1>
              <h2 className="text-xl sm:text-2xl text-red-600 font-semibold">
  Beware of Fake Offers
</h2>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border space-y-4">
              <p className="text-muted-foreground">
                Some job candidates have reported receiving fraudulent job offers after posting their resumes on various job portals and websites from individuals falsely claiming to represent Speshway Solutions. These messages may include false promises about the selection process. In certain cases, candidates are even asked to make payments as a condition for being considered. These fraudulent documents may look legitimate, using our company name, logo, or personal details taken from social networking sites. They may also include job descriptions and salary details.
              </p>
              <p className="text-muted-foreground">
                Speshway Solutions does not charge any fee at any stage of the recruitment process and has not authorized any agency or individual to collect fees on our behalf.
              </p>
              <p className="text-muted-foreground">
                Our core values include integrity and transparency. We are committed to maintaining an open and fair hiring process, and we are not associated with any individuals or services involved in such fraudulent activities. We are not liable for any loss or damage incurred as a result of dealing with such entities.
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">If you receive any job offers that you suspect are fraudulent, please email us at:</p>
                <a href="mailto:speshwaysspl@gmail.com" className="inline-flex items-center gap-2 text-primary font-medium">
                  <Mail size={18} /> speshwaysspl@gmail.com
                </a>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">If you receive any Campus/Fresher-specific offers that seem suspicious, please email us at:</p>
                <a href="mailto:speshwaysspl@gmail.com" className="inline-flex items-center gap-2 text-primary font-medium">
                  <Mail size={18} /> speshwaysspl@gmail.com
                </a>
              </div>
              <p className="text-muted-foreground">
                By sharing this information, we aim to protect prospective candidates from falling victim to such scams.
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
