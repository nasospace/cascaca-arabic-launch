import { Reveal } from "./Reveal";

const placeholders = ["[شعار 1]", "[شعار 2]", "[شعار 3]", "[شعار 4]", "[شعار 5]", "[شعار 6]"];

export function Clients() {
  return (
    <section className="py-20 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">
              شركاؤنا وعملاؤنا
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              مساحة مخصصة لشعارات العملاء — تُستبدل لاحقاً بالشعارات الفعلية.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholders.map((p, i) => (
            <Reveal key={p} delay={i * 50}>
              <div className="aspect-[3/2] flex items-center justify-center rounded-xl border border-dashed border-border bg-card hover:bg-secondary/60 transition-colors">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
