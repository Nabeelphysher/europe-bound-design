import { useState, useEffect, useRef } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Globe, Award } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import { CTASection } from "@/components/home/CTASection";
import heroImage from "@/assets/hero-europe.jpg";


import shihabImg from "@/assets/1766227243591-removebg-preview.png";
import img3709 from "@/assets/IMG_3709-removebg-preview.png";
import img3698 from "@/assets/IMG_3698-removebg-preview.png";
import img3691 from "@/assets/IMG_3691-removebg-preview.png";
import img3684 from "@/assets/IMG_3684-removebg-preview.png";

const timeline = [
  { year: "2014", title: "Foundation", description: "Europe Calling was founded in Berlin with a vision to simplify European migration." },
  { year: "2016", title: "Expansion", description: "Extended services to Poland, France, and Netherlands." },
  { year: "2018", title: "1000 Clients", description: "Reached milestone of helping 1000+ clients successfully relocate." },
  { year: "2020", title: "Digital First", description: "Launched full digital consultation and online documentation tracking." },
  { year: "2022", title: "Industry Award", description: "Recognized as 'Best Emerging Immigration Consultancy' by EuroTravel Board." },
  { year: "2024", title: "Global Reach", description: "Now serving clients from 15+ countries with a team of 50+ experts." },
];

const team = [
  { name: "Akhila", role: "Accountant", location: "Calicut, India", img: shihabImg },
  { name: "Global Partner", role: "Europe Operations", location: "Berlin", img: img3709 },
  { name: "Strategic Lead", role: "Planning", location: "London", img: img3698 },
  { name: "Legal Counsel", role: "Advisory", location: "Paris", img: img3691 },
  { name: "MUHAMMED SHA A P", role: "Support", location: "Dubai", img: img3684 },
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
      <main className="overflow-hidden pt-20">
        <PageHeader
          eyebrow="Since 2014"
          title={<>Our Journey to <br /><span className="text-gold italic">Excellence</span></>}
          description="Bridging the gap between ambition and destination for over a decade."
        />

        {/* Why Europe Calling Was Created Section */}
        <section className="section-padding relative bg-muted/20 overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
            <div className="absolute top-20 left-10 text-[20rem] font-heading font-bold text-primary leading-none select-none">2014</div>
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <RevealOnScroll animation="fade-up">
                  <div className="mb-10 text-left">
                    <span className="font-['Dancing_Script'] text-3xl text-[#E8B430] block mb-2">Our Origins</span>
                    <h2 className="font-heading text-[48px] font-bold text-[black] leading-tight">
                      Why Europe Calling <br />
                      <span className="text-[#E8B430] italic">Was Created</span>
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
                </RevealOnScroll>

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
              <div className="relative order-1 lg:order-2">
                <RevealOnScroll animation="fade-in" delay={200}>
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
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding relative overflow-hidden bg-[#fdfbf7]"
          style={{
            backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)',
            backgroundSize: '100% 40px',
            backgroundAttachment: 'local'
          }}
        >
          {/* Dashed Connecting Lines (Decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,300 Q600,100 1000,300" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          <div className="container-wide relative z-10">
            <RevealOnScroll animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-[#E8B430] block mb-2">
                  Our Values
                </span>
                <h2 className="font-heading text-[48px] font-bold text-[black] mb-6">Driven by Purpose</h2>
                <p className="text-gray-600 text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm inline-block">
                  The principles that guide every decision we make.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {[
                { ...values[0], color: { bg: "bg-[#FEFCE8]", pin: "bg-[#CA8A04]" } }, // Yellow
                { ...values[1], color: { bg: "bg-[#FFF7ED]", pin: "bg-[#EA580C]" } }, // Orange
                { ...values[2], color: { bg: "bg-[#FDF2F8]", pin: "bg-[#DB2777]" } }  // Pink
              ].map((item, index) => (
                <RevealOnScroll animation="fade-up" delay={index * 100} key={item.title}>
                  <div
                    className={`group relative p-8 rounded-xl ${item.color.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
                    style={{
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Pin Element */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-4 h-4 rounded-full ${item.color.pin} shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2)]`} />
                      <div className="absolute top-3 left-1 w-4 h-4 bg-black/20 blur-[2px] rounded-full transform scale-x-150 rotate-45 -z-10" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center shadow-sm group-hover:bg-white transition-colors duration-300">
                          <item.icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-medium opacity-90">
                        {item.text}
                      </p>

                      {/* Hover Arrow */}
                      <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
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
              <div className="lg:col-span-5 relative">
                <RevealOnScroll animation="slide-in-left">
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
                </RevealOnScroll>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 space-y-10">
                <RevealOnScroll animation="slide-in-right">
                  <div>
                    <span className="font-['Dancing_Script'] text-3xl text-[#E8B430] block mb-2">From the Desk of the Founder</span>
                    <h2 className="font-heading text-[48px] font-bold text-[black] mb-6">
                      Building Bridges, <br />
                      <span className="italic text-[#E8B430]">Not Just Visas</span>
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
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-secondary/20">
          <div className="container px-4 sm:px-6">
            <RevealOnScroll animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="font-heading text-[48px] font-bold text-foreground">A Decade of Impact</h2>
              </div>
            </RevealOnScroll>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/10 via-gold/50 to-primary/10 -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <RevealOnScroll animation="fade-up" delay={index * 100} key={item.year}>
                    <div className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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
                  </RevealOnScroll>
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
              <div className="lg:col-span-5 space-y-8">
                <RevealOnScroll animation="slide-in-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Live Premiers Weekly
                  </div>

                  <h2 className="font-heading text-[48px] font-bold text-primary leading-tight">
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
                </RevealOnScroll>
              </div>

              {/* Right: Premium Video Player UI */}
              <div className="lg:col-span-7">
                <RevealOnScroll animation="scale-up" delay={200}>
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
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-champagne/10">
          <div className="container px-4 sm:px-6">
            <RevealOnScroll animation="fade-up">
              <div className="text-center mb-16">
                <span className="font-['Dancing_Script'] text-3xl text-[#E8B430] block mb-2">Our Team</span>
                <h2 className="font-heading text-[48px] font-bold text-[black] mb-6">Leadership</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Meet the experts guiding your European integration.</p>
              </div>
            </RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, index) => (
                <RevealOnScroll animation="fade-up" delay={index * 100} key={member.name}>
                  <div className="group relative h-[450px] w-[320px] overflow-hidden transition-all duration-500">
                    {/* Hover Backlight Glow */}
                    <div className="absolute inset-x-4 bottom-0 h-[80%] bg-gradient-to-t from-[#E8B430]/20 via-[#E8B430]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl md:blur-3xl" />

                    {/* Grayscale Image - Scaled Up */}
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 pb-0 flex items-end justify-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-[135%] w-auto max-w-none object-contain object-bottom transition-transform duration-700 group-hover:scale-110 mb-[-5%] relative z-10"
                      />
                    </div>

                    {/* Diagonal Cut Overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[40%] bg-white/95 backdrop-blur-sm z-20 transition-all duration-500"
                      style={{
                        clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0 100%)",
                        filter: "drop-shadow(0 -4px 10px rgba(0,0,0,0.05))"
                      }}
                    >
                      {/* Text Content in White Area */}
                      <div className="absolute bottom-6 right-8 text-right">
                        <div className="mb-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#E8B430]" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[black] uppercase tracking-wider leading-tight mb-1 group-hover:text-black transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="font-sans text-xs text-[#E8B430] uppercase tracking-[0.2em] font-bold">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <RevealOnScroll animation="fade-up">
          <CTASection />
        </RevealOnScroll>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default About;
