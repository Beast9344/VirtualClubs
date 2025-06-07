import { MONETIZATION_STREAMS } from '@/lib/constants';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MonetizationDetails() {
  return (
    <div className="mt-16">
      <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        Platform Monetization Streams
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MONETIZATION_STREAMS.map((stream) => (
          <FloatingCard key={stream.stream} className="flex flex-col" hoverEffect="subtle">
            <CardHeader className="p-0">
              <div className="flex items-center text-accent mb-3">
                <stream.icon className="h-7 w-7 mr-3" />
                <CardTitle className="font-headline text-xl text-accent">{stream.stream}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-2xl font-semibold text-primary mb-2">{stream.price}</p>
              <p className="text-foreground/80 text-sm">{stream.purpose}</p>
            </CardContent>
          </FloatingCard>
        ))}
      </div>
      <p className="text-center mt-8 text-sm text-muted-foreground">
        Note: This website does not process payments. Monetization features are part of the in-app experience.
      </p>
    </div>
  );
}
