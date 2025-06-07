
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ComparisonTable } from '@/components/legend-pass/ComparisonTable';
import { MonetizationDetails } from '@/components/legend-pass/MonetizationDetails';
import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import { ArrowRight, Star, Home, Car, Users2, TrendingUp, Palette, Zap, FileText, Trophy } from 'lucide-react';
import Image from 'next/image';
import { FloatingCard } from '@/components/ui/FloatingCard';

const legendPassFeatures = [
  { icon: Home, title: 'Properties', description: 'Own exclusive digital mansions and properties.' , dataAiHint: 'digital mansion' },
  { icon: Car, title: 'Vehicles', description: 'Unlock and showcase prestigious virtual vehicles.', dataAiHint: 'luxury car' },
  { icon: Users2, title: 'Family System', description: 'Engage in an in-depth family simulation and build your legacy.', dataAiHint: 'family tree' },
  { icon: TrendingUp, title: 'Passive Income', description: 'Generate in-game currency through advanced mechanics.', dataAiHint: 'income graph' },
  { icon: Palette, title: 'Custom Avatars', description: 'Full access to premium avatar customization options and items.', dataAiHint: 'avatar customization' },
  { icon: Zap, title: 'XP Boost + Lvl 120', description: 'Accelerate your progression with XP boosters and reach level 120.', dataAiHint: 'xp points boost' },
  { icon: FileText, title: 'Career CV', description: 'Professional, shareable CV highlighting your achievements.', dataAiHint: 'digital resume' },
  { icon: Trophy, title: 'Premium Leaderboards', description: 'Compete on exclusive leaderboards with elite players.', dataAiHint: 'trophy award' },
];

export default function LegendPassPage() {
  return (
    <>
      <PageHeader
        title="Unlock the Legend Pass"
        subtitle="Elevate your VirtualProClubs experience with exclusive features, enhanced progression, and premium benefits. Become a legend."
      />

      <SectionWrapper>
        <FloatingCard className="p-8 md:p-12 text-center" hoverEffect="intense">
          <Star className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
          <h2 className="font-headline text-4xl font-bold text-accent mb-4">
            Legend Pass: $12.99/mo
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Access the ultimate VPC toolkit. From exclusive in-game assets like mansions and XP explosions to advanced analytics and priority support – the Legend Pass is your key to the full experience.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-neon-accent">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              Unlock Your Destiny – Join Legend Pass™ <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
           <p className="mt-4 text-sm text-muted-foreground">(Pricing is indicative for the app, no payments on this site)</p>
        </FloatingCard>
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/70">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What You Unlock</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {legendPassFeatures.map(feature => (
            <FloatingCard key={feature.title} className="flex flex-col p-6 text-center items-center" hoverEffect="subtle">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/80 flex-grow">{feature.description}</p>
              <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden">
                 <Image 
                    src={`https://placehold.co/400x225/181922/BE29EC?text=${encodeURIComponent(feature.title)}`}
                    alt={feature.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={feature.dataAiHint}
                />
              </div>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-12">
          Free vs. Legend Pass
        </h2>
        <ComparisonTable />
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <MonetizationDetails />
      </SectionWrapper>
    </>
  );
}
