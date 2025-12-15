import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Globe, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import { CTASection } from "@/components/home/CTASection";
import heroImage from "@/assets/hero-europe.jpg";
import flightVideo from "@/assets/vecteezy_airplane-flying-in-the-sky_35448314.mp4";

const timeline = [
  { year: "2014", title: "Foundation", description: "Europe Calling was founded in Berlin with a vision to simplify European migration." },
  { year: "2016", title: "Expansion", description: "Extended services to Poland, France, and Netherlands." },
  { year: "2018", title: "1000 Clients", description: "Reached milestone of helping 1000+ clients successfully relocate." },
  { year: "2020", title: "Digital First", description: "Launched full digital consultation and online documentation tracking." },
  { year: "2022", title: "Industry Award", description: "Recognized as 'Best Emerging Immigration Consultancy' by EuroTravel Board." },
  { year: "2024", title: "Global Reach", description: "Now serving clients from 15+ countries with a team of 50+ experts." },
];

const team = [
  { name: "Alexander Schmidt", role: "Founder & CEO", location: "Berlin, Germany", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Maria Kowalski", role: "Head of Operations", location: "Warsaw, Poland", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Jean-Pierre Dubois", role: "Senior Legal Consultant", location: "Paris, France", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Elena Popescu", role: "Documentation Lead", location: "Bucharest, Romania", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
];

const values = [
  { icon: Target, title: "Mission", text: "To democratize access to European opportunities through transparent, expert guidance." },
  { icon: Eye, title: "Vision", text: "To be the world's most trusted partner for European migration and travel." },
  { icon: Heart, title: "Philosophy", text: "We treat every client's dream with the same care and dedication as if it were our own." },
];

function AnimatedCounter({ value, suffix, duration, isVisible }: { value: number; suffix: string; duration: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return <span className="font-heading text-4xl font-bold text-gold mb-2 block">{count.toLocaleString()}{suffix}</span>;
}

const About = () => {
  useScrollReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section - Video Background */}
        <section className="relative h-[40vh] min-h-[300px] sm:h-[45vh] sm:min-h-[350px] md:h-[50vh] md:min-h-[400px] lg:h-[55vh] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src={flightVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>

          <FlightAnimation className="text-white/10 z-0" />

          <div className="container-wide relative z-10 text-center text-white pt-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              Since 2014
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200 drop-shadow-lg">
              Our Journey to <br />
              <span className="text-gold italic">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-300 drop-shadow-md">
              Bridging the gap between ambition and destination for over a decade.
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 max-w-xs">
              <div className="bg-gold/20 p-3 rounded-full">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Award Winning</p>
                <p className="text-white/70 text-xs">Recognized Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Europe Calling Was Created Section */}
        <section className="section-padding relative bg-muted/20 overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
            <div className="absolute top-20 left-10 text-[20rem] font-heading font-bold text-primary leading-none select-none">2014</div>
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Left: Content */}
              <div className="order-2 lg:order-1 reveal-on-scroll">
                <div className="relative mb-10">
                  <div className="w-20 h-1 bg-gold mb-6" />
                  <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary leading-tight">
                    Why Europe Calling <br />
                    <span className="text-gold italic">Was Created</span>
                  </h2>
                </div>

                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light">
                  <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    It began with a realization. In 2014, the European dream was alive for millions, yet the path to achieving it was obscured by a fog of fragmented information, changing regulations, and impersonal bureaucracy.
                  </p>
                  <p>
                    We saw brilliant professionals held back by paperwork. We saw families separated by avoidable errors. We saw a gap between <span className="text-primary font-medium">human ambition</span> and <span className="text-primary font-medium">administrative reality</span>.
                  </p>
                  <div className="border-l-4 border-gold pl-6 py-2 my-8 bg-white/50 backdrop-blur-sm rounded-r-lg">
                    <p className="text-xl font-heading text-primary italic">
                      "The world didn't need another visa agency. It needed a partner who cared as much about the destination as the traveler does."
                    </p>
                  </div>
                  <p>
                    Europe Calling was born to bridge this gap. To provide not just a service, but a standard. A standard of transparency, expertise, and unwavering support that turns a daunting process into a confident journey.
                  </p>
                </div>

                <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-12 border-t border-border pt-10">
                  <div>
                    <AnimatedCounter value={50} suffix="+" duration={1500} isVisible={statsVisible} />
                    <p className="text-sm text-foreground/70 font-bold uppercase tracking-widest mt-2">Expert Consultants</p>
                  </div>
                  <div>
                    <AnimatedCounter value={15} suffix="+" duration={1500} isVisible={statsVisible} />
                    <p className="text-sm text-foreground/70 font-bold uppercase tracking-widest mt-2">Partner Countries</p>
                  </div>
                </div>
              </div>

              {/* Right: Visuals */}
              <div className="relative order-1 lg:order-2 reveal-on-scroll">
                <div className="relative z-10 rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                    alt="Modern Office"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Floating Element */}
                <div className="absolute -bottom-12 -left-12 w-3/4 aspect-[4/3] rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-elegant border-8 border-white hidden md:block z-20 animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                    alt="Handshake"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-full h-full border-2 border-gold/30 rounded-tr-[5rem] rounded-bl-[5rem] -z-10" />
                <div className="absolute bottom-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl z-0" />
              </div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Wind Sway Animation Styles */}
          <style>
            {`
              @keyframes wind-sway {
                0% { 
                  transform: rotate(-3deg) translateY(0px) translateX(-2px);
                }
                25% { 
                  transform: rotate(2deg) translateY(-8px) translateX(1px);
                }
                50% { 
                  transform: rotate(3deg) translateY(-12px) translateX(3px);
                }
                75% { 
                  transform: rotate(-1deg) translateY(-6px) translateX(-1px);
                }
                100% { 
                  transform: rotate(-3deg) translateY(0px) translateX(-2px);
                }
              }
              .wind-sway-card-values {
                transform-origin: center bottom;
                background: linear-gradient(135deg, 
                  rgba(255,255,255,0.95) 0%, 
                  rgba(255,255,255,0.90) 30%,
                  rgba(255,255,255,0.85) 60%,
                  rgba(255,215,0,0.08) 100%
                );
                border: 1px solid rgba(0,0,0,0.1);
                backdrop-filter: blur(12px);
                box-shadow: 
                  0 8px 32px rgba(0,0,0,0.1),
                  0 4px 16px rgba(0,0,0,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.8),
                  inset 0 -1px 0 rgba(255,215,0,0.1);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                animation: wind-sway 4s ease-in-out infinite;
              }
              .wind-sway-card-values:nth-child(1) { animation-delay: 0s; }
              .wind-sway-card-values:nth-child(2) { animation-delay: 0.4s; }
              .wind-sway-card-values:nth-child(3) { animation-delay: 0.8s; }
              .wind-sway-card-values:hover {
                animation-play-state: paused;
                background: linear-gradient(135deg, 
                  rgba(255,255,255,1) 0%, 
                  rgba(255,255,255,0.98) 30%,
                  rgba(255,255,255,0.95) 60%,
                  rgba(255,215,0,0.12) 100%
                );
                border-color: rgba(255,215,0,0.4);
                box-shadow: 
                  0 16px 48px rgba(0,0,0,0.15),
                  0 8px 24px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,1),
                  0 0 40px rgba(255,215,0,0.2),
                  0 0 60px rgba(255,215,0,0.1);
              }
            `}
          </style>

          <div className="container-wide relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Driven by Purpose</h2>
              <p className="text-muted-foreground text-lg">The principles that guide every decision we make.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item, index) => (
                <div
                  key={item.title}
                  className="wind-sway-card-values group relative p-8 rounded-2xl hover:-translate-y-2 reveal-on-scroll overflow-hidden"
                >
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Enhanced Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border Glow */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                  {/* Enhanced Glass shine effect */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle animated background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 0)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 via-gold/15 to-gold/5 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(255,215,0,0.2),0_4px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4),0_8px_25px_rgba(0,0,0,0.3)]">
                      <item.icon className="w-7 h-7 text-gold drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-2xl font-bold mb-4 text-primary group-hover:text-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                      {item.text}
                    </p>

                    {/* Enhanced Hover Arrow */}
                    <div className="absolute top-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                      <div className="relative">
                        <ArrowRight className="w-5 h-5 text-gold drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-300" />
                        <div className="absolute inset-0 bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Note Section */}
        <section className="section-padding bg-champagne/10 relative overflow-hidden">
          {/* Decorative Background Text */}
          <div className="absolute top-20 right-0 text-[15rem] font-heading font-bold text-gold/5 opacity-50 select-none pointer-events-none whitespace-nowrap hidden lg:block rotate-[-5deg]">
            Founder's Note
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

              {/* Image Column */}
              <div className="lg:col-span-5 relative reveal-on-scroll">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                    alt="Alexander Schmidt - Founder"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-heading text-3xl font-bold mb-1">Alexander Schmidt</p>
                    <p className="text-gold font-medium uppercase tracking-wider text-sm">Founder & CEO</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-gold/30 rounded-[2rem] -z-10 bg-gold/5" />
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 space-y-10 reveal-on-scroll">
                <div>
                  <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">From the Desk of the Founder</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                    Building Bridges, <br />
                    <span className="italic text-gold">Not Just Visas</span>
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p className="text-xl text-foreground font-medium italic border-l-4 border-gold pl-6 py-2">
                    "When I established Europe Calling, I didn't want to create just another consultancy. I wanted to build the partner I wish I had when I first explored Europe."
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-lg font-heading text-primary font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-gold" />
                        Our Purpose
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Our mission goes beyond paperwork. It's about empowering ambition. We exist to remove the friction from global mobility, allowing talent to flow freely to where it can flourish best.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading text-primary font-bold mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-gold" />
                        My Commitment
                      </h3>
                      <p className="text-sm leading-relaxed">
                        We treat your journey with the sanctity it deserves. No false promises, no hidden costs. You have my personal assurance that our team will champion your case with unyielding dedication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gold/20 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-4xl text-primary opacity-80" style={{ fontFamily: 'cursive' }}>Alexander Schmidt</p>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">Berlin, Germany</p>
                  </div>
                  <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors group">
                    Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">A Decade of Impact</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/10 via-gold/50 to-primary/10 -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex flex-col md:flex-row gap-8 items-center reveal-on-scroll ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-gold shadow-lg z-10" />
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="text-gold font-bold text-5xl opacity-40 absolute -top-4 md:-top-6 z-0 select-none transform transition-transform hover:scale-110 duration-500 origin-center md:origin-[inherit]" style={{ [index % 2 === 0 ? 'right' : 'left']: '20px' }}>{item.year}</span>
                      <div className="relative z-10 bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Podcast Section - Video Redesign */}
        <section className="relative py-24 overflow-hidden bg-white">
          {/* Cinematic Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1478737270239-2f52b27fa345?auto=format&fit=crop&q=80&w=2000"
              alt="Podcast Studio"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left: Brand & Intro */}
              <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Live Premiers Weekly
                </div>

                <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary leading-tight">
                  The Europe Bound <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-200 italic">Video Podcast</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Watch unscripted conversations with immigration experts, successful expats, and legal minds. Your visual guide to making Europe home.
                </p>

                <div className="flex gap-4 pt-4">
                  <a href="https://youtube.com/shorts/g_vqnB18DYM?si=1bPUwWqF1Od104oH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border border-border text-foreground hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border border-border text-foreground hover:bg-[#1DB954] hover:border-[#1DB954] hover:text-white transition-all duration-300 group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.901-.719 13.561 1.56.42.3.479.84.18 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                  </a>
                  <div className="h-12 px-6 flex items-center rounded-full border border-border text-muted-foreground text-sm italic">
                    Watch on YouTube
                  </div>
                </div>
              </div>

              {/* Right: Premium Video Player UI */}
              <div className="lg:col-span-7 reveal-on-scroll">
                <div className="relative bg-card backdrop-blur-xl border border-border rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  {/* Background Glow */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

                  {/* Video Thumbnail Area */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {!videoPlaying ? (
                      <>
                        {/* YouTube Thumbnail Image */}
                        <img
                          src="https://img.youtube.com/vi/g_vqnB18DYM/maxresdefault.jpg"
                          alt="Video Episode Thumbnail"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://img.youtube.com/vi/g_vqnB18DYM/hqdefault.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

                        {/* Centered Play Button */}
                        <button
                          onClick={() => setVideoPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                        >
                          <div className="w-20 h-20 rounded-full bg-gold/90 text-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_60px_rgba(255,215,0,0.5)]">
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                          {/* Ripple Effect */}
                          <div className="absolute w-20 h-20 rounded-full border-2 border-gold/50 animate-ping" />
                        </button>

                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 rounded bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                            YouTube Exclusive
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4 z-20">
                          <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-white text-xs font-bold font-mono tracking-wider">
                            45:20
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Embedded YouTube Video */
                      <iframe
                        src="https://www.youtube.com/embed/g_vqnB18DYM?si=_Exak7dT8RZHd0y-&autoplay=1&controls=1&rel=0"
                        title="The Europe Bound Video Podcast"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Video Details & Controls */}
                  <div className="p-6 md:p-8 relative z-10 -mt-2">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Episode 24 • Season 2</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight group-hover:text-gold transition-colors">Demystifying the German Opportunity Card</h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-muted border border-border">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Host" className="w-full h-full object-cover" />
                          </div>
                          <p>Hosted by Alexander Schmidt</p>
                        </div>
                      </div>
                      <button className="text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Video Progress Bar */}
                    <div className="group/scrubber py-2 cursor-pointer">
                      <div className="h-1 bg-muted rounded-full w-full overflow-hidden relative">
                        <div className="h-full bg-red-600 w-1/3 rounded-full relative" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-1">
                      <span>Watched 15m</span>
                      <span>45m left</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Leadership</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Meet the experts guiding your European integration.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className="group relative reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-muted relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-4 justify-center">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors cursor-pointer">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-gold font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default About;
