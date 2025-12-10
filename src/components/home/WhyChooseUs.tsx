import {
  Globe,
  HeadphonesIcon,
  ShieldCheck,
  FileCheck,
  Users,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Europe-Focused Expertise",
    description:
      "Specialized knowledge of European immigration policies, work permits, and cultural nuances.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance whenever you need us, from pre-departure to post-arrival.",
  },
  {
    icon: ShieldCheck,
    title: "High Success Rate",
    description:
      "98% visa approval rate backed by meticulous documentation and expert guidance.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description:
      "Clear timelines, honest pricing, and regular updates at every stage of your journey.",
  },
  {
    icon: Users,
    title: "Multinational Team",
    description:
      "Diverse experts who understand your background and your destination's culture.",
  },
  {
    icon: Clock,
    title: "100% Documentation",
    description:
      "Complete end-to-end documentation support leaving no room for errors.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Why Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Europe Calling?
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We go beyond services – we build relationships and deliver results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="font-heading text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
