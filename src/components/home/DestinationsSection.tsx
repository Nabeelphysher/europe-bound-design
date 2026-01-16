import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Import images
import azerbaijanImg from "@/assets/a3.png";
import kazakhstanImg from "@/assets/a2 (1).png";
import armeniaImg from "@/assets/a4.png";
import netherlandsImg from "@/assets/dest1ination-netherlands.png";
import georgiaImg from "@/assets/1destination-georgia.png";
import kyrgyzstanImg from "@/assets/a1.png";
import uzbekistanImg from "@/assets/uzbekistan.jpg";
import franceImg from "@/assets/france.jpg";

const destinations = [
    {
        name: "Azerbaijan",
        tagline: "LAND OF FIRE",
        image: azerbaijanImg,
        tours: "8 TOURS",
        path: "/destinations/azerbaijan",
    },
    {
        name: "Kazakhstan",
        tagline: "HEART OF EURASIA",
        image: kazakhstanImg,
        tours: "7 TOURS",
        path: "/destinations/kazakhstan",
    },
    {
        name: "Armenia",
        tagline: "ANCIENT HIGHLANDS",
        image: armeniaImg,
        tours: "6 TOURS",
        path: "/destinations/armenia",
    },
    {
        name: "Netherlands",
        tagline: "CANALS & CULTURE",
        image: netherlandsImg,
        tours: "5 TOURS",
        path: "/destinations/netherlands",
    },
    {
        name: "Georgia",
        tagline: "WINE & MOUNTAINS",
        image: georgiaImg,
        tours: "4 TOURS",
        path: "/destinations/georgia",
    },
    {
        name: "Kyrgyzstan",
        tagline: "NOMADIC SPIRIT",
        image: kyrgyzstanImg,
        tours: "3 TOURS",
        path: "/destinations/kyrgyzstan",
    },
    {
        name: "Uzbekistan",
        tagline: "SILK ROAD JEWEL",
        image: uzbekistanImg,
        tours: "2 TOURS",
        path: "/destinations/uzbekistan",
    },
    {
        name: "France",
        tagline: "ART & ELEGANCE",
        image: franceImg,
        tours: "1 TOURS",
        path: "/destinations/france",
    },
];

interface DestinationsSectionProps {
    className?: string;
    showViewAll?: boolean;
    showHeader?: boolean;
}

export function DestinationsSection({ className = "", showViewAll = true, showHeader = true }: DestinationsSectionProps) {
    return (
        <section className={cn("py-32 bg-background relative overflow-hidden", className)}>

            {/* Background Glows (Subtle & Premium) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-wide px-4 sm:px-6 relative z-10">

                {/* Header Content */}
                {showHeader && (
                    <div className="text-center mb-16">
                        <span className="font-['Dancing_Script'] text-3xl md:text-5xl text-[#FF6B00] block mb-4 animate-fade-in-up">
                            Top Destinations
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 animate-fade-in-up animation-delay-200 tracking-tight text-shadow-premium">
                            Most Favorite Destinations
                        </h2>
                        <div className="w-20 h-1 bg-[#FF6B00] mx-auto rounded-full animate-scale-in animation-delay-300" />
                    </div>
                )}

                {/* Premium Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    {destinations.map((dest, index) => (
                        <Link
                            key={index}
                            to={dest.path}
                            className="group relative h-[240px] sm:h-[320px] w-full rounded-[24px] overflow-hidden cursor-pointer block transform-gpu bg-[#0F172A] shadow-md hover:shadow-2xl transition-all duration-700 ease-out-expo hover:-translate-y-2"
                        >
                            {/* Background Image with Slow Zoom */}
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out-expo scale-[1.01] group-hover:scale-110 will-change-transform opacity-90 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay - Cinematic Bottom Fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 will-change-[opacity]" />

                            {/* Top Badge (Tours Count) - Subtle Glass */}
                            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0">
                                <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                                    {dest.tours}
                                </span>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex flex-col items-center text-center">

                                <h3 className="font-heading text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-1.5 drop-shadow-lg tracking-wide group-hover:text-[#FF6B00] transition-colors duration-300">
                                    {dest.name}
                                </h3>

                                <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] font-sans antialiased mb-2 sm:mb-3">
                                    {dest.tagline}
                                </p>

                                {/* Hover Line Decor */}
                                <div className="w-8 sm:w-10 h-[2px] bg-[#FF6B00] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo origin-center" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
