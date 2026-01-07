import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "../../assets/logo-1.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Newsroom", path: "/newsroom" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Pages without dark hero sections need header styling from the start
  const pagesWithoutHero = ["/about", "/services", "/testimonials", "/newsroom", "/contact", "/gallery", "/privacy", "/terms"];
  const hasDarkHero = !pagesWithoutHero.includes(location.pathname);
  const shouldShowScrolledStyle = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
        shouldShowScrolledStyle
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <img
            src={logoImg}
            alt="Europe Calling Logo"
            className={cn(
              "w-auto object-contain transition-all duration-300",
              shouldShowScrolledStyle ? "h-9 lg:h-12" : "h-12 lg:h-16"
            )}
          />
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

        {/* Mobile Menu (Sheet) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu
                className={cn(
                  "w-7 h-7",
                  shouldShowScrolledStyle ? "text-foreground" : "text-primary-foreground"
                )}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 border-r-0 bg-background z-[70] [&>button]:text-white [&>button]:top-6 [&>button]:right-6 [&>button]:z-50 [&>button]:opacity-100 [&>button]:hover:opacity-80 [&>button]:focus:ring-offset-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
              <SheetDescription>
                Navigation links for accessing different sections of the website.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="bg-primary p-6 pb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
                <div className="relative z-10">
                  <Link to="/" onClick={() => setIsOpen(false)} className="inline-block mb-4">
                    <img src={logoImg} alt="Europe Calling" className="h-16 w-auto brightness-0 invert" />
                  </Link>
                  <p className="text-primary-foreground/70 text-sm font-medium">
                    Your Gateway to Europe
                  </p>
                </div>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-heading font-semibold transition-colors flex items-center justify-between group",
                        location.pathname === item.path
                          ? "text-gold"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full bg-gold transition-opacity",
                        location.pathname === item.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      )} />
                    </Link>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-border">
                  <div className="space-y-4">
                    <a href="tel:+918590404857" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                      <span className="text-sm">+91 85904 04857</span>
                    </a>
                    <a href="mailto:sales@europecalling.co" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 text-gold" />
                      <span className="text-sm">sales@europecalling.co</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-6 bg-secondary/10">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-gold justify-center flex"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
