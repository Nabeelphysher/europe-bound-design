import { useEffect, useRef, useState } from "react";
import { Users, Globe2, Award, Briefcase, Smile, CheckCircle2 } from "lucide-react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Travelers", icon: Users, duration: 2000 },
  { value: 15, suffix: "+", label: "Top Destinations", icon: Globe2, duration: 1500 },
  { value: 10, suffix: "+", label: "Years Experience", icon: Award, duration: 1800 },
  { value: 98, suffix: "%", label: "Visa Success", icon: CheckCircle2, duration: 2200 },
  { value: 99, suffix: "%", label: "Satisfaction Rate", icon: Smile, duration: 2400 },
];

function AnimatedCounter({
  value,
  suffix,
  duration,
  isVisible,
}: {
  value: number;
  suffix: string;
  duration: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return (
    <span className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

import { FlightAnimation } from "@/components/ui/FlightAnimation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-secondary/20 border-y border-border/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
      <FlightAnimation className="text-primary/5" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center mb-16 px-4 sm:px-0 max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6 border border-gold/20">
              Our Track Record
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Excellence in Every Number
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              We take pride in our numbers. They represent the trust and dreams of thousands of travelers we've served.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-background p-4 sm:p-6 rounded-2xl shadow-sm border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <stat.icon className="w-7 h-7" />
                </div>

                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    isVisible={isVisible}
                  />
                </div>

                <p className="text-muted-foreground font-medium text-sm sm:text-base uppercase tracking-wide">
                  {stat.label}
                </p>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gold transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
