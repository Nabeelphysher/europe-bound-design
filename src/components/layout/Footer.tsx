import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin } from "lucide-react";
import logoImg from "../../assets/logo-1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-gold/10">
      <div className="container-wide px-6 md:px-12">

        {/* Top Section: Logo */}
        <div className="mb-14">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Europe Calling"
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">Europe Calling</span>
          </Link>
          <div className="w-full h-px bg-gradient-to-r from-gold/40 to-transparent mt-8 mb-12" />
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-20">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1 space-y-8">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Hassle-free travel shouldn't just be a dream. Seamless visa processing and premium travel experiences await.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/europe__calling/" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" },
                { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@europe_calling" },
              ].map((social, width) => (
                <a
                  key={width}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-border/60 rounded-full text-muted-foreground hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: 'Terms of Use', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Refund Policy', path: '/refund' },
                { name: 'Shipping Policy', path: '/shipping' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted-foreground hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide">Get In Touch</h4>
            <div className="space-y-6">

              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Call Us</h5>
                  <a href="tel:+918590404857" className="block text-muted-foreground hover:text-gold text-sm transition-colors font-medium">
                    +91 85904 04857
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Mail Us</h5>
                  <a href="mailto:sales@europecalling.co" className="block text-muted-foreground hover:text-gold text-sm transition-colors font-medium">
                    sales@europecalling.co
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Location</h5>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-gold text-sm max-w-[220px] transition-colors leading-relaxed"
                  >
                    2nd Floor, Paravath Arcade, opp. Budget Hypermarket, Varangode, Down Hill, Malappuram, Kerala 676519
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground/60 text-xs tracking-wide">
            © {currentYear} Europe Calling. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs flex items-center gap-1">
            Powered By <span className="font-bold text-primary/80">Europe Calling</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
