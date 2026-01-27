import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin } from "lucide-react";
import logoImg from "../../assets/logo-1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf4e5] pt-16 pb-8 border-t border-gold/20 overflow-hidden">
      <div className="container-wide px-6 md:px-12">


        {/* Main Grid Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-20">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Europe Calling"
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
              <span className="font-heading text-2xl font-bold text-primary tracking-tight">Europe Calling</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Hassle-free travel shouldn't just be a dream. Seamless visa processing and premium travel experiences await.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/share/19qGz8sdbi/?mibextid=wwXIfr" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/europe__calling/" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/europe__calling?s=21" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/europe-calling-494b7b3a7/" },
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
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-center md:text-left">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name} className="flex justify-center md:justify-start">
                  <Link
                    to={item.path}
                    className="relative text-slate-600 hover:text-gold text-sm font-medium transition-all duration-300 flex items-center gap-2.5 group py-1.5 px-2 -mx-2 rounded-md hover:bg-gold/5"
                  >
                    <span className="absolute left-0 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                    <span className="relative flex-1 tracking-wide">{item.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-xs">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-center">Top Destinations</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-3.5 justify-items-center">
              {[
                { name: 'Azerbaijan', path: '/destinations/azerbaijan' },
                { name: 'Russia', path: '/destinations/russia' },
                { name: 'Kazakhstan', path: '/destinations/kazakhstan' },
                { name: 'Georgia', path: '/destinations/georgia' },
                { name: 'Uzbekistan', path: '/destinations/uzbekistan' },
                { name: 'Armenia', path: '/destinations/armenia' },
                { name: 'Kyrgyzstan', path: '/destinations/kyrgyzstan' },
                { name: 'France', path: '/destinations/france' },
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="relative text-slate-600 hover:text-gold text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-2.5 group py-1.5 px-2 sm:px-2 rounded-md hover:bg-gold/5 whitespace-nowrap"
                >
                  <span className="absolute left-0 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                  <span className="relative tracking-wide text-xs sm:text-sm text-center">{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-xs hidden sm:inline shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-center md:text-left">Get In Touch</h4>
            <div className="space-y-6">

              {/* Phone */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group text-center md:text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Call Us</h5>
                  <a href="tel:+994555533744" className="block text-muted-foreground hover:text-gold text-sm transition-colors font-medium">
                    +994 55 553 37 44
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group text-center md:text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
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
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group text-center md:text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Location</h5>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-gold text-sm max-w-[220px] md:max-w-[220px] mx-auto md:mx-0 transition-colors leading-relaxed"
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

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/refund" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Refund Policy</Link>
            <Link to="/shipping" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
