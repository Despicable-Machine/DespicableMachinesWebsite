import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-accent text-accent-foreground py-20 sm:py-28",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {label && (
            <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground mb-6">
              {label}
            </span>
          )}
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl mx-auto text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
