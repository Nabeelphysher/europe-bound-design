import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
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
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
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

        {/* Destinations Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {destinations.map((dest, index) => (
            <Link
              key={dest.name}
              to={dest.path}
              className="group relative overflow-hidden rounded-3xl sm:rounded-[50px] md:rounded-[60px] w-32 sm:w-40 md:w-44 lg:w-52 xl:w-60 aspect-[3/4] transition-all duration-500 hover:scale-105 hover:shadow-elevated animate-fade-in-up"
              style={{
                animationDelay: `${200 + index * 100}ms`,
              }}
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                {destinations.length - index} Tours
              </div>

              {/* Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center px-2">
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-primary-foreground mb-1">
                  {dest.name}
                </h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">
                  {dest.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
