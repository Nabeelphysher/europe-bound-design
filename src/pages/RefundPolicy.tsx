
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { RefreshCcw, DollarSign, Calendar, XCircle, FileText, Globe } from "lucide-react";

export default function RefundPolicy() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
                <PageHeader
                    eyebrow="Legal"
                    title="Refund Policy"
                    description="Our terms regarding payment, cancellations, and refunds."
                />

                <section className="py-20 px-4 md:px-6">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-6 rounded-xl mb-12 flex items-start gap-4">
                                    <RefreshCcw className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Policy Overview</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            This policy outlines our payment terms, cancellation rules, and refund conditions.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Payment Terms */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <DollarSign className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Payment Terms</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Full payment must be settled at least 15 days prior to the arrival date.</li>
                                            <li>Failure to complete payment within the stipulated time may result in automatic cancellation without notice.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Cancellation Policy */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Cancellation Policy</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>All confirmed bookings are treated as guaranteed bookings.</li>
                                            <li>Cancellation requests must be received in writing at least 31 days before the check-in date to avoid 100% cancellation charges.</li>
                                            <li>Any cancellation made after this period will incur full cancellation charges.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Refund Conditions */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <XCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Refund Conditions</h2>
                                        </div>
                                        <p>
                                            Refunds, if applicable, are subject to supplier policies and service utilization. No refunds will be provided for:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Unused services</li>
                                            <li>Visa rejection</li>
                                            <li>Flight delays or cancellations by airlines</li>
                                            <li>Government regulation changes</li>
                                            <li>Force majeure events</li>
                                        </ul>
                                    </div>

                                    {/* 4. Visa & Documentation */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">4. Visa & Documentation</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling is not responsible for visa rejection or travel denial.</li>
                                            <li>Cancellation charges will apply as per booking terms even in visa-related issues.</li>
                                        </ul>
                                    </div>


                                    {/* Contact */}
                                    <div className="bg-primary/5 p-8 rounded-2xl mt-12 text-center">
                                        <h3 className="text-2xl font-bold text-primary mb-4">Questions about refunds?</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Please contact our accounts team for any clarification.
                                        </p>
                                        <div className="inline-block text-left text-sm text-muted-foreground bg-background p-4 rounded-lg border border-border/50">
                                            <p className="font-bold text-primary m-0">Accounts Department</p>
                                            <p className="m-0">Email: <a href="mailto:accounts@europecalling.co" className="text-primary hover:text-gold">accounts@europecalling.co</a></p>
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
