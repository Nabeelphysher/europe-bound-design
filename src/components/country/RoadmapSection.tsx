import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";
import { Clock, MapPin, Calendar, Camera } from "lucide-react";

interface RoadmapItem {
    day: number;
    title: string;
    description: string;
    image?: string;
}

interface RoadmapSectionProps {
    itinerary: RoadmapItem[];
}

export const RoadmapSection = ({ itinerary }: RoadmapSectionProps) => {
    if (!itinerary || itinerary.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
            {/* Extended Background Decorations for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]" />
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[150px] pointer-events-none" />

            <div className="container px-4 sm:px-6 relative z-10">
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-20 md:mb-32">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] mb-6">
                            <span className="flex w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Day by Day Guide</span>
                        </div>
                        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 tracking-tight">
                            Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600 font-serif italic relative">
                                Unfolds
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                            Every day is crafted to perfection. Explore the detailed itinerary designed to give you the most immersive experience.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Elegant Central Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />

                        {/* Floating Icons along line */}
                        <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 text-gold/20"><Calendar className="w-6 h-6" /></div>
                        <div className="hidden md:block absolute left-1/2 bottom-10 -translate-x-1/2 text-gold/20"><Camera className="w-6 h-6" /></div>

                        <div className="space-y-20 md:space-y-24">
                            {itinerary.map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className="relative md:grid md:grid-cols-2 gap-16 lg:gap-24 items-center group perspective-1000">

                                        {/* Timeline Node (Center) - Premium Marker */}
                                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-[#FDFCF8] border border-gold/20 shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 flex items-center justify-center">
                                                    <span className="font-heading font-bold text-lg text-primary">{item.day}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Left Side (Column 1) */}
                                        <div className={cn(
                                            "relative",
                                            !isEven ? "md:text-right" : "" // Odd (Row 2): Text on Left (Align Right)
                                        )}>
                                            {isEven ? (
                                                /* EVEN [Row 1]: Image on Left */
                                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] rotate-1 group-hover:rotate-0 transition-transform duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-muted-foreground">
                                                            <MapPin className="w-12 h-12 opacity-20" />
                                                        </div>
                                                    )}
                                                    {/* Floating Badge - Left Side */}
                                                    <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Day {item.day} Highlights</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                /* ODD [Row 2]: Text on Left */
                                                <div className="relative z-10 p-8 md:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2">
                                                    {/* Golden Number Watermark - Right aligned */}
                                                    <span className="absolute -top-6 -right-4 text-[8rem] font-serif font-bold text-gray-50 leading-none pointer-events-none select-none z-0 opacity-50">
                                                        {item.day}
                                                    </span>

                                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                                        <h3 className="font-heading text-3xl font-bold text-primary mb-4 leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        {item.description && (
                                                            <>
                                                                <div className="w-12 h-0.5 bg-gold/50 ml-auto mb-6" />
                                                                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                                                    {item.description}
                                                                </p>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side (Column 2) */}
                                        <div className={cn(
                                            "relative mt-12 md:mt-0",
                                            isEven ? "md:text-left" : "" // Even (Row 1): Text on Right (Align Left)
                                        )}>
                                            {isEven ? (
                                                /* EVEN [Row 1]: Text on Right */
                                                <div className="relative z-10 p-8 md:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2">
                                                    {/* Golden Number Watermark - Left aligned */}
                                                    <span className="absolute -top-6 -left-4 text-[8rem] font-serif font-bold text-gray-50 leading-none pointer-events-none select-none z-0 opacity-50">
                                                        {item.day}
                                                    </span>

                                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                                        <h3 className="font-heading text-3xl font-bold text-primary mb-4 leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        {item.description && (
                                                            <>
                                                                <div className="w-12 h-0.5 bg-gold/50 mr-auto mb-6" />
                                                                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                                                    {item.description}
                                                                </p>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                /* ODD [Row 2]: Image on Right */
                                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] -rotate-1 group-hover:rotate-0 transition-transform duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-muted-foreground">
                                                            <MapPin className="w-12 h-12 opacity-20" />
                                                        </div>
                                                    )}
                                                    {/* Floating Badge - Right Side */}
                                                    <div className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Day {item.day} Highlights</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
