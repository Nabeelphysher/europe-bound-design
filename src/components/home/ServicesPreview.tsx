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
      "Luxury Accommodation",
      "Premium Transfers & Comfort",
      "Exclusive Dining Experiences",
      "Private Tours & Expert Guides",
      "Curated Cultural Experiences",
      "Bespoke Excursions Across Destinations",
      "Leisure & Wellness Experiences",
      "Personalized Luxury Touches",
    ],
    highlighted: true,
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[linear-gradient(180deg,#faf4e5_0%,#ffffff_150px,#ffffff_100%)]">
      <div className="container-wide relative z-10 px-6">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Exclusive Journeys
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Tailored Packages for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] italic pr-2 pb-2">
                Every Traveler
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              Whether you seek essential guidance or a completely bespoke luxury experience, we craft the perfect European journey for you.
            </p>
          </div>
        </RevealOnScroll>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <RevealOnScroll
              key={pkg.title}
              animation="fade-up"
              delay={index * 200}
              className="h-full"
            >
              <div
                className={`group relative h-full rounded-[2rem] p-8 sm:p-10 transition-all duration-500 flex flex-col items-start border
                  ${pkg.highlighted
                    ? "bg-[#000000] border-[#D4AF37]/40 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]"
                    : "bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/30"
                  }
                `}
              >
                {/* Highlights for Premium Card */}
                {pkg.highlighted && (
                  <>
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#FFD700]/5 to-transparent pointer-events-none" />
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-[#0f172a] px-8 py-2.5 rounded-full text-sm font-bold shadow-[0_10px_20px_rgba(253,185,49,0.3)] flex items-center gap-2 uppercase tracking-wider">
                        <Star className="w-4 h-4 fill-[#0f172a]" />
                        Most Popular
                      </div>
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="w-full mb-8 border-b border-dashed pb-8 border-current/10">
                  <h3 className={`font-heading text-3xl md:text-4xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-[#0f172a]"}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-base md:text-lg font-light leading-relaxed ${pkg.highlighted ? "text-white/60" : "text-slate-600"}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-5 w-full mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                        ${pkg.highlighted
                          ? "bg-[#FFD700]/20 text-[#FFD700]"
                          : "bg-slate-100 text-slate-900 group-hover/item:bg-[#FFD700] group-hover/item:text-white"
                        }`
                      }>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm md:text-base font-medium ${pkg.highlighted ? "text-white/80" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  to="/services"
                  className={`w-full py-5 rounded-2xl font-bold text-center tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative group/btn
                    ${pkg.highlighted
                      ? "bg-[#FFD700] text-[#0f172a] hover:bg-white hover:text-black shadow-[0_10px_30px_rgba(255,215,0,0.2)]"
                      : "bg-[#0f172a] text-white hover:bg-[#FFD700] hover:text-[#0f172a] shadow-xl"
                    }
                  `}
                >
                  <span className="relative z-10">Explore {pkg.price}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section >
  );
}
