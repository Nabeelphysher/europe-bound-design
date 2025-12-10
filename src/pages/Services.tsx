import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, FileText, Briefcase, Home, Plane } from "lucide-react";

const packages = [
  {
    id: "basic",
    title: "Basic Package",
    description: "Essential support for first-time travelers to Europe. Perfect for those who need guidance with documentation and initial planning.",
    icon: FileText,
    features: [
      "Comprehensive visa documentation guidance",
      "Travel itinerary planning assistance",
      "Airport pickup coordination",
      "24/7 customer support via phone & email",
      "Basic accommodation recommendations",
      "Pre-departure orientation session",
      "Local emergency contact provision",
    ],
    documents: [
      "Valid passport (6+ months validity)",
      "Passport-size photographs (35x45mm)",
      "Educational certificates (attested)",
      "Bank statements (last 6 months)",
      "Employment letter (if applicable)",
      "Travel insurance documentation",
    ],
  },
  {
    id: "custom",
    title: "Customized Package",
    description: "Tailored solutions for discerning travelers seeking a comprehensive, personalized European experience with premium support.",
    icon: Briefcase,
    highlighted: true,
    features: [
      "Everything in Basic Package",
      "Dedicated personal travel consultant",
      "Premium accommodation booking",
      "Local experience curation",
      "Business networking support",
      "VIP airport lounge access",
      "Job placement assistance",
      "Family reunification support",
      "Post-arrival settling assistance",
      "Language & cultural training",
    ],
    documents: [
      "All documents from Basic Package",
      "Resume/CV (professionally formatted)",
      "Portfolio or work samples",
      "Reference letters",
      "Skill certification documents",
      "Family documents (if applicable)",
    ],
  },
];

const additionalServices = [
  {
    icon: Home,
    title: "Accommodation Services",
    description: "From temporary stays to long-term housing, we help you find the perfect home in Europe.",
  },
  {
    icon: Plane,
    title: "Travel Arrangements",
    description: "Flight bookings, airport transfers, and complete travel logistics handled for you.",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description: "Connect with employers across Europe through our extensive network of partners.",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Packages Designed for <span className="text-gold italic">Your Success</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Choose from our carefully crafted packages or let us create a 
                custom solution that perfectly matches your European aspirations.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-card border border-border shadow-card"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="inline-block bg-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-semibold mb-6">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.highlighted ? "bg-gold/20" : "bg-champagne"
                  }`}>
                    <pkg.icon className={`w-7 h-7 ${pkg.highlighted ? "text-gold" : "text-gold"}`} />
                  </div>

                  <h2 className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${
                    pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {pkg.title}
                  </h2>

                  <p className={`mb-8 ${
                    pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className={`font-semibold mb-4 ${
                      pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <span className={pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents */}
                  <div className="mb-8">
                    <h3 className={`font-semibold mb-4 ${
                      pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      Required Documents:
                    </h3>
                    <ul className="space-y-2">
                      {pkg.documents.map((doc) => (
                        <li key={doc} className={`text-sm flex items-center gap-2 ${
                          pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}>
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 font-semibold group ${
                      pkg.highlighted
                        ? "btn-gold"
                        : "btn-primary"
                    }`}
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-champagne">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Additional Support
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Complementary Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service) => (
                <div key={service.title} className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container-narrow">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Package?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let our experts help you choose the right package based on your unique requirements.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 group">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
