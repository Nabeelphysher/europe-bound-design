import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import heroImage from "@/assets/hero-europe.jpg";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        // Only update if the section is somewhat visible to save performance
        if (scrolled < window.innerHeight * 1.5) {
          setScrollY(scrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Flight Animation for Hero - Behind content but visible */}
      <FlightAnimation className="text-white/20 z-0" />

      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        <img
          src={heroImage}
          alt="Beautiful European street at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay-hero" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 z-10">
        <div className="max-w-3xl px-4 sm:px-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-gentle" />
            <span className="text-primary-foreground text-xs sm:text-sm font-medium">
              Your Gateway to Europe
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up">
            Your Trusted Partner for{" "}
            <span className="text-gold italic">Europe</span> Travel &
            Hospitality
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            We transform your European dreams into reality with expert guidance,
            seamless processes, and personalized attention at every step.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/contact" className="btn-gold inline-flex items-center justify-center gap-2 group text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
              Get Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
            >
              Explore Packages
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/20 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <span className="text-gold font-bold text-base sm:text-lg">98%</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm sm:text-base">Success Rate</p>
                <p className="text-primary-foreground/60 text-xs sm:text-sm">Visa Approvals</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <span className="text-gold font-bold text-base sm:text-lg">10+</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm sm:text-base">Years</p>
                <p className="text-primary-foreground/60 text-xs sm:text-sm">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <span className="text-gold font-bold text-base sm:text-lg">5K+</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm sm:text-base">Clients</p>
                <p className="text-primary-foreground/60 text-xs sm:text-sm">Successfully Placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
