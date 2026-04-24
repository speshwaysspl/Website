import SEOLayout from "@/components/SEOLayout";
import { Landmark, FileCheck, ShieldCheck, Building2, Search } from "lucide-react";

const SpeshwayRegistrationDetails = () => {
  const faqItems = [
    {
      question: "Is Speshway Solutions Private Limited a registered company?",
      answer: "Yes, Speshway Solutions Private Limited is a legally registered company under the Companies Act, 2013, with the Ministry of Corporate Affairs (MCA), Government of India."
    },
    {
      question: "What is the CIN of Speshway Solutions?",
      answer: "The Corporate Identification Number (CIN) is a unique 21-digit number assigned to every company registered in India. You can verify Speshway's CIN on the official MCA portal."
    },
    {
      question: "Where is the registered office of Speshway?",
      answer: "The company's primary operational office is located at T-Hub Phase 2, Knowledge City, Hyderabad, which is a government-backed startup incubator."
    }
  ];

  const breadcrumbItems = [
    { name: "Transparency", item: "/is-speshway-real-or-fake" },
    { name: "Registration Details", item: "/speshway-solutions-pvt-ltd-registration-details" }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Pvt Ltd Registration & Legal Verification Details"
      description="Verify Speshway Solutions Private Limited registration details. Check MCA status, CIN, GST compliance, and official Hyderabad office address for legal verification."
      keywords="speshway registration details, speshway solutions pvt ltd cin, is speshway registered, speshway mca status, speshway solutions legal verification"
      canonical="/speshway-solutions-pvt-ltd-registration-details"
      h1="Speshway Solutions Private Limited: Legal Registration & Verification"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          Transparency is the foundation of trust. For anyone asking <strong>"Is Speshway Solutions registered?"</strong>, we provide all the necessary legal details to verify our status as a legitimate IT services provider in India.
        </p>

        <div className="bg-muted/30 p-8 rounded-2xl my-10 border border-border">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-primary" /> Corporate Identification
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Legal Entity Name</p>
              <p className="font-bold">Speshway Solutions Private Limited</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Company Status</p>
              <p className="font-bold text-green-600 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Active & Compliant
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Industry Category</p>
              <p className="font-bold">Computer Related Services</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Registered Office Location</p>
              <p className="font-bold">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">How to Verify Speshway on MCA Portal?</h2>
        <p>
          The most reliable way to verify any Indian company is through the official <strong>Ministry of Corporate Affairs (MCA)</strong> website. Follow these steps:
        </p>
        <ol className="space-y-4 my-8">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <strong>Visit MCA Website:</strong> Go to mca.gov.in and navigate to 'MCA Services'.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <strong>Check Company Name:</strong> Use the 'Check Company Name' tool and enter "Speshway".
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <strong>View Master Data:</strong> You can view the full public master data including date of incorporation and authorized capital.
            </div>
          </li>
        </ol>

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl my-10">
          <h3 className="text-blue-900 font-bold mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> T-Hub Residency Status
          </h3>
          <p className="text-blue-800 text-sm">
            Speshway Solutions is proud to be a resident startup at <strong>T-Hub Phase 2</strong>. T-Hub is a premier startup ecosystem supported by the Government of Telangana. Our presence here is further proof of our authenticity and commitment to the Indian tech ecosystem.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Tax & Compliance Details</h2>
        <p>
          Beyond company registration, Speshway Solutions maintains full compliance with Indian tax laws. We are a GST-registered entity, which is mandatory for any legitimate business providing services in India.
        </p>
        <ul>
          <li><strong>GST Compliance:</strong> Regular filing and transparent invoicing.</li>
          <li><strong>Professional Tax:</strong> Adherence to state-level employment regulations.</li>
          <li><strong>Digital Security:</strong> Implementation of data privacy standards for all client projects.</li>
        </ul>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayRegistrationDetails;
