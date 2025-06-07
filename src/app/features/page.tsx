
"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { FEATURES_LIST } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export default function FeaturesPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const handleToggleExpand = (title: string) => {
    setExpandedFeature(prev => (prev === title ? null : title));
  };

  return (
    <>
      <PageHeader
        title="Platform Features"
        subtitle="Dive deep into the core functionalities that make VirtualProClubs the ultimate football companion experience."
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES_LIST.map((feature) => {
            const isExpanded = feature.title === expandedFeature;
            return (
              <FloatingCard
                key={feature.title}
                className="flex flex-col p-6 cursor-pointer"
                onClick={() => handleToggleExpand(feature.title)}
                hoverEffect="subtle"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center">
                  <feature.icon className="h-8 w-8 mr-4 text-primary shrink-0" />
                  <h3 className="font-headline text-xl font-semibold text-primary">{feature.title}</h3>
                  <ChevronDown
                    className={cn(
                      "ml-auto h-5 w-5 text-primary/70 transition-transform duration-300",
                      isExpanded ? "rotate-180" : ""
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  <p className="text-foreground/80 text-sm">{feature.description}</p>
                </div>
              </FloatingCard>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            And Much More...
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We are constantly innovating and adding new features based on community feedback and our vision for the future of virtual football. Stay tuned for exciting updates!
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
