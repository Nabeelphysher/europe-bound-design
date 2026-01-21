import React, { ReactNode } from "react";

interface PageHeaderProps {
    eyebrow: string;
    title: ReactNode;
    description: string;
}

export const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
    return (
        <section className="relative py-20 md:py-32 text-center px-4 overflow-visible">
            {/* Smooth Gradient Background that blends into page content */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-transparent -z-20" />
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
                    {eyebrow}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight text-shadow-premium">
                    {title}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};
