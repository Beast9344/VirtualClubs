import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants";
import type { FaqItem } from "@/types";

interface FaqAccordionProps {
  items?: FaqItem[];
}

export function FaqAccordion({ items = FAQ_ITEMS }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border border-primary/20 rounded-lg bg-card/50 px-4 data-[state=open]:bg-primary/10">
          <AccordionTrigger className="py-5 text-left hover:no-underline">
            <div className="flex items-center">
              {item.icon && <item.icon className="h-6 w-6 mr-3 text-primary shrink-0" />}
              <span className="font-headline text-lg md:text-xl text-primary">{item.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <p className="text-foreground/80 leading-relaxed pl-9">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
