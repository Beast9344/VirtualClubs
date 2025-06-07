import { cn } from "@/lib/utils";
import type React from 'react';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the element type
}

export function SectionWrapper({ 
  children, 
  className, 
  containerClassName, 
  as: Element = 'section', // Default to 'section'
  ...props 
}: SectionWrapperProps) {
  return (
    <Element className={cn("py-12 sm:py-16 md:py-20 lg:py-24", className)} {...props}>
      <div className={cn("container", containerClassName)}> {/* Tailwind's container class handles mx-auto and padding based on breakpoints */}
        {children}
      </div>
    </Element>
  );
}
