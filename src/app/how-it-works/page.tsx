import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { HOW_IT_WORKS_STEPS, VPC_LIFECYCLE_STEPS } from '@/lib/constants';
import Image from 'next/image';
import { CheckCircle, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How VirtualProClubs Works"
        subtitle="Understand the journey from a rising star player to a legendary league administrator within our immersive ecosystem."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FloatingCard key={step.title} className="overflow-hidden" hoverEffect="subtle">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative aspect-video w-full ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={step.image || `https://placehold.co/600x400/121E33/f0f4f8?text=${encodeURIComponent(step.title)}`}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    data-ai-hint={step.dataAiHint || "process illustration"}
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center text-accent mb-3">
                    <step.icon className="h-10 w-10 mr-4" />
                    <h2 className="font-headline text-3xl font-semibold text-primary">{step.title}</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            The VPC Lifecycle
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Experience a continuous loop of gameplay, progression, and engagement.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <FloatingCard className="p-8 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VPC_LIFECYCLE_STEPS.map((step, index) => (
                    <div key={step.name} className="flex flex-col items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                         <step.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="font-headline text-xl font-semibold text-primary mb-2">{step.name}</h3>
                        <p className="text-sm text-foreground/80">{step.description}</p>
                        {index < VPC_LIFECYCLE_STEPS.length - 1 && (
                        <Zap className="h-8 w-8 text-accent mt-6 opacity-50 rotate-90 sm:hidden lg:block lg:rotate-0 lg:absolute lg:left-full lg:top-1/2 lg:-translate-y-1/2 lg:ml-4 " />
                        )}
                    </div>
                    ))}
                </div>
                <p className="mt-8 text-center text-sm text-muted-foreground italic">
                    This cycle repeats, constantly evolving your pro and your story within VirtualProClubs.
                </p>
            </FloatingCard>
        </div>
      </SectionWrapper>
    </>
  );
}
