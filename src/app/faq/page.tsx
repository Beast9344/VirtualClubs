import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { SupportForm } from '@/components/forms/SupportForm';
import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL, SOCIAL_LINKS } from '@/lib/constants';
import { MessageSquare } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ & Support"
        subtitle="Find answers to common questions about VirtualProClubs. If you can't find what you're looking for, feel free to reach out to our support team or community."
      />

      <SectionWrapper>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <FaqAccordion />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/70">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
                <SupportForm />
            </div>
            <FloatingCard className="p-6 md:p-8" hoverEffect="subtle">
                <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-6">Community Support</h2>
                <p className="text-foreground/80 mb-4">
                    Often, the quickest way to get help or find answers is by engaging with our vibrant community. Join our Discord server to chat with other players, experienced members, and even our staff.
                </p>
                <Button size="lg" asChild className="mb-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
                    <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" /> Join our Discord
                    </a>
                </Button>
                
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Follow Us</h3>
                <p className="text-foreground/80 mb-4">
                    Stay updated with the latest news, announcements, and community highlights by following our social media channels.
                </p>
                <div className="flex space-x-3">
                {SOCIAL_LINKS.filter(link => link.name !== 'Discord').map(social => ( // Assuming Discord already promoted
                    <Button key={social.name} variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-5 w-5 mr-2" /> {social.name}
                    </a>
                    </Button>
                ))}
                </div>
            </FloatingCard>
        </div>
      </SectionWrapper>
    </>
  );
}
