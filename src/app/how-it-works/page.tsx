
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { HOW_IT_WORKS_STEPS, VPC_LIFECYCLE_STEPS, APP_MODULE_PREVIEWS } from '@/lib/constants';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How VirtualProClubs Works"
        subtitle="Understand the journey from a rising star player to a legendary league administrator within our immersive ecosystem."
      />

      <SectionWrapper>
        <div className="space-y-16 md:space-y-20">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FloatingCard key={step.title} className="overflow-hidden relative" hoverEffect="subtle">
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative aspect-video w-full rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={step.image || `https://placehold.co/600x400/121E33/f0f4f8?text=${encodeURIComponent(step.title)}`}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={step.dataAiHint || "process illustration"}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-accent mb-4">
                    <step.icon className="h-10 w-10 mr-4" />
                    <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary">{step.title}</h2>
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
            The VPC Lifecycle: Upload → Track → Reward → Progress
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Experience a continuous loop of gameplay, progression, and engagement within the VirtualProClubs ecosystem.
          </p>
        </div>
        <FloatingCard className="p-8 md:p-12">
            <div className="flex flex-col sm:flex-row flex-wrap justify-around items-start gap-x-8 gap-y-12">
                {VPC_LIFECYCLE_STEPS.map((step, index) => (
                <div key={step.name} className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 lg:flex-1 max-w-[200px]">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
                     <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold text-primary mb-2">{step.name}</h3>
                    <p className="text-sm text-foreground/80">{step.description}</p>
                </div>
                ))}
            </div>
            <p className="mt-12 text-center text-sm text-muted-foreground italic">
                This cycle repeats, constantly evolving your pro and your story within VirtualProClubs.
            </p>
        </FloatingCard>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            App Module Previews
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Get a sneak peek into some of the core modules that power your VPC experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_MODULE_PREVIEWS.map((preview) => (
            <FloatingCard key={preview.title} className="flex flex-col" hoverEffect="subtle">
              <CardHeader className="p-0 mb-4">
                <div className="w-full h-48 relative rounded-t-lg overflow-hidden mb-4 group">
                  <Image 
                    src={preview.image} 
                    alt={preview.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={preview.dataAiHint}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center text-primary mb-2 px-6">
                  <preview.icon className="h-7 w-7 mr-3" />
                  <CardTitle className="font-headline text-2xl text-primary">{preview.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 px-6 pb-6 flex-grow">
                <p className="text-foreground/80">{preview.description}</p>
              </CardContent>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
