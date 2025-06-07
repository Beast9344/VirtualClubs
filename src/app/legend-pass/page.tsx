import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ComparisonTable } from '@/components/legend-pass/ComparisonTable';
import { MonetizationDetails } from '@/components/legend-pass/MonetizationDetails';
import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import { FloatingCard } from '@/components/ui/FloatingCard';

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
              Join Waitlist & Get Notified <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
           <p className="mt-4 text-sm text-muted-foreground">(Pricing is indicative for the app, no payments on this site)</p>
        </FloatingCard>
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/70">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary">Experience the Difference</h2>
                <p className="text-lg text-foreground/80">
                    The Legend Pass isn't just about more features; it's about a richer, more rewarding journey.
                    Visualize your success with exclusive assets like your own VPC mansion, witness spectacular XP explosions,
                    and engage with the unique family system that adds another layer to your pro's life.
                </p>
                <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center"><Star className="h-5 w-5 mr-2 text-accent" /> Exclusive Digital Mansion</li>
                    <li className="flex items-center"><Star className="h-5 w-5 mr-2 text-accent" /> Visual XP Explosion Effects</li>
                    <li className="flex items-center"><Star className="h-5 w-5 mr-2 text-accent" /> In-depth Family System</li>
                    <li className="flex items-center"><Star className="h-5 w-5 mr-2 text-accent" /> Premium Avatar Cosmetics</li>
                </ul>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                <FloatingCard className="aspect-[4/3] overflow-hidden" hoverEffect="subtle">
                    <Image src="https://placehold.co/600x450/121E33/BE29EC?text=VPC+Mansion" alt="VPC Mansion Visual" layout="fill" objectFit="cover" data-ai-hint="digital mansion" />
                </FloatingCard>
                <FloatingCard className="aspect-[4/3] overflow-hidden" hoverEffect="subtle">
                    <Image src="https://placehold.co/600x450/121E33/EC297B?text=XP+Explosion" alt="XP Explosion Visual" layout="fill" objectFit="cover" data-ai-hint="xp points" />
                </FloatingCard>
            </div>
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
