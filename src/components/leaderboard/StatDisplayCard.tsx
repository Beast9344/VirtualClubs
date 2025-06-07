import type { StatCardItem } from '@/types';
import Image from 'next/image';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { Trophy, Star, Play, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StatDisplayCardProps {
  item: StatCardItem;
  type: 'player' | 'team' | 'clip';
  rank?: number;
}

export function StatDisplayCard({ item, type, rank }: StatDisplayCardProps) {
  let iconElement = <Star className="h-5 w-5 text-yellow-400" />;
  if (type === 'team') iconElement = <Users className="h-5 w-5 text-blue-400" />;
  if (type === 'clip') iconElement = <Play className="h-5 w-5 text-red-400" />;

  return (
    <FloatingCard className="p-4 transition-all duration-300 ease-out" hoverEffect="subtle">
      <div className="flex items-center space-x-4">
        {rank && (
          <div className="flex flex-col items-center justify-center w-10">
            <Trophy className={`h-6 w-6 ${rank === 1 ? 'text-yellow-400' : rank === 2 ? 'text-gray-400' : rank === 3 ? 'text-orange-400' : 'text-primary/50'}`} />
            <span className="text-xs font-bold text-primary">{rank}</span>
          </div>
        )}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary">
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || "avatar profile"}/>
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate font-headline text-lg font-semibold text-primary">{item.name}</p>
          <p className="text-sm text-accent">{item.mainStat}</p>
          <p className="text-xs text-muted-foreground">{item.secondaryStat}</p>
        </div>
        {/* Example Badge for player rating or team tier */}
        {type === 'player' && item.secondaryStat.includes("Rating") && (
            <Badge variant="outline" className="ml-auto border-accent text-accent whitespace-nowrap">
              {item.secondaryStat.split(':')[1]?.trim()}
            </Badge>
        )}
      </div>
    </FloatingCard>
  );
}
