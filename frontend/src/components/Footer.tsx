import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Speshway Logo"
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
                href="https://www.facebook.com/profile.php?id=61584485021568"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://x.com/SpeshwayM56509"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/speshway-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/speshwaysolutionsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links + Services (side-by-side on mobile) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-2">
            <div className="animate-fade-in-up [animation-delay:.1s]">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/send-resume" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Send Resume
                  </Link>
                </li>
                <li>
                  <Link to="/fraud-notice" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                    Fraud Alert
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up [animation-delay:.2s]">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2">
                {["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                      {service}
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
