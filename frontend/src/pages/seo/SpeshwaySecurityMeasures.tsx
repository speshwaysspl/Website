import SEOLayout from "@/components/SEOLayout";
import { ShieldAlert, Lock, UserCheck, EyeOff, FileLock2, ShieldCheck } from "lucide-react";

const SpeshwaySecurityMeasures = () => {
  const faqItems = [
    {
      question: "How does Speshway protect client data?",
      answer: "We implement industry-standard encryption, strict access controls, and regular security audits to ensure all client data remains confidential and secure."
    },
    {
      question: "Does Speshway sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes, we sign legally binding NDAs with all our clients and employees to protect intellectual property and sensitive business information."
    },
    {
      question: "Are Speshway's developers background-verified?",
      answer: "Every employee at Speshway Solutions undergoes a thorough background check and identity verification before joining the team."
    }
  ];

  const breadcrumbItems = [
    { name: "Trust Center", item: "/is-speshway-real-or-fake" },
    { name: "Security Measures", item: "/speshway-solutions-data-security-and-privacy-policy" }
  ];

  const securityFeatures = [
    { icon: <Lock className="w-6 h-6" />, title: "End-to-End Encryption", desc: "Data is encrypted both in transit and at rest using modern cryptographic standards." },
    { icon: <UserCheck className="w-6 h-6" />, title: "Identity Management", desc: "Multi-factor authentication (MFA) is mandatory for accessing sensitive internal systems." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Compliance", desc: "We adhere to international data protection regulations like GDPR and SOC 2 where applicable." },
    { icon: <FileLock2 className="w-6 h-6" />, title: "IP Protection", desc: "Strict legal frameworks to ensure your project code and ideas belong solely to you." },
    { icon: <EyeOff className="w-6 h-6" />, title: "Privacy by Design", desc: "Security is integrated into the development lifecycle from the very first line of code." },
    { icon: <ShieldAlert className="w-6 h-6" />, title: "Vulnerability Scans", desc: "Regular automated and manual testing to identify and patch security loopholes." }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Security Measures & Data Privacy Policy"
      description="Learn about the robust security protocols at Speshway Solutions. We prioritize data privacy, intellectual property protection, and secure software development."
      keywords="speshway security, speshway solutions data privacy, speshway nda policy, speshway secure development, is speshway safe for business, data protection hyderabad"
      canonical="/speshway-solutions-data-security-and-privacy-policy"
      h1="Security & Privacy: How Speshway Solutions Protects You"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          In the digital age, security is not an option—it's a necessity. <strong>Speshway Solutions Private Limited</strong> is committed to maintaining the highest levels of data security and privacy for our global clientele.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 not-prose">
          {securityFeatures.map((f, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-muted/10 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Our Commitment to IP Protection</h2>
        <p>
          One of the primary concerns for businesses outsourcing software development is the safety of their <strong>Intellectual Property (IP)</strong>. At Speshway, we take this very seriously:
        </p>
        <ul className="space-y-4 my-8">
          <li><strong>Binding NDAs:</strong> We never start a project without a comprehensive Non-Disclosure Agreement.</li>
          <li><strong>Code Ownership:</strong> Upon project completion and payment, full ownership of the source code is transferred to the client.</li>
          <li><strong>Internal Access Control:</strong> Only developers assigned to your project have access to the codebase and related documentation.</li>
        </ul>

        <div className="bg-red-50 border border-red-100 p-8 rounded-2xl my-12">
          <h3 className="text-red-900 font-bold mb-4 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6" /> Fraud Prevention Notice
          </h3>
          <p className="text-red-800 text-sm mb-4">
            Speshway Solutions does not request sensitive personal information like passwords or financial credentials via email or social media. If you receive suspicious requests claiming to be from Speshway, please report them immediately to <a href="mailto:security@speshway.com" className="font-bold underline">security@speshway.com</a>.
          </p>
          <p className="text-red-800 text-sm">
            Our official website is <strong>speshway.com</strong>. Always verify the URL before entering any information.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Secure Development Lifecycle (SDLC)</h2>
        <p>
          We follow a secure SDLC process, which means security is not an afterthought. We conduct:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-10">
          <li><strong>Threat Modeling:</strong> Identifying potential risks during the design phase.</li>
          <li><strong>Static Analysis (SAST):</strong> Automated code scanning for security vulnerabilities.</li>
          <li><strong>Peer Code Reviews:</strong> Manual inspection by senior developers to ensure security best practices.</li>
          <li><strong>Dependency Audits:</strong> Regularly updating third-party libraries to avoid known exploits.</li>
        </ol>

        <p className="text-muted-foreground italic text-sm text-center">
          Last Updated: April 2024 | Speshway Trust & Security Team
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwaySecurityMeasures;
