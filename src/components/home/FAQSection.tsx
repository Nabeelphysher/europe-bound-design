import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle, MessageCircle, Mail } from "lucide-react";
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
    <section className="py-24 bg-secondary/30 relative overflow-hidden" id="faq">

      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-wide relative z-10 px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Header Section ( Sticky optimized for large screens ) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <RevealOnScroll animation="fade-up">
              <div className="relative">
                <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-gold block mb-3 pl-1">
                  Need Help?
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tight">
                  Frequently Asked <br /> Questions
                </h2>
                <div className="w-16 h-[2px] bg-gold/60 rounded-full mb-8"></div>

                <p className="text-muted-foreground text-sm sm:text-base mb-10 leading-relaxed max-w-sm font-light">
                  Find answers to common questions about our travel packages and visa services.
                  Everything you need to know for a smooth journey.
                </p>

                <div className="flex flex-col gap-4">
                  <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto font-medium tracking-wide">
                    <MessageCircle className="w-4 h-4" />
                    Contact Support
                  </a>
                  <a href="mailto:support@europecalling.co" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto font-medium tracking-wide">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* FAQ Accordion - Individual Cards Style */}
          <div className="lg:col-span-8">
            <RevealOnScroll animation="fade-up" delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group bg-white rounded-xl border border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] px-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg data-[state=open]:border-gold/40 data-[state=open]:ring-1 data-[state=open]:ring-gold/10"
                  >
                    <AccordionTrigger className="text-left py-6 text-primary hover:text-gold hover:no-underline text-lg font-heading font-medium transition-colors [&[data-state=open]]:text-gold">
                      <span className="pr-4 tracking-tight">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-6 pt-0 pr-4 sm:pr-12 font-light">
                      <div className="h-px w-full bg-gold/10 mb-4" />
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in" delay={300}>
              <div className="mt-10 text-center lg:text-left inline-flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground bg-white/50 p-4 rounded-lg backdrop-blur-sm border border-white/60">
                <HelpCircle className="w-4 h-4 text-gold" />
                <span className="font-light">Still have questions?</span>
                <a href="/contact" className="text-primary font-medium hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">Chat with us</a>
                <span className="font-light">or email</span>
                <a href="mailto:support@europecalling.co" className="text-primary font-medium hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">support@europecalling.co</a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
