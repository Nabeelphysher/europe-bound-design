import { Globe, Headphones, ShieldCheck, FileText, Users, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const features = [
  {
    icon: Globe,
    title: "Europe-focused expertise",
    description: "Deep knowledge of European immigration policies and cultural nuances.",
    bgColor: "bg-[#F3E8FF]", // Purple
    pinColor: "bg-[#9333EA]", // Dark Purple
    delay: 0,
  },
  {
    icon: Headphones,
    title: "24/7 dedicated support",
    description: "Round-the-clock assistance from pre-departure to your first week abroad.",
    bgColor: "bg-[#FFF7ED]", // Beige/Orange
    pinColor: "bg-[#EA580C]", // Dark Orange
    delay: 100,
  },
  {
    icon: ShieldCheck,
    title: "High visa and placement success",
    description: "Industry-leading visa approval rates backed by meticulous documentation.",
    bgColor: "bg-[#ECFEFF]", // Cyan/Blue
    pinColor: "bg-[#0891B2]", // Dark Cyan
    delay: 200,
  },
  {
    icon: FileText,
    title: "Transparent process",
    description: "Clear timelines, honest pricing, and real-time updates at every stage.",
    bgColor: "bg-[#F0FDF4]", // Green
    pinColor: "bg-[#16A34A]", // Dark Green
    delay: 300,
  },
  {
    icon: Users,
    title: "Experienced team",
    description: "Diverse experts who understand both your background and destination.",
    bgColor: "bg-[#FDF2F8]", // Pink
    pinColor: "bg-[#BE185D]", // Dark Pink
    delay: 400,
  },
  {
    icon: Clock,
    title: "100% documentation aid",
    description: "Complete legal and documentation support leaving no room for errors.",
    bgColor: "bg-[#FEFCE8]", // Yellow
    pinColor: "bg-[#CA8A04]", // Dark Yellow
    delay: 500,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background with Notebook Lines Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px)',
          backgroundSize: '100% 40px'
        }}
      />
      {/* Decorative Dashed Arch */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-64 border-t-2 border-dashed border-gray-200 rounded-t-full opacity-60 pointer-events-none" />

      <div className="container-wide relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight tracking-tight animate-fade-in-up text-shadow-premium">
            Why Travelers Choose
          </h2>
          <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gold block mb-8 animate-fade-in-up animation-delay-100 text-shadow-premium">
            Europe Calling
          </span>

          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="inline-block bg-white/90 backdrop-blur-md border border-gray-100/50 rounded-2xl px-6 py-4 shadow-sm max-w-2xl">
              <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                We don't just process visas; we design life-changing journeys. Experience the gold standard in European travel facilitation.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <RevealOnScroll key={index} animation="fade-up" delay={item.delay}>
              <div className="relative group pt-4 h-full">

                {/* Pin Styling - Centered and Realistic */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-full h-full rounded-full ${item.pinColor} shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]`} />
                </div>
                {/* Pin Shadow on Paper */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-5 h-2 bg-black/20 blur-[2px] rounded-full" />

                {/* Card Content - Premium Paper Texture */}
                <div
                  className={`${item.bgColor} rounded-[24px] p-8 h-full relative shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 border border-white/60 flex flex-col items-start`}
                >
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-white rounded-[18px] flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-7 h-7 text-slate-700" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3 leading-tight text-shadow-elegant">
                    {item.title}
                  </h3>

                  <p className="text-slate-600/90 leading-relaxed text-[15px] font-medium tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
