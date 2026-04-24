import SEOLayout from "@/components/SEOLayout";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { ShieldCheck, BarChart, CheckCircle, Award, Star, Zap, Building, Users, Lock, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayTrustScore = () => {
  const quoraProfileUrl = "https://www.quora.com/profile/Speshway-Solutions-Pvt-Ltd";
  const quoraDiscussionUrl = "https://www.quora.com/Is-Speshway-Solutions-fake-or-real-Is-it-legit-or-a-scam-Honest-review-2026";

  const faqItems = [
    {
      question: "What is Speshway's current trust score?",
      answer: "Speshway Solutions maintains an exceptional trust score of 98% based on verified client feedback, employee reviews, and industry compliance audits as of 2026.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Speshway Solutions maintains an exceptional trust score of 98% based on verified client feedback, employee reviews, and third-party compliance checks as of 2026.
          </p>
          <p className="text-sm text-muted-foreground">
            You can verify our standing through multiple verified channels, including{" "}
            <Link
              to="/speshway-solutions-review-2026"
              className="text-primary font-semibold hover:underline"
              title="Read the latest 2026 Speshway Solutions reviews"
            >
              the 2026 review hub
            </Link>{" "}
            and our{" "}
            <Link
              to="/speshway-client-testimonials"
              className="text-primary font-semibold hover:underline"
              title="Read genuine Speshway client testimonials and case studies"
            >
              client testimonials portal
            </Link>
            .
          </p>
        </div>
      )
    },
    {
      question: "How is the Speshway trust score calculated?",
      answer: "The trust score is a composite metric that takes into account: (1) Client Project Success Rate, (2) Employee Retention and Satisfaction, (3) Legal and Regulatory Compliance, and (4) Data Security Standards.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            The trust score is a composite metric that considers client project success rates, long-term employee satisfaction, legal and regulatory compliance, and data security maturity.
          </p>
          <p className="text-sm text-muted-foreground">
            The calculation methodology is transparent and can be cross-verified against{" "}
            <Link
              to="/is-speshway-real-or-fake"
              className="text-primary font-semibold hover:underline"
              title="Check if Speshway is real or fake with full verification details"
            >
              our authenticity guide
            </Link>{" "}
            and{" "}
            <Link
              to="/is-speshway-legit-company"
              className="text-primary font-semibold hover:underline"
              title="Check if Speshway is a legit registered company in India"
            >
              legitimacy report
            </Link>
            .
          </p>
        </div>
      )
    },
    {
      question: "Is Speshway Solutions ISO certified?",
      answer: "Yes, Speshway is ISO 27001 (Information Security Management) and ISO 9001 (Quality Management) certified, reflecting our commitment to the highest global standards."
    },
    {
      question: "Why is the Speshway trust score so high?",
      answer: "Our high trust score is a result of our consistent focus on transparency, timely delivery of high-quality solutions, and our proactive approach to data security and client privacy."
    },
    {
      question: "Is there a Quora discussion about whether Speshway is legit or a scam?",
      answer: "Yes—there are community discussions on Quora. Since Quora is user-generated content, treat it as context and always verify using official sources like our company verification report and official contact channels."
    }
  ];

  const breadcrumbItems = [
    { name: "Trust", item: "/speshway-solutions-trust-score" },
    { name: "Trust Score", item: "/speshway-solutions-trust-score" }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Speshway Solutions Trust Score & Reliability Report",
    "image": "https://speshway.com/logo.png",
    "description": "2026 Trust Score report for Speshway Solutions Private Limited. Verified 98% reliability rating.",
    "brand": {
      "@type": "Brand",
      "name": "Speshway Solutions"
    },
    "sameAs": [
      "https://www.linkedin.com/company/speshway-solutions-pvt-ltd/",
      "https://www.quora.com/profile/Speshway-Solutions-Pvt-Ltd",
      "https://www.instagram.com/speshwaysolutionsofficial/",
      "https://www.facebook.com/profile.php?id=61584485021568"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1200",
      "reviewCount": "1200"
    }
  };

  return (
    <SEOLayout
      title="Speshway Solutions Trust Score: 98% Verified Legitimacy (2026)"
      description="What is the Speshway Solutions trust score? Get the 2026 report on Speshway's 98% reliability, client satisfaction, and T-Hub office verification. 100% Legit."
      keywords="speshway solutions trust score, speshway company trust rating, is speshway reliable, speshway solutions security, speshway client satisfaction, speshway quora, is speshway legit quora, speshway solutions reviews"
      canonical="/speshway-solutions-trust-score"
      h1="Speshway Solutions Trust Score: 98% Verified Reliability Report"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      schema={[reviewSchema]}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="bg-green-100 text-green-700 w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-inner border border-green-200">
                98%
             </div>
             <div>
                <h4 className="font-bold text-lg">Excellent Trust Rating</h4>
                <p className="text-sm text-muted-foreground">Verified by 1,200+ clients and employees.</p>
             </div>
          </div>
          <div className="flex flex-wrap gap-2">
             <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">ISO 27001</span>
             <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-3 py-1 rounded-full border border-orange-200">ISO 9001</span>
             <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-3 py-1 rounded-full border border-purple-200">GDPR Compliant</span>
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          Trust is the foundation of every successful business relationship. At <strong>Speshway Solutions</strong>, we believe in earning that trust through transparency, excellence, and security. This report provides a deep dive into our 2026 Trust Score and the factors that contribute to our reputation.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. What Makes Up the Speshway Trust Score?</h2>
        <p>
          Our trust score is not just a number; it's a comprehensive reflection of our business practices. We monitor and analyze several key performance indicators (KPIs) to ensure we maintain our high standards:
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
          <div className="p-6 border rounded-2xl bg-card">
            <BarChart className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Project Success Rate (99%)</h4>
            <p className="text-sm text-muted-foreground">Percentage of projects delivered on time, within budget, and meeting all technical requirements.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Client Satisfaction (4.8/5)</h4>
            <p className="text-sm text-muted-foreground">Average rating based on post-project surveys and verified reviews on independent platforms.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card">
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Security Compliance (100%)</h4>
            <p className="text-sm text-muted-foreground">Adherence to global data protection standards including ISO 27001 and GDPR.</p>
          </div>
          <div className="p-6 border rounded-2xl bg-card">
            <Award className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Employee Retention (95%)</h4>
            <p className="text-sm text-muted-foreground">A stable team ensures consistent project delivery and deep institutional knowledge.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Security and Data Privacy Standards</h2>
        <p>
          In an era of increasing cyber threats, data security is non-negotiable. Speshway has invested heavily in building a secure infrastructure and implementing robust data privacy policies.
        </p>
        <ul className="space-y-4 my-8">
          <li className="flex gap-4">
             <div className="bg-blue-50 p-2 rounded-lg h-fit mt-1"><Lock className="w-4 h-4 text-blue-600" /></div>
             <div>
                <strong>End-to-End Encryption:</strong> All sensitive client data is encrypted both at rest and in transit using industry-standard protocols.
             </div>
          </li>
          <li className="flex gap-4">
             <div className="bg-blue-50 p-2 rounded-lg h-fit mt-1"><Eye className="w-4 h-4 text-blue-600" /></div>
             <div>
                <strong>Regular Security Audits:</strong> We conduct quarterly internal and annual external security audits to identify and mitigate potential vulnerabilities.
             </div>
          </li>
          <li className="flex gap-4">
             <div className="bg-blue-50 p-2 rounded-lg h-fit mt-1"><CheckCircle2 className="w-4 h-4 text-blue-600" /></div>
             <div>
                <strong>Access Control:</strong> Strict role-based access control (RBAC) ensures that only authorized personnel can access sensitive information.
             </div>
          </li>
        </ul>

        <div className="my-10 not-prose">
          <InternalLinks
            layout="chips"
            title="People also search for Speshway trust and scam proof"
          />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Transparency in Client Engagements</h2>
        <p>
          We believe in "no surprises." Our project management process is built on <strong>radical transparency</strong>. Clients have real-time access to project dashboards, allowing them to track progress, review code, and provide feedback at every stage of the development lifecycle.
        </p>
        <p>
          Every engagement is backed by a clear Service Level Agreement (SLA) and a non-disclosure agreement (NDA), ensuring that your intellectual property is always protected.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Independent Verification & Reviews</h2>
        <p>
          Don't just take our word for it. Speshway is highly rated on independent platforms where clients and employees share their honest experiences. We encourage you to check our profiles on:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
           <div className="p-4 border rounded-xl bg-muted/20 text-center font-bold text-sm">Clutch</div>
           <div className="p-4 border rounded-xl bg-muted/20 text-center font-bold text-sm">GoodFirms</div>
           <div className="p-4 border rounded-xl bg-muted/20 text-center font-bold text-sm">Glassdoor</div>
           <div className="p-4 border rounded-xl bg-muted/20 text-center font-bold text-sm">AmbitionBox</div>
        </div>
        <div className="not-prose p-6 border rounded-2xl bg-card my-8">
          <h3 className="text-lg font-bold mb-2">Community discussions (Quora)</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Some people also ask about Speshway on community forums. Since these are user-generated, use them as context and verify using official sources like our{" "}
            <Link
              to="/speshway-company-verification"
              className="text-primary font-semibold hover:underline"
              title="Speshway company verification report"
            >
              company verification report
            </Link>{" "}
            and direct support.
          </p>
          <a
            href={quoraProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
            title="Speshway Solutions Official Quora Profile"
          >
            Visit Our Official Quora Profile
          </a>
          <br />
          <a
            href={quoraDiscussionUrl}
            target="_blank"
            rel="nofollow ugc noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-primary font-semibold hover:underline"
            title="Quora discussion: Is Speshway Solutions fake or real?"
          >
            Read the Quora discussion
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. Our Commitment to Continuous Improvement</h2>
        <p>
          The technology landscape is constantly evolving, and so are we. Our "Trust & Quality" team is dedicated to monitoring our performance and implementing improvements based on client feedback and industry best practices. We are committed to maintaining our 98% trust score through 2026 and beyond.
        </p>

        <div className="bg-primary text-primary-foreground p-12 rounded-3xl my-16 text-center not-prose shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Partner with a Trusted Leader</h3>
            <p className="mb-10 opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
              Experience the Speshway difference. Build your next project with a partner that values trust, security, and excellence above all else.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" variant="secondary" className="px-12 h-16 text-lg font-bold rounded-2xl">
                <Link to="/contact">Get a Security Audit</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-16 text-lg font-bold rounded-2xl border-none">
                <Link to="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Your Peace of Mind is Our Priority</h2>
        <p>
          In conclusion, the <strong>Speshway Solutions Trust Score</strong> is a testament to our unwavering commitment to our clients and our team. We understand that your choice of a technology partner is a critical decision. By maintaining the highest standards of security, transparency, and quality, we aim to provide you with the peace of mind you deserve.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayTrustScore;
