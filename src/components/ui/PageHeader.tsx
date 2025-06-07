import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export function PageHeader({ 
  title, 
  subtitle, 
  className, 
  titleClassName, 
  subtitleClassName,
  centered = true 
}: PageHeaderProps) {
  return (
    <div className={cn("mb-8 sm:mb-12 md:mb-16", centered && "text-center", className)}>
      <h1 className={cn("text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl font-headline", titleClassName)}>
        {title}
      </h1>
      {subtitle && (
        <p className={cn("mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-foreground/80", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
