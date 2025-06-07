import { cn } from "@/lib/utils";
import type React from 'react';

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean | 'subtle' | 'intense';
  elementType?: keyof JSX.IntrinsicElements;
}

export function FloatingCard({ 
  children, 
  className, 
  hoverEffect = true, 
  elementType: Element = 'div', 
  ...props 
}: FloatingCardProps) {
  
  const hoverClasses = {
    subtle: "hover:scale-[1.02] hover:shadow-[0_0_20px_2px_hsl(var(--primary)/0.3)]",
    intense: "hover:scale-105 hover:shadow-[0_0_35px_7px_hsl(var(--primary)/0.5)]",
  };

  const selectedHoverClass = 
    hoverEffect === 'subtle' ? hoverClasses.subtle :
    hoverEffect === 'intense' ? hoverClasses.intense :
    hoverEffect ? hoverClasses.intense : ""; // default to intense if true

  return (
    <Element
      className={cn(
        "rounded-xl border border-primary/20 bg-card/70 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 ease-out",
        "shadow-[0_10px_20px_rgba(0,0,0,0.2),_0_6px_6px_rgba(0,0,0,0.15)]", // Base shadow for depth
        selectedHoverClass,
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
