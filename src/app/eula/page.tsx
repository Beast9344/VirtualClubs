import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function EulaPage() {
  return (
    <>
      <PageHeader title="End-User License Agreement (EULA)" />
      <SectionWrapper>
        <FloatingCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
          <p className="text-muted-foreground">Last Updated: [Date]</p>
          <h2 className="font-headline text-2xl font-semibold text-primary">1. License Grant</h2>
          <p className="text-foreground/80">
            VirtualProClubs ("Licensor") grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the VirtualProClubs application (the "Application") strictly in accordance with the terms of this Agreement.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">2. Restrictions</h2>
          <p className="text-foreground/80">
            You agree not to, and you will not permit others to:
            <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the Application or make the Application available to any third party.</li>
                <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the Application.</li>
                <li>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) of Licensor or its affiliates, partners, suppliers, or the licensors of the Application.</li>
            </ul>
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">3. Intellectual Property</h2>
          <p className="text-foreground/80">
            The Application, including without limitation all copyrights, patents, trademarks, trade secrets, and other intellectual property rights are, and shall remain, the sole and exclusive property of Licensor.
          </p>
          
          <p className="mt-8 text-center text-lg font-semibold text-primary">
            [Full EULA content will be provided here.]
          </p>
          <p className="text-sm text-muted-foreground text-center">
            This is a placeholder page. The actual EULA will be detailed and legally reviewed.
          </p>
        </FloatingCard>
      </SectionWrapper>
    </>
  );
}
