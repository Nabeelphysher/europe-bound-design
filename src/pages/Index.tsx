import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { LeadPopup, useLeadPopup } from "@/components/ui/LeadPopup";
import { HeroSectionV2 } from "@/components/home/HeroSectionV2";
import { HomeIntroHero } from "../components/home/HomeIntroHero";
import { HeroSectionV3 } from "../components/home/HeroSectionV3";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { VisaPromoSection } from "@/components/home/VisaPromoSection";
import { GallerySection } from "@/components/home/GallerySection";

const Index = () => {
  const { isOpen, setIsOpen } = useLeadPopup(10000);

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5]">
        {/* New Intro Hero with Mini-Hero Preview */}
        <HomeIntroHero />

        {/* New Hero Section V3 - Full Background Image */}
        <HeroSectionV3 />

        {/* <HeroSection /> */} {/* Hero usually has its own animations */}
        <DestinationsSection />
        <ServicesPreview />
        <WhyChooseUs />
        <StatsSection />
        <VisaPromoSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />

      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
      <LeadPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Index;
