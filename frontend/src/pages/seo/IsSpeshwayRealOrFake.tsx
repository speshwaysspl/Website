import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { CheckCircle, ShieldAlert, Building2, Landmark, Briefcase, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const IsSpeshwayRealOrFake = () => {
  const faqItems = [
    {
      question: "Is Speshway Solutions Private Limited real or fake?",
      answer: "Speshway Solutions Private Limited is a 100% real, legally registered IT services and software development company based in Hyderabad, India. It is officially registered with the Ministry of Corporate Affairs (MCA) and operates from T-Hub, Knowledge City."
    },
    {
      question: "Why do some people say Speshway is a scam?",
      answer: "Most 'scam' claims against Speshway arise from victims of third-party recruitment fraud where individuals impersonate Speshway recruiters to demand money. Speshway itself never asks for money for jobs or training."
    },
    {
      question: "How can I verify if a job offer from Speshway is legitimate?",
      answer: "Check the sender's email address. Official communications only come from @speshway.com. If you're asked for payment for 'security deposit' or 'laptop training,' it is a scam."
    },
    {
      question: "Where is Speshway Solutions located?",
      answer: "The company is headquartered at T-Hub Phase 2, Knowledge City Road, Raidurgam, Hyderabad, Telangana 500081."
    },
    {
      question: "What is Speshway's CIN (Corporate Identification Number)?",
      answer: "Speshway Solutions Private Limited is a registered entity under the Companies Act. You can verify its status on the MCA portal."
    }
  ];

  const breadcrumbItems = [
    { name: "Trust Center", item: "/is-speshway-real-or-fake" },
    { name: "Is Speshway Real or Fake?", item: "/is-speshway-real-or-fake" }
  ];

  return (
    <SEOLayout
      title="Is Speshway Real or Fake? | The Ultimate Truth 2026"
      description="Wondering if Speshway Solutions is fake or real? Read our detailed analysis on Speshway's legitimacy, company registration, and how to avoid recruitment scams."
      keywords="speshway real or fake, is speshway legit, speshway solutions scam, speshway hyderabad review, speshway company verification"
      canonical="/is-speshway-real-or-fake"
      h1="Is Speshway Solutions Real or Fake? The Complete 2026 Analysis"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">Status: Verified Genuine</span>
          <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Category: IT Services</span>
          <span className="text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Location: T-Hub, Hyderabad</span>
        </div>
      }
    >
      <section>
        <p className="lead">
          In the digital age, where recruitment fraud is on the rise, it's natural for job seekers and clients to ask: <strong>"Is Speshway Solutions real or fake?"</strong> This comprehensive guide provides everything you need to know about Speshway's legitimacy, its physical presence, and the truth behind common misconceptions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Official Company Registration & Legitimacy</h2>
        <p>
          Speshway Solutions Private Limited is a registered Indian private company incorporated under the Companies Act, 2013. The company is recognized by the Ministry of Corporate Affairs (MCA), Government of India. 
        </p>
        <p>
          As a legitimate entity, Speshway adheres to all statutory requirements, including GST registration, PAN, and TAN compliance. Our presence in the official government records is the primary proof of our authenticity.
        </p>

        <div className="bg-muted p-6 rounded-xl my-8 border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> Quick Verification Details
          </h3>
          <ul className="list-none space-y-2 p-0">
            <li><strong>Company Name:</strong> Speshway Solutions Private Limited</li>
            <li><strong>Industry:</strong> Information Technology & Services</li>
            <li><strong>Registration Status:</strong> Active</li>
            <li><strong>Primary Office:</strong> T-Hub, Knowledge City, Hyderabad</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Physical Presence at T-Hub, Hyderabad</h2>
        <p>
          Unlike "fake" or "ghost" companies that only exist online, Speshway Solutions has a significant physical footprint. We are proud to operate from <strong>T-Hub</strong>, which is Asia's largest innovation hub and a flagship initiative by the Government of Telangana.
        </p>
        <p>
          Our location at T-Hub is not just an address; it's a testament to our commitment to innovation and excellence. We invite clients and partners to visit our office by appointment to witness our operations firsthand.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Addressing the "Speshway Job Scam" Rumors</h2>
        <p>
          If you have searched for "Speshway job scam," you might have found forum posts or social media comments from concerned individuals. It is crucial to distinguish between the <strong>company</strong> and <strong>recruitment fraud</strong> committed by third parties.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Fake Job Indicators
            </h4>
            <ul className="text-sm text-red-700 space-y-2">
              <li className="flex items-start gap-2"><span>•</span> Asking for payment for training or laptops</li>
              <li className="flex items-start gap-2"><span>•</span> Communication via @gmail.com or @outlook.com</li>
              <li className="flex items-start gap-2"><span>•</span> Immediate job offers without technical rounds</li>
              <li className="flex items-start gap-2"><span>•</span> Interviewing only via WhatsApp or Telegram</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h4 className="text-green-800 font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Real Speshway Process
            </h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-start gap-2"><span>•</span> Zero-fee recruitment policy</li>
              <li className="flex items-start gap-2"><span>•</span> Official emails from @speshway.com</li>
              <li className="flex items-start gap-2"><span>•</span> Multi-stage technical & HR interviews</li>
              <li className="flex items-start gap-2"><span>•</span> Proper offer letters with verification links</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Client Testimonials & Project Portfolio</h2>
        <p>
          A "fake" company rarely has a track record of successful projects. Speshway Solutions has served numerous clients globally across various domains, including Web Development, Mobile Apps, and Digital Transformation.
        </p>
        <p>
          Our <Link to="/projects" className="text-primary font-semibold">Portfolio</Link> showcases the real-world impact we've created. From startups to established enterprises, our clients trust us for our technical expertise and transparent delivery process.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. Why Speshway is the Opposite of Fake</h2>
        <p>
          Speshway is built on the pillars of transparency, innovation, and community. We actively participate in tech events, contribute to open-source discussions, and maintain an active social media presence where we share our company culture and employee achievements.
        </p>
        <ul>
          <li><strong>Transparent Hiring:</strong> Every candidate is treated with respect and evaluated fairly.</li>
          <li><strong>Employee Growth:</strong> We invest in our team's continuous learning and development.</li>
          <li><strong>Client Success:</strong> We don't just build software; we build solutions that solve business problems.</li>
        </ul>

        <div className="bg-primary text-primary-foreground p-8 rounded-2xl my-12 text-center not-prose">
          <h3 className="text-2xl font-bold mb-4">Still Have Doubts? Verify Directly</h3>
          <p className="mb-8 opacity-90">
            Don't rely on rumors. Speak with our official verification team to confirm any job offer or company detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Verify My Job Offer</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/about">View Company Details</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: Speshway is 100% Legit</h2>
        <p>
          To conclude, <strong>Speshway Solutions is a real and legitimate company.</strong> While fraudulent actors may try to misuse our brand name, our official registration, physical office at T-Hub, and transparent business practices stand as solid proof of our integrity. 
        </p>
        <p>
          Always verify information through our official channels and stay alert against recruitment scams. We are here to build technology that matters, and we do so with complete honesty and dedication.
        </p>

        {/* Comparison Section (Bonus) */}
        <div className="mt-16 p-8 border rounded-2xl bg-muted/30 not-prose">
          <h3 className="text-2xl font-bold mb-6">Speshway vs. Recruitment Scams</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 font-bold">Feature</th>
                  <th className="py-4 font-bold text-green-600">Speshway Solutions</th>
                  <th className="py-4 font-bold text-red-600">Common Job Scams</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 font-medium">Registration</td>
                  <td className="py-4">MCA Registered (Active)</td>
                  <td className="py-4">Not Registered / Fake Docs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 font-medium">Recruitment Fee</td>
                  <td className="py-4">₹0 (Strict Zero-Fee Policy)</td>
                  <td className="py-4">Asks for "Security Deposit"</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 font-medium">Office Location</td>
                  <td className="py-4">T-Hub, Hyderabad (Physical)</td>
                  <td className="py-4">Virtual / No Real Office</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Official Email</td>
                  <td className="py-4">@speshway.com</td>
                  <td className="py-4">Gmail / Outlook / Yahoo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
};

export default IsSpeshwayRealOrFake;
