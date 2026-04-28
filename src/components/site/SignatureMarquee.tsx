/**
 * Branded section divider — repeating signature phrases.
 * Reinforces brand identity between sections. Pure CSS animation.
 */
const phrases = [
  "نُصمّم الحل قبل أن ننفّذه",
  "التفاصيل هي الفرق",
  "هندسة تُحسّ، لا تُرى",
  "طبقة · دقة · استمرار",
  "نَبني عزلاً يدوم",
];

export function SignatureMarquee({ invert = false }: { invert?: boolean }) {
  // Duplicate so the loop is seamless
  const items = [...phrases, ...phrases];

  return (
    <div
      className={`relative overflow-hidden border-y ${
        invert
          ? "bg-brand-deep border-white/10 text-white/55"
          : "bg-secondary/40 border-border text-foreground/55"
      }`}
      aria-hidden
    >
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap font-display font-black text-sm md:text-base tracking-wide">
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span>{p}</span>
            <span className={invert ? "text-accent-amber/60" : "text-accent-amber"}>✕</span>
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div
        className={`pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-l ${
          invert ? "from-brand-deep" : "from-secondary"
        } to-transparent`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-r ${
          invert ? "from-brand-deep" : "from-secondary"
        } to-transparent`}
      />
    </div>
  );
}
