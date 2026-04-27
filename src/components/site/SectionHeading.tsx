import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-14",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase mb-4",
            invert ? "text-accent-amber" : "text-brand",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              invert ? "bg-accent-amber/60" : "bg-brand/40",
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-black text-balance leading-[1.15] tracking-tight",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed text-balance",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
