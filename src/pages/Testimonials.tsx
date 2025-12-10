import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Star, Play, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "India",
    destination: "Germany",
    content: "Europe Calling made my dream of working in Germany a reality. Their professional team guided me through every step, from documentation to job placement. The attention to detail was remarkable. Highly recommend!",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 2,
    name: "Elena Petrov",
    location: "Azerbaijan",
    destination: "Poland",
    content: "The entire process was seamless. Their knowledge of European immigration policies is exceptional. I'm now happily settled in Warsaw with my family. Thank you Europe Calling!",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 3,
    name: "Raj Patel",
    location: "India",
    destination: "Czech Republic",
    content: "What sets Europe Calling apart is their personal attention. They treat you like family, not just a client. Forever grateful for their support in making my Prague dream come true.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: "Sofia Ionescu",
    location: "Romania",
    destination: "France",
    content: "Moving to France seemed impossible until I found Europe Calling. Their expertise in visa processing is unmatched. Thank you for changing my life!",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "India",
    destination: "Germany",
    content: "From the first consultation to my arrival in Berlin, Europe Calling was with me every step. Their 24/7 support gave me peace of mind throughout.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 6,
    name: "Aysel Mammadova",
    location: "Azerbaijan",
    destination: "Romania",
    content: "I was skeptical at first, but Europe Calling exceeded all expectations. Their transparent process and regular updates made everything stress-free.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 7,
    name: "Priya Nair",
    location: "India",
    destination: "Poland",
    content: "The team's cultural understanding made a huge difference. They prepared me not just for the visa process but for life in Poland. Truly comprehensive service!",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 8,
    name: "Rustam Hasanov",
    location: "Azerbaijan",
    destination: "Czech Republic",
    content: "Europe Calling helped reunite my family in Prague. Their expertise in family reunification cases is unparalleled. We are forever grateful.",
    rating: 5,
    hasVideo: false,
  },
];

const filters = ["All", "India", "Azerbaijan", "Others"];

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Others") return !["India", "Azerbaijan"].includes(t.location);
    return t.location === activeFilter;
  });

  const videoTestimonials = filteredTestimonials.filter((t) => t.hasVideo);
  const textTestimonials = filteredTestimonials.filter((t) => !t.hasVideo);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Success Stories
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Real People, <span className="text-gold italic">Real Stories</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Hear from those who trusted us with their European dreams and 
                are now living their best lives across Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-champagne border-b border-border">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-6 py-2 rounded-full font-medium text-sm transition-all duration-200",
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary/10"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        {videoTestimonials.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container-wide">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
                Video Testimonials
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
                    <div className="relative aspect-video bg-muted flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                        <Play className="w-6 h-6 ml-1" />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.location} → {testimonial.destination}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Text Testimonials */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              Written Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {textTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.location} → {testimonial.destination}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Testimonials;
