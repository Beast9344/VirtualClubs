import { PlayCircle } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function VisionTrailer() {
  return (
    <div className="py-16 md:py-24 text-center bg-gradient-to-b from-background to-indigo-950/10">
      <div className="container">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-6">
          See the Future of Virtual Football
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-10">
          Get a glimpse into the immersive world of VirtualProClubs. This is more than just a game; it's a lifestyle.
        </p>
        
        <FloatingCard className="max-w-4xl mx-auto aspect-video relative overflow-hidden group cursor-pointer">
          <Image
            src="https://placehold.co/1280x720/121E33/EC297B?text=VirtualProClubs+Trailer+Placeholder"
            alt="VirtualProClubs Vision Trailer Placeholder"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="game trailer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="font-headline text-2xl font-semibold text-white">Watch Our Vision Trailer</h3>
            <p className="text-white/80 text-sm">Click to play (placeholder)</p>
          </div>
        </FloatingCard>

        <p className="mt-8 text-muted-foreground text-sm">
          (Actual video coming soon - this is a placeholder image)
        </p>
      </div>
    </div>
  );
}
