
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StatDisplayCard } from '@/components/leaderboard/StatDisplayCard';
import { TOP_PLAYERS, TOP_TEAMS } from '@/lib/constants';
import { ArrowRight, Trophy } from 'lucide-react';

export function LeaderboardPreview() {
  const playersToShow = TOP_PLAYERS.slice(0, 3);
  const teamsToShow = TOP_TEAMS.slice(0, 3);

  return (
    <SectionWrapper className="bg-background/70">
      <div className="text-center mb-12 md:mb-16">
        <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Leaderboard Highlights
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Get a glimpse of the top performers in the VirtualProClubs universe.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-headline text-2xl font-semibold text-primary mb-6 text-center sm:text-left">Top Players</h3>
          <div className="space-y-4">
            {playersToShow.map((player, index) => (
              <StatDisplayCard key={player.id} item={player} type="player" rank={index + 1} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-primary mb-6 text-center sm:text-left">Top Teams</h3>
          <div className="space-y-4">
            {teamsToShow.map((team, index) => (
              <StatDisplayCard key={team.id} item={team} type="team" rank={index + 1} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-neon-accent">
          <Link href="/leaderboard">
            View Full Leaderboard <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
