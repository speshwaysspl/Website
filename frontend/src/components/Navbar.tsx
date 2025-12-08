import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Projects" },
    { path: "/gallery", label: "Blog" },
    { path: "/team", label: "Team" },
    { path: "/career", label: "Career" },
    { path: "/faq", label: "FAQ" },
  ];

  const adminLinks = [
    { path: "/admin/login", label: "Admin" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-border shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-1">
        {/* Top Row: Logo + Brand, Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 lg:mr-8 xl:mr-16">
            <img
              src="/logo.png"
              alt="Speshway Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-base sm:text-lg md:text-xl font-bold text-foreground uppercase">
                SpeshwaySolutions</span>

              <span className="block text-xs sm:text-sm md:text-base text-muted-foreground uppercase">
                Private Limited
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-3 py-2 text-base font-bold transition-all duration-300 ease-out group hover:-translate-y-0.5 hover:scale-[1.05] animate-fade-in-up ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  } ${index === 0 ? "[animation-delay:0s]" : index === 1 ? "[animation-delay:.05s]" : index === 2 ? "[animation-delay:.1s]" : index === 3 ? "[animation-delay:.15s]" : index === 4 ? "[animation-delay:.2s]" : index === 5 ? "[animation-delay:.25s]" : index === 6 ? "[animation-delay:.3s]" : "[animation-delay:.35s]"}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-all duration-300 ${
                      isActive(link.path) 
                        ? "scale-x-100 opacity-100" 
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                  <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
              {adminLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                  }}
                  className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 ease-out group animate-fade-in-up ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-all duration-300 ${
                      isActive(link.path) 
                        ? "scale-x-100 opacity-100" 
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                  <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 animate-fade-in-up [animation-delay:.25s]"
              >
                Contact Us
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-0" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Fullscreen Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden bg-background/95 backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={(e)=>{e.preventDefault();navigate('/');}}>
                <img src="/logo.png" alt="Speshway Logo" className="w-10 h-10 object-contain" />
                <div className="leading-tight">
                  <span className="block text-base font-bold text-foreground uppercase">SpeshwaySolutions</span>
                  <span className="block text-xs text-muted-foreground uppercase">Private Limited</span>
                </div>
              </Link>
              <Button variant="ghost" size="icon" onClick={()=>setIsMobileMenuOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`block py-3 px-4 rounded-lg text-base font-bold transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10 border-l-2 border-primary'
                      : 'text-foreground/90 hover:bg-secondary/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {adminLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-lg text-base font-bold transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10 border-l-2 border-primary'
                      : 'text-foreground/90 hover:bg-secondary/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
