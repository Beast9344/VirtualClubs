import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { PLAYER_QUOTES, DISCORD_INVITE_URL } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageSquare, Video } from 'lucide-react'; // Using Video for TikTok as generic play icon

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Community Hub"
        subtitle="Connect with fellow players, share your best moments, and stay updated with the latest from VirtualProClubs."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FloatingCard className="p-6" hoverEffect="subtle">
            <div className="flex items-center text-primary mb-4">
              <MessageSquare className="h-8 w-8 mr-3" />
              <h2 className="font-headline text-2xl md:text-3xl font-semibold">Join Our Discord</h2>
            </div>
            <p className="text-foreground/80 mb-6">
              The heart of the VPC community! Chat with players, find teams, get support, participate in events, and give feedback directly to the developers.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                Connect on Discord
              </a>
            </Button>
            <div className="mt-6 p-4 border border-dashed border-primary/30 rounded-lg bg-primary/5 text-center">
              <p className="text-sm text-primary">Discord server embed/widget would appear here.</p>
              <p className="text-xs text-muted-foreground">(Placeholder for actual Discord embed)</p>
            </div>
          </FloatingCard>

          <FloatingCard className="p-6" hoverEffect="subtle">
            <div className="flex items-center text-accent mb-4">
              <Video className="h-8 w-8 mr-3" />
              <h2 className="font-headline text-2xl md:text-3xl font-semibold">Clip of the Week</h2>
            </div>
            <p className="text-foreground/80 mb-6">
              Check out the most epic, skillful, or hilarious clip submitted by the community! Featured weekly. Got a great moment? Share it on TikTok with #VirtualProClubs.
            </p>
            <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent shadow-lg hover:shadow-neon-accent">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"> {/* Replace with actual TikTok link/profile */}
                View on TikTok
              </a>
            </Button>
            <div className="mt-6 aspect-video bg-card rounded-lg flex items-center justify-center border border-dashed border-accent/30">
              <p className="text-sm text-accent">TikTok embed would appear here.</p>
              <p className="text-xs text-muted-foreground">(Placeholder for actual TikTok embed)</p>
            </div>
          </FloatingCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-12">
          From the Community: Player Quotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLAYER_QUOTES.map(quote => (
            <FloatingCard key={quote.id} className="flex flex-col" hoverEffect="subtle">
              <blockquote className="text-foreground/90 italic border-l-4 border-primary pl-4 mb-4 flex-grow">
                "{quote.quote}"
              </blockquote>
              <div className="flex items-center mt-auto pt-4 border-t border-primary/10">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 shrink-0">
                  <Image src={quote.image} alt={quote.author} layout="fill" objectFit="cover" data-ai-hint={quote.dataAiHint || "player avatar"} />
                </div>
                <div>
                  <p className="font-semibold text-primary">{quote.author}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
