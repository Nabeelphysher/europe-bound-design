import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { LeadPopup, useLeadPopup } from "@/components/ui/LeadPopup";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const { isOpen, setIsOpen } = useLeadPopup(15000);
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <HeroSection /> {/* Hero usually has its own animations */}
        <div className="reveal-on-scroll"><DestinationsSection /></div>
        <div className="reveal-on-scroll"><ServicesPreview /></div>
        <div className="reveal-on-scroll"><WhyChooseUs /></div>
        <div className="reveal-on-scroll"><StatsSection /></div>
        <div className="reveal-on-scroll"><TestimonialsSection /></div>
        <div className="reveal-on-scroll"><CTASection /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
      <LeadPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Index;
