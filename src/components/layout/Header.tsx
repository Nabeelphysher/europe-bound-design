import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Service", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Newsroom", path: "/newsroom" },
  { name: "Contact Us", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages without dark hero sections need header styling from the start
  const pagesWithoutHero = ["/about", "/services", "/testimonials", "/newsroom", "/contact"];
  const hasDarkHero = !pagesWithoutHero.includes(location.pathname);
  const shouldShowScrolledStyle = isScrolled || !hasDarkHero;

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
        shouldShowScrolledStyle
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
              shouldShowScrolledStyle ? "text-primary" : "text-primary-foreground"
            )}
          >
            Europe<span className="text-gold">Calling</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-medium text-sm tracking-wide transition-colors duration-200 link-underline",
                shouldShowScrolledStyle
                  ? "text-foreground hover:text-gold"
                  : "text-primary-foreground/90 hover:text-primary-foreground",
                location.pathname === item.path && "text-gold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={cn(
            "hidden lg:block btn-gold text-sm",
            !shouldShowScrolledStyle && "bg-gold/90 hover:bg-gold"
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
                shouldShowScrolledStyle ? "text-foreground" : "text-primary-foreground"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                shouldShowScrolledStyle ? "text-foreground" : "text-primary-foreground"
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
          {navItems.map((item) => (
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
          ))}
          <Link to="/contact" className="btn-gold text-center mt-4">
            Get Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
