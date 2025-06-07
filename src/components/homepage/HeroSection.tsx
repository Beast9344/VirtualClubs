import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { DISCORD_INVITE_URL } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-indigo-950/30">
      {/* Subtle background elements if desired */}
      <div className="absolute inset-0 opacity-10">
        {/* Example: <Image src="/path/to/bg-pattern.svg" layout="fill" objectFit="cover" alt="background pattern" /> */}
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              VirtualProClubs
            </h1>
            <p className="mt-4 sm:mt-6 text-md sm:text-lg leading-7 sm:leading-8 text-foreground/90 lg:text-xl">
              The next-gen football companion app. Track stats, simulate your avatar's life, manage teams, and build your career in one immersive ecosystem.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                  Join Waitlist & Discord <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent shadow-lg hover:shadow-neon-accent transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <Link href="/leaderboard">
                  See Leaderboard <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <FloatingCard 
              className="aspect-video w-full overflow-hidden group"
              hoverEffect="subtle"
            >
              <Image
                src="https://placehold.co/1200x675/121E33/BE29EC?text=Player+to+Avatar+to+Lifestyle"
                alt="Hero animation placeholder: Player evolves to avatar amidst digital assets like mansion and car"
                width={1200}
                height={675}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="football avatar digital assets"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white p-2">
                <h3 className="font-headline text-lg sm:text-xl font-semibold">Your Digital Football Legacy Starts Here</h3>
                <p className="text-xs sm:text-sm opacity-80">Experience the evolution.</p>
              </div>
            </FloatingCard>
             {/* Decorative floating elements - example */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 h-16 w-16 sm:h-24 sm:w-24 animate-float rounded-full bg-primary/30 opacity-50 blur-xl animation-delay-300"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 h-20 w-20 sm:h-32 sm:w-32 animate-float rounded-full bg-accent/30 opacity-50 blur-2xl animation-delay-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
