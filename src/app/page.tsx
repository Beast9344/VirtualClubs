import { HeroSection } from '@/components/homepage/HeroSection';
import { StatTicker } from '@/components/homepage/StatTicker';
import { VisionTrailer } from '@/components/homepage/VisionTrailer';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES_LIST, HOW_IT_WORKS_STEPS, DISCORD_INVITE_URL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatTicker />
      
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            What is VirtualProClubs?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            VirtualProClubs is not just another game. It's a comprehensive platform designed to deepen your engagement with virtual football, offering tools and experiences for players, managers, and league organizers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_LIST.slice(0,3).map((feature) => (
            <FloatingCard key={feature.title} className="flex flex-col" hoverEffect="subtle">
              <CardHeader className="p-0 mb-4">
                <div className="w-full h-48 relative rounded-t-lg overflow-hidden mb-4">
                  <Image src={feature.image || `https://placehold.co/600x400/121E33/f0f4f8?text=${encodeURIComponent(feature.title)}`} alt={feature.title} layout="fill" objectFit="cover" data-ai-hint={feature.dataAiHint || "abstract illustration"}/>
                </div>
                <div className="flex items-center text-primary mb-2">
                  <feature.icon className="h-7 w-7 mr-3" />
                  <CardTitle className="font-headline text-2xl text-primary">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
              <div className="mt-6">
                <Button variant="link" asChild className="text-accent p-0 hover:text-accent/80">
                  <Link href="/features">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </FloatingCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-neon-accent">
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            How It Works: A Glimpse
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Seamlessly transition between roles and experiences within the VPC ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
             <FloatingCard key={step.title} className="text-center" hoverEffect="subtle">
              <step.icon className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="font-headline text-2xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-foreground/80 text-sm">{step.description.substring(0,100)}...</p>
              <Button variant="link" asChild className="text-accent mt-4 p-0 hover:text-accent/80">
                  <Link href="/how-it-works">Discover More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>
      
      <VisionTrailer />

      <SectionWrapper>
        <FloatingCard className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground p-8 md:p-12" hoverEffect={false}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Ready to Join the Revolution?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Be among the first to experience VirtualProClubs. Join our Discord community, reserve your pro name, and get early access updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-xl">
                  <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                    Join Discord Now <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/legend-pass">
                    Explore Legend Pass
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image 
                src="https://placehold.co/600x400/121E33/f0f4f8?text=Community+Artwork" 
                alt="Community engagement placeholder" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
                data-ai-hint="community gaming" 
              />
            </div>
          </div>
        </FloatingCard>
      </SectionWrapper>
    </>
  );
}
