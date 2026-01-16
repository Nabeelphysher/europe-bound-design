
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Truck, FileText, Clock, AlertCircle, Mail, MapPin, HelpCircle } from "lucide-react";

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

                                    {/* Contact Section - Premium Compact Design */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-8 md:p-10 rounded-[2rem] mt-12 text-center border border-white/80 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)]">
                                        {/* Decorative background element */}
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md text-gold mb-4 border border-gold/10 transform rotate-3">
                                                <HelpCircle className="w-6 h-6" />
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3 tracking-tight">
                                                Questions about our Shipping Policy?
                                            </h3>

                                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                                                If you have questions regarding the delivery of your documents, our operations team is here to help.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-3xl mx-auto">
                                                {/* Email Card */}
                                                <a href="mailto:operations@europecalling.co" className="group flex-1 bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-center gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-10 h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    <div className="relative">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Operations Support</p>
                                                        <p className="text-primary font-bold text-base leading-none group-hover:text-gold transition-colors">operations@europecalling.co</p>
                                                    </div>
                                                </a>

                                                {/* Address Card */}
                                                <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-[4px] border-l-gold flex items-center gap-4 text-left">
                                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                                        <MapPin className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-primary text-base mb-0.5">Europe Calling</p>
                                                        <p className="text-gray-500 text-xs m-0 leading-snug">Paravath Arcade, Malappuram</p>
                                                        <p className="text-gray-400 text-[10px] m-0 mt-0.5">Kerala 676519</p>
                                                    </div>
                                                </div>
                                            </div>
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
