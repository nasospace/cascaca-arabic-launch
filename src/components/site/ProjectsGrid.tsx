import { useMemo, useState } from "react";
import { ArrowUpLeft, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { QuoteDialog } from "./QuoteDialog";

export type Project = {
  img: string;
  title: string;
  category: string;
  year?: string;
  scope?: string[];
  description?: string;
};

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>(categories[0] ?? "الكل");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "الكل") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold border transition-all",
                isActive
                  ? "bg-brand text-brand-foreground border-brand shadow-card-soft"
                  : "bg-card text-foreground/75 border-border hover:border-brand/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={`${p.title}-${i}`} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card-soft hover:shadow-elegant transition-all duration-500 h-full text-start w-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />
              <div className="absolute inset-0 bg-brand-deep/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-amber text-brand-deep text-sm font-bold shadow-glow">
                  عرض تفاصيل المشروع
                  <ArrowUpLeft className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-accent-amber bg-accent-amber/15 border border-accent-amber/30 rounded-full px-3 py-1">
                    {p.category}
                  </span>
                  {p.year && <span className="text-xs text-white/70">{p.year}</span>}
                </div>
                <h3 className="font-display text-xl font-black leading-tight">{p.title}</h3>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deep/80 backdrop-blur-sm"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="relative bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute top-3 start-3 z-10 h-9 w-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-secondary transition"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-brand bg-brand/10 border border-brand/20 rounded-full px-3 py-1">
              {project.category}
            </span>
            {project.year && (
              <span className="text-xs text-muted-foreground">السنة: {project.year}</span>
            )}
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-black text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {project.description ??
              "[وصف بسيط للمشروع — يُحدَّث لاحقاً بمعلومات حقيقية عن نطاق العمل والتحديات والحلول المنفذة.]"}
          </p>

          <div className="mt-6">
            <h4 className="font-display font-black text-foreground mb-3 text-sm">نطاق العمل</h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(project.scope ?? [
                "[المرحلة الأولى من العمل]",
                "[المرحلة الثانية من العمل]",
                "[المرحلة الثالثة من العمل]",
                "[التسليم النهائي]",
              ]).map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <QuoteDialog
              trigger={
                <button className="inline-flex items-center gap-2 rounded-md bg-gradient-amber px-5 py-2.5 text-sm font-bold text-brand-deep shadow-glow">
                  اطلب مشروعاً مشابهاً
                </button>
              }
            />
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-bold text-foreground hover:bg-secondary transition"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
