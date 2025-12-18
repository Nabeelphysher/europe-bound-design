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
import { FAQSection } from "@/components/home/FAQSection";



const Index = () => {
  const { isOpen, setIsOpen } = useLeadPopup(5000);

  return (
    <>
      <Header />
      <main>
        <HeroSection /> {/* Hero usually has its own animations */}
        <DestinationsSection />
        <ServicesPreview />
        <WhyChooseUs />
        <StatsSection />

        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
      <LeadPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Index;
