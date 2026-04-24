import SEOLayout from "@/components/SEOLayout";
import { Link } from "react-router-dom";
import { Camera, Map, Building, MapPin, Navigation, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayHyderabadOfficeTour = () => {
  const faqItems = [
    {
      question: "Where exactly is Speshway located in Hyderabad?",
      answer: "We are located at T-Hub Phase 2, which is situated in the heart of Hyderabad's IT corridor, Knowledge City, Raidurgam."
    },
    {
      question: "Can I visit the Speshway office for an interview?",
      answer: "Yes, candidates invited for in-person interviews can visit our office. Please carry a valid ID for security clearance at the T-Hub main gate."
    },
    {
      question: "What are the facilities available at Speshway's T-Hub office?",
      answer: "Our office features high-speed internet, ergonomic workstations, collaborative meeting rooms, and access to T-Hub's world-class amenities including cafes and networking zones."
    }
  ];

  const breadcrumbItems = [
    { name: "About", item: "/about" },
    { name: "Office Tour", item: "/speshway-solutions-hyderabad-office-location-tour" }
  ];

  return (
    <SEOLayout
      title="Speshway Solutions Hyderabad Office: Location, Photos & Tour"
      description="Take a virtual tour of the Speshway Solutions office at T-Hub Phase 2, Hyderabad. See our workspace, find directions, and learn about our state-of-the-art facilities."
      keywords="speshway hyderabad office, speshway solutions t-hub, speshway office tour, speshway solutions address hyderabad, speshway workplace photos, is speshway real office"
      canonical="/speshway-solutions-hyderabad-office-location-tour"
      h1="Our Workspace: Inside Speshway Solutions at T-Hub Hyderabad"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
    >
      <section>
        <p className="lead">
          A real company has a real presence. <strong>Speshway Solutions</strong> operates from one of the most prestigious technology addresses in India: <strong>T-Hub Phase 2</strong>. Join us for a quick tour of where the magic happens.
        </p>

        <div className="my-12 relative rounded-3xl overflow-hidden aspect-video bg-muted flex items-center justify-center border shadow-xl">
          <div className="text-center p-8">
            <Camera className="w-16 h-16 mx-auto mb-4 text-primary/40" />
            <p className="text-muted-foreground font-medium">Virtual Tour Gallery Coming Soon</p>
            <p className="text-xs text-muted-foreground mt-2">Captured at T-Hub Phase 2, Hyderabad</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Located at the Heart of Innovation</h2>
        <p>
          Being part of the <strong>T-Hub ecosystem</strong> means more than just having an office. It means being surrounded by the brightest minds in the country. Our location in Knowledge City, Raidurgam, puts us right next to global tech giants like Google, Amazon, and Microsoft.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="p-8 border rounded-3xl bg-muted/30">
            <Building className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">The Infrastructure</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>•</span> High-Speed Fiber Connectivity</li>
              <li className="flex gap-2"><span>•</span> Modern Collaborative Spaces</li>
              <li className="flex gap-2"><span>•</span> 24/7 Security and Surveillance</li>
              <li className="flex gap-2"><span>•</span> State-of-the-art Conference Rooms</li>
            </ul>
          </div>
          <div className="p-8 border rounded-3xl bg-muted/30">
            <MapPin className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">The Location</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              T-Hub Phase 2, 20, Knowledge City Rd, <br />
              Raidurgam, Hyderabad, <br />
              Telangana 500081
            </p>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://maps.app.goo.gl/T-Hub-Location" target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-6">Why Our Office Location Matters</h2>
        <p>
          For those asking <strong>"Is Speshway real or fake?"</strong>, our physical presence in a government-backed incubator like T-Hub is the ultimate proof. We invite prospective clients and partners to visit us (by appointment) and see our team in action.
        </p>

        <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl my-12 flex gap-6 items-start">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-blue-900 font-bold mb-2">Visiting Information</h3>
            <p className="text-blue-800 text-sm">
              T-Hub is a high-security zone. Visitors must have a pre-registered invite or a confirmed appointment. Please reach out to your point of contact at Speshway to facilitate your entry pass before your visit.
            </p>
          </div>
        </div>

        <div className="mt-20 p-10 bg-primary rounded-3xl text-primary-foreground text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Want to Work Here?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Experience the energy of T-Hub and the innovation of Speshway. Check out our open positions and join our Hyderabad team.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/career">Browse Hyderabad Jobs</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayHyderabadOfficeTour;
