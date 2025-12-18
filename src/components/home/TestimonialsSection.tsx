import { useState } from "react";
import { Play, Star, Globe, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import netherlandsImg from "@/assets/destination-netherlands.png";
import germanyImg from "@/assets/destination-germany.jpg";
import franceImg from "@/assets/destination-france.jpg";
import georgiaImg from "@/assets/destination-georgia.png";
import testimonialVideo from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (2).mp4";

const testimonials = [
    {
        id: 1,
        name: "Sophia L.",
        role: "Luxury Traveler",
        text: "Europe Calling helped reunite my family in Prague. Their expertise in family reunification cases is unparalleled.",
        image: franceImg,
        from: "Dubai",
        to: "Prague"
    },
    {
        id: 2,
        name: "James D.",
        role: "Adventure Enthusiast",
        text: "Truly luxurious. Every detail was perfectly curated. The best trip of our lives were made possible by them.",
        image: germanyImg,
        from: "London",
        to: "Berlin"
    },
    {
        id: 3,
        name: "Elena R.",
        role: "Photography Lover",
        text: "Highly recommend! The locations were cinematic and the guide was amazing. A seamless experience.",
        image: georgiaImg,
        from: "Tbilisi",
        to: "Kazbegi"
    },
    {
        id: 4,
        name: "Michael B.",
        role: "Business Traveler",
        text: "Seamless and efficient. The team handled everything perfectly, allowing me to focus on work.",
        image: netherlandsImg,
        from: "New York",
        to: "Amsterdam"
    },
];

export function TestimonialsSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="testimonials-preview" className="py-16 bg-[#FDFBF7] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />

            {/* Container widened to max-w-7xl to support professional card width */}
            <div className="container relative z-10 px-6 max-w-7xl mx-auto">

                {/* Section Header */}
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
                        <h2 className="font-heading text-3xl lg:text-4xl text-primary font-bold">Journeys of a Lifetime</h2>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={200}>
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                        {/* Left Column: Testimonials 1-2 */}
                        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            {testimonials.slice(0, 2).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border border-gray-100 p-6 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between flex-1 group"
                                >
                                    {/* Header: Avatar & Info */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 rounded-full bg-[#F5F0E6] text-primary font-serif font-bold text-lg flex items-center justify-center shrink-0">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-primary font-bold text-base leading-tight">{item.name}</h4>
                                                <p className="text-muted-foreground text-xs">{item.role}</p>
                                            </div>
                                        </div>
                                        <Globe className="w-5 h-5 text-gray-200" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex text-gold mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-primary/80 italic font-medium text-sm leading-relaxed mb-6">"{item.text}"</p>

                                    {/* Footer: Locations */}
                                    <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span className="text-xs font-medium">From {item.from}</span>
                                        </div>
                                        <div className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-md text-primary text-[10px] font-bold uppercase tracking-wide">
                                            To {item.to}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Column: Cinematic Video Card */}
                        <div className="lg:col-span-4 h-full">
                            <div
                                className="relative w-full h-full min-h-[350px] lg:min-h-[400px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] group cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >
                                {isPlaying ? (
                                    <video
                                        src={testimonialVideo}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={netherlandsImg}
                                            alt="Cinematic Amsterdam Canal"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                        {/* Floating Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                                                    <Play className="w-6 h-6 fill-current ml-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Minimalist Overlay Text */}
                                        <div className="absolute bottom-8 left-8 text-white pointer-events-none">
                                            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-80">Watch Film</p>
                                            <h3 className="font-heading text-3xl font-bold">Amsterdam Stories</h3>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Testimonials 3-4 */}
                        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                            {testimonials.slice(2, 4).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border border-gray-100 p-6 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between flex-1 group"
                                >
                                    {/* Header: Avatar & Info */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 rounded-full bg-[#F5F0E6] text-primary font-serif font-bold text-lg flex items-center justify-center shrink-0">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-primary font-bold text-base leading-tight">{item.name}</h4>
                                                <p className="text-muted-foreground text-xs">{item.role}</p>
                                            </div>
                                        </div>
                                        <Globe className="w-5 h-5 text-gray-200" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex text-gold mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-primary/80 italic font-medium text-sm leading-relaxed mb-6">"{item.text}"</p>

                                    {/* Footer: Locations */}
                                    <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span className="text-xs font-medium">From {item.from}</span>
                                        </div>
                                        <div className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-md text-primary text-[10px] font-bold uppercase tracking-wide">
                                            To {item.to}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
