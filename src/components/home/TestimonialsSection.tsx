import { useState, useEffect } from "react";
import { Play, X, Star, Quote } from "lucide-react";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import franceImg from "@/assets/destination-france.jpg";
import germanyImg from "@/assets/destination-germany.jpg";
import netherlandsImg from "@/assets/destination-netherlands.png"; // Using as placeholder for Venice/Canal
import georgiaImg from "@/assets/destination-georgia.png"; // Placeholder for Italy

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    location: "Paris, France",
    text: "Euro Calling made my dream Parisian vacation a reality! Their local recommendations were priceless. I'm already planning my next trip with them!",
    image: franceImg,
  },
  {
    id: 2,
    name: "Mark & Lisa B.",
    location: "Rome, Italy",
    text: "The team handled every detail with such professionalism and care. The skip-the-line tickets for the Vatican were a lifesaver. Five stars for an exceptional service!",
    image: georgiaImg,
  },
  {
    id: 3,
    name: "Dr. Adrian P.",
    location: "Bavarian Alps, Germany",
    text: "The 'Alpine Adventure' package was superb. The personalized support throughout the journey gave me complete peace of mind. Highly recommend!",
    image: germanyImg,
  },
];

export function TestimonialsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    if (isVideoOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section id="testimonials-preview" className="py-24 bg-secondary/20 relative overflow-hidden">
      <FlightAnimation className="text-primary/10" />
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Client Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Memories That Last a Lifetime
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Discover why travelers trust us to design their perfect European getaways.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 px-4 sm:px-0">
          {/* Video Testimonial - Featured Section */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/8] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-pointer group animate-fade-in-up animation-delay-200" onClick={() => setIsVideoOpen(true)}>
            {/* Thumbnail */}
            <img
              src={netherlandsImg}
              alt="Video Testimonial Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-1" />
              </div>
            </div>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="max-w-3xl mx-auto text-center md:text-left">
                <p className="text-white font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  See the Experience
                </p>
                <p className="text-white/80 text-sm sm:text-base">
                  Watch our travelers' journey through Europe. "We capture not just places, but feelings."
                </p>
              </div>
            </div>
          </div>

          {/* Text Testimonials Grid - 3 Columns on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full animate-fade-in-up"
                style={{
                  animationDelay: `${300 + index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-4 sm:mb-6 leading-relaxed flex-grow italic text-sm sm:text-base">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-gold/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xs sm:text-sm">{item.name}</h4>
                    <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
