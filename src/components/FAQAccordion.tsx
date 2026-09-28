import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/company";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`faq-${i}`}
          className="border-border border-b"
        >
          <AccordionTrigger className="text-primary cursor-pointer py-5 text-left text-base font-semibold hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
