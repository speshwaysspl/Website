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
    
    { path: "/career", label: "Career" },
    {
      label: "Company",
      children: [
        { path: "/faq", label: "FAQ" },
        { path: "/fraud-notice", label: "Fraud Alert" },
        { path: "/team", label: "Team" }
      ],
    },
  ];



  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-555 ${
      isScrolled
        ? "bg-[#030712]/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-[#030712]/50"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Row: Logo + Brand, Mobile Menu Toggle */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" aria-label="Speshway Solutions Home" className="flex items-center gap-2.5 sm:gap-3 mr-4 lg:mr-8 xl:mr-16">
            <div className="bg-white rounded-lg sm:rounded-xl p-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <img
                src="/logo.png"
                alt="Speshway Solutions - IT Services in Hyderabad"
                width="48"
                height="48"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className={`block text-[11px] xs:text-xs sm:text-base font-extrabold uppercase tracking-wide whitespace-nowrap ${
                isHome ? "text-gray-50" : "text-foreground"
              }`}>
                Speshway Solutions</span>

              <span className={`block text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-widest whitespace-nowrap ${
                isHome ? "text-gray-400" : "text-muted-foreground"
              }`}>
                Private Limited
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link, index) => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group px-3 py-2 text-sm font-semibold transition-all duration-300 ease-out animate-fade-in-up whitespace-nowrap"
                  >
                    <button
                      className={`relative z-10 flex items-center gap-1 transition-colors ${
                        isHome ? "text-gray-300 hover:text-white" : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {link.label}
                    </button>
                    <div className="absolute left-0 top-full mt-4 w-48 bg-[#0a0f1c] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden backdrop-blur-xl">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.path}
                          to={childLink.path}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(childLink.path);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                        >
                          {childLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ease-out group animate-fade-in-up whitespace-nowrap ${
                      isActive(link.path)
                        ? (isHome ? "text-teal-400" : "text-primary")
                        : (isHome ? "text-gray-300 hover:text-white" : "text-muted-foreground hover:text-foreground")
                    } ${index === 0 ? "[animation-delay:0s]" : index === 1 ? "[animation-delay:.05s]" : index === 2 ? "[animation-delay:.1s]" : index === 3 ? "[animation-delay:.15s]" : index === 4 ? "[animation-delay:.2s]" : index === 5 ? "[animation-delay:.25s]" : index === 6 ? "[animation-delay:.3s]" : "[animation-delay:.35s]"}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute -bottom-1 left-3 right-3 h-[2px] rounded-full transform origin-center transition-all duration-300 ${
                        isActive(link.path) 
                          ? "scale-x-100 opacity-100" 
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      } ${isHome ? "bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" : "bg-primary"}`}
                    />
                  </Link>
                )
              ))}

              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="ml-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95 animate-fade-in-up [animation-delay:.25s]"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger Toggle button */}
            <button
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="transition-transform duration-300 rotate-90 text-indigo-400" />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Sidebar Overlay */}
    <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className={`absolute top-0 right-0 h-full w-[280px] bg-[#070b19] border-l border-white/5 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between px-6 py-8 border-b border-border shrink-0">
              <span className="text-xl font-bold text-primary">Menu</span>
              <Button variant="ghost" size="icon" onClick={()=>setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </Button>
            </div>
            <div className="px-4 py-6 space-y-2 flex-1 overflow-y-auto overscroll-contain pb-8">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.label} className="space-y-2">
                    <span className="block py-4 px-6 rounded-xl text-lg font-semibold text-foreground/90">
                      {link.label}
                    </span>
                    <div className="pl-8 space-y-2">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.path}
                          to={childLink.path}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(childLink.path);
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${
                            isActive(childLink.path)
                              ? 'text-primary bg-primary/10 border-r-4 border-primary'
                              : 'text-foreground/70 hover:bg-secondary/60'
                          }`}
                        >
                          {childLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`block py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10 border-r-4 border-primary'
                        : 'text-foreground/90 hover:bg-secondary/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}

              <div className="pt-6">
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl text-lg shadow-lg shadow-primary/20"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
    </div>
    </>
  );
};

export default Navbar;
