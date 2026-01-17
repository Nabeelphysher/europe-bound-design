import { ArrowRight, Calendar, Clock, CreditCard, FileCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface CountryHeroProps {
    image: string;
    name: string;
    tagline: string;
    stats: {
        duration: string;
        visa: string;
        price: string;
    };
}

export function CountryHero({ image, name, tagline, stats }: CountryHeroProps) {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={`${name} Travel`}
                    className="w-full h-full object-cover animate-scale-slow"
                />
                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            <div className="container-wide relative z-10 px-4 sm:px-6 text-center text-white mt-16">
                <RevealOnScroll animation="fade-up">
                    {/* Tagline Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 mx-auto hover:bg-white/20 transition-colors cursor-default">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                            {tagline}
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 leading-[1.1] tracking-tight text-shadow-lg">
                        Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic">{name}</span>
                    </h1>

                    {/* Stats Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-sm md:text-base">
                        <div className="flex items-center gap-2 text-white/90 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                            <Clock className="w-4 h-4 text-gold" />
                            <span>{stats.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                            <FileCheck className="w-4 h-4 text-gold" />
                            <span>{stats.visa}</span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#booking-form"
                            className="group relative px-8 py-4 bg-gold text-primary rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:-translate-y-1 w-full sm:w-auto min-w-[200px]"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                            <span className="font-bold relative z-10 flex items-center justify-center gap-2">
                                Book Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="#overview"
                            className="group px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto min-w-[200px] backdrop-blur-sm"
                        >
                            Explore Itinerary
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-scroll-down" />
                </div>
            </div>
        </section>
    );
}
