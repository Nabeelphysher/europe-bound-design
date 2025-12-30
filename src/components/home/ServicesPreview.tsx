import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import flightVideo from "@/assets/vecteezy_airplane-flying-in-the-sky_35448314.mp4";

const packages = [
  {
    title: "Basic Package",
    description:
      "Essential support for first-time travelers to ensure a smooth journey.",
    price: "Essential",
    features: [
      "Visa documentation guidance",
      "Travel itinerary planning",
      "Airport pickup coordination",
      "24/7 customer support",
      "Basic accommodation assistance",
    ],
    highlighted: false,
  },
  {
    title: "Customized Package",
    description:
      "Tailored luxury experiences for discerning travelers seeking perfection.",
    price: "Premium",
    features: [
      "Everything in Basic Package",
      "Personal travel consultant",
      "Premium 4★ & 5★ bookings",
      "Exclusive local experiences",
      "Business networking support",
      "VIP airport fast-track",
    ],
    highlighted: true,
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={flightVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gold text-xs font-bold tracking-wider uppercase mb-4 md:mb-6 border border-white/20">
              <Star className="w-3 h-3 fill-current" />
              Our Services
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-bold text-white mb-4 md:mb-6 leading-tight px-4">
              Tailored Packages for <br className="hidden md:block" />
              <span className="text-gold italic">Every Journey</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Choose the package that fits your needs, or let us curate a completely custom European experience just for you.
            </p>
          </div>
        </RevealOnScroll>

        {/* Packages Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto px-4 sm:px-0">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className={`group relative rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:-translate-y-2 border ${pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 border-primary"
                  : "bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-gold/5 border-gold/10"
                  } flex flex-col`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* Highlight Badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-amber-500 text-primary-foreground px-4 md:px-6 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-gold/20 flex items-center gap-2">
                    <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                    <span className="whitespace-nowrap">Most Popular Choice</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6 md:mb-8 border-b pb-6 md:pb-8 border-current/10">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                      {pkg.title}
                    </h3>
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed ${pkg.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 md:space-y-4 lg:space-y-5 mb-6 md:mb-8 lg:mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                      <div className={`mt-1 p-1 rounded-full shrink-0 ${pkg.highlighted ? "bg-white/10 text-gold" : "bg-gold/10 text-gold-dark"}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className={`font-medium text-sm sm:text-base ${pkg.highlighted ? "text-white/90" : "text-foreground/90"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="mt-auto">
                  <Link
                    to="/services"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 md:py-4 px-6 md:px-8 rounded-lg md:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg ${pkg.highlighted
                      ? "bg-white text-primary hover:bg-gold hover:text-primary-foreground shadow-lg shadow-black/10"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                      }`}
                  >
                    <span>Explore {pkg.price}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
