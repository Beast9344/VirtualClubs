import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PartnerInquiryForm } from '@/components/forms/PartnerInquiryForm';

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner with Us"
        subtitle="Join the VirtualProClubs ecosystem. We're looking for leagues, scouts, content creators, and brand partners to help shape the future of virtual football."
      />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
            <PartnerInquiryForm />
        </div>
        <div className="mt-12 text-center">
            <h3 className="font-headline text-2xl text-primary mb-4">Why Partner with VirtualProClubs?</h3>
            <ul className="list-disc list-inside inline-block text-left text-foreground/80 space-y-2 max-w-md mx-auto">
                <li>Reach a passionate and engaged global audience of football gamers.</li>
                <li>Utilize powerful tools for league management and talent scouting.</li>
                <li>Collaborate on innovative content and community initiatives.</li>
                <li>Align your brand with a forward-thinking, next-generation platform.</li>
            </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
