import Link from 'next/link';
import { SITE_NAME, LEGAL_PAGES, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Elevating your virtual football experience.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/legend-pass" className="text-sm text-muted-foreground hover:text-primary transition-colors">Legend Pass</Link></li>
              <li><Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">Leaderboard</Link></li>
              <li><Link href="/partner" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_PAGES.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline text-lg font-semibold text-foreground mb-4">Community</h4>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map(social => (
                <Button key={social.name} variant="outline" size="icon" asChild className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {SITE_NAME}. All rights reserved. Website designed to impress.
          </p>
        </div>
      </div>
    </footer>
  );
}
