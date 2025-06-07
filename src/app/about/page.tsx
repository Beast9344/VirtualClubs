import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { TEAM_MEMBERS, ROADMAP_ITEMS } from '@/lib/constants';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Disc3, BarChartBig } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Us & Our Vision"
        subtitle="Learn about the minds behind VirtualProClubs, our journey, and the exciting future we're building for virtual football enthusiasts."
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              VirtualProClubs was born from a passion for football and a desire to create a truly immersive and comprehensive digital experience for players like us. Founded by Faisal, a lifelong gamer and football fanatic, our mission is to build more than just an app – we're crafting an ecosystem.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We saw a gap in the market for a platform that seamlessly integrates deep stat tracking, engaging avatar simulation, robust team and league management, and genuine career progression. VirtualProClubs is our answer.
            </p>
          </div>
          <FloatingCard hoverEffect="subtle">
            <Image 
              src="https://placehold.co/800x600/121E33/BE29EC?text=VPC+Team+Vision" 
              alt="VPC Team working on vision"
              width={800} 
              height={600}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="team collaboration"
            />
          </FloatingCard>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/70">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-12">
          Meet the Core Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map(member => (
            <FloatingCard key={member.id} className="text-center p-6" hoverEffect="subtle">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/50">
                <Image src={member.avatar} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.dataAiHint || "person avatar"}/>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-primary">{member.name}</h3>
              <p className="text-accent font-medium mb-2">{member.role}</p>
              <p className="text-sm text-foreground/80">{member.bio}</p>
            </FloatingCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-12">
          Our Roadmap & Future Vision
        </h2>
        <div className="space-y-8">
          {ROADMAP_ITEMS.map(item => (
            <FloatingCard key={item.id} className="p-6" hoverEffect="subtle">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex items-center mb-2 sm:mb-0">
                  <item.icon className="h-7 w-7 mr-3 text-accent" />
                  <h3 className="font-headline text-xl md:text-2xl font-semibold text-primary">{item.title}</h3>
                </div>
                <Badge 
                  variant={item.status === 'Completed' ? 'default' : item.status === 'Ongoing' || item.status === 'Upcoming' ? 'secondary' : 'outline'}
                  className={
                    item.status === 'Completed' ? 'bg-green-600 text-white' : 
                    item.status === 'Ongoing' || item.status === 'Upcoming' ? 'bg-blue-500 text-white' :
                    item.status === 'Vision' || item.status === 'Researching' ? 'border-accent text-accent' : ''
                  }
                >
                  {item.status}
                </Badge>
              </div>
              <p className="text-foreground/80 pl-10">{item.description}</p>
            </FloatingCard>
          ))}
        </div>
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg">
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">The Grand Vision</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                    <Disc3 className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg text-primary/90">In-App Economy</h4>
                        <p className="text-sm text-foreground/80">A thriving player-driven marketplace for items, services, and unique assets, powered by VPC Coin.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <BarChartBig className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg text-primary/90">Web3 Integration</h4>
                        <p className="text-sm text-foreground/80">Exploring NFTs for true ownership of rare cosmetics, player cards, and legendary moments.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg text-primary/90">Real-Money Leagues</h4>
                        <p className="text-sm text-foreground/80">Optional, regulated competitive leagues with tangible prize pools for the ultimate challenge.</p>
                    </div>
                </div>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
}
