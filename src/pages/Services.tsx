import { PageHeader } from "@/components/ui/PageHeader";
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
  Sparkles,
  Zap,
  Crown
} from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DestinationsSection } from "@/components/home/DestinationsSection";

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
    icon: Crown,
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
  const basicPkg = packages[0];
  const customPkg = packages[1];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-20">

        <PageHeader
          eyebrow="Our Expertise"
          title={<>Premium Relocation <br /><span className="text-gold italic">Packages</span></>}
          description="Choose the level of support that suits your journey. From essential guidance to a fully managed VIP experience."
        />

        {/* --- Unified Comparison Section (New Design) --- */}
        <div className="container-wide px-4 pb-24">
          <RevealOnScroll
            animation="fade-up"
            className="max-w-7xl mx-auto rounded-[3rem] shadow-2xl border border-gray-100 bg-white overflow-hidden flex flex-col lg:flex-row"
          >

            {/* Left: Basic Package */}
            <div className="w-full lg:w-5/12 bg-slate-50/50 p-8 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 text-2xl shadow-sm">
                  <basicPkg.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-2">{basicPkg.title}</h2>
                <p className="text-sm font-bold tracking-widest uppercase text-primary/60 mb-4">{basicPkg.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {basicPkg.description}
                </p>
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <h3 className="flex items-center gap-2 font-bold mb-4 text-primary">
                    <Zap className="w-4 h-4 text-primary" /> Key Features
                  </h3>
                  <ul className="space-y-3">
                    {basicPkg.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary/80">Required Documents</h3>
                  <div className="flex flex-wrap gap-2">
                    {basicPkg.documents.map((doc, i) => (
                      <span key={i} className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-500 font-medium">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6">
                <Link to="/contact" className="w-full block py-4 rounded-xl border-2 border-primary text-primary font-bold text-center hover:bg-primary hover:text-white transition-all duration-300">
                  Select Basic
                </Link>
                <p className="text-center text-xs text-muted-foreground mt-3">Ideal for self-starters</p>
              </div>
            </div>

            {/* Right: Custom Package (Premium) */}
            <div className="w-full lg:w-7/12 bg-[#0B1120] p-8 md:p-12 lg:p-16 text-white relative flex flex-col overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

              <div className="absolute top-6 right-8 animate-pulse-gentle">
                <span className="bg-gold text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-primary" /> Most Popular
                </span>
              </div>

              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-gold flex items-center justify-center mb-6 text-3xl shadow-lg ring-1 ring-white/10">
                  <customPkg.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">{customPkg.title}</h2>
                <p className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">{customPkg.subtitle}</p>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                  {customPkg.description}
                </p>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-10 flex-grow">
                <div>
                  <h3 className="flex items-center gap-2 font-bold mb-6 text-white text-lg">
                    <Sparkles className="w-5 h-5 text-gold" /> Exclusive Features
                  </h3>
                  <ul className="space-y-4">
                    {customPkg.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-gold" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="flex items-center gap-2 font-bold mb-4 text-white text-lg">
                    <ShieldCheck className="w-5 h-5 text-gold" /> VIP Benefits
                  </h3>
                  <ul className="space-y-3">
                    {customPkg.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6">
                <Link to="/contact" className="flex-1 w-full btn-gold py-5 rounded-2xl font-bold text-center text-lg shadow-xl hover:scale-[1.02] transition-transform">
                  Get Premium Access
                </Link>
                <div className="text-center sm:text-left">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Full Service</p>
                  <p className="text-sm font-medium text-white/80">Everything handled for you.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>


        <DestinationsSection showViewAll={false} />


        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container-wide px-4 relative z-10">
            <RevealOnScroll animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-3 block">Complete Support</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Additional Services</h2>
                <p className="text-muted-foreground">Beyond the package, we offer specific services to smooth your transition.</p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <RevealOnScroll className="h-full" delay={index * 100} key={index}>
                  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

      </main >
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

// Re-export icon for the new layout use
export default Services;
