
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Scale, FileCheck, Layers, AlertCircle, Ban, HelpCircle, CheckCircle, Globe, Plane } from "lucide-react";

export default function TermsOfService() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
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


                                    {/* Contact */}
                                    <div className="bg-primary/5 p-8 rounded-2xl mt-12 text-center">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Questions about our Terms?</h3>
                                        <p className="text-muted-foreground mb-6">
                                            For clarification on any of our terms and conditions, please reach out to our legal team at <a href="mailto:legal@europecalling.co" className="text-primary font-medium hover:text-gold">legal@europecalling.co</a>.
                                        </p>
                                        <div className="inline-block text-left text-sm text-muted-foreground bg-background p-4 rounded-lg border border-border/50">
                                            <p className="font-bold text-primary m-0">Europe Calling</p>
                                            <p className="m-0">2nd Floor, Paravath Arcade</p>
                                            <p className="m-0">Malappuram, Kerala 676519</p>
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
