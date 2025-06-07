
import { Button } from '@/components/ui/button';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import { ArrowRight, Star } from 'lucide-react';

export function LegendPassCtaSection() {
  return (
    <FloatingCard className="p-8 md:p-12 text-center" hoverEffect="intense">
      <Star className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-accent mb-4">
        Unlock the Legend Pass™
      </h2>
      <p className="text-lg sm:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
        Elevate your VirtualProClubs experience with exclusive features, enhanced progression, and premium benefits. Access the ultimate VPC toolkit – the Legend Pass is your key.
      </p>
      <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-neon-accent">
        <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
          Unlock Your Destiny – Join Legend Pass™ <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
      <p className="mt-4 text-sm text-muted-foreground">
        Legend Pass: $12.99/mo (Indicative pricing)
      </p>
    </FloatingCard>
  );
}
