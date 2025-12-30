
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Truck, FileText, Clock, AlertCircle } from "lucide-react";

export default function ShippingPolicy() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
                <PageHeader
                    eyebrow="Legal"
                    title="Shipping Policy"
                    description="Information regarding the delivery of your travel documents and vouchers."
                />

                <section className="py-20 px-4 md:px-6">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-6 rounded-xl mb-12 flex items-start gap-4">
                                    <Truck className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Documents & Vouchers</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            This policy outlines how your essential travel documents are delivered.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Document Delivery */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Document Delivery</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>All travel documents, vouchers, itineraries, and confirmations are delivered electronically via email or WhatsApp.</li>
                                            <li>Physical document shipping is not applicable unless explicitly agreed upon.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Delivery Timelines */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Delivery Timelines</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Documents are shared only after payment confirmation.</li>
                                            <li>Delivery timelines may vary depending on service type and destination.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Responsibility */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <AlertCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Responsibility</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling is not responsible for delays caused by incorrect contact details provided by the client.</li>
                                            <li>Clients must ensure their email and phone number are accurate.</li>
                                        </ul>
                                    </div>

                                    {/* Contact */}
                                    <div className="bg-primary/5 p-8 rounded-2xl mt-12 text-center">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Questions about delivery?</h3>
                                        <p className="text-muted-foreground mb-6">
                                            If you haven't received your documents, please check your spam folder or contact us.
                                        </p>
                                        <div className="inline-block text-left text-sm text-muted-foreground bg-background p-4 rounded-lg border border-border/50">
                                            <p className="font-bold text-primary m-0">Europe Calling Operations</p>
                                            <p className="m-0">Email: <a href="mailto:operations@europecalling.co" className="text-primary hover:text-gold">operations@europecalling.co</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </div>
    );
}
