
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { DISCORD_INVITE_URL, PLAYER_QUOTES, SOCIAL_LINKS } from '@/lib/constants';
import { MessageSquare, Video, Twitter, Youtube, Play } from 'lucide-react'; // Added Twitter, Youtube, Play

export function CommunityHubSection() {
  const tiktokLink = SOCIAL_LINKS.find(link => link.name === 'TikTok')?.href || '#';
  const twitterLink = SOCIAL_LINKS.find(link => link.name === 'Twitter')?.href || '#';

  return (
    <SectionWrapper className="bg-background/70">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Join The Conversation
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Connect with fellow players, share your highlights, and get the latest news from the VPC community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
        <FloatingCard className="p-6 md:p-8" hoverEffect="subtle">
          <div className="flex items-center text-primary mb-4">
            <MessageSquare className="h-8 w-8 mr-3 shrink-0" />
            <h3 className="font-headline text-2xl md:text-3xl font-semibold">Our Discord Community</h3>
          </div>
          <p className="text-foreground/80 mb-6">
            The official hub for all things VirtualProClubs. Chat with players, find teams, participate in events, and get direct support.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary w-full sm:w-auto">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              Join Discord Server
            </a>
          </Button>
          <div className="mt-6 p-4 border border-dashed border-primary/30 rounded-lg bg-primary/5 text-center">
            <p className="text-sm text-primary">Live Discord widget would appear here.</p>
            <p className="text-xs text-muted-foreground">(Placeholder)</p>
          </div>
        </FloatingCard>

        <FloatingCard className="p-6 md:p-8" hoverEffect="subtle">
          <div className="flex items-center text-accent mb-4">
            <Video className="h-8 w-8 mr-3 shrink-0" />
            <h3 className="font-headline text-2xl md:text-3xl font-semibold">Clip of the Week</h3>
          </div>
          <p className="text-foreground/80 mb-2">
            Check out the most epic community clip! Share yours on TikTok or Twitter with #VirtualProClubs.
          </p>
          <div className="aspect-video bg-card rounded-lg flex items-center justify-center border border-dashed border-accent/30 mb-6">
            <Play className="h-16 w-16 text-accent/70" />
            <p className="absolute text-sm text-accent bottom-4">TikTok/Twitter embed placeholder</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent flex-1">
              <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5 mr-2" /> {/* Using Play as a generic video icon for TikTok */}
                Watch on TikTok
              </a>
            </Button>
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent flex-1">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 mr-2" />
                See on Twitter
              </a>
            </Button>
          </div>
        </FloatingCard>
      </div>

      <div>
        <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
          From Our Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PLAYER_QUOTES.map(quote => (
            <FloatingCard key={quote.id} className="flex flex-col p-6" hoverEffect="subtle">
              <blockquote className="text-foreground/90 italic border-l-4 border-primary pl-4 mb-4 flex-grow">
                "{quote.quote}"
              </blockquote>
              <div className="flex items-center mt-auto pt-4 border-t border-primary/10">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 shrink-0">
                  <Image src={quote.image} alt={quote.author} layout="fill" objectFit="cover" data-ai-hint={quote.dataAiHint || "player avatar"}/>
                </div>
                <div>
                  <p className="font-semibold text-primary">{quote.author}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
