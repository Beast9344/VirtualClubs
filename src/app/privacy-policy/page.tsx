import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <SectionWrapper>
        <FloatingCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
          <p className="text-muted-foreground">Last Updated: [Date]</p>
          <h2 className="font-headline text-2xl font-semibold text-primary">1. Information We Collect</h2>
          <p className="text-foreground/80">
            We collect information you provide directly to us, such as when you create an account, update your profile, use the Services, or communicate with us. This may include personal data like your name, email address, and gameplay statistics.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
          <p className="text-foreground/80">
            We use the information we collect to provide, maintain, and improve our Services, to personalize your experience, to communicate with you, and for security purposes.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">3. Sharing of Information</h2>
          <p className="text-foreground/80">
            We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.
          </p>

          {/* Add more sections as needed */}
          <p className="mt-8 text-center text-lg font-semibold text-primary">
            [Full Privacy Policy content will be provided here.]
          </p>
           <p className="text-sm text-muted-foreground text-center">
            This is a placeholder page. The actual Privacy Policy will be detailed and legally reviewed.
          </p>
        </FloatingCard>
      </SectionWrapper>
    </>
  );
}
