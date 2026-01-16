
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Shield, Lock, Eye, FileText, Globe, Server, User, Database, Share2, Cookie, Mail, MapPin, HelpCircle } from "lucide-react";

export default function PrivacyPolicy() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
                <PageHeader
                    eyebrow="Legal"
                    title="Privacy Policy"
                    description="Europe Calling respects your privacy and is committed to protecting your personal information."
                />

                <section className="py-20 px-4 md:px-6">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-6 rounded-xl mb-12 flex items-start gap-4">
                                    <Shield className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Your Privacy Matters</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            This policy outlines how we handle your personal information.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Information We Collect */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">Information We Collect</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Name, phone number, email address</li>
                                            <li>Travel preferences and destination details</li>
                                            <li>Passport and visa-related information (only when required)</li>
                                            <li>Communication records</li>
                                        </ul>
                                    </div>

                                    {/* 2. How We Use Your Information */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Server className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">How We Use Your Information</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>To process inquiries and bookings</li>
                                            <li>To provide travel-related services and support</li>
                                            <li>To communicate updates, confirmations, and important notices</li>
                                            <li>To improve our services and customer experience</li>
                                        </ul>
                                    </div>

                                    {/* 3. Data Protection */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Database className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">Data Protection</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Your personal data is stored securely and accessed only by authorized personnel.</li>
                                            <li>We do not sell, rent, or trade personal information to third parties.</li>
                                        </ul>
                                    </div>

                                    {/* 4. Third-Party Disclosure */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Share2 className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">Third-Party Disclosure</h2>
                                        </div>
                                        <p>
                                            Information may be shared with trusted partners such as airlines, hotels, visa consultants, and insurance providers strictly for service fulfillment.
                                        </p>
                                    </div>

                                    {/* 5. Cookies */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Cookie className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">Cookies</h2>
                                        </div>
                                        <p>
                                            Our website may use cookies to enhance browsing experience and analyze website traffic.
                                        </p>
                                    </div>

                                    {/* Contact Section - Premium Compact Design */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-8 md:p-10 rounded-[2rem] mt-12 text-center border border-white/80 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)]">
                                        {/* Decorative background element */}
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-[#0B1536]/5 rounded-full blur-3xl pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md text-[#FF6B00] mb-4 border border-[#FF6B00]/10 transform rotate-3">
                                                <HelpCircle className="w-6 h-6" />
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#0B1536] mb-3 tracking-tight">
                                                Questions about our Privacy Policy?
                                            </h3>

                                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                                                If you have any further questions or comments regarding how we handle your data, you may contact us.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-3xl mx-auto">
                                                {/* Email Card */}
                                                <a href="mailto:privacy@europecalling.co" className="group flex-1 bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-[#FF6B00]/30 transition-all duration-300 flex items-center gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-[#FF6B00]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-10 h-10 rounded-full bg-[#f0f4f8] group-hover:bg-[#FF6B00] flex items-center justify-center text-[#0B1536] group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    <div className="relative">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Privacy Support</p>
                                                        <p className="text-[#0B1536] font-bold text-base leading-none group-hover:text-[#FF6B00] transition-colors">privacy@europecalling.co</p>
                                                    </div>
                                                </a>

                                                {/* Address Card */}
                                                <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-[4px] border-l-[#FF6B00] flex items-center gap-4 text-left">
                                                    <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#0B1536] shrink-0">
                                                        <MapPin className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#0B1536] text-base mb-0.5">Europe Calling</p>
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
