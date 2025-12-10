import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents do I need to start the process?",
    answer:
      "The basic documents required include a valid passport, educational certificates, work experience letters (if applicable), financial statements, and passport-size photographs. Our team will provide you with a detailed checklist based on your specific destination and visa type.",
  },
  {
    question: "How long does the visa process typically take?",
    answer:
      "Processing times vary by country and visa type. Generally, work visas take 4-8 weeks, while tourist visas may take 2-4 weeks. We'll provide you with accurate timelines during your consultation based on your specific case.",
  },
  {
    question: "What is your success rate for visa approvals?",
    answer:
      "We maintain a 98% success rate for visa approvals. This high success rate is achieved through meticulous documentation, thorough preparation, and our deep understanding of each country's immigration requirements.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer:
      "Yes, our Customized Package includes job placement support. We work with a network of employers across Europe to match candidates with suitable opportunities based on their skills and preferences.",
  },
  {
    question: "What happens if my visa application is rejected?",
    answer:
      "While rejections are rare with our guidance, if it happens, we analyze the reasons, address any issues, and assist with reapplication at no additional consultation fee. Our commitment is to your success.",
  },
  {
    question: "Can you help with family reunification visas?",
    answer:
      "Absolutely. We specialize in family reunification cases and have helped numerous families unite in Europe. The process requirements vary by country, and we'll guide you through every step.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We offer flexible payment plans including full upfront payment, installments, and milestone-based payments. All fees are transparent with no hidden costs. We discuss payment options during your initial consultation.",
  },
  {
    question: "Do you provide post-arrival support?",
    answer:
      "Yes, our support extends beyond visa approval. We assist with airport pickup coordination, initial accommodation, local registration requirements, and settling-in guidance to ensure a smooth transition.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-champagne">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
