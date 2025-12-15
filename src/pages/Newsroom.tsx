import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Policy Update",
    title: "Germany Announces New Skilled Worker Visa Regulations for 2025",
    excerpt: "Germany has unveiled significant changes to its skilled worker visa program, making it easier for qualified professionals to work in the country.",
    date: "December 5, 2024",
    slug: "germany-skilled-worker-visa-2025",
  },
  {
    id: 2,
    category: "Company News",
    title: "Europe Calling Celebrates 10 Years of Excellence",
    excerpt: "We're proud to mark a decade of helping thousands of clients achieve their European dreams. Thank you for trusting us with your journey.",
    date: "November 28, 2024",
    slug: "europe-calling-10-years",
  },
  {
    id: 3,
    category: "Success Story",
    title: "From Mumbai to Munich: Raj's Inspiring Journey",
    excerpt: "Read how Raj transformed his career by relocating to Germany with Europe Calling's comprehensive support.",
    date: "November 20, 2024",
    slug: "raj-mumbai-munich-story",
  },
  {
    id: 4,
    category: "Policy Update",
    title: "Poland Simplifies Work Permit Process for Non-EU Citizens",
    excerpt: "New streamlined procedures announced by Polish authorities will reduce processing times significantly.",
    date: "November 15, 2024",
    slug: "poland-work-permit-changes",
  },
  {
    id: 5,
    category: "Partnership",
    title: "Europe Calling Partners with Leading European Employers",
    excerpt: "New partnerships expand job placement opportunities across Germany, Poland, and Czech Republic.",
    date: "November 10, 2024",
    slug: "new-employer-partnerships",
  },
  {
    id: 6,
    category: "Travel Advisory",
    title: "Updated Travel Requirements for Schengen Zone",
    excerpt: "Important updates on entry requirements and documentation needed for Schengen area travel.",
    date: "November 5, 2024",
    slug: "schengen-travel-requirements",
  },
];

const categories = ["All", "Policy Update", "Company News", "Success Story", "Partnership", "Travel Advisory"];

const Newsroom = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl animate-fade-in-up px-4 sm:px-0">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                Newsroom
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Stay <span className="text-gold italic">Informed</span>
              </h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
                The latest updates on European travel policies, company news, 
                success stories, and valuable insights for your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-4 sm:py-6 bg-champagne border-b border-border">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-4 sm:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {news.map((article, index) => (
                <article
                  key={article.id}
                  className={`bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group animate-fade-in-up ${
                    index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`bg-muted ${index === 0 ? "h-48 sm:h-56 md:h-64" : "h-40 sm:h-48"}`} />
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-gold bg-gold/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <h2 className={`font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-gold transition-colors ${
                      index === 0 ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl"
                    }`}>
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/newsroom/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors group/link text-sm sm:text-base"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center px-4 sm:px-0">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8">
              Subscribe to our newsletter for the latest European travel updates and opportunities.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold text-sm sm:text-base"
              />
              <button type="submit" className="btn-gold whitespace-nowrap text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Newsroom;
