import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-europe.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful European street at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay-hero" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-gentle" />
            <span className="text-primary-foreground text-sm font-medium">
              Your Gateway to Europe
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up">
            Your Trusted Partner for{" "}
            <span className="text-gold italic">Europe</span> Travel &
            Hospitality
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            We transform your European dreams into reality with expert guidance,
            seamless processes, and personalized attention at every step.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/contact" className="btn-gold inline-flex items-center justify-center gap-2 group">
              Get Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center gap-2"
            >
              Explore Packages
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">98%</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Success Rate</p>
                <p className="text-primary-foreground/60 text-sm">Visa Approvals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">10+</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Years</p>
                <p className="text-primary-foreground/60 text-sm">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">5K+</span>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Clients</p>
                <p className="text-primary-foreground/60 text-sm">Successfully Placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
