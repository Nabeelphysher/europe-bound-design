import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Briefcase,
  Home,
  Plane,
  ShieldCheck,
  Star,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-europe.jpg";

const packages = [
  {
    id: "basic",
    title: "Basic Package",
    subtitle: "Essential Guidance",
    description: "Perfect for independent travelers who need expert guidance with documentation and initial planning essentials.",
    icon: FileText,
    highlighted: false,
    features: [
      "Visa documentation guidance",
      "Travel itinerary planning",
      "Airport pickup coordination",
      "24/7 customer support phone/email",
      "Basic accommodation recommendations",
      "Pre-departure orientation"
    ],
    benefits: [
      "Cost-effective solution",
      "Expert error verification",
      "Retain control of your schedule",
      "Essential safety nets included"
    ],
    documents: [
      "Valid passport (6+ months)",
      "Passport-size photographs",
      "Educational certificates",
      "Bank statements (last 6 months)",
      "Travel insurance"
    ],
  },
  {
    id: "custom",
    title: "Customised Package",
    subtitle: "Premium Experience",
    description: "A comprehensive, fully managed solution for discerning travelers seeking a seamless and luxurious transition.",
    icon: Briefcase,
    highlighted: true,
    features: [
      "Dedicated personal consultant",
      "Premium accommodation booking",
      "VIP airport lounge access",
      "Job placement assistance",
      "Family reunification support",
      "Local experience curation",
      "Business networking support"
    ],
    benefits: [
      "Completely stress-free experience",
      "Priority handling & support",
      "VIP treatment & Exclusive access",
      "End-to-end relocation management",
      "Personalized career strategy"
    ],
    documents: [
      "All Basic Package documents",
      "Professional Resume/CV",
      "Work Portfolio/Samples",
      "Reference Letters",
      "Skill certifications",
      "Family documents (if applicable)"
    ],
  },
];

const additionalServices = [
  {
    icon: Home,
    title: "Accommodation",
    description: "From temporary stays to long-term housing, we find your perfect home.",
  },
  {
    icon: Plane,
    title: "Travel Logistics",
    description: "Flight bookings and transfers handled with precision.",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description: "Connect with top employers through our European partner network.",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Animated Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary"></div>

          <div className="container-wide relative z-10 text-center">
            <span className="inline-block animate-fade-in text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
              World-Class Services
            </span>
            <h1 className="animate-fade-in-up font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Choose Your <span className="text-gold italic">Journey</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-100 text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you need essential guidance or a full-service VIP experience,
              we have the perfect package to launch your European dreams.
            </p>
          </div>
        </section>

        {/* Main Packages Section */}
        <section className="section-padding relative">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className={`
                    group relative rounded-2xl transition-all duration-500 hover:-translate-y-2
                    flex flex-col h-full
                    ${pkg.highlighted
                      ? "bg-primary text-primary-foreground shadow-2xl ring-1 ring-gold/20"
                      : "bg-white text-foreground shadow-xl border border-border/50 hover:shadow-2xl hover:border-gold/30"
                    }
                  `}
                >
                  {/* Card Header */}
                  <div className="p-8 sm:p-10 border-b border-border/10">
                    {pkg.highlighted && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-gold text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg
                      ${pkg.highlighted ? "bg-gold text-primary" : "bg-champagne text-gold-foreground"}
                    `}>
                      <pkg.icon className="w-8 h-8" />
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
                      {pkg.title}
                    </h2>
                    <p className={`text-sm tracking-wide uppercase font-medium mb-4 ${pkg.highlighted ? "text-gold" : "text-primary/70"}`}>
                      {pkg.subtitle}
                    </p>
                    <p className={`text-lg leading-relaxed ${pkg.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 sm:p-10 flex-grow space-y-10">

                    {/* Features */}
                    <div>
                      <h3 className="flex items-center gap-2 font-heading text-xl font-semibold mb-6">
                        <Sparkles className={`w-5 h-5 ${pkg.highlighted ? "text-gold" : "text-primary"}`} />
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {pkg.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.highlighted ? "text-gold" : "text-primary"}`} />
                            <span className={pkg.highlighted ? "text-gray-100" : "text-gray-700"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="flex items-center gap-2 font-heading text-xl font-semibold mb-6">
                        <Star className={`w-5 h-5 ${pkg.highlighted ? "text-gold" : "text-primary"}`} />
                        Your Benefits
                      </h3>
                      <div className={`rounded-xl p-6 ${pkg.highlighted ? "bg-white/5 border border-white/10" : "bg-champagne/30 border border-champagne"}`}>
                        <ul className="space-y-3">
                          {pkg.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ShieldCheck className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.highlighted ? "text-gold" : "text-primary/70"}`} />
                              <span className={`font-medium ${pkg.highlighted ? "text-white" : "text-foreground"}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Required Documents */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-4 opacity-90">Required Documents</h3>
                      <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        {pkg.documents.map((doc, i) => (
                          <li key={i} className={`flex items-center gap-2 ${pkg.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlighted ? "bg-gold" : "bg-primary"}`} />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="p-8 sm:p-10 pt-0 mt-auto">
                    <Link
                      to="/contact"
                      className={`
                        w-full group inline-flex items-center justify-center gap-2 text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transition-all
                        ${pkg.highlighted
                          ? "bg-gold text-primary hover:bg-white hover:text-primary"
                          : "bg-primary text-white hover:bg-primary/90"
                        }
                      `}
                    >
                      Enquire Now
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Teaser */}
        <section className="section-padding relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="European landscape"
              className="w-full h-full object-cover"
            />
          </div>

          {/* White Overlay for Readability */}
          <div className="absolute inset-0 bg-white/85 z-0" />

          {/* Elegant White Gradient Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(255, 255, 255, 0.90) 25%,
                  rgba(255, 255, 255, 0.85) 50%,
                  rgba(255, 255, 255, 0.90) 75%,
                  rgba(255, 255, 255, 0.95) 100%
                )
              `,
            }}
          />

          {/* Elegant Decorative Elements with White/Gold */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold/15 via-white/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gold/12 via-white/8 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,215,0,0.1) 50%, transparent 70%)',
            }}
          />

          {/* Inline Styles for Wind Sway Animation */}
          <style>
            {`
              @keyframes wind-sway {
                0% { 
                  transform: rotate(-3deg) translateY(0px) translateX(-2px);
                }
                25% { 
                  transform: rotate(2deg) translateY(-8px) translateX(1px);
                }
                50% { 
                  transform: rotate(3deg) translateY(-12px) translateX(3px);
                }
                75% { 
                  transform: rotate(-1deg) translateY(-6px) translateX(-1px);
                }
                100% { 
                  transform: rotate(-3deg) translateY(0px) translateX(-2px);
                }
              }
              .wind-sway-card {
                transform-origin: center bottom;
                background: linear-gradient(135deg, 
                  rgba(255,255,255,0.12) 0%, 
                  rgba(255,255,255,0.08) 30%,
                  rgba(255,255,255,0.05) 60%,
                  rgba(255,215,0,0.08) 100%
                );
                border: 1px solid rgba(255,255,255,0.2);
                backdrop-filter: blur(12px);
                box-shadow: 
                  0 8px 32px rgba(0,0,0,0.25),
                  0 4px 16px rgba(0,0,0,0.15),
                  inset 0 1px 0 rgba(255,255,255,0.15),
                  inset 0 -1px 0 rgba(255,215,0,0.1);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .wind-sway-card:hover {
                background: linear-gradient(135deg, 
                  rgba(255,255,255,0.18) 0%, 
                  rgba(255,255,255,0.12) 30%,
                  rgba(255,255,255,0.08) 60%,
                  rgba(255,215,0,0.12) 100%
                );
                border-color: rgba(255,215,0,0.4);
                box-shadow: 
                  0 16px 48px rgba(0,0,0,0.35),
                  0 8px 24px rgba(0,0,0,0.25),
                  inset 0 1px 0 rgba(255,255,255,0.25),
                  0 0 40px rgba(255,215,0,0.25),
                  0 0 60px rgba(255,215,0,0.15);
              }
            `}
          </style>

          <div className="container-wide relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 animate-fade-in-up px-4 sm:px-0">
              <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold border border-gold/20 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                Extended Services
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-primary drop-shadow-sm">
                Additional Services <br className="hidden sm:block" />
                <span className="text-gold drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">Available</span>
              </h2>
              <p className="text-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Beyond our core packages, explore specialized services designed to enhance your European journey.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {additionalServices.map((service, index) => {
                const animationDuration = 4 + (index % 3) * 0.7; // Vary between 4s-5.4s
                const animationDelay = index * 0.4; // Stagger by 0.4s intervals
                
                return (
                  <div
                    key={index}
                    className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-md wind-sway-card hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up"
                    style={{
                      animation: `wind-sway ${animationDuration}s ease-in-out infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                  >
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Enhanced Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border Glow */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                    {/* Enhanced Glass shine effect */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Subtle animated background pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Icon */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold/30 via-gold/15 to-gold/5 border border-gold/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(255,215,0,0.2),0_4px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4),0_8px_25px_rgba(0,0,0,0.3)]">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Enhanced Hover Arrow */}
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                      <div className="relative">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-300" />
                        <div className="absolute inset-0 bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Services;
