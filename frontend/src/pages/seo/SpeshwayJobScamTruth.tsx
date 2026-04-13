import SEOLayout from "@/components/SEOLayout";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { ShieldAlert, ShieldCheck, HelpCircle, AlertTriangle, CheckCircle, Mail, Phone, Lock, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayJobScamTruth = () => {
  const faqItems = [
    {
      question: "Does Speshway Solutions charge money for jobs?",
      answer: "No, Speshway Solutions has a strict zero-fee recruitment policy. We never ask for money for registration, security deposits, training, or laptop equipment. Any such demand is a scam.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            No, Speshway Solutions has a strict zero-fee recruitment policy. We never ask for money for registration, security deposits, training, or laptop equipment. Any such demand is a scam.
          </p>
          <p className="text-sm text-muted-foreground">
            To double-check our policies, you can review{" "}
            <a
              href="/speshway-company-verification"
              className="text-primary font-semibold hover:underline"
              title="Use the Speshway company verification hub to confirm official policies"
            >
              the official company verification page
            </a>{" "}
            and our{" "}
            <a
              href="/speshway-career-review"
              className="text-primary font-semibold hover:underline"
              title="Read how Speshway handles careers and recruitment"
            >
              career review for job seekers
            </a>
            .
          </p>
        </div>
      )
    },
    {
      question: "How do I know if a job offer from Speshway is real?",
      answer: "Real offers always come from an @speshway.com email address. We do not use Gmail, Yahoo, or Outlook for official hiring. You will also have multiple rounds of technical interviews before receiving an offer.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Real offers always come from an @speshway.com email address. We do not use Gmail, Yahoo, or Outlook for official hiring. You will also have multiple rounds of technical interviews before receiving an offer.
          </p>
          <p className="text-sm text-muted-foreground">
            If you are unsure about an offer, compare details with{" "}
            <a
              href="/is-speshway-real-or-fake"
              className="text-primary font-semibold hover:underline"
              title="Check if Speshway is real or fake before trusting any job offer"
            >
              our authenticity guide
            </a>{" "}
            and{" "}
            <a
              href="/speshway-company-verification"
              className="text-primary font-semibold hover:underline"
              title="Verify a Speshway job offer against official company records"
            >
              the company verification hub
            </a>
            .
          </p>
        </div>
      )
    },
    {
      question: "What should I do if I've been scammed by someone using Speshway's name?",
      answer: "Immediately stop all communication with the scammer. Do not pay any more money. Report the incident to your local cybercrime cell and notify us at info@speshway.com so we can take legal action against the impersonators."
    },
    {
      question: "Are there any 'processing fees' for international candidates?",
      answer: "No. Regardless of your location, Speshway does not charge any processing or visa fees directly from candidates. All recruitment costs are handled internally by the company."
    }
  ];

  const breadcrumbItems = [
    { name: "Safety", item: "/speshway-job-scam-truth" },
    { name: "Job Scam Truth", item: "/speshway-job-scam-truth" }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Speshway Job Scam Truth & Recruitment Verification",
    "image": "https://speshway.com/logo.png",
    "description": "Truth about Speshway job scams. Official verification of Speshway's zero-fee recruitment policy.",
    "brand": {
      "@type": "Brand",
      "name": "Speshway Solutions"
    },
    "sameAs": [
      "https://linkedin.com/company/speshway",
      "https://www.quora.com/profile/Speshway-Solutions-Pvt-Ltd",
      "https://instagram.com/speshway",
      "https://facebook.com/speshway"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1500",
      "reviewCount": "1500"
    }
  };

  return (
    <SEOLayout
      title="Speshway Job Scam Truth: 100% Zero-Fee Hiring Policy (2026)"
      description="Is the Speshway job offer real or a scam? Learn the truth about Speshway's zero-fee hiring process, T-Hub office, and how to identify fake recruiters using our name."
      keywords="speshway job scam, speshway recruitment fraud, speshway fake job offer, speshway hiring process, verify speshway job, speshway solutions job scam truth"
      canonical="/speshway-job-scam-truth"
      h1="Speshway Job Scam: The Ultimate Truth & Safety Guide"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      schema={[reviewSchema]}
      summaryBox={
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h4 className="text-red-800 font-bold">Important Alert</h4>
            <p className="text-red-700 text-sm">Speshway NEVER asks for money for recruitment. Beware of anyone asking for "security deposits" or "training fees."</p>
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          In recent months, we have noticed an increase in fraudulent activities where scammers impersonate <strong>Speshway Solutions</strong> recruiters to cheat innocent job seekers. This page is dedicated to exposing the truth about these scams and providing you with the tools to verify your job offer.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. How the Speshway Job Scam Works</h2>
        <p>
          Scammers usually target job seekers on platforms like LinkedIn, Indeed, or Telegram. They use our company name and logo to build trust. Here is their typical workflow:
        </p>
        <div className="bg-muted p-6 rounded-xl my-8">
          <ol className="space-y-4 m-0 p-0 list-none">
            <li className="flex gap-4">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">1</span>
              <div>
                <strong>The Initial Contact:</strong> You receive a message or email offering a high-paying job, often for a "Data Entry," "Remote Developer," or "Customer Support" role.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">2</span>
              <div>
                <strong>The "Interview":</strong> They conduct a fake interview via WhatsApp or Telegram, asking simple questions or just sending a questionnaire.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">3</span>
              <div>
                <strong>The Fake Offer:</strong> Within hours, you receive a professional-looking (but fake) offer letter with our logo.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">4</span>
              <div>
                <strong>The Demand for Money:</strong> This is the trap. They ask you to pay for "laptop insurance," "training materials," "security deposit," or "document verification."
              </div>
            </li>
          </ol>
        </div>

        <div className="my-10 not-prose">
          <InternalLinks
            layout="chips"
            title="People also search for Speshway job scam and verification"
          />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Red Flags of a Fake Speshway Recruiter</h2>
        <p>
          Stay vigilant and look out for these common red flags that indicate a scam:
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 border rounded-xl bg-card">
            <Mail className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-bold mb-2">Unofficial Email Addresses</h4>
            <p className="text-sm text-muted-foreground">Scammers use @gmail.com, @outlook.com, @yahoo.com, or slightly misspelled domains like @spesh-way.com.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <Lock className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-bold mb-2">Request for Payment</h4>
            <p className="text-sm text-muted-foreground">Any request for money, gift cards, or crypto transfers is 100% a scam. Speshway is a zero-fee employer.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <Eye className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-bold mb-2">Too Good to be True</h4>
            <p className="text-sm text-muted-foreground">Salaries that are way above industry standards for entry-level roles are often used as bait.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <Phone className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-bold mb-2">Pressure Tactics</h4>
            <p className="text-sm text-muted-foreground">Scammers often create a sense of urgency, asking you to pay immediately to "secure your spot."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Our Official Recruitment Process</h2>
        <p>
          To ensure you are dealing with the real Speshway, please understand our standard hiring process:
        </p>
        <ul className="space-y-4">
          <li><strong>Application:</strong> You apply via our official website, LinkedIn page, or recognized job portals.</li>
          <li><strong>Screening:</strong> Our HR team reviews your profile and contacts you from an <strong>@speshway.com</strong> email.</li>
          <li><strong>Technical Rounds:</strong> You will have at least one (often two) technical video interviews with our senior developers.</li>
          <li><strong>HR Round:</strong> A final discussion regarding company culture, benefits, and expectations.</li>
          <li><strong>Verification:</strong> We may conduct background checks, but we NEVER ask you to pay for them.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Real Stories: Don't Become a Statistic</h2>
        <p>
          We've heard from many victims who lost their hard-earned money to these scammers. One candidate reported being asked for ₹15,000 for a "company-provided MacBook Pro." Another was asked for $200 as a "processing fee for international remote work." 
        </p>
        <p className="font-semibold text-primary italic">
          Remember: Speshway Solutions provides all necessary equipment and training to its employees at NO COST.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. What to do if you suspect a scam</h2>
        <p>
          If you are unsure about an offer, follow these steps:
        </p>
        <div className="flex flex-col gap-4 my-8 not-prose">
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-blue-50/50">
            <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
            <div>
              <p className="font-bold">Email us directly</p>
              <p className="text-sm text-muted-foreground">Forward the suspicious email to <strong>info@speshway.com</strong> for verification.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-blue-50/50">
            <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
            <div>
              <p className="font-bold">Call our office</p>
              <p className="text-sm text-muted-foreground">Verify the recruiter's name by calling our official contact number listed on the website.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-blue-50/50">
            <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
            <div>
              <p className="font-bold">Check our LinkedIn</p>
              <p className="text-sm text-muted-foreground">Visit our <a href="https://linkedin.com/company/speshway" target="_blank" className="text-primary hover:underline">Official LinkedIn Page</a> to see our current team members.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border rounded-lg bg-blue-50/50">
            <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
            <div>
              <p className="font-bold">Official Quora Profile</p>
              <p className="text-sm text-muted-foreground">Read our official answers and company verification on <a href="https://www.quora.com/profile/Speshway-Solutions-Pvt-Ltd" target="_blank" className="text-primary hover:underline">Quora</a>.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-2xl my-12 text-center not-prose">
          <h3 className="text-2xl font-bold mb-4">Protect Your Future</h3>
          <p className="mb-8 opacity-90">
            Don't let scammers ruin your career journey. If it feels wrong, it probably is. Verify before you trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Report a Scam</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/career">View Real Openings</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Your Safety is Our Priority</h2>
        <p>
          Speshway Solutions is committed to maintaining a safe and transparent hiring environment. We are working with law enforcement agencies to track down and stop these impersonators. By staying informed and following the guidelines on this page, you can protect yourself and help us maintain the integrity of our brand.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayJobScamTruth;
