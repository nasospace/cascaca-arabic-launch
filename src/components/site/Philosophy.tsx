import { Reveal } from "./Reveal";

/**
 * CASCACA brand philosophy — short manifesto.
 * Editable copy. Keep it grounded, no fake claims.
 */
const pillars = [
  {
    n: "01",
    label: "نُفكّر",
    title: "نُصمّم الحل قبل أن نُنفّذه",
    body: "كل مشروع يبدأ بفهم دقيق للموقع، ودراسة هندسية تسبق أي قرار تنفيذي. القرارات الجيدة تُؤخذ مرة واحدة.",
  },
  {
    n: "02",
    label: "نُنفّذ",
    title: "التفاصيل هي الفرق",
    body: "العزل لا يُرى — لكنه يُحسّ لسنوات. لذلك نهتم بالطبقة، والوصلة، والركن، بنفس الجدية التي نُعطيها للسطح كله.",
  },
  {
    n: "03",
    label: "نَلتزم",
    title: "نَبني علاقة، لا فاتورة",
    body: "المشروع يُسلَّم ولا تنتهي العلاقة. نتابع الأداء، ونردّ على ملاحظاتك، ونقف خلف عملنا بعد التسليم.",
  },
];

export function Philosophy() {
  return (
    <section className="relative py-28 overflow-hidden bg-brand-deep text-white">
      {/* layered patterns — signature CASCACA texture */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 stripes-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 start-1/3 w-[32rem] h-[32rem] rounded-full bg-accent-amber/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Branded eyebrow */}
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-amber/60" />
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-accent-amber">
              منهجنا · The CASCACA Way
            </span>
            <span className="h-px w-10 bg-accent-amber/60" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white text-center text-balance leading-[1.1] max-w-4xl mx-auto">
            نُؤمن أن الهندسة الجيّدة
            <br />
            <span className="text-accent-amber">تبدأ بقرار صحيح</span>، لا بأداة باهظة.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-white/65 text-center max-w-2xl mx-auto text-lg leading-relaxed">
            CASCACA لم تُؤسَّس لتكون أكبر شركة، بل لتكون الشركة التي يُتّصل بها حين لا يوجد مجال للخطأ.
          </p>
        </Reveal>

        {/* Pillars */}
        <div className="mt-20 grid gap-px bg-white/10 rounded-2xl overflow-hidden md:grid-cols-3 border border-white/10">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="h-full bg-brand-deep p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display text-4xl font-black text-accent-amber/80 leading-none">
                    {p.n}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white/50">
                    {p.label}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-black text-white leading-snug mb-4">
                  {p.title}
                </h3>
                <p className="text-white/65 leading-relaxed text-sm">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Signature line */}
        <Reveal delay={400}>
          <div className="mt-16 flex items-center justify-center gap-4 text-white/40 text-xs font-bold tracking-[0.5em] uppercase">
            <span className="h-px w-16 bg-white/15" />
            دقة · طبقة · استمرار
            <span className="h-px w-16 bg-white/15" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
