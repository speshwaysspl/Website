import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Home,
  Info,
  Settings,
  FolderOpen,
  Newspaper,
  Users,
  Briefcase,
  ShieldCheck,
  Star,
  HelpCircle,
  FileText,
  AlertTriangle,
  Code,
  Smartphone,
  Cloud,
  Brain
} from "lucide-react";
import { SEO_KEYWORDS } from "@/lib/seo-utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/services", label: "Services", icon: Settings },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/blog", label: "Blog", icon: Newspaper },
    { path: "/team", label: "Team", icon: Users },
    { path: "/career", label: "Career", icon: Briefcase },
    { path: "/is-speshway-real-or-fake", label: "Is Speshway Real?", icon: ShieldCheck },
    { path: "/speshway-solutions-review-2026", label: "Company Reviews", icon: Star },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
    { path: "/send-resume", label: "Send Resume", icon: FileText },
    { path: "/fraud-notice", label: "Fraud Alert", icon: AlertTriangle },
  ];

  const services = [
    { label: "Web Development", icon: Code },
    { label: "Mobile Apps", icon: Smartphone },
    { label: "Cloud Solutions", icon: Cloud },
    { label: "AI & ML", icon: Brain },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Speshway Solutions - IT Services & Software Company in Hyderabad"
                width="48"
                height="48"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <div className="leading-tight">
                <span className="block text-sm sm:text-base font-bold text-foreground uppercase">Speshway Solutions</span>
                <span className="block text-[10px] sm:text-xs text-muted-foreground uppercase">Private Limited</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Delivering innovative IT solutions and driving digital transformation for businesses worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/people/Speshway-Solutions/61584485021568/"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-[#1877F2]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-[#1877F2] transition-colors" />
              </a>
              <a
                href="https://x.com/SpeshwayM56509"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Twitter (X)"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-black/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-[#0A66C2]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/speshwaysolutionsofficial/"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-[#E4405F]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-[#E4405F] transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@speshwaysolutions"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-[#FF0000]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Youtube size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-[#FF0000] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links + Services (side-by-side on mobile) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-2">
            <div className="animate-fade-in-up [animation-delay:.1s]">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    >
                      <link.icon size={14} className="group-hover:text-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up [animation-delay:.2s]">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link 
                      to="/services" 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    >
                      <service.icon size={14} className="group-hover:text-primary transition-colors" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up [animation-delay:.3s]">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=T-Hub,+Plot+No+1%2FC,+Sy+No+83%2F1,+Raidurgam,+Knowledge+City+Rd,+panmaktha,+Hyderabad,+Serilingampalle+(M),+Telangana+500032" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-words"
                >
                  T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd, panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-primary flex-shrink-0" />
                <a 
                  href="tel:+919100006020" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 9100006020
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@speshway.com" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  info@speshway.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-10 pt-8 border-t border-border/50">
          <h3 className="text-sm font-semibold text-foreground/80 mb-6 uppercase tracking-wider text-center">Our Expertise & Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
            <div>
              <h4 className="text-[10px] font-bold text-primary uppercase mb-2">Primary Services</h4>
              <ul className="space-y-1">
                {SEO_KEYWORDS.primary.slice(0, 8).map((keyword) => (
                  <li key={keyword} className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-primary uppercase mb-2">Mobile App Dev</h4>
              <ul className="space-y-1">
                {SEO_KEYWORDS.mobile.slice(0, 8).map((keyword) => (
                  <li key={keyword} className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-primary uppercase mb-2">Web Development</h4>
              <ul className="space-y-1">
                {SEO_KEYWORDS.website.slice(0, 8).map((keyword) => (
                  <li key={keyword} className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-primary uppercase mb-2">Business Solutions</h4>
              <ul className="space-y-1">
                {SEO_KEYWORDS.software.slice(0, 8).map((keyword) => (
                  <li key={keyword} className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-border/30 pt-6">
            {[...SEO_KEYWORDS.areaBased, ...SEO_KEYWORDS.googleBusiness, ...SEO_KEYWORDS.highRanking].slice(0, 15).map((keyword) => (
              <span key={keyword} className="text-[9px] text-muted-foreground/70 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="block sm:hidden text-center mt-2">
          <p className="text-xs text-muted-foreground">© {currentYear} SPESHWAY SOLUTIONS PRIVATE LIMITED.</p>
          <p className="text-xs text-muted-foreground">All rights reserved.</p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="hidden sm:block text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} SPESHWAY SOLUTIONS PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
