
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { FEATURES_LIST } from '@/lib/constants';
import Image from 'next/image'; // Keep if you decide to add images back to cards

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Platform Features"
        subtitle="Dive deep into the core functionalities that make VirtualProClubs the ultimate football companion experience."
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES_LIST.map((feature) => (
            <FloatingCard 
              key={feature.title} 
              className="flex flex-col p-6" // Added padding here
              hoverEffect="subtle" // Or "intense" based on preference
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 mr-4 text-primary shrink-0" />
                <h3 className="font-headline text-xl font-semibold text-primary">{feature.title}</h3>
              </div>
              <p className="text-foreground/80 text-sm flex-grow">{feature.description}</p>
              {/* 
              // Optional: If you want images on these cards later, uncomment this block.
              // For now, keeping it text-focused for a cleaner grid of many cards.
              {feature.image && (
                <div className="mt-4 relative aspect-video rounded-lg overflow-hidden shadow-md group">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={feature.dataAiHint || "feature illustration"}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              */}
            </FloatingCard>
          ))}
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
