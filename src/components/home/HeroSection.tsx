import { useRef, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Mock Data
import azerbaijanImg from "@/assets/destination-azerbaijan.png";
import kazakhstanImg from "@/assets/destination-kazakhstan.png";
import armeniaImg from "@/assets/destination-armenia.png";
import netherlandsImg from "@/assets/destination-netherlands.png";
import franceImg from "@/assets/destination-france.jpg";

const heroDestinations = [
  { id: "azerbaijan", name: "AZERBAIJAN", location: "Baku - Azerbaijan", description: "Discover the Land of Fire, where ancient history meets modern architecture.", image: azerbaijanImg },
  { id: "netherlands", name: "THE NETHERLANDS", location: "Amsterdam - Netherlands", description: "Explore the picturesque canals, historic windmills, and vibrant tulip fields.", image: netherlandsImg },
  { id: "france", name: "FRANCE", location: "Paris - France", description: "Immerse yourself in art, fashion, and gastronomy.", image: franceImg },
  { id: "kazakhstan", name: "KAZAKHSTAN", location: "Almaty - Kazakhstan", description: "Journey through the Heart of Eurasia. Explore vast steppes and mountains.", image: kazakhstanImg },
  { id: "armenia", name: "ARMENIA", location: "Yerevan - Armenia", description: "Visit the world's first Christian nation and its ancient monasteries.", image: armeniaImg }
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeDest, setActiveDest] = useState(heroDestinations[0]);
  const [carouselDests, setCarouselDests] = useState(heroDestinations.slice(1));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandingCard, setExpandingCard] = useState<{ id: string; image: string; initialStyle: { top: number; left: number; width: number; height: number } } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDestClick = (e: React.MouseEvent<HTMLButtonElement>, dest: typeof heroDestinations[0]) => {
    if (isTransitioning || !sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const cardRect = e.currentTarget.getBoundingClientRect();

    setExpandingCard({
      id: dest.id,
      image: dest.image,
      initialStyle: {
        top: cardRect.top - sectionRect.top,
        left: cardRect.left - sectionRect.left,
        width: cardRect.width,
        height: cardRect.height
      }
    });

    setIsTransitioning(true);
    setTimeout(() => setIsExpanded(true), 50);

    setTimeout(() => {
      const prevActive = activeDest;
      setActiveDest(dest);
      setCarouselDests((prev) => {
        const filtered = prev.filter((d) => d.id !== dest.id);
        return [...filtered, prevActive];
      });
      setExpandingCard(null);
      setIsExpanded(false);
      setIsTransitioning(false);
    }, 1000); // 1s transition
  };

  return (

    <section ref={sectionRef} className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-black">

      {/* LAYER 1: Current Background (Lowest Z) */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeDest.image}
          alt={activeDest.name}
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out scale-105"
        />
        {/* Gradient Overlay for Text Readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* LAYER 2: Expanding Card (Behind Text and Carousel) */}
      {expandingCard && (
        <div
          className={cn(
            "absolute z-10 shadow-2xl overflow-hidden pointer-events-none",
            isExpanded ? "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none" : "rounded-xl"
          )}
          style={isExpanded ? { top: 0, left: 0, width: "100%", height: "100%" } : {
            top: expandingCard.initialStyle.top,
            left: expandingCard.initialStyle.left,
            width: expandingCard.initialStyle.width,
            height: expandingCard.initialStyle.height,
          }}
        >
          <img src={expandingCard.image} className="w-full h-full object-cover" alt="" />
          {/* Matching Gradient Inside Expansion */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent transition-opacity duration-1000",
            isExpanded ? "opacity-100" : "opacity-0"
          )} />
        </div>
      )}

      {/* LAYER 3: Main Content (Highest Z - Always Visible) */}
      <div className="relative z-50 container-wide h-full flex flex-col justify-center items-start pl-4 sm:pl-0 pointer-events-none">
        <div className="max-w-xl pointer-events-auto mt-20 sm:mt-[-10vh]">
          <RevealOnScroll animation="slide-in-right">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-[2px] w-8 sm:w-12 bg-gold inline-block"></span>
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs sm:text-base">
                {activeDest.location}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-4 sm:mb-6 tracking-tighter drop-shadow-lg">
              {activeDest.name}
            </h1>
            <p className="text-white/90 text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg drop-shadow-md">
              {activeDest.description}
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* LAYER 4: Carousel (Above Expanding Card, Below Text interaction-wise) */}
      <div className="absolute bottom-6 sm:bottom-8 right-0 sm:right-8 z-40 w-full max-w-3xl pl-4 sm:pl-0">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4 pb-4">
            {carouselDests.map((dest) => (
              <CarouselItem key={dest.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3">
                <button
                  onClick={(e) => handleDestClick(e, dest)}
                  className={cn(
                    "relative w-full h-[120px] sm:h-[180px] md:h-[220px] rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-[1.03] hover:border-gold hover:shadow-xl group",
                    expandingCard?.id === dest.id ? "opacity-0" : "opacity-100"
                  )}
                >
                  <img src={dest.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-3 left-4 text-left pr-2">
                    <p className="text-white font-bold text-sm sm:text-base uppercase tracking-wider truncate">{dest.name}</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest truncate">{dest.location.split(' - ')[0]}</p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}