/**
 * Reusable inline brand mark — used as a section signature.
 * Three stacked lines = "layers / طبقات" — subtle reference to insulation.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 align-middle ${className}`}
      aria-hidden
    >
      <span className="block h-0.5 w-5 bg-accent-amber rounded-full" />
      <span className="block h-0.5 w-3 bg-accent-amber/70 rounded-full" />
      <span className="block h-0.5 w-1.5 bg-accent-amber/40 rounded-full" />
    </span>
  );
}
