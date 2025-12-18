import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    question: "What documents are required to begin the application?",
    answer: "We initiate the process with a personalized consultation to generate a specific checklist for your destination. Typically, you will need a valid passport, academic transcripts, work experience letters, and a CV in the European format. We assist with verification and translation services.",
  },
  {
    question: "How does the Europe Calling package process work?",
    answer: "Our process is systematic and transparent. It begins with profile evaluation, followed by package selection tailored to your goals. We then manage the entire workflow—from documentation and job search assistance to visa filing and pre-departure briefings—keeping you informed at every milestone.",
  },
  {
    question: "Do you offer interview preparation or job placement support?",
    answer: "Yes, our comprehensive packages include dedicated career support. We provide resume enhancement, LinkedIn profile optimization, and rigorous mock interview sessions designed to meet European employer standards, significantly boosting your placement chances.",
  },
  {
    question: "Do you provide assistance with travel arrangements?",
    answer: "Absolutely. To ensure a seamless transition, we offer detailed travel guides, assistance with flight bookings at competitive rates, and guidance on finding initial accommodation in your new city.",
  },
  {
    question: "What are your payment terms and refund policies?",
    answer: "We operate with full transparency. Our payment plans are flexible and structure-based on process milestones. Detailed refund policies are outlined in our service agreement, providing you with financial protection if specific service deliverables are not met.",
  },
  {
    question: "What is the typical timeline for the entire process?",
    answer: "Timelines can vary depending on the destination country and specific visa category, generally ranging from 3 to 6 months. We provide a realistic, estimated timeline at the outset and ensure you are updated on progress throughout the journey.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Header Section */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <RevealOnScroll animation="fade-up">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 inline-flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Need Help?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Find answers to common questions about our travel packages and visa services.
                Everything you need to know for a smooth journey.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center justify-center px-8 py-3 rounded-md text-sm font-medium transition-all hover:translate-x-1">
                Contact Support
              </a>
            </RevealOnScroll>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8">
            <RevealOnScroll animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-sm border border-border/40 overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-border/40 last:border-0 px-6 sm:px-8 bg-white transition-colors duration-300 hover:bg-secondary/10 data-[state=open]:bg-secondary/10"
                    >
                      <AccordionTrigger className="text-left py-6 text-foreground hover:text-primary hover:no-underline text-base sm:text-lg font-semibold transition-all">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-6 pr-4 sm:pr-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in" delay={300}>
              <div className="mt-8 text-center lg:text-left">
                <p className="text-sm text-muted-foreground">
                  Still have questions? <span className="text-gold font-medium cursor-pointer hover:underline">Chat with us</span> or email <span className="text-primary font-medium cursor-pointer hover:underline">support@europebound.com</span>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
