import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

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
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/team", label: "Team" },
    { path: "/career", label: "Career" },
    { path: "/faq", label: "FAQ" },
  ];



  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHome && !isScrolled
        ? "lg:bg-transparent lg:border-transparent lg:shadow-none bg-white border-b border-border shadow-lg"
        : "bg-white border-b border-border shadow-lg"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-1">
        {/* Top Row: Logo + Brand, Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 lg:mr-8 xl:mr-16">
            <img
              src="/logo.png"
              alt="Speshway Solutions - IT Services in Hyderabad"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div className="leading-tight">
              <span className={`block text-sm sm:text-base md:text-lg font-bold uppercase whitespace-nowrap ${
                isHome && !isScrolled ? "lg:text-white text-foreground" : "text-foreground"
              }`}>
                Speshway Solutions</span>

              <span className={`block text-[10px] sm:text-xs md:text-sm uppercase whitespace-nowrap ${
                isHome && !isScrolled ? "lg:text-white/80 text-muted-foreground" : "text-muted-foreground"
              }`}>
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
                      ? (isHome && !isScrolled ? "lg:text-white text-primary" : "text-primary")
                      : (isHome && !isScrolled ? "lg:text-white/90 lg:hover:text-white text-muted-foreground hover:text-foreground" : "text-muted-foreground hover:text-foreground")
                  } ${index === 0 ? "[animation-delay:0s]" : index === 1 ? "[animation-delay:.05s]" : index === 2 ? "[animation-delay:.1s]" : index === 3 ? "[animation-delay:.15s]" : index === 4 ? "[animation-delay:.2s]" : index === 5 ? "[animation-delay:.25s]" : index === 6 ? "[animation-delay:.3s]" : "[animation-delay:.35s]"}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                      isActive(link.path) 
                        ? "scale-x-100 opacity-100" 
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    } ${isHome && !isScrolled ? "lg:bg-white bg-primary" : "bg-primary"}`}
                  />
                  <span className={`absolute inset-0 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100 ${
                    isHome && !isScrolled ? "lg:bg-white/10 bg-primary/10" : "bg-primary/10"
                  }`} />
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
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 active:scale-95 ${
                isHome && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-secondary/50"
              }`}
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
