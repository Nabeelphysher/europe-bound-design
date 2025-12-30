import {
  Globe,
  HeadphonesIcon,
  ShieldCheck,
  FileCheck,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import heroImage from "@/assets/hero-europe.jpg";

const features = [
  {
    icon: Globe,
    title: "Europe-focused expertise",
    description:
      "Deep knowledge of European immigration policies and cultural nuances.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 dedicated support",
    description:
      "Round-the-clock assistance from pre-departure to your first week abroad.",
  },
  {
    icon: ShieldCheck,
    title: "High visa and placement success rate",
    description:
      "Industry-leading visa approval rates backed by meticulous documentation.",
  },
  {
    icon: FileCheck,
    title: "Transparent process",
    description:
      "Clear timelines, honest pricing, and real-time updates at every stage.",
  },
  {
    icon: Users,
    title: "Experienced team across multiple countries",
    description:
      "Diverse experts who understand both your background and destination.",
  },
  {
    icon: Clock,
    title: "100% documentation assistance",
    description:
      "Complete legal and documentation support leaving no room for errors.",
  },
];

export function WhyChooseUs() {
  const cardColors = [
    { bg: "bg-[#F3E8FF]", pin: "bg-[#9333EA]" }, // Purple
    { bg: "bg-[#FFF7ED]", pin: "bg-[#EA580C]" }, // Orange
    { bg: "bg-[#EFF6FF]", pin: "bg-[#2563EB]" }, // Blue
    { bg: "bg-[#F0FDF4]", pin: "bg-[#16A34A]" }, // Green
    { bg: "bg-[#FDF2F8]", pin: "bg-[#DB2777]" }, // Pink
    { bg: "bg-[#FEFCE8]", pin: "bg-[#CA8A04]" }, // Yellow
  ];

  return (
    <section className="section-padding pb-32 md:pb-40 relative overflow-hidden bg-[#fdfbf7]"
      style={{
        backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)',
        backgroundSize: '100% 40px',
        backgroundAttachment: 'local'
      }}
    >
      {/* Dashed Connecting Lines (Decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
        <path d="M200,300 Q400,100 600,300 T1000,300" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 8" />
        <path d="M200,600 Q500,500 800,700" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 8" />
      </svg>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4 sm:px-0">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gold text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              The Europe Calling Difference
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-bold mb-6 text-primary leading-tight">
              Why Travelers Choose <br className="hidden sm:block" />
              <span className="text-gold relative inline-block">
                Europe Calling
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
              We don't just process visas; we design life-changing journeys. Experience the gold standard in European travel facilitation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Features Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const colorTheme = cardColors[index % cardColors.length];
              const rotation = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

              return (
                <div
                  key={feature.title}
                  className={`group relative p-8 rounded-xl ${colorTheme.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${rotation} hover:rotate-0`}
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  {/* Pin Element */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    {/* Pin Head */}
                    <div className={`w-4 h-4 rounded-full ${colorTheme.pin} shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2)]`} />
                    {/* Pin Shadow on Paper */}
                    <div className="absolute top-3 left-1 w-4 h-4 bg-black/20 blur-[2px] rounded-full transform scale-x-150 rotate-45 -z-10" />
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center shadow-sm">
                      <feature.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120L1200,120L1200,60C1200,60,950,110,600,110C250,110,0,60,0,60Z"
            className="fill-[#FFFBF2]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
