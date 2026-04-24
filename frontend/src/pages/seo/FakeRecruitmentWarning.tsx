import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { ShieldAlert, CheckCircle, Mail, MessageSquare, AlertTriangle, XCircle, Search, PhoneOff, AlertOctagon, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FakeRecruitmentWarning = () => {
  const faqItems = [
    {
      question: "Is there a Speshway scam?",
      answer: "No, Speshway Solutions is a legitimate IT company. However, scammers frequently misuse our name to conduct fake recruitment drives. We never ask for money for jobs, training, or equipment."
    },
    {
      question: "How can I identify fake Speshway messages?",
      answer: "Fake messages often come from free email services (like Gmail, Yahoo, or Outlook) or WhatsApp numbers. They usually demand immediate payment or sensitive information. Official communications only come from @speshway.com."
    },
    {
      question: "Does Speshway ask for a security deposit or laptop fee?",
      answer: "Never. We have a strict zero-fee recruitment policy. If anyone asks you for money in the name of Speshway Solutions, it is 100% a scam."
    },
    {
      question: "What should I do if I receive a fake job offer?",
      answer: "Most reports of 'scams' on social media platforms like Instagram are based on fraudulent actors misusing our company name. We urge candidates to only trust official communications from @speshway.com and our official Instagram handles @speshwaysolutionsofficial and @speshway_solutions_hyderabad."
    },
  ];

  const breadcrumbItems = [
    { name: "Trust Center", item: "/fraud-notice" },
    { name: "Fake Recruitment Warning", item: "/fake-recruitment-warning" }
  ];

  return (
    <SEOLayout
      title="Speshway Scam Warning | Identify Fake Recruitment Messages"
      description="Beware of the fake recruitment Speshway scam. Learn how to identify fraudulent job offers, check our official email format, and verify official Instagram handles."
      keywords="speshway scam, fake recruitment, speshway fake messages, speshway solutions fraud, job scam warning, speshway official instagram, speshway instagram posts"
      canonical="/fake-recruitment-warning"
      h1="Fake Recruitment Warning: Protect Yourself from the 'Speshway Scam'"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <span className="text-red-700 bg-red-50 px-3 py-1 rounded-full flex items-center gap-1 border border-red-200">
            <AlertTriangle className="w-4 h-4"/> Fraud Alert
          </span>
          <span className="text-blue-700 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1 border border-blue-200">
            <ShieldAlert className="w-4 h-4"/> Official Notice
          </span>
        </div>
      }
    >
      <section>
        <p className="lead text-lg text-gray-700 mb-8">
          Are you searching for information about a <strong>"Speshway scam"</strong>? If you have received an unsolicited job offer or a demand for money claiming to be from Speshway Solutions, you are likely the target of a fake recruitment drive. This page will help you identify fraudulent messages and verify official communications.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl my-8">
          <h2 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
            <AlertOctagon className="w-6 h-6" />
            URGENT AWARENESS NOTICE
          </h2>
          <p className="text-red-800 mb-0">
            Speshway Solutions Private Limited <strong>NEVER</strong> asks for any form of payment, security deposit, registration fee, or laptop charges during the recruitment process. We do not hire via WhatsApp text messages or Telegram.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">1. Examples of Fake Messages (Screenshots)</h2>
        <p className="mb-6">
          Scammers use psychological pressure and the promise of high-paying jobs to trick victims. Below are mockups of common fraudulent messages misusing the Speshway name. If you receive something similar, <strong>do not respond.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
          {/* Fake WhatsApp Message Mockup */}
          <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="bg-green-600 text-white p-3 rounded-t-xl flex items-center gap-3">
              <PhoneOff className="w-5 h-5" />
              <div className="font-semibold text-sm">Unknown Number (+91 98765 43210)</div>
            </div>
            <div className="bg-[#E5DDD5] p-4 h-64 overflow-y-auto space-y-4 rounded-b-xl">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-800 border-l-4 border-red-500">
                "Congratulations! Your profile has been shortlisted for the HR role at Speshway Solutions. Salary: ₹45,000/month. Work from home."
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-800 border-l-4 border-red-500">
                "To process your offer letter and company laptop, please pay a refundable security deposit of ₹2,500 via UPI immediately."
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg rotate-[-15deg] shadow-lg border-2 border-white">
              FAKE WHATSAPP
            </div>
          </div>

          {/* Fake Email Mockup */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="border-b pb-3 mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900">From:</span>
                <span className="text-red-600 font-medium text-sm bg-red-50 px-2 py-0.5 rounded">hr.speshway@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Subject:</span>
                <span className="text-gray-800 text-sm">Urgent: Direct Joining Letter - Speshway</span>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-3">
              <p>Dear Candidate,</p>
              <p>You have been selected for the Software Developer position. Your direct joining is confirmed.</p>
              <p className="bg-red-50 p-2 border border-red-100 rounded text-red-800 font-medium">
                Please transfer ₹5,000 for document verification and ID card generation to the following account details...
              </p>
              <p>Regards,<br/>HR Department, Speshway</p>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg rotate-[15deg] shadow-lg border-2 border-white">
              FAKE EMAIL
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">2. Official Email Format & Communication Channels</h2>
        <p>
          Speshway Solutions maintains strict corporate communication standards. You can easily spot a fake offer by checking the sender's email address.
        </p>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-8 not-prose shadow-sm">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8 bg-green-50/50">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Official Channels</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-green-800">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-medium">careers@speshway.com</span>
                </li>
                <li className="flex items-center gap-3 text-green-800">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-medium">hr@speshway.com</span>
                </li>
                <li className="flex items-center gap-3 text-green-800">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-medium">name@speshway.com</span>
                </li>
              </ul>
              <p className="text-sm text-green-700 mt-4 font-medium">
                * All legitimate emails end EXCLUSIVELY with <strong>@speshway.com</strong>
              </p>
            </div>
            
            <div className="p-8 bg-red-50/50">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Scam Channels (Do Not Trust)</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-red-800">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="line-through opacity-70">speshway.hr@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-red-800">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="line-through opacity-70">careers.speshway@yahoo.com</span>
                </li>
                <li className="flex items-center gap-3 text-red-800">
                  <MessageSquare className="w-5 h-5 text-red-500" />
                  <span>Direct WhatsApp Messages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">3. How to Verify a Job Offer</h2>
        <p>
          If you have received an offer letter or interview invitation and want to ensure it is not part of a "Speshway scam", follow these verification steps immediately:
        </p>

        <ol className="space-y-4 my-8 list-decimal pl-6">
          <li className="pl-2">
            <strong>Check the Email Domain:</strong> Expand the sender details in your email client. Ensure the email ends exactly with <code>@speshway.com</code>. Scammers often use lookalike domains like <code>@speshway-careers.com</code> or free providers.
          </li>
          <li className="pl-2">
            <strong>Review the Interview Process:</strong> Speshway conducts multiple rounds of technical and HR interviews, usually via Microsoft Teams or Google Meet, or in person at our T-Hub office. We do not hire based solely on a resume submission or a simple phone call.
          </li>
          <li className="pl-2">
            <strong>Look for Red Flags:</strong> Spelling mistakes, poor grammar, blurry company logos, and high-pressure tactics ("pay within 2 hours or lose the job") are clear indicators of fraud.
          </li>
          <li className="pl-2">
            <strong>Contact Us Directly:</strong> The safest way to verify is to reach out to our official support team through our website.
          </li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">4. Official Social Media Verification</h2>
        <p className="mb-6">
          Scammers often create fake Instagram and LinkedIn profiles to spread misinformation or lure candidates. Only follow and trust these verified official handles:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 flex flex-col items-center text-center">
            <Instagram className="w-10 h-10 text-pink-600 mb-4" />
            <h4 className="font-bold text-pink-900">Main Official Handle</h4>
            <a href="https://www.instagram.com/speshwaysolutionsofficial/" target="_blank" rel="noopener noreferrer me" className="text-pink-700 font-bold hover:underline mt-2">@speshwaysolutionsofficial</a>
            <p className="text-xs text-pink-600 mt-2 italic">Follow for global news and official company announcements.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 flex flex-col items-center text-center">
            <Instagram className="w-10 h-10 text-pink-600 mb-4" />
            <h4 className="font-bold text-pink-900">Hyderabad Hub Handle</h4>
            <a href="https://www.instagram.com/speshway_solutions_hyderabad/" target="_blank" rel="noopener noreferrer me" className="text-pink-700 font-bold hover:underline mt-2">@speshway_solutions_hyderabad</a>
            <p className="text-xs text-pink-600 mt-2 italic">Follow for T-Hub office culture and local recruitment.</p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-12 text-center not-prose">
          <Search className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Verify Your Offer Now</h3>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Don't take risks with your personal information or money. Send your offer letter or suspicious communication directly to our verification team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link to="/contact">Contact Verification Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/about">View Official Company Info</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">Final Word on the "Speshway Scam"</h2>
        <p>
          Speshway Solutions Private Limited is a legally registered, operational IT company based in Hyderabad. The term "Speshway scam" exists online solely because cybercriminals have targeted our reputable brand name to deceive innocent job seekers. We are actively working with legal authorities to take down fraudulent websites and phone numbers. Stay vigilant, stay safe, and always verify.
        </p>
      </section>
    </SEOLayout>
  );
};

export default FakeRecruitmentWarning;