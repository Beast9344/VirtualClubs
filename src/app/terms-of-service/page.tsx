import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <SectionWrapper>
        <FloatingCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
          <p className="text-muted-foreground">Last Updated: [Date]</p>
          <h2 className="font-headline text-2xl font-semibold text-primary">1. Acceptance of Terms</h2>
          <p className="text-foreground/80">
            By accessing or using the VirtualProClubs application, website, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Services.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">2. Description of Service</h2>
          <p className="text-foreground/80">
            VirtualProClubs provides a football companion app that includes stat tracking, avatar simulation, team management, and career-building features.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">3. User Conduct</h2>
          <p className="text-foreground/80">
            You agree not to use the Services for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You are responsible for all content you upload or share.
          </p>
          
          {/* Add more sections as needed */}
          <p className="mt-8 text-center text-lg font-semibold text-primary">
            [Full Terms of Service content will be provided here.]
          </p>
          <p className="text-sm text-muted-foreground text-center">
            This is a placeholder page. The actual Terms of Service will be detailed and legally reviewed.
          </p>
        </FloatingCard>
      </SectionWrapper>
    </>
  );
}
