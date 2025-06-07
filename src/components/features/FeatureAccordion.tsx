import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FEATURES_LIST } from "@/lib/constants";
import type { Feature } from "@/types";
import Image from "next/image";

interface FeatureAccordionProps {
  features?: Feature[];
  defaultOpenIndex?: number;
}

export function FeatureAccordion({ features = FEATURES_LIST, defaultOpenIndex = 0 }: FeatureAccordionProps) {
  return (
    <Accordion type="single" collapsible defaultValue={`item-${defaultOpenIndex}`} className="w-full">
      {features.map((feature, index) => (
        <AccordionItem key={feature.title} value={`item-${index}`} className="border-primary/20">
          <AccordionTrigger className="py-6 hover:no-underline">
            <div className="flex items-center text-left">
              <feature.icon className="h-8 w-8 mr-4 text-primary shrink-0" />
              <span className="font-headline text-xl md:text-2xl text-primary">{feature.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3">
                <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
              </div>
              {feature.image && (
                <div className="md:col-span-2 relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={feature.dataAiHint || "feature illustration"}
                  />
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
