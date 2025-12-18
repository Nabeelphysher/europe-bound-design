import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { news } from "@/data/news";
import { Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useEffect } from "react";
import NotFound from "./NotFound";

const NewsArticle = () => {
    const { slug } = useParams();
    const article = news.find((n) => n.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <NotFound />;
    }

    // Related articles (just pick 3 random ones that aren't the current one)
    const relatedNews = news.filter(n => n.id !== article.id).slice(0, 3);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#FDFDFD]">

                {/* --- Hero Section --- */}
                <section className="relative h-[60vh] min-h-[500px] w-full">
                    <div className="absolute inset-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    </div>

                    <div className="relative z-10 container-wide px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
                        <RevealOnScroll animation="fade-up" className="max-w-4xl mx-auto w-full">
                            <Link to="/newsroom" className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors mb-6 text-sm font-semibold tracking-wide uppercase">
                                <ArrowLeft className="w-4 h-4" /> Back to Newsroom
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                    <Calendar className="w-4 h-4 text-gold" />
                                    {article.date}
                                </span>
                            </div>

                            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                {article.title}
                            </h1>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- Content Section --- */}
                <section className="container-narrow px-4 py-16 md:py-24">
                    <RevealOnScroll animation="fade-up" delay={200}>
                        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">

                            {/* Main Article */}
                            <article className="prose prose-lg prose-gray max-w-none">
                                <div className="font-medium text-xl text-muted-foreground mb-10 leading-relaxed border-l-4 border-gold pl-6">
                                    {article.excerpt}
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: article.content || "" }} className="rich-text-content" />

                                {/* Share Links */}
                                <div className="border-t border-border mt-12 pt-8 flex items-center justify-between">
                                    <span className="font-heading font-bold text-lg">Share this article:</span>
                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                                            <Facebook className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar / Related News */}
                            <aside className="space-y-10">
                                <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 sticky top-24">
                                    <h3 className="font-heading text-2xl font-bold mb-6 pb-4 border-b border-border">Related News</h3>
                                    <div className="space-y-6">
                                        {relatedNews.map(item => (
                                            <Link key={item.id} to={`/newsroom/${item.slug}`} className="group block">
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1 block">{item.category}</span>
                                                        <h4 className="font-heading font-bold text-sm leading-snug group-hover:text-gold transition-colors line-clamp-2">
                                                            {item.title}
                                                        </h4>
                                                        <span className="text-xs text-muted-foreground mt-2 block">{item.date}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </RevealOnScroll>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </>
    );
};

export default NewsArticle;
