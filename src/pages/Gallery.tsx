
import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

import img1 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.57 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.58 PM.jpeg";
import img3 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.59 PM.jpeg";
import img4 from "@/assets/WhatsApp Image 2025-12-05 at 4.04.00 PM (1).jpeg";
import img5 from "@/assets/WhatsApp Image 2025-12-05 at 4.04.00 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.11 PM (1).jpeg";
import img9 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.11 PM.jpeg";

// Mock Data for Gallery Images
const galleryImages = [
    {
        id: 1,
        src: img1,
        category: "tours",
        title: "Europe Tour Group",
        location: "Europe",
        aspect: "aspect-[4/3]"
    },
    {
        id: 2,
        src: img2,
        category: "clients",
        title: "Happy Travelers",
        location: "Europe",
        aspect: "aspect-[3/4]"
    },
    {
        id: 3,
        src: img3,
        category: "scenic",
        title: "Scenic Views",
        location: "Europe",
        aspect: "aspect-[4/3]"
    },
    {
        id: 4,
        src: img4,
        category: "tours",
        title: "City Adventure",
        location: "Europe",
        aspect: "aspect-[3/4]"
    },
    {
        id: 5,
        src: img5,
        category: "clients",
        title: "Group Experience",
        location: "Europe",
        aspect: "aspect-[4/5]"
    },
    {
        id: 6,
        src: img6,
        category: "scenic",
        title: "Beautiful Destination",
        location: "Europe",
        aspect: "aspect-[16/9]"
    },
    {
        id: 7,
        src: img7,
        category: "tours",
        title: "Travel Moments",
        location: "Europe",
        aspect: "aspect-[3/4]"
    },
    {
        id: 8,
        src: img8,
        category: "clients",
        title: "Memorable Trip",
        location: "Europe",
        aspect: "aspect-[4/3]"
    },
    {
        id: 9,
        src: img9,
        category: "clients",
        title: "Client Smiles",
        location: "Europe",
        aspect: "aspect-[3/4]"
    }
];

const categories = [
    { id: "all", label: "All Photos" },
    { id: "clients", label: "Happy Clients" },
    { id: "tours", label: "On Tour" },
    { id: "scenic", label: "Scenery" },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <>
            <Header />
            <main className="bg-background min-h-screen pt-20">
                <PageHeader
                    eyebrow="Our Gallery"
                    title="Memories Across Europe"
                    description="Explore our collection of breathtaking moments, happy clients, and stunning destinations."
                />

                <section className="section-padding pt-0 -mt-10 relative z-10">
                    <div className="container-wide px-4">

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                                        activeCategory === cat.id
                                            ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                                            : "bg-white text-muted-foreground border-border hover:border-gold hover:text-primary hover:bg-gold/5"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Masonry Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {filteredImages.map((image, index) => (
                                <RevealOnScroll key={image.id} delay={index * 100} className="break-inside-avoid">
                                    <div
                                        className="group relative rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-500"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        {/* Image */}
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className={cn(
                                                "w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110",
                                                image.aspect
                                            )}
                                            loading="lazy"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                {image.category}
                                            </span>
                                            <h3 className="text-white font-heading text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                                {image.title}
                                            </h3>
                                            <p className="text-white/80 text-sm flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                                <ZoomIn className="w-4 h-4" />
                                                {image.location}
                                            </p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        {filteredImages.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-muted-foreground text-lg">No images found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="max-w-6xl w-full max-h-[90vh] relative group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white rounded-b-lg">
                            <h3 className="font-heading text-2xl font-bold mb-1">{selectedImage.title}</h3>
                            <p className="text-gold opacity-90">{selectedImage.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
