import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StatDisplayCard } from '@/components/leaderboard/StatDisplayCard';
import { TOP_PLAYERS, TOP_TEAMS } from '@/lib/constants';
import type { StatCardItem } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingCard } from '@/components/ui/FloatingCard';
import Image from 'next/image';

// Dummy data for clips
const TOP_CLIPS: StatCardItem[] = [
  { id: 'C1', name: 'Goal of the Season by PlayerX', mainStat: 'Views: 1.5M', secondaryStat: 'Likes: 120K', image: 'https://placehold.co/300x169/BE29EC/f5e6fc?text=Clip+1', dataAiHint: 'gameplay video' },
  { id: 'C2', name: 'Epic Save Montage - KeeperPro', mainStat: 'Views: 900K', secondaryStat: 'Likes: 85K', image: 'https://placehold.co/300x169/BE29EC/f5e6fc?text=Clip+2', dataAiHint: 'gameplay video' },
  { id: 'C3', name: 'TeamPlay Masters - Galactic FC', mainStat: 'Views: 750K', secondaryStat: 'Likes: 70K', image: 'https://placehold.co/300x169/BE29EC/f5e6fc?text=Clip+3', dataAiHint: 'gameplay video' },
];


export default function LeaderboardPage() {
  return (
    <>
      <PageHeader
        title="Leaderboard Showcase"
        subtitle="Witness greatness. Discover top players, dominant teams, and viral clips from the VirtualProClubs universe."
      />
      <SectionWrapper>
        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 bg-primary/10 border border-primary/20">
            <TabsTrigger value="players" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Top Players</TabsTrigger>
            <TabsTrigger value="teams" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Top Teams</TabsTrigger>
            <TabsTrigger value="clips" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Top Clips</TabsTrigger>
          </TabsList>

          <TabsContent value="players">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOP_PLAYERS.map((player, index) => (
                <StatDisplayCard key={player.id} item={player} type="player" rank={index + 1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teams">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOP_TEAMS.map((team, index) => (
                <StatDisplayCard key={team.id} item={team} type="team" rank={index + 1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clips">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOP_CLIPS.map((clip) => (
                <FloatingCard key={clip.id} className="group overflow-hidden" hoverEffect="subtle">
                   <div className="relative aspect-video w-full mb-4">
                     <Image src={clip.image} alt={clip.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" data-ai-hint={clip.dataAiHint || "gameplay video"} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                     <p className="absolute bottom-2 left-3 font-headline text-lg text-white group-hover:text-primary transition-colors duration-300">{clip.name}</p>
                   </div>
                   <div className="px-2 pb-2">
                     <p className="text-sm text-accent">{clip.mainStat}</p>
                     <p className="text-xs text-muted-foreground">{clip.secondaryStat}</p>
                   </div>
                </FloatingCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Leaderboards are updated frequently. Stats shown are for demonstration purposes.
        </p>
      </SectionWrapper>
    </>
  );
}
