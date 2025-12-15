import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents are required to begin the application?",
    answer:
      "We initiate the process with a personalized consultation to generate a specific checklist for your destination. Typically, you will need a valid passport, academic transcripts, work experience letters, and a CV in the European format. We assist with verification and translation services.",
  },
  {
    question: "How does the Europe Calling package process work?",
    answer:
      "Our process is systematic and transparent. It begins with profile evaluation, followed by package selection tailored to your goals. We then manage the entire workflow—from documentation and job search assistance to visa filing and pre-departure briefings—keeping you informed at every milestone.",
  },
  {
    question: "Do you offer interview preparation or job placement support?",
    answer:
      "Yes, our comprehensive packages include dedicated career support. We provide resume enhancement, LinkedIn profile optimization, and rigorous mock interview sessions designed to meet European employer standards, significantly boosting your placement chances.",
  },
  {
    question: "Do you provide assistance with travel arrangements?",
    answer:
      "Absolutely. To ensure a seamless transition, we offer detailed travel guides, assistance with flight bookings at competitive rates, and guidance on finding initial accommodation in your new city.",
  },
  {
    question: "What are your payment terms and refund policies?",
    answer:
      "We operate with full transparency. Our payment plans are flexible and structure-based on process milestones. Detailed refund policies are outlined in our service agreement, providing you with financial protection if specific service deliverables are not met.",
  },
  {
    question: "What is the typical timeline for the entire process?",
    answer:
      "Timelines can vary depending on the destination country and specific visa category, generally ranging from 3 to 6 months. We provide a realistic, estimated timeline at the outset and ensure you are updated on progress throughout the journey.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-champagne">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg sm:rounded-xl border border-border px-4 sm:px-6 data-[state=open]:shadow-card transition-shadow animate-fade-in-up"
              style={{
                animationDelay: `${200 + index * 100}ms`,
              }}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold py-4 sm:py-5 text-sm sm:text-base [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
