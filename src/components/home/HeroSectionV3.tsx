import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LeadPopup } from "../ui/LeadPopup";
import azerbaijanBg from "../../assets/a3.png";
import armeniaBg from "../../assets/a4.png";
import kyrgyzstanBg from "../../assets/a1.png";
import kazakhstanBg from "../../assets/a2 (1).png";
import russiaBg from "../../assets/russia.jpg";
import georgiaImg from "../../assets/1destination-georgia.jpg";
import uzbekistanImg from "../../assets/uzbekistan.jpg";
import franceImg from "../../assets/france.jpg";

const slides = [
    {
        id: 1,
        title: "AZERBAIJAN",
        subtitle: "Land of Fire",
        image: azerbaijanBg,
        cta: "Book Azerbaijan Tour"
    },
    {
        id: 2,
        title: "KAZAKHSTAN",
        subtitle: "Heart of Eurasia",
        image: kazakhstanBg,
        cta: "Book Kazakhstan Tour"
    },
    {
        id: 3,
        title: "ARMENIA",
        subtitle: "Ancient Highlands",
        image: armeniaBg,
        cta: "Book Armenia Tour"
    },
    {
        id: 4,
        title: "RUSSIA",
        subtitle: "Imperial Splendor",
        image: russiaBg,
        cta: "Book Russia Tour"
    },
    {
        id: 5,
        title: "GEORGIA",
        subtitle: "Wine & Mountains",
        image: georgiaImg,
        cta: "Book Georgia Tour"
    },
    {
        id: 6,
        title: "KYRGYZSTAN",
        subtitle: "Nomadic Spirit",
        image: kyrgyzstanBg,
        cta: "Book Kyrgyzstan Tour"
    },
    {
        id: 7,
        title: "UZBEKISTAN",
        subtitle: "Silk Road Jewel",
        image: uzbekistanImg,
        cta: "Book Uzbekistan Tour"
    },
    {
        id: 8,
        title: "FRANCE",
        subtitle: "Art & Elegance",
        image: franceImg,
        cta: "Book France Tour"
    }
];

export const HeroSectionV3 = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [popupDestination, setPopupDestination] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    const handleBookTour = (destination: string) => {
        setPopupDestination(destination);
        setIsPopupOpen(true);
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Full-bleed Background Image Slider */}
            {slides.map((s, index) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={s.image}
                        alt={`${s.title} Landscape`}
                        className={`w-full h-full object-cover transform transition-transform ease-linear ${currentSlide === index ? "scale-110" : "scale-100"
                            }`}
                        style={{ transitionDuration: '10000ms' }}
                    />
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                </div>
            ))}

            {/* Main Content - Left Aligned */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 w-full h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0">
                <div className="max-w-2xl text-left">
                    {/* Trusted By Section - Glass Pill */}
                    <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up md:justify-start bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500" />
                            <div className="w-8 h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-green-400 to-blue-500" />
                            <div className="w-8 h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-orange-400 to-pink-500" />
                        </div>
                        <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                            Trusted by <span className="font-bold text-white">10k+</span> travelers
                        </p>
                    </div>

                    {/* Main Heading - Static Welcome Title */}
                    <h1 className="font-heading text-[12vw] sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tighter animate-fade-in-up animation-delay-100 text-left drop-shadow-lg">
                        Welcome to
                        <br />
                        <span className="text-[#FF6B00] italic pr-2">Europe Calling</span>
                    </h1>

                    {/* Description - Reduced Size */}
                    <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light animate-fade-in-up animation-delay-200 text-left drop-shadow-md">
                        For over a decade, we've been the bridge between dreams and destinations.
                        Experience Europe's finest landscapes, cultures, and opportunities.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300 w-full sm:w-auto">
                        <button
                            onClick={() => handleBookTour(slide.title)}
                            className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-full font-bold text-base shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-gray-100"
                        >
                            <span className="relative z-10">{slide.cta}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            {/* Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 ease-in-out" />
                        </button>
                        <Link
                            to="/about"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
                        >
                            Read Our Story
                        </Link>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex gap-2 mt-8 animate-fade-in-up animation-delay-300">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-[#FF6B00]" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} initialDestination={popupDestination} />
        </section>
    );
};
