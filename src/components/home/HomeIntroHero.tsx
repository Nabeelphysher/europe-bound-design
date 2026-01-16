import { HeroSectionV2 } from "./HeroSectionV2";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Link } from "react-router-dom";

export const HomeIntroHero = () => {
    return (
        <section className="relative min-h-screen bg-[#FAFAFA] flex items-center pt-20 pb-20 overflow-hidden">
            {/* Background Decoration - softer and more premium */}
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none opacity-60" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-60" />

            {/* Fine texture overlay for premium feel */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-multiply" />

            <div className="container-wide px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <RevealOnScroll animation="slide-in-left">
                        {/* Title Section - Premium Typography (Matched to Reference) */}
                        <div className="mb-8 relative z-20">
                            <span className="block font-heading font-bold text-3xl md:text-4xl lg:text-6xl text-primary mb-1 tracking-tight">
                                Welcome to
                            </span>
                            <span className="block font-heading font-black italic text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-gold tracking-tighter drop-shadow-sm filter">
                                Europe Calling
                            </span>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed font-light max-w-xl mx-auto lg:mx-0 tracking-wide">
                            For over a decade, we've been the bridge between dreams and destinations.
                            Experience Europe's finest landscapes, cultures, and opportunities with the industry's most trusted partner.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
                            <a href="#tours" className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group border border-black">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link to="/about" className="px-10 py-5 bg-white text-primary border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                                Read Our Story
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Right Preview Box */}
                <RevealOnScroll animation="scale-up" delay={200} className="w-full relative px-4 lg:px-0">
                    <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border-[8px] border-white ring-1 ring-gray-100 bg-white group hover:shadow-[0_40px_80px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                        {/* Inner Container for Scaled Hero */}
                        <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none select-none">
                            <HeroSectionV2 className="h-full w-full" />
                        </div>

                        {/* Glass Overlay for "Preview" feel - Made subtler */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />



                        {/* Interactive Hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-white/95 backdrop-blur-xl text-primary px-8 py-4 rounded-full font-bold shadow-2xl transform scale-95 group-hover:scale-100 transition-all">
                                Scroll Down to Explore
                            </div>
                        </div>
                    </div>

                    {/* Decorative minimalist glow behind box - Removed specific blob for cleaner look */}
                    <div className="absolute -inset-10 bg-gradient-to-tr from-gold/10 to-primary/5 rounded-[4rem] blur-3xl -z-10 opacity-60" />
                </RevealOnScroll>
            </div>
        </section>
    )
}
