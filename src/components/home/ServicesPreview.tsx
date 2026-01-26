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
      "Airport pickup and dropping",
      "Hotel Accommodation",
      "Breakfast",
      "Road trip. Sightseeing",
      "Personal assistance",
      "Personal driver",
      "Private transportation",
      "All including taxes",
      "Car rent",
      "Car fuel",
    ],
    highlighted: false,
    link: "/destinations",
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
      "Flight tickets",
      "Visa",
      "Lunch and dinner",
      "Entry ticket"
    ],
    highlighted: true,
    link: "/services",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative pt-6 sm:pt-8 md:pt-8 pb-16 sm:pb-20 md:pb-24 lg:pt-12 lg:pb-32 overflow-hidden bg-[linear-gradient(180deg,#faf4e5_0%,#faf4e5_150px,#faf4e5_100%)]">
      <div className="container-wide relative z-10 px-6">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Exclusive Journeys
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-5 leading-tight">
              Tailored Packages for <br />
              <span className="text-[#FF7700] italic pr-2 pb-2">
                Every Traveler
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
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
                className={`group relative h-full rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-8 transition-all duration-500 flex flex-col items-start border
                  ${pkg.highlighted
                    ? "bg-[#000000] border-[#D4AF37]/40 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]"
                    : "bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/30"
                  }
                `}
              >
                {/* Highlights for Premium Card */}
                {pkg.highlighted && (
                  <>
                    <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#FFD700]/5 to-transparent pointer-events-none" />
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-[#FF7700] text-[#0f172a] px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-[0_10px_20px_rgba(255,119,0,0.3)] flex items-center gap-1.5 sm:gap-2 uppercase tracking-wider whitespace-nowrap">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-[#0f172a]" />
                        Most Popular
                      </div>
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="w-full mb-3 sm:mb-4 md:mb-5 border-b border-dashed pb-3 sm:pb-4 md:pb-5 border-current/10">
                  <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-1.5 ${pkg.highlighted ? "text-white" : "text-[#0f172a]"}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs sm:text-sm md:text-base font-light leading-tight sm:leading-snug ${pkg.highlighted ? "text-white/60" : "text-slate-600"}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 w-full mb-4 sm:mb-5 md:mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3 group/item">
                      <div className={`mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                        ${pkg.highlighted
                          ? "bg-[#FF7700]/20 text-[#FF7700]"
                          : "bg-slate-100 text-slate-900 group-hover/item:bg-[#FF7700] group-hover/item:text-white"
                        }`
                      }>
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                      </div>
                      <span className={`text-xs sm:text-sm font-medium leading-tight sm:leading-snug ${pkg.highlighted ? "text-white/80" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  to={pkg.link}
                  className={`w-full py-2 sm:py-2.5 md:py-3.5 rounded-xl sm:rounded-2xl font-bold text-center tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden relative group/btn
                    ${pkg.highlighted
                      ? "bg-[#FF7700] text-white hover:bg-white hover:text-[#FF7700] shadow-[0_10px_30px_rgba(255,119,0,0.3)]"
                      : "bg-[#0f172a] text-white hover:bg-[#FF7700] hover:text-white shadow-xl"
                    }
                  `}
                >
                  <span className="relative z-10">Explore {pkg.price}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section >
  );
}
