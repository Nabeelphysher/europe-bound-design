import { useState } from "react";
import { Play, Star } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import netherlandsImg from "@/assets/destination-netherlands.png";
import testimonialVideo from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (2).mp4";

const testimonials = [
    {
        id: 1,
        name: "Sophia L.",
        date: "31 July 2025",
        text: "I just got France visa their service was just amazing soooo professional and great follow up with the team, I got rejected before but they made it happen.",
        initial: "S"
    },
    {
        id: 2,
        name: "James D.",
        date: "15 Aug 2025",
        text: "Truly luxurious. Every detail was perfectly curated. The best trip of our lives were made possible by them. Highly recommended for families!",
        initial: "J"
    },
    {
        id: 3,
        name: "Elena R.",
        date: "02 Sept 2025",
        text: "Highly recommend! The locations were cinematic and the guide was amazing. A seamless experience from start to finish.",
        initial: "E"
    },
    {
        id: 4,
        name: "Michael B.",
        date: "12 Oct 2025",
        text: "Seamless and efficient. The team handled everything perfectly, allowing me to focus on work. Will definitely use their services again.",
        initial: "M"
    },
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const VerifiedBadge = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 fill-current ml-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        {/* Simple checkmark, standard badge often has a shape behind it, but user image shows a blue checkmark-like icon, assuming standard 'verified' look */}
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export function TestimonialsSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col font-sans">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    {/* Avatar with Badge */}
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                            {/* Placeholder Avatar */}
                            {/* In a real app, use item.image */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                {item.initial}
                            </div>
                        </div>
                        {/* Orange Star Badge on Avatar */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center border border-white">
                            <StarIcon className="w-2.5 h-2.5 text-white" />
                        </div>
                    </div>

                    {/* Name and Date */}
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                        <span className="text-gray-400 text-xs">{item.date}</span>
                    </div>
                </div>

                {/* Google Logo */}
                <GoogleLogo />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-3">
                <div className="flex text-[#F4B400]">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4" />
                    ))}
                </div>
                <VerifiedBadge />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 line-clamp-4">
                {item.text}
            </p>

        </div>
    );

    return (
        <section id="testimonials-preview" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -z-10" />

            <div className="container relative z-10 px-6 max-w-7xl mx-auto">

                {/* Section Header */}
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
                        <h2 className="font-heading text-3xl lg:text-4xl text-primary font-bold">What our clients say</h2>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={200}>
                    <div className="grid lg:grid-cols-12 gap-6 items-stretch">

                        {/* Left Column: Testimonials 1-2 */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {testimonials.slice(0, 2).map((item) => (
                                <TestimonialCard key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Center Column: Cinematic Video Card */}
                        <div className="lg:col-span-4 min-h-[400px]">
                            <div
                                className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
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
                                            alt="Happy Clients"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 transition-transform group-hover:scale-110">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                                    <Play className="w-5 h-5 text-primary fill-current ml-0.5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-6 text-white">
                                            <p className="text-[10px] font-bold tracking-widest uppercase mb-1">Watch Story</p>
                                            <h3 className="text-xl font-bold">Client Experiences</h3>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Testimonials 3-4 */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {testimonials.slice(2, 4).map((item) => (
                                <TestimonialCard key={item.id} item={item} />
                            ))}
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
