import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import germanyImg from "@/assets/destination-germany.jpg";
import polandImg from "@/assets/destination-poland.jpg";
import czechImg from "@/assets/destination-czech.jpg";
import franceImg from "@/assets/destination-france.jpg";
import romaniaImg from "@/assets/destination-romania.jpg";

const destinations = [
  {
    name: "Germany",
    tagline: "Innovation & Opportunity",
    image: germanyImg,
    path: "/destinations/germany",
  },
  {
    name: "Poland",
    tagline: "Historic Charm",
    image: polandImg,
    path: "/destinations/poland",
  },
  {
    name: "Czech Republic",
    tagline: "Timeless Beauty",
    image: czechImg,
    path: "/destinations/czech-republic",
  },
  {
    name: "France",
    tagline: "Art & Elegance",
    image: franceImg,
    path: "/destinations/france",
  },
  {
    name: "Romania",
    tagline: "Hidden Treasures",
    image: romaniaImg,
    path: "/destinations/romania",
  },
];

export function DestinationsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Discover Your
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Most Favorite Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the best of Europe with our curated selection of premier
            destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <Link
              key={dest.name}
              to={dest.path}
              className="group relative overflow-hidden rounded-[60px] w-44 md:w-52 lg:w-60 aspect-[3/4] transition-all duration-500 hover:scale-105 hover:shadow-elevated"
              style={{
                animationDelay: `${index * 100}ms`,
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
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                {destinations.length - index} Tours
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">
                  {dest.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {dest.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
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
