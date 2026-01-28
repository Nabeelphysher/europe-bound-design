
import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Temporary fix for build failure due to spaces in filenames
import franceImg from "@/assets/france.jpg";
const images = [franceImg, franceImg, franceImg, franceImg, franceImg, franceImg];

const categories = [
    { id: "all", label: "All Photos" },
    { id: "clients", label: "Happy Clients" },
    { id: "tours", label: "On Tour" },
    { id: "scenic", label: "Scenery" },
];

const aspectRatios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[16/9]", "aspect-[1/1]"];
const locations = ["Paris, France", "Swiss Alps", "Rome, Italy", "Amsterdam, Netherlands", "Berlin, Germany", "Santorini, Greece"];
const titles = ["Unforgettable Journey", "Client Smiles", "Beautiful Scenery", "Group Adventure", "City Exploration", "Hidden Gems"];

// Dynamically generated gallery images
const galleryImages = images.map((src, index) => {
    // Deterministic random-like selection based on index
    const categoryId = categories[Math.floor((index % (categories.length - 1)) + 1)].id;
    const aspect = aspectRatios[index % aspectRatios.length];
    const location = locations[index % locations.length];
    const title = titles[index % titles.length];

    return {
        id: index + 1,
        src,
        category: categoryId,
        title: title,
        location: location,
        aspect: aspect
    };
});

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <>
            <Header />
            <main className="bg-[#faf4e5] min-h-screen pt-20">
                <PageHeader
                    eyebrow="Our Gallery"
                    title="Memories Across Europe"
                    description="Explore our collection of breathtaking moments, happy clients, and stunning destinations."
                />

                <section className="section-padding pt-8 relative z-10 bg-[linear-gradient(180deg,#ffffff_0%,#faf4e5_150px,#faf4e5_100%)]">
                    <div className="container-wide px-4">

                        {/* Masonry Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {galleryImages.map((image, index) => (
                                <RevealOnScroll key={image.id} delay={index * 100} className="break-inside-avoid">
                                    <div
                                        className="group relative rounded-2xl overflow-hidden cursor-zoom-in shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.35)] transition-all duration-500"
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
