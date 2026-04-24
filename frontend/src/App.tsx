import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { PageTransition } from "@/components/animations/PageTransition";
import ProtectedRoute from "@/components/ProtectedRoute";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Team = lazy(() => import("./pages/Team"));
const Career = lazy(() => import("./pages/Career"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const SendResume = lazy(() => import("./pages/SendResume"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FraudNotice = lazy(() => import("./pages/FraudNotice"));
const Submissions = lazy(() => import("./pages/admin/Submissions"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ManageServices = lazy(() => import("./pages/admin/ManageServices"));
const ManagePortfolio = lazy(() => import("./pages/admin/ManagePortfolio"));
const ManageTeam = lazy(() => import("./pages/admin/ManageTeam"));
const ManageGallery = lazy(() => import("./pages/admin/ManageGallery"));
const ManageClients = lazy(() => import("./pages/admin/ManageClients"));
const ManageHomeBanners = lazy(() => import("./pages/admin/ManageHomeBanners"));
const ForgotPassword = lazy(() => import("./pages/admin/ForgotPassword"));
const AdminSettings = lazy(() => import("./pages/admin/Settings"));
const ManageJobs = lazy(() => import("./pages/admin/ManageJobs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// SEO Pages
const IsSpeshwayRealOrFake = lazy(() => import("./pages/seo/IsSpeshwayRealOrFake"));
const SpeshwayReview2026 = lazy(() => import("./pages/seo/SpeshwayReview2026"));
const SpeshwayJobScamTruth = lazy(() => import("./pages/seo/SpeshwayJobScamTruth"));
const IsSpeshwayLegit = lazy(() => import("./pages/seo/IsSpeshwayLegit"));
const SpeshwayHyderabadReview = lazy(() => import("./pages/seo/SpeshwayHyderabadReview"));
const SpeshwayCareerReview = lazy(() => import("./pages/seo/SpeshwayCareerReview"));
const SpeshwayTrustScore = lazy(() => import("./pages/seo/SpeshwayTrustScore"));
const SpeshwayClientTestimonials = lazy(() => import("./pages/seo/SpeshwayClientTestimonials"));
const SpeshwayEmployeeFeedback = lazy(() => import("./pages/seo/SpeshwayEmployeeFeedback"));
const SpeshwayVerification = lazy(() => import("./pages/seo/SpeshwayVerification"));
const IdentifyFakeJobOffersIndia = lazy(() => import("./pages/seo/IdentifyFakeJobOffersIndia"));
const SpeshwayVsFakeRecruiters = lazy(() => import("./pages/seo/SpeshwayVsFakeRecruiters"));
const SpeshwayScamExplained = lazy(() => import("./pages/seo/SpeshwayScamExplained"));
const ScammersMisusingNames = lazy(() => import("./pages/seo/ScammersMisusingNames"));
const FakeRecruitmentWarning = lazy(() => import("./pages/seo/FakeRecruitmentWarning"));
const SpeshwayInternshipReviews = lazy(() => import("./pages/seo/SpeshwayInternshipReviews"));
const SpeshwayRegistrationDetails = lazy(() => import("./pages/seo/SpeshwayRegistrationDetails"));
const SpeshwayOfficialContact = lazy(() => import("./pages/seo/SpeshwayOfficialContact"));
const SpeshwayTechnologyStack = lazy(() => import("./pages/seo/SpeshwayTechnologyStack"));
const SpeshwayWorkCulture = lazy(() => import("./pages/seo/SpeshwayWorkCulture"));
const SpeshwayLeadershipVision = lazy(() => import("./pages/seo/SpeshwayLeadershipVision"));
const SpeshwayClientSuccess = lazy(() => import("./pages/seo/SpeshwayClientSuccess"));
const SpeshwaySecurityMeasures = lazy(() => import("./pages/seo/SpeshwaySecurityMeasures"));
const SpeshwayHyderabadOfficeTour = lazy(() => import("./pages/seo/SpeshwayHyderabadOfficeTour"));
const SpeshwayCompanyAwards = lazy(() => import("./pages/seo/SpeshwayCompanyAwards"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const RouterViews = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/aboutus" element={<Navigate to="/about" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/about.php" element={<Navigate to="/about" replace />} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/service" element={<Navigate to="/services" replace />} />
        <Route path="/services.php" element={<Navigate to="/services" replace />} />
        <Route path="/projects" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/projects.php" element={<Navigate to="/projects" replace />} />
        <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
        <Route path="/portfolio.php" element={<Navigate to="/projects" replace />} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="/careers" element={<Navigate to="/career" replace />} />
        <Route path="/career.php" element={<Navigate to="/career" replace />} />
        <Route path="/careers.php" element={<Navigate to="/career" replace />} />
        <Route path="/career/:id" element={<PageTransition><JobDetails /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/send-resume" element={<PageTransition><SendResume /></PageTransition>} />
        <Route path="/fraud-notice" element={<PageTransition><FraudNotice /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/gallery" element={<Navigate to="/blog" replace />} />
        <Route path="/blog" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        
        {/* Search Domination Cluster - SEO Pages */}
        <Route path="/is-speshway-real-or-fake" element={<PageTransition><IsSpeshwayRealOrFake /></PageTransition>} />
        <Route path="/speshway-solutions-review-2026" element={<PageTransition><SpeshwayReview2026 /></PageTransition>} />
        <Route path="/speshway-job-scam-truth" element={<PageTransition><SpeshwayJobScamTruth /></PageTransition>} />
        <Route path="/is-speshway-legit-company" element={<PageTransition><IsSpeshwayLegit /></PageTransition>} />
        <Route path="/speshway-hyderabad-company-review" element={<PageTransition><SpeshwayHyderabadReview /></PageTransition>} />
        <Route path="/speshway-career-review" element={<PageTransition><SpeshwayCareerReview /></PageTransition>} />
        <Route path="/speshway-solutions-trust-score" element={<PageTransition><SpeshwayTrustScore /></PageTransition>} />
        <Route path="/speshway-client-testimonials" element={<PageTransition><SpeshwayClientTestimonials /></PageTransition>} />
        <Route path="/speshway-employee-feedback" element={<PageTransition><SpeshwayEmployeeFeedback /></PageTransition>} />
        <Route path="/speshway-company-verification" element={<PageTransition><SpeshwayVerification /></PageTransition>} />
        <Route path="/top-10-ways-to-identify-fake-job-offers-india" element={<PageTransition><IdentifyFakeJobOffersIndia /></PageTransition>} />
        <Route path="/speshway-solutions-vs-fake-recruiters-full-guide" element={<PageTransition><SpeshwayVsFakeRecruiters /></PageTransition>} />
        <Route path="/why-people-search-speshway-scam-explained" element={<PageTransition><SpeshwayScamExplained /></PageTransition>} />
        <Route path="/how-scammers-misuse-company-names" element={<PageTransition><ScammersMisusingNames /></PageTransition>} />
        <Route path="/fake-recruitment-warning" element={<PageTransition><FakeRecruitmentWarning /></PageTransition>} />
        <Route path="/speshway-internship-program-reviews-hyderabad" element={<PageTransition><SpeshwayInternshipReviews /></PageTransition>} />
        <Route path="/speshway-solutions-pvt-ltd-registration-details" element={<PageTransition><SpeshwayRegistrationDetails /></PageTransition>} />
        <Route path="/speshway-solutions-official-contact-and-address" element={<PageTransition><SpeshwayOfficialContact /></PageTransition>} />
        <Route path="/speshway-solutions-technology-stack-and-services" element={<PageTransition><SpeshwayTechnologyStack /></PageTransition>} />
        <Route path="/life-at-speshway-solutions-work-culture-reviews" element={<PageTransition><SpeshwayWorkCulture /></PageTransition>} />
        <Route path="/speshway-solutions-leadership-team-and-vision" element={<PageTransition><SpeshwayLeadershipVision /></PageTransition>} />
        <Route path="/speshway-solutions-client-success-stories-and-reviews" element={<PageTransition><SpeshwayClientSuccess /></PageTransition>} />
        <Route path="/speshway-solutions-data-security-and-privacy-policy" element={<PageTransition><SpeshwaySecurityMeasures /></PageTransition>} />
        <Route path="/speshway-solutions-hyderabad-office-location-tour" element={<PageTransition><SpeshwayHyderabadOfficeTour /></PageTransition>} />
        <Route path="/speshway-solutions-company-awards-and-recognition" element={<PageTransition><SpeshwayCompanyAwards /></PageTransition>} />

        {/* Legacy SEO Redirects */}
        <Route path="/is-speshway-solutions-real" element={<Navigate to="/is-speshway-real-or-fake" replace />} />
        <Route path="/speshway-solutions-review" element={<Navigate to="/speshway-solutions-review-2026" replace />} />
        <Route path="/speshway-hyderabad-company-details" element={<Navigate to="/speshway-hyderabad-company-review" replace />} />
        <Route path="/blog/is-speshway-legit-company" element={<Navigate to="/is-speshway-legit-company" replace />} />
        <Route path="/blog/speshway-review-2026" element={<Navigate to="/speshway-solutions-review-2026" replace />} />
        <Route path="/blog/how-to-identify-job-scams" element={<Navigate to="/speshway-job-scam-truth" replace />} />
        
        <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/admin/forgot-password" element={<PageTransition><ForgotPassword /></PageTransition>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><Dashboard /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/services" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageServices /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/projects" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManagePortfolio /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/team" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageTeam /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/gallery" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageGallery /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/home-banners" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageHomeBanners /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><AdminSettings /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/jobs" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageJobs /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/clients" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><ManageClients /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/submissions" element={<ProtectedRoute roles={["admin","hr"]}><PageTransition><Submissions /></PageTransition></ProtectedRoute>} />
        <Route path="/admin" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <LazyMotion features={domAnimation}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<PageLoader />}>
          <RouterViews />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </LazyMotion>
);

export default App;
