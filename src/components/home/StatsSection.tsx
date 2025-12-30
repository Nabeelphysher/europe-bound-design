import { useEffect, useRef, useState } from "react";


const stats = [
  { value: 5000, suffix: "+", label: "Happy Travelers", duration: 2000 },
  { value: 15, suffix: "+", label: "Top Destinations", duration: 1500 },
  { value: 10, suffix: "+", label: "Years Experience", duration: 1800 },
  { value: 98, suffix: "%", label: "Visa Success", duration: 2200 },
  { value: 99, suffix: "%", label: "Satisfaction Rate", duration: 2400 },
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
    <span className="text-4xl sm:text-5xl font-bold text-[#C59D5F] tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}


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
      className="py-24 bg-[#FFFBF2] relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center mb-20 px-4 sm:px-0 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-bold text-[#192E57] mb-6">
              <span className="text-[#E8B430]">Excellence</span> in Every <br />
              Number
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              We take pride in our numbers. They represent the trust and dreams of thousands of travelers we've served.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    isVisible={isVisible}
                  />
                </div>

                <p className="text-gray-900 font-bold text-sm sm:text-base whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
