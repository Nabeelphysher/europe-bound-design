import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Clients Placed", duration: 2000 },
  { value: 6, suffix: "", label: "Partner Countries", duration: 1500 },
  { value: 10, suffix: "+", label: "Years Experience", duration: 1800 },
  { value: 98, suffix: "%", label: "Success Rate", duration: 2200 },
  { value: 99, suffix: "%", label: "Customer Satisfaction", duration: 2400 },
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
    <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

import { FlightAnimation } from "@/components/ui/FlightAnimation";

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
      className="py-20 bg-background border-y border-border relative overflow-hidden"
    >
      <FlightAnimation className="text-primary/5" />
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Track Record
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Excellence in Every Number
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-4 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
                isVisible={isVisible}
              />
              <p className="text-muted-foreground mt-2 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
