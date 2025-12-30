import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin } from "lucide-react";
import logoImg from "../../assets/logo-1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFBF2] pt-16 pb-8 border-t border-gold/20">
      <div className="container-wide px-6 md:px-12">

        {/* Top Section: Logo */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logoImg}
              alt="Europe Calling"
              className="h-16 w-auto object-contain"
            />
            <span className="font-heading text-2xl font-bold text-[#C59D5F]">Europe Calling</span>
          </Link>
          <div className="w-full h-px bg-gold/20 mt-6 mb-10" />
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Hassle-free travel shouldn't just be a dream. Europe Calling - Visa Simplified.
            </p>

            <div className="flex flex-wrap gap-2">
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
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gold/10 rounded-md text-gray-600 hover:bg-[#C59D5F] hover:text-white hover:border-[#C59D5F] transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-[#C59D5F] text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-600 hover:text-[#C59D5F] text-sm transition-colors duration-200">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-[#C59D5F] text-sm transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-600 hover:text-[#C59D5F] text-sm transition-colors duration-200">Refund Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-[#C59D5F] text-sm transition-colors duration-200">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-6">

              {/* Phone */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#C59D5F] fill-current" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1">Call Us</h5>
                  <a href="tel:+918590404857" className="block text-gray-600 hover:text-[#C59D5F] text-sm transition-colors">
                    +91 85904 04857
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-[#C59D5F] fill-current" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1">Mail Us</h5>
                  <a href="mailto:sales@europecalling.co" className="block text-gray-600 hover:text-[#C59D5F] text-sm transition-colors">
                    sales@europecalling.co
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#C59D5F] fill-current" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1">Location</h5>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-[#C59D5F] text-sm max-w-[200px] transition-colors"
                  >
                    2nd Floor, Paravath Arcade, opp. Budget Hypermarket, Varangode, Down Hill, Malappuram, Kerala 676519
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Europe Calling. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Powered By <span className="font-bold text-gray-900">Europe Calling</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
