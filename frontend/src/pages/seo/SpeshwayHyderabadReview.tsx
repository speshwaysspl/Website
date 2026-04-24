import SEOLayout from "@/components/SEOLayout";
import InternalLinks from "@/components/InternalLinks";
import { Link } from "react-router-dom";
import { MapPin, Building, Star, CheckCircle, Users, Coffee, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeshwayHyderabadReview = () => {
  const faqItems = [
    {
      question: "Where is Speshway Solutions located in Hyderabad?",
      answer: "Speshway Solutions is located at T-Hub Phase 2, Knowledge City Road, Raidurgam, Hyderabad, Telangana 500081. It is situated in the heart of Hyderabad's IT corridor.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Speshway Solutions is located at T-Hub Phase 2, Knowledge City Road, Raidurgam, Hyderabad, Telangana 500081. It is situated in the heart of Hyderabad's IT corridor.
          </p>
          <p className="text-sm text-muted-foreground">
            To understand how this location contributes to our reputation, you can read{" "}
            <Link
              to="/speshway-solutions-review-2026"
              className="text-primary font-semibold hover:underline"
              title="See how Speshway's Hyderabad presence impacts its 2026 review"
            >
              the 2026 company review
            </Link>{" "}
            and{" "}
            <Link
              to="/speshway-employee-feedback"
              className="text-primary font-semibold hover:underline"
              title="Read what Hyderabad-based employees say about working at Speshway"
            >
              Hyderabad employee feedback
            </Link>
            .
          </p>
        </div>
      )
    },
    {
      question: "Is Speshway Solutions a top IT company in Hyderabad?",
      answer: "Yes, Speshway is recognized as one of the fastest-growing IT services companies in Hyderabad, particularly known for its innovation and presence in the T-Hub ecosystem.",
      richAnswer: (
        <div className="space-y-3">
          <p>
            Yes, Speshway is recognized as one of the fastest-growing IT services companies in Hyderabad, particularly known for its innovation and presence in the T-Hub ecosystem.
          </p>
          <p className="text-sm text-muted-foreground">
            For more insight into our legitimacy and trust, explore{" "}
            <Link
              to="/is-speshway-legit-company"
              className="text-primary font-semibold hover:underline"
              title="Check if Speshway is a legit registered IT company in Hyderabad"
            >
              our legitimacy report
            </Link>{" "}
            and{" "}
            <Link
              to="/speshway-solutions-trust-score"
              className="text-primary font-semibold hover:underline"
              title="See the 2026 Speshway Solutions trust score and ratings"
            >
              latest trust score
            </Link>
            .
          </p>
        </div>
      )
    },
    {
      question: "Can I visit the Speshway Hyderabad office?",
      answer: "Yes, we welcome clients and potential partners to visit our office. We recommend scheduling an appointment in advance through our contact page."
    },
    {
      question: "What kind of jobs does Speshway offer in Hyderabad?",
      answer: "We offer a variety of roles including Software Development (Frontend, Backend, Fullstack), UI/UX Design, Project Management, and Digital Marketing."
    }
  ];

  const breadcrumbItems = [
    { name: "Locations", item: "/speshway-hyderabad-company-review" },
    { name: "Hyderabad Review", item: "/speshway-hyderabad-company-review" }
  ];

  return (
    <SEOLayout
      title="Speshway Hyderabad Company Review: T-Hub's Tech Leader"
      description="Read the latest Speshway Hyderabad company review. Explore our office at T-Hub, work culture, and why we are a top choice for IT services in Telangana."
      keywords="speshway hyderabad company review, speshway solutions hyderabad office, speshway t-hub hyderabad, it companies in hyderabad reviews"
      canonical="/speshway-hyderabad-company-review"
      h1="Speshway Hyderabad Company Review: Innovation at the Heart of T-Hub"
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      summaryBox={
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <MapPin className="w-5 h-5" /> T-Hub, Knowledge City, Hyderabad
          </div>
          <div className="hidden md:block h-4 w-px bg-muted-foreground/30"></div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 4.8/5 Rating based on Hyderabad Employees
          </div>
        </div>
      }
    >
      <section>
        <p className="lead">
          Hyderabad, known as 'Cyberabad', is a global hub for technology and innovation. At the center of this thriving ecosystem is <strong>Speshway Solutions</strong>. This review focuses on our Hyderabad operations, our presence at T-Hub, and what makes us a standout IT company in the region.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">1. Prime Location: T-Hub Phase 2</h2>
        <p>
          Our Hyderabad headquarters is located in the iconic <strong>T-Hub Phase 2</strong> building. As Asia's largest innovation hub, T-Hub provides an unparalleled environment for growth, collaboration, and technological advancement.
        </p>
        <p>
          Operating from T-Hub allows our team to be part of a vibrant community of innovators, entrepreneurs, and tech giants. The state-of-the-art infrastructure and networking opportunities significantly enhance our ability to deliver world-class solutions to our global clients.
        </p>

        <div className="my-10 overflow-hidden rounded-2xl border bg-card">
          <div className="aspect-video bg-muted flex items-center justify-center relative">
             {/* Placeholder for an actual office image */}
             <Building className="w-20 h-20 text-muted-foreground/20" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-sm">Speshway Hyderabad Office @ T-Hub</span>
             </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold mb-2">Office Highlights</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> Modern Workspace</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> Collaborative Zones</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> High-speed Connectivity</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" /> Innovation Labs</div>
            </div>
          </div>
        </div>

        <div className="my-10 not-prose">
          <InternalLinks
            layout="chips"
            title="People also search for Speshway Hyderabad company reviews"
          />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">2. Work Culture in the Hyderabad Office</h2>
        <p>
          The work culture at Speshway Hyderabad is a blend of <strong>professionalism and creativity</strong>. We believe that a happy team is a productive team. Our Hyderabad office is known for:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 my-8 not-prose list-none p-0">
          <li className="flex items-start gap-3 p-4 border rounded-xl bg-muted/20">
            <Users className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Collaborative Spirit</span>
              <span className="text-sm text-muted-foreground">Teams work together across projects to solve complex problems.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-4 border rounded-xl bg-muted/20">
            <Coffee className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Employee Engagement</span>
              <span className="text-sm text-muted-foreground">Regular team-building activities, tech talks, and fun Fridays.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-4 border rounded-xl bg-muted/20">
            <Briefcase className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Mentorship</span>
              <span className="text-sm text-muted-foreground">Junior developers receive direct guidance from industry veterans.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-4 border rounded-xl bg-muted/20">
            <Globe className="w-5 h-5 text-primary mt-1" />
            <div>
              <span className="font-bold block">Global Exposure</span>
              <span className="text-sm text-muted-foreground">Opportunity to work on projects for international clients.</span>
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">3. Why Techies Choose Speshway Hyderabad</h2>
        <p>
          In a city with thousands of IT companies, Speshway stands out for its <strong>focus on quality over quantity</strong>. We don't just hire employees; we build a community. Our retention rate in the Hyderabad office is among the highest in the industry, thanks to our competitive benefits and growth-oriented mindset.
        </p>
        <p>
          "Joining Speshway was the best decision for my career. The exposure to the T-Hub ecosystem and the chance to work on high-impact projects is something you won't find in many large corporations," says one of our Senior Fullstack Developers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Contributing to Hyderabad's Tech Growth</h2>
        <p>
          Speshway is not just a consumer of the Hyderabad tech ecosystem; we are an active contributor. We regularly host and participate in tech meetups, hackathons, and innovation workshops at T-Hub. Our goal is to help position Hyderabad as the leading tech city in the world.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">5. Visiting Our Hyderabad Office</h2>
        <p>
          Located in Raidurgam, our office is easily accessible via the Hyderabad Metro and other public transport. If you're a client looking for IT services or a candidate interested in joining us, we'd love to meet you.
        </p>

        <div className="bg-primary text-primary-foreground p-10 rounded-2xl my-12 text-center not-prose">
          <h3 className="text-3xl font-bold mb-4">Connect with Speshway Hyderabad</h3>
          <p className="mb-8 opacity-90 text-lg">
            Experience the innovation firsthand. Reach out to us for a meeting or to explore career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              <Link to="/career">Explore Jobs in Hyderabad</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion: The Future of IT in Hyderabad</h2>
        <p>
          Speshway Solutions is proud to be a part of Hyderabad's success story. Our office at T-Hub is more than just a workplace; it's a launchpad for innovation. As we continue to grow, our commitment to the city and its talented tech community remains stronger than ever.
        </p>
      </section>
    </SEOLayout>
  );
};

export default SpeshwayHyderabadReview;
