import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureAccordion } from '@/components/features/FeatureAccordion';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Platform Features"
        subtitle="Dive deep into the core functionalities that make VirtualProClubs the ultimate football companion experience."
      />
      <SectionWrapper>
        <FloatingCard className="p-0 md:p-2" hoverEffect={false}>
         <FeatureAccordion />
        </FloatingCard>
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
