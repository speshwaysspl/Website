import SEOLayout from "@/components/SEOLayout";
import { Mail, Phone, MapPin, Globe, Clock, MessageSquare, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayOfficialContact = () => {
  const faqItems = [
    {
      question: "What is the official email address for Speshway Solutions?",
      answer: "The official email domain for Speshway is @speshway.com. For general inquiries, contact info@speshway.com. For recruitment, look for emails from hr@speshway.com."
    },
    {
      question: "Where is the Speshway office located in Hyderabad?",
      answer: "Speshway Solutions is located at T-Hub Phase 2, Knowledge City Road, Raidurgam, Hyderabad, Telangana 500081."
    },
    {
      question: "How can I contact Speshway for a business project?",
      answer: "You can reach out via the contact form on our official website speshway.com or email us at info@speshway.com with your project requirements."
    }
  ];

  const breadcrumbItems = [
    { name: "About", item: "/about" },
    { name: "Official Contact", item: "/speshway-solutions-official-contact-and-address" }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Official Contact Details & Office Address"
      description="Get the official contact details for Speshway Solutions Private Limited. Find our T-Hub Hyderabad office address, official email domains, and verified phone numbers."
      keywords="speshway solutions contact, speshway hyderabad office address, speshway official email, speshway solutions phone number, contact speshway solutions pvt ltd"
      canonical="/speshway-solutions-official-contact-and-address"
      h1="Official Contact & Address: Speshway Solutions Private Limited"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          To ensure you are communicating with the <strong>real Speshway Solutions</strong>, always use our verified contact channels. This guide provides our official physical address and digital contact points.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 my-10 not-prose">
          <div className="p-6 border rounded-2xl bg-muted/30">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Physical Office
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              T-Hub Phase 2,<br />
              Knowledge City Road, Raidurgam,<br />
              Hyderabad, Telangana 500081,<br />
              India
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-muted/30">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Digital Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex justify-between"><span>General:</span> <span className="font-medium">info@speshway.com</span></p>
              <p className="flex justify-between"><span>HR/Hiring:</span> <span className="font-medium">hr@speshway.com</span></p>
              <p className="flex justify-between"><span>Support:</span> <span className="font-medium">support@speshway.com</span></p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Verified Communication Domains</h2>
        <p>
          Scammers often use fake email IDs to impersonate our team. Please note that <strong>every official communication</strong> from Speshway Solutions will only come from the following domain:
        </p>
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl my-6 flex items-center gap-4">
          <Globe className="w-10 h-10 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-mono text-xl text-green-800 font-bold">@speshway.com</p>
            <p className="text-sm text-green-700">We never use @gmail.com, @outlook.com, or other free email services for official business.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Business Hours</h2>
        <p>
          Our team at T-Hub is available during standard business hours. For international clients, we offer flexible meeting times across different time zones.
        </p>
        <div className="flex items-center gap-6 my-8 p-6 border rounded-2xl w-fit">
          <Clock className="w-8 h-8 text-primary" />
          <div>
            <p className="font-bold">Monday - Friday</p>
            <p className="text-sm text-muted-foreground">09:30 AM - 06:30 PM (IST)</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Official Social Media Profiles</h2>
        <p>
          Connect with us and follow our official updates on these verified social media platforms. We recommend following our Instagram for daily office life and official company posts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 not-prose">
          <a href="https://www.instagram.com/speshwaysolutionsofficial/" target="_blank" rel="noopener noreferrer me" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-muted transition-colors">
            <Instagram className="w-5 h-5 text-pink-600" />
            <span className="font-bold text-sm">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer me" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-muted transition-colors">
            <Linkedin className="w-5 h-5 text-blue-700" />
            <span className="font-bold text-sm">LinkedIn</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61584485021568" target="_blank" rel="noopener noreferrer me" className="flex items-center gap-3 p-4 border rounded-xl hover:bg-muted transition-colors">
            <Facebook className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm">Facebook</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground mb-10">
          <strong>Note:</strong> We also maintain a regional handle for our Hyderabad office: <a href="https://www.instagram.com/speshway_solutions_hyderabad/" target="_blank" rel="noopener noreferrer me" className="text-primary hover:underline">@speshway_solutions_hyderabad</a>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Why Verify Our Address?</h2>
        <p>
          A physical address in a prestigious location like <strong>T-Hub</strong> is a key indicator of a company's legitimacy. Unlike "fake" companies that only have a PO box or a residential address, Speshway operates from a world-class technology ecosystem.
        </p>
        <div className="bg-muted p-8 rounded-2xl my-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Visit Us by Appointment</h3>
            <p className="text-sm text-muted-foreground mb-6">
              If you are a prospective client or a candidate invited for a face-to-face round, you are welcome to visit our office. Please ensure you have a confirmed appointment for entry into the T-Hub premises.
            </p>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="w-4 h-4" /> Schedule a Meeting
            </Button>
          </div>
          <div className="w-full md:w-64 aspect-square bg-gray-200 rounded-xl overflow-hidden grayscale opacity-50 flex items-center justify-center text-xs text-center p-4">
            [Map Placeholder for T-Hub Hyderabad]
          </div>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayOfficialContact;
