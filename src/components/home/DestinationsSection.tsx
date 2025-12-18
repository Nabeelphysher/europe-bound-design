import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import azerbaijanImg from "@/assets/destination-azerbaijan.png";
import kazakhstanImg from "@/assets/destination-kazakhstan.png";
import armeniaImg from "@/assets/destination-armenia.png";
import netherlandsImg from "@/assets/destination-netherlands.png";
import georgiaImg from "@/assets/destination-georgia.png";
import kyrgyzstanImg from "@/assets/destination-kyrgyzstan.png";
import uzbekistanImg from "@/assets/destination-uzbekistan.png";
import franceImg from "@/assets/destination-france.jpg";

const destinations = [
  {
    name: "Azerbaijan",
    tagline: "Land of Fire",
    image: azerbaijanImg,
    path: "/destinations/azerbaijan",
  },
  {
    name: "Kazakhstan",
    tagline: "Heart of Eurasia",
    image: kazakhstanImg,
    path: "/destinations/kazakhstan",
  },
  {
    name: "Armenia",
    tagline: "Ancient Highlands",
    image: armeniaImg,
    path: "/destinations/armenia",
  },
  {
    name: "Netherlands",
    tagline: "Canals & Culture",
    image: netherlandsImg,
    path: "/destinations/netherlands",
  },
  {
    name: "Georgia",
    tagline: "Wine & Mountains",
    image: georgiaImg,
    path: "/destinations/georgia",
  },
  {
    name: "Kyrgyzstan",
    tagline: "Nomadic Spirit",
    image: kyrgyzstanImg,
    path: "/destinations/kyrgyzstan",
  },
  {
    name: "Uzbekistan",
    tagline: "Silk Road Jewel",
    image: uzbekistanImg,
    path: "/destinations/uzbekistan",
  },
  {
    name: "France",
    tagline: "Art & Elegance",
    image: franceImg,
    path: "/destinations/france",
  },
];

export function DestinationsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <FlightAnimation className="text-primary" />
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4 sm:px-0">
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
              Discover Your
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Most Favorite Destinations
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Explore the best of Europe with our curated selection of premier
              destinations.
            </p>
          </div>
        </RevealOnScroll>

        {/* Destinations Grid */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-3 sm:px-0 mx-auto max-w-sm sm:max-w-none">
            {destinations.map((dest, index) => (
              <Link
                key={dest.name}
                to={dest.path}
                className="group relative overflow-hidden rounded-3xl w-full aspect-[3/4] transition-all duration-500 hover:scale-[1.02] hover:shadow-elevated"
                style={{
                  animationDelay: `${200 + index * 100}ms`,
                }}
              >
                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                {/* Badge */}
                <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-gold/90 backdrop-blur-sm text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
                  {destinations.length - index} Tours
                </div>

                {/* Content */}
                <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 text-center px-1.5 sm:px-2">
                  <h3 className="font-heading text-sm sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-sm font-medium uppercase tracking-wide truncate">
                    {dest.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        {/* View All Link */}
        <RevealOnScroll animation="fade-in" delay={400}>
          <div className="text-center mt-12 animation-delay-500">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group"
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
