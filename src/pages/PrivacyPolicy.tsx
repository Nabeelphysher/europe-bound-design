
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Shield, Lock, Eye, FileText, Globe, Server, User, Database, Share2, Cookie } from "lucide-react";

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

                                    {/* Contact */}
                                    <div className="bg-primary/5 p-8 rounded-2xl mt-12 text-center">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Have questions about this policy?</h3>
                                        <p className="text-muted-foreground mb-6">
                                            If you have any further questions or comments, you may contact us.
                                        </p>
                                        <div className="inline-block text-left text-sm text-muted-foreground bg-background p-4 rounded-lg border border-border/50">
                                            <p className="font-bold text-primary m-0">Europe Calling</p>
                                            <p className="m-0">Email: <a href="mailto:privacy@europecalling.co" className="text-primary hover:text-gold">privacy@europecalling.co</a></p>
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
