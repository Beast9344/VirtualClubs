
"use client";

import Link from 'next/link';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS, SITE_NAME, DISCORD_INVITE_URL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on server to prevent hydration mismatch with Sheet
  }

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">{SITE_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "transition-colors duration-200 hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2">
                   <Gamepad2 className="h-7 w-7 text-primary" />
                   <span className="font-headline text-xl font-bold text-primary">{SITE_NAME}</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
                        pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild variant="default" size="lg" className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
                    <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
