import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";

import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { news } from "@/data/news";

const NewsCard = ({ article, index }: { article: typeof news[0], index: number }) => (
  <RevealOnScroll className="h-full" delay={index * 100}>
    <Link
      to={`/newsroom/${article.slug}`}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col h-full text-left"
    >
      {/* Card Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 tracking-wide uppercase">
            <Tag className="w-3 h-3 text-gold" />
            {article.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground/80 mb-4">
          <Calendar className="w-3.5 h-3.5" />
          {article.date}
        </div>

        <h3 className="font-heading text-2xl font-bold text-primary mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
          {article.excerpt}
        </p>

        <div
          className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-gold transition-colors mt-auto uppercase tracking-wider"
        >
          Read Article
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  </RevealOnScroll>
);

const Newsroom = () => {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFDFD] pt-20">
        <PageHeader
          eyebrow="Insights & Updates"
          title="Newsroom"
          description="Stay up to date with the latest immigration policies, success stories, and company announcements."
        />

        <section className="container-wide px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {news.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
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
