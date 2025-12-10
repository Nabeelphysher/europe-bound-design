import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const packages = [
  {
    title: "Basic Package",
    description:
      "Perfect for first-time travelers seeking essential support for their European journey.",
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
      "Tailored solutions for discerning travelers who want a personalized European experience.",
    features: [
      "Everything in Basic Package",
      "Personal travel consultant",
      "Premium accommodation booking",
      "Local experience curation",
      "Business networking support",
      "VIP airport services",
    ],
    highlighted: true,
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-champagne">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tailored Packages for Every Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that fits your needs, or let us create a custom
            solution just for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-elevated ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card shadow-card"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 right-8 bg-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3
                className={`font-heading text-2xl font-bold mb-4 ${
                  pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {pkg.title}
              </h3>

              <p
                className={`mb-8 ${
                  pkg.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        pkg.highlighted ? "text-gold" : "text-gold"
                      }`}
                    />
                    <span
                      className={
                        pkg.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className={`inline-flex items-center gap-2 font-semibold transition-colors group ${
                  pkg.highlighted
                    ? "text-gold hover:text-gold/80"
                    : "text-primary hover:text-gold"
                }`}
              >
                Know More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
