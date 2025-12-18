import { useState, useMemo, useEffect, useRef } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Star, Play, Quote, MapPin, Globe, User, ChevronLeft, ChevronRight, Pause, RotateCcw, Filter, X, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Video Assets
import video1 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.04 PM.mp4";
import video2 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.14 PM.mp4";
import video3 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.16 PM (1).mp4";
import video4 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.16 PM (2).mp4";
import video5 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.16 PM.mp4";
import video6 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (1).mp4";
import video7 from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (2).mp4";
// Note: video8 (WhatsApp Video 2025-12-15 at 1.17.17 PM.mp4) is available if needed we can add another testimonial.

// Enhanced Mock Data to support the Carousel effect (need ~7+ items for full effect)
const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "India",
    destination: "Germany",
    role: "Software Engineer",
    content: "Europe Calling made my dream of working in Germany a reality. Their professional team guided me through every step.",
    rating: 5,
    hasVideo: true,
    videoSrc: video1,
    thumbnail: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "2:15"
  },
  {
    id: 2,
    name: "Elena Petrov",
    location: "Azerbaijan",
    destination: "Poland",
    role: "Marketing Specialist",
    content: "The entire process was seamless. I'm now happily settled in Warsaw with my family.",
    rating: 5,
    hasVideo: true,
    videoSrc: video2,
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "1:45"
  },
  {
    id: 3,
    name: "Raj Patel",
    location: "India",
    destination: "Czech Republic",
    role: "Hospitality Manager",
    content: "They treat you like family, not just a client. Forever grateful for their support.",
    rating: 5,
    hasVideo: true,
    videoSrc: video3,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "2:30"
  },
  {
    id: 4,
    name: "Sofia Ionescu",
    location: "Romania",
    destination: "France",
    role: "Architect",
    content: "Moving to France seemed impossible until I found Europe Calling. Thank you!",
    rating: 5,
    hasVideo: true,
    videoSrc: video4,
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "1:45"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "India",
    destination: "Germany",
    role: "Mechanical Engineer",
    content: "From the first consultation to my arrival in Berlin, Europe Calling was with me every step.",
    rating: 5,
    hasVideo: true,
    videoSrc: video5,
    thumbnail: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "3:10"
  },
  {
    id: 6,
    name: "Aysel Mammadova",
    location: "Azerbaijan",
    destination: "Romania",
    role: "Student",
    content: "Transparent process and regular updates made everything stress-free.",
    rating: 5,
    hasVideo: true,
    videoSrc: video6,
    thumbnail: "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "2:05"
  },
  {
    id: 7,
    name: "Priya Nair",
    location: "India",
    destination: "Poland",
    role: "Nurse",
    content: "The team's cultural understanding made a huge difference.",
    rating: 5,
    hasVideo: true,
    videoSrc: video7,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "3:00"
  },
  // Text only reviews
  {
    id: 8,
    name: "Rustam Hasanov",
    location: "Azerbaijan",
    destination: "Czech Republic",
    role: "IT Specialist",
    content: "Europe Calling helped reunite my family in Prague. Their expertise in family reunification cases is unparalleled.",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 9,
    name: "Sarah Johnson",
    location: "UK",
    destination: "Spain",
    role: "Retiree",
    content: "Excellent service for retirement visa processing. They handled all the Spanish bureaucracy effortlessly.",
    rating: 4,
    hasVideo: false,
    image: null
  },
  {
    id: 10,
    name: "Michael Chen",
    location: "China",
    destination: "Portugal",
    role: "Business Owner",
    content: "The Golden Visa assistance was top-notch. Highly professional team.",
    rating: 5,
    hasVideo: false,
    image: null
  }
];

const filters = ["All", "India Clients", "Azerbaijan Clients", "Other Countries"];

const VideoCarousel = ({ items }: { items: typeof testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    // Don't auto-rotate if a video is playing or if user is hovering (paused)
    if (isPaused || playingVideoId !== null || items.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length, isPaused, playingVideoId]);

  // Reset active index when items array changes
  useEffect(() => {
    setActiveIndex(0);
    setPlayingVideoId(null);
  }, [items.length]);

  // Stop video when slide changes
  useEffect(() => {
    setPlayingVideoId(null);
  }, [activeIndex]);

  if (items.length === 0) return null;

  // Helper to determine the "visual distance" in a circular array
  const getCircularOffset = (index: number, activeIndex: number, length: number) => {
    let offset = index - activeIndex;
    const half = Math.floor(length / 2);

    if (offset > half) offset -= length;
    else if (offset < -half) offset += length;

    return offset;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setPlayingVideoId(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setPlayingVideoId(null);
  };

  const handleVideoToggle = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click logic
    if (playingVideoId === id) {
      setPlayingVideoId(null); // Stop playing
    } else {
      setPlayingVideoId(id); // Start playing
    }
  };

  return (
    <div
      className="relative w-full py-12 md:py-20 overflow-hidden flex flex-col justify-center items-center bg-background min-h-[600px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[400px] sm:h-[450px] w-full max-w-7xl mx-auto flex justify-center items-center perspective-[1000px]">
        {items.map((item, index) => {
          const offset = getCircularOffset(index, activeIndex, items.length);
          const isActive = offset === 0;
          const isPlaying = playingVideoId === item.id;

          if (Math.abs(offset) > 3) return null;

          let zIndex = 30 - Math.abs(offset) * 5;
          let opacity = isActive ? 1 : Math.max(0, 0.8 - Math.abs(offset) * 0.25);
          let scale = isActive ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.1);

          let xTranslation = 0;
          if (offset !== 0) {
            const direction = offset > 0 ? 1 : -1;
            const baseGap = 280;
            const stackGap = 60;
            xTranslation = (baseGap + (Math.abs(offset) - 1) * stackGap) * direction;
          }

          const baseWidth = isActive ? "w-[300px] sm:w-[500px]" : "w-[60px] sm:w-[80px]";
          const brightness = isActive ? "brightness-100" : "brightness-[0.3]";

          return (
            <div
              key={item.id}
              onClick={() => !isPlaying && setActiveIndex(index)}
              className={cn(
                "absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) shadow-2xl overflow-hidden rounded-2xl border-2",
                baseWidth,
                isActive ? "h-[300px] sm:h-[400px] border-gold/50 cursor-default" : "h-[250px] sm:h-[350px] border-white/10 hover:border-gold/30 cursor-pointer",
                "bg-black"
              )}
              style={{
                transform: `
                   translate(-50%, -50%) 
                   translateX(${xTranslation}px)
                   scale(${scale})
                 `,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <div className={cn("w-full h-full relative transition-[filter] duration-500", brightness)}>

                {isActive && isPlaying && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    className="w-full h-full object-contain bg-black"
                    controls
                    autoPlay
                    onEnded={() => setPlayingVideoId(null)}
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay only if not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none" />
                )}

                {isActive && !isPlaying ? (
                  /* Active Card Content */
                  <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                    <div className="self-center mt-auto mb-auto transform transition-transform duration-300 hover:scale-110 pointer-events-auto">
                      <button
                        onClick={(e) => handleVideoToggle(item.id, e)}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 backdrop-blur-md rounded-full flex items-center justify-center border border-gold/50 group shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:bg-gold hover:text-primary transition-all"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gold fill-gold ml-1 group-hover:text-primary group-hover:fill-primary" />
                      </button>
                    </div>
                    <div className="text-left animate-fade-in-up">
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 uppercase tracking-wider drop-shadow-lg">{item.name}</h3>
                      <p className="text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-gold inline-block"></span>
                        {item.role}
                      </p>
                    </div>
                  </div>
                ) : !isActive ? (
                  /* Side Strip Content - Rotated Text */
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3
                      className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {item.name}
                    </h3>
                  </div>
                ) : null}

                {/* Close/Reset Button if playing */}
                {isActive && isPlaying && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null); }}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm z-50 pointer-events-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-6 mt-8 relative z-50">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-gold hover:text-primary hover:border-gold hover:scale-110 text-primary transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-gold hover:text-primary hover:border-gold hover:scale-110 text-primary transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredData = useMemo(() => {
    // If filter is "All", let's make sure we show all videos first for the carousel
    let data = testimonials;
    if (activeFilter === "India Clients") data = testimonials.filter(t => t.location === "India");
    if (activeFilter === "Azerbaijan Clients") data = testimonials.filter(t => t.location === "Azerbaijan");
    if (activeFilter === "Other Countries") data = testimonials.filter(t => !["India", "Azerbaijan"].includes(t.location));
    return data;
  }, [activeFilter]);

  // For the video carousel, we specifically want items with videos
  const videoTestimonials = useMemo(() => {
    return filteredData.filter((t) => t.hasVideo);
  }, [filteredData]);

  const textTestimonials = useMemo(() => {
    return filteredData.filter((t) => !t.hasVideo);
  }, [filteredData]);

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        <PageHeader
          eyebrow="Client Success Stories"
          title={<>Voices of <span className="text-gold italic">Triumph</span></>}
          description="Real stories from real people who turned their European dreams into reality with our guidance."
        />

        {/* Filter Navigation */}
        <div className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3 transition-all duration-300">
          <div className="container-wide">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden px-4 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Active: <span className="text-primary font-bold">{activeFilter}</span>
              </span>
              <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md active:scale-95 transition-all"
              >
                {isFilterMenuOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
                {isFilterMenuOpen ? "Close" : "Filters"}
              </button>
            </div>

            {/* Filter Buttons */}
            {/* Filter Buttons */}
            <div className={cn(
              "md:flex md:flex-wrap md:justify-center md:gap-3 md:opacity-100 md:max-h-full transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible",
              isFilterMenuOpen
                ? "max-h-[400px] opacity-100 mt-3 border-t border-border/50 pt-3 flex flex-col gap-2 mx-4"
                : "max-h-0 opacity-0 md:mt-0 md:pt-0 md:border-t-0 md:mx-0"
            )}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setIsFilterMenuOpen(false);
                  }}
                  className={cn(
                    "whitespace-nowrap px-5 py-3 md:py-2 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300 transform md:hover:scale-105 shrink-0 snap-center text-left md:text-center w-full md:w-auto",
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground shadow-md ring-1 ring-gold/30"
                      : "bg-white text-foreground border border-border/60 hover:bg-champagne/30"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    {filter}
                    {activeFilter === filter && <CheckCircle2 className="w-4 h-4 md:hidden text-gold" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-20 pt-10">

          {/* New Video Carousel Section */}
          {videoTestimonials.length > 0 && (
            <RevealOnScroll className="w-full mb-20 relative">
              <section className="w-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-gold/5 blur-[100px] -z-10 rounded-full"></div>

                <div className="container-wide px-4 mb-12 sm:mb-16 text-center">
                  <div className="flex flex-col items-center justify-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4">
                      <Play className="w-3 h-3 fill-gold" />
                      Watch Now
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary mb-4 drop-shadow-sm">
                      Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">Stories</span>
                    </h2>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold/50"></div>
                      <Star className="w-5 h-5 text-gold fill-gold animate-pulse-gentle" />
                      <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gold/50"></div>
                    </div>

                    <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                      Hear directly from our clients as they share their journey to success in Europe.
                    </p>
                  </div>
                </div>

                <VideoCarousel items={videoTestimonials} />
              </section>
            </RevealOnScroll>
          )}

          {/* Written Testimonials Section */}
          {textTestimonials.length > 0 && (
            <section className="container-wide px-4">
              <RevealOnScroll animation="fade-up">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px bg-border flex-grow"></div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary flex items-center gap-3">
                    <Quote className="fill-gold text-gold w-6 h-6" />
                    Client Reviews
                  </h2>
                  <div className="h-px bg-border flex-grow"></div>
                </div>
              </RevealOnScroll>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {textTestimonials.map((t, index) => (
                  <RevealOnScroll className="h-full" delay={index * 100} key={t.id}>
                    <div
                      className="flex flex-col h-full bg-white border border-border/60 p-8 rounded-xl hover:shadow-elevated hover:border-gold/30 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-champagne text-gold-foreground flex items-center justify-center font-bold text-xl font-heading shadow-inner">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground leading-tight">{t.name}</h3>
                            <p className="text-xs text-muted-foreground">{t.role || 'Client'}</p>
                          </div>
                        </div>
                        <Globe className="w-5 h-5 text-gray-300" />
                      </div>

                      {/* Content */}
                      <div className="mb-6 flex-grow">
                        <div className="flex gap-1 mb-3">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                          ))}
                        </div>
                        <p className="text-foreground/80 leading-relaxed italic text-sm sm:text-base">
                          "{t.content}"
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-gold" />
                          From {t.location}
                        </div>
                        <div className="font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                          To {t.destination}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </section>
          )}

          {filteredData.length === 0 && (
            <div className="text-center py-20 pb-40">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No testimonials found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </main >
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Testimonials;
