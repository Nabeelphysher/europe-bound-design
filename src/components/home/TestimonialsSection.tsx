import { useState } from "react";
import { Link } from "react-router-dom";
import { Quote, Play, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "India",
    destination: "Germany",
    content:
      "Europe Calling made my dream of working in Germany a reality. Their professional team guided me through every step, from documentation to job placement. Highly recommend!",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 2,
    name: "Elena Petrov",
    location: "Azerbaijan",
    destination: "Poland",
    content:
      "The entire process was seamless. Their knowledge of European immigration policies is exceptional. I'm now happily settled in Warsaw with my family.",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 3,
    name: "Raj Patel",
    location: "India",
    destination: "Czech Republic",
    content:
      "What sets Europe Calling apart is their personal attention. They treat you like family, not just a client. Forever grateful for their support.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: "Sofia Ionescu",
    location: "Romania",
    destination: "France",
    content:
      "Moving to France seemed impossible until I found Europe Calling. Their expertise in visa processing is unmatched. Thank you for changing my life!",
    rating: 5,
    hasVideo: true,
  },
];

export function TestimonialsSection() {
  const [videoPlaying, setVideoPlaying] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real people who trusted us with their European
            dreams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-elevated ${
                testimonial.hasVideo ? "lg:row-span-1" : ""
              }`}
            >
              {/* Video Badge */}
              {testimonial.hasVideo && (
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors"
                  onClick={() => setVideoPlaying(testimonial.id)}
                  aria-label="Play video testimonial"
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
              )}

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location} → {testimonial.destination}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group"
          >
            Read More Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
