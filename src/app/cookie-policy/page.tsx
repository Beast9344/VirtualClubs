import { PageHeader } from '@/components/ui/PageHeader';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FloatingCard } from '@/components/ui/FloatingCard';

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader title="Cookie Policy" />
      <SectionWrapper>
        <FloatingCard className="p-6 md:p-8 space-y-4" hoverEffect={false}>
          <p className="text-muted-foreground">Last Updated: [Date]</p>
          <h2 className="font-headline text-2xl font-semibold text-primary">1. What Are Cookies?</h2>
          <p className="text-foreground/80">
            Cookies are small text files stored on your device (computer, tablet, mobile phone) when you visit certain websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">2. How We Use Cookies</h2>
          <p className="text-foreground/80">
            VirtualProClubs uses cookies to enhance your experience on our website, such as remembering your preferences, analyzing site traffic for improvements, and ensuring essential site functionalities.
          </p>
          <h2 className="font-headline text-2xl font-semibold text-primary">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 text-foreground/80 space-y-1">
            <li><strong>Strictly Necessary Cookies:</strong> Essential for you to browse the website and use its features.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how you use our website, e.g., which pages you visit most often.</li>
            <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make and provide enhanced, more personal features.</li>
          </ul>
          <h2 className="font-headline text-2xl font-semibold text-primary">4. Your Choices Regarding Cookies</h2>
          <p className="text-foreground/80">
            You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. However, if you block cookies, some parts of our website may not function properly.
          </p>
          
          <p className="mt-8 text-center text-lg font-semibold text-primary">
            [Full Cookie Policy content will be provided here.]
          </p>
          <p className="text-sm text-muted-foreground text-center">
            This is a placeholder page. The actual Cookie Policy will be detailed.
          </p>
        </FloatingCard>
      </SectionWrapper>
    </>
  );
}
