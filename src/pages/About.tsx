import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";

const timeline = [
  { year: "2014", title: "Foundation", description: "Europe Calling was founded with a vision to simplify European travel." },
  { year: "2016", title: "Expansion", description: "Extended services to 3 more European countries." },
  { year: "2018", title: "1000 Clients", description: "Reached milestone of helping 1000+ clients successfully." },
  { year: "2020", title: "Digital Transform", description: "Launched online consultation and documentation services." },
  { year: "2022", title: "Recognition", description: "Awarded Best Travel Consultancy by European Travel Board." },
  { year: "2024", title: "Global Reach", description: "Now serving clients from 15+ countries worldwide." },
];

const team = [
  { name: "Alexander Schmidt", role: "Founder & CEO", country: "Germany" },
  { name: "Maria Kowalski", role: "Head of Operations", country: "Poland" },
  { name: "Jean-Pierre Dubois", role: "Senior Consultant", country: "France" },
  { name: "Elena Popescu", role: "Documentation Head", country: "Romania" },
];

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Bridge to <span className="text-gold italic">Europe</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                For over a decade, Europe Calling has been transforming European dreams 
                into reality. We combine expertise, empathy, and excellence to guide 
                you on your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Journey Built on Trust
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2014 by Alexander Schmidt, Europe Calling emerged from a 
                  simple belief: everyone deserves access to European opportunities, 
                  regardless of where they start.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  What began as a small consultancy in Berlin has grown into a 
                  multinational team helping thousands achieve their European dreams. 
                  Our success is measured not in numbers, but in the lives we've 
                  helped transform.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-champagne rounded-2xl p-8 flex flex-col items-center text-center">
                  <Target className="w-12 h-12 text-gold mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Mission</h3>
                  <p className="text-muted-foreground text-sm">Make European opportunities accessible to all.</p>
                </div>
                <div className="bg-champagne rounded-2xl p-8 flex flex-col items-center text-center">
                  <Eye className="w-12 h-12 text-gold mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Vision</h3>
                  <p className="text-muted-foreground text-sm">Be the most trusted name in European travel.</p>
                </div>
                <div className="bg-champagne rounded-2xl p-8 flex flex-col items-center text-center col-span-2">
                  <Heart className="w-12 h-12 text-gold mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Philosophy</h3>
                  <p className="text-muted-foreground text-sm">Every client is family. Every journey matters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Milestones Along the Way
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card rounded-xl p-6 shadow-card inline-block">
                        <span className="text-gold font-bold text-2xl">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground mt-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-gold rounded-full border-4 border-background z-10 shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Meet The Team
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                The People Behind Your Journey
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Users className="w-12 h-12 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-gold text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Note */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              A Note from Our Founder
            </h2>
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 italic leading-relaxed mb-8">
              "Every person who walks through our doors carries a dream. Our job isn't just 
              to process paperwork – it's to nurture that dream and make it a reality. 
              That's the heart of Europe Calling."
            </blockquote>
            <p className="text-gold font-semibold">— Alexander Schmidt, Founder & CEO</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default About;
