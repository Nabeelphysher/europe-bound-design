import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const destinations = [
  { name: "Germany", path: "/destinations/germany" },
  { name: "Poland", path: "/destinations/poland" },
  { name: "Czech Republic", path: "/destinations/czech-republic" },
  { name: "France", path: "/destinations/france" },
  { name: "Romania", path: "/destinations/romania" },
  { name: "Azerbaijan", path: "/destinations/azerbaijan" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Destinations", path: "#", hasDropdown: true },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Newsroom", path: "/newsroom" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}
          >
            Europe<span className="text-gold">Calling</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button
                  className={cn(
                    "flex items-center gap-1 font-medium text-sm tracking-wide transition-colors duration-200",
                    isScrolled
                      ? "text-foreground hover:text-gold"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  )}
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "font-medium text-sm tracking-wide transition-colors duration-200 link-underline",
                    isScrolled
                      ? "text-foreground hover:text-gold"
                      : "text-primary-foreground/90 hover:text-primary-foreground",
                    location.pathname === item.path && "text-gold"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Destinations Dropdown */}
              {item.hasDropdown && (
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    isDestinationsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                >
                  <div className="bg-card rounded-lg shadow-elevated border border-border py-2 min-w-[180px]">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        to={dest.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-champagne hover:text-primary transition-colors duration-150"
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={cn(
            "hidden lg:block btn-gold text-sm",
            !isScrolled && "bg-gold/90 hover:bg-gold"
          )}
        >
          Get Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-wide py-4 flex flex-col gap-2">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name}>
                <button
                  className="w-full flex items-center justify-between py-3 font-medium text-foreground"
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isDestinationsOpen && "rotate-180"
                    )}
                  />
                </button>
                {isDestinationsOpen && (
                  <div className="pl-4 pb-2">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        to={dest.path}
                        className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "py-3 font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                )}
              >
                {item.name}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-gold text-center mt-4">
            Get Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
