import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
