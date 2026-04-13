import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { FileCheck, ShieldCheck, Landmark, Building, CheckCircle, MapPin, Mail, Phone, ExternalLink, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayVerification = () => {
  const faqItems = [
    {
      question: "How can I verify a Speshway Solutions employee?",
      answer: "You can verify any Speshway employee by contacting our HR department at hr@speshway.com with the individual's full name and employee ID. We will provide a formal verification letter within 48 hours."
    },
    {
      question: "What is Speshway's official office address?",
      answer: "Our only official corporate office is located at T-Hub Phase 2, Knowledge City Road, Raidurgam, Hyderabad, Telangana 500081."
    },
    {
      question: "How do I verify a Speshway job offer?",
      answer: "All official job offers come from @speshway.com. If you receive an offer from any other domain, it is likely a scam. You can also call our office to confirm the authenticity of any offer."
    },
    {
      question: "Does Speshway use third-party recruiters?",
      answer: "While we occasionally work with reputable recruitment firms, all final communication and offer letters are issued directly from Speshway Solutions. We never authorize third parties to collect any fees on our behalf."
    }
  ];

  const breadcrumbItems = [
    { name: "Verification", item: "/speshway-company-verification" },
    { name: "Company Verification", item: "/speshway-company-verification" }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Speshway Company Verification: Official 2026 Report",
    "description": "Need to verify Speshway Solutions? Get our official company verification report, including registration details, office location, and contact information.",
    "author": {
      "@type": "Organization",
      "name": "Speshway Trust & Safety Team",
      "url": "https://speshway.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Speshway Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://speshway.com/logo.png"
      }
    },
    "datePublished": "2026-01-15T08:00:00+00:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <SEOLayout
      title="Speshway Company Verification: Official 2026 Report"
      description="Need to verify Speshway Solutions? Get our official company verification report, including registration details, office location, and contact information."
      keywords="speshway company verification, verify speshway solutions, speshway registration details, speshway hyderabad office, speshway contact information"
      canonical="/speshway-company-verification"
      h1="Speshway Company Verification: Official 2026 Report"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      schema={[articleSchema]}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="bg-blue-100 p-4 rounded-full">
                <FileCheck className="w-8 h-8 text-blue-600" />
             </div>
             <div>
                <h4 className="font-bold text-lg">Official Verification Hub</h4>
                <p className="text-sm text-muted-foreground">Your one-stop destination for company authenticity.</p>
             </div>
          </div>
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm border border-green-200">
             <ShieldCheck className="w-4 h-4" /> 100% Verified Genuine
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          Ensuring the authenticity of a company is critical for clients, employees, and partners alike. This <strong>Speshway Company Verification</strong> report provides all the necessary details to confirm the legitimacy of Speshway Solutions Private Limited.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Corporate Identity and Registration</h2>
        <p>
          Speshway Solutions Private Limited is a registered private limited company incorporated under the laws of India. We are an active entity recognized by the Ministry of Corporate Affairs (MCA). 
        </p>
        <div className="bg-muted p-8 rounded-2xl my-8 border border-dashed border-primary/40">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> Official Company Details
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex justify-between border-b border-muted-foreground/10 pb-2">
              <span className="font-semibold text-sm">Legal Name</span>
              <span className="text-sm">Speshway Solutions Private Limited</span>
            </div>
            <div className="flex justify-between border-b border-muted-foreground/10 pb-2">
              <span className="font-semibold text-sm">Status</span>
              <span className="text-sm text-green-600 font-bold uppercase">Active</span>
            </div>
            <div className="flex justify-between border-b border-muted-foreground/10 pb-2">
              <span className="font-semibold text-sm">Industry</span>
              <span className="text-sm">IT Services & Software</span>
            </div>
            <div className="flex justify-between border-b border-muted-foreground/10 pb-2">
              <span className="font-semibold text-sm">Registration Authority</span>
              <span className="text-sm">MCA, India</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic">
            * You can search for our company name on the MCA portal for a full public record.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Physical Office Verification</h2>
        <p>
          Our only official corporate headquarters is located in the heart of Hyderabad's technology corridor. We do not operate from any other residential or virtual office locations.
        </p>
        <div className="flex flex-col md:flex-row gap-8 my-8 items-start not-prose">
           <div className="flex-1 p-6 border rounded-2xl bg-card shadow-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Corporate Address</h4>
              <p className="text-muted-foreground leading-relaxed">
                 T-Hub Phase 2,<br />
                 Knowledge City Road, Raidurgam,<br />
                 Hyderabad, Telangana 500081,<br />
                 India
              </p>
           </div>
           <div className="flex-1 p-6 border rounded-2xl bg-card shadow-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-primary" /> Hub Presence</h4>
              <p className="text-muted-foreground leading-relaxed">
                 We are a proud member of the T-Hub ecosystem, Asia's largest innovation hub, which houses the most promising technology startups in India.
              </p>
           </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Official Communication Channels</h2>
        <p>
          To protect yourself from impersonation fraud, always ensure you are communicating through our official channels. Any communication from other sources claiming to represent Speshway should be treated with extreme caution.
        </p>
        <ul className="space-y-4 my-8 not-prose list-none p-0">
          <li className="flex gap-4 p-4 border rounded-xl bg-muted/20">
             <div className="bg-primary/10 p-2 rounded-lg h-fit"><Globe className="w-5 h-5 text-primary" /></div>
             <div>
                <strong>Official Website:</strong> <a href="https://speshway.com" className="text-primary hover:underline">speshway.com</a> (Our only official web domain)
             </div>
          </li>
          <li className="flex gap-4 p-4 border rounded-xl bg-muted/20">
             <div className="bg-primary/10 p-2 rounded-lg h-fit"><Mail className="w-5 h-5 text-primary" /></div>
             <div>
                <strong>Official Emails:</strong> Only emails from <strong>@speshway.com</strong> are legitimate.
             </div>
          </li>
          <li className="flex gap-4 p-4 border rounded-xl bg-muted/20">
             <div className="bg-primary/10 p-2 rounded-lg h-fit"><Phone className="w-5 h-5 text-primary" /></div>
             <div>
                <strong>Official Contact:</strong> +91 8143431333
             </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Zero-Fee Policy Verification</h2>
        <p>
          Speshway Solutions maintains a <strong>strict zero-fee recruitment policy</strong>. We never ask for any payment from candidates for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
           <div className="p-4 border rounded-xl bg-red-50 text-red-700 text-center text-xs font-bold">Registration Fees</div>
           <div className="p-4 border rounded-xl bg-red-50 text-red-700 text-center text-xs font-bold">Security Deposits</div>
           <div className="p-4 border rounded-xl bg-red-50 text-red-700 text-center text-xs font-bold">Training Materials</div>
           <div className="p-4 border rounded-xl bg-red-50 text-red-700 text-center text-xs font-bold">Laptop Insurance</div>
        </div>
        <p className="font-semibold text-primary italic">
           If anyone asks you for money while claiming to represent Speshway, please report it immediately to info@speshway.com.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. Social and Industry Proof</h2>
        <p>
          You can further verify our existence and impact through our active social media profiles and industry recognitions. We encourage you to follow our journey on:
        </p>
        <div className="flex flex-wrap gap-4 my-8 not-prose">
           <a href="https://linkedin.com/company/speshway" target="_blank" className="px-6 py-3 border rounded-xl hover:bg-muted transition-colors flex items-center gap-2 font-bold text-sm"><ExternalLink className="w-4 h-4" /> LinkedIn</a>
           <a href="https://instagram.com/speshway" target="_blank" className="px-6 py-3 border rounded-xl hover:bg-muted transition-colors flex items-center gap-2 font-bold text-sm"><ExternalLink className="w-4 h-4" /> Instagram</a>
           <a href="https://facebook.com/speshway" target="_blank" className="px-6 py-3 border rounded-xl hover:bg-muted transition-colors flex items-center gap-2 font-bold text-sm"><ExternalLink className="w-4 h-4" /> Facebook</a>
        </div>

        <div className="bg-primary text-primary-foreground p-12 rounded-[3rem] my-16 text-center not-prose shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-primary/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Need a Formal Verification?</h3>
            <p className="mb-10 opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
              If you require a formal company verification letter for legal, financial, or employment purposes, please contact our administrative team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" variant="secondary" className="px-12 h-16 text-lg font-bold rounded-2xl border-none">
                <Link to="/contact">Request Verification</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-16 text-lg font-bold rounded-2xl border-none">
                <Link to="/about">About Our Company</Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Building Trust Through Transparency</h2>
        <p>
          In conclusion, <strong>Speshway Solutions Private Limited</strong> is a fully verified, legitimate IT services company. We are committed to transparency in all our operations and encourage anyone with questions to reach out to us directly through our official channels. Your trust is our most valuable asset.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayVerification;
