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
  return (
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
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 px-4 sm:px-0">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold border border-gold/20 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              The Europe Calling Difference
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-primary drop-shadow-sm">
              Why Travelers Choose <br className="hidden sm:block" />
              <span className="text-gold drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">Europe Calling</span>
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don't just process visas; we design life-changing journeys. Experience the gold standard in European travel facilitation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Features Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {features.map((feature, index) => {
              const animationDuration = 4 + (index % 3) * 0.7; // Vary between 4s-5.4s
              const animationDelay = index * 0.4; // Stagger by 0.4s intervals

              return (
                <div
                  key={feature.title}
                  className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-md wind-sway-card hover:-translate-y-2 hover:scale-[1.02]"
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
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-gold transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                      {feature.description}
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
