
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Scale, FileCheck, Layers, AlertCircle, Ban, HelpCircle, CheckCircle, Globe, Plane, Mail, MapPin } from "lucide-react";

export default function TermsOfService() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="bg-[#faf4e5] flex-grow">
                <PageHeader
                    eyebrow="Legal"
                    title="Terms of Use"
                    description="Please read these terms and conditions carefully before using our service."
                />

                <section className="py-20 px-4 md:px-6">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-6 rounded-xl mb-12 flex items-start gap-4">
                                    <Scale className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Welcome to Europe Calling</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            By accessing or using our website and services, you agree to comply with the following Terms of Use. Please read them carefully.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Service Information */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Service Information</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>All quotations, packages, and services displayed are offers only. No reservation is made unless explicitly confirmed in writing.</li>
                                            <li>All rates are subject to availability at the time of confirmation.</li>
                                            <li>Quotations are valid for 3 days from the date of issue unless stated otherwise.</li>
                                            <li>Europe Calling reserves the right to revise quotations if there are changes in availability, hotel selection, client requests, trade fairs, festivals, exhibitions, or seasonal peak periods.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Booking & Confirmation */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Booking & Confirmation</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Bookings will be confirmed only upon receipt of full or partial payment as per the agreed booking terms.</li>
                                            <li>Written confirmation is mandatory for all bookings.</li>
                                            <li>Booking confirmations will be issued via vouchers or written reconfirmations.</li>
                                            <li>Early check-in, late check-out, bed type, or adjoining rooms are subject to availability and may incur additional charges.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Travel Documents */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Layers className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Travel Documents</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Passports must be valid for at least six (6) months from the date of departure and must contain two blank pages.</li>
                                            <li>Europe Calling is not responsible if a traveler is unable to travel due to passport, visa, or immigration issues.</li>
                                        </ul>
                                    </div>

                                    {/* 4. Liability Disclaimer */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <AlertCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">4. Liability Disclaimer</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling shall not be liable for loss, injury, accident, death, baggage loss, theft, breakdowns, delays, weather conditions, strikes, war, quarantine, government actions, or any unforeseen circumstances.</li>
                                            <li>Travelers are responsible for expenses arising from flight cancellations, rescheduling, or delays during the travel period.</li>
                                            <li>Changes in government rules, travel regulations, or policies of destination countries are beyond our control.</li>
                                        </ul>
                                    </div>

                                    {/* 5. Third-Party Services */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">5. Third-Party Services</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling acts as a global tour operator and does not control airlines, railways, shipping companies, hotels, or other third-party service providers.</li>
                                            <li>Any disputes or service failures by third parties are subject to their respective terms and conditions.</li>
                                        </ul>
                                    </div>

                                    {/* 6. Unused Services */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Ban className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">6. Unused Services</h2>
                                        </div>
                                        <p>
                                            Any services not utilized during the tour will not be refunded or adjusted.
                                        </p>
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
                                                Questions about our Terms?
                                            </h3>

                                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                                                Transparency is key to our relationship. If you need any clarification regarding our terms, our legal team is ready to assist you.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-3xl mx-auto">
                                                {/* Email Card */}
                                                <a href="mailto:legal@europecalling.co" className="group flex-1 bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-center gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-10 h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    <div className="relative">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Legal Support</p>
                                                        <p className="text-primary font-bold text-base leading-none group-hover:text-gold transition-colors">legal@europecalling.co</p>
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
