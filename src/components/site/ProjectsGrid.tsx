import { useMemo, useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export type Project = {
  img: string;
  title: string;
  category: string;
  year?: string;
};

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>(categories[0] ?? "الكل");

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
            <article className="group relative overflow-hidden rounded-2xl bg-card shadow-card-soft hover:shadow-elegant transition-all duration-500 h-full">
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
              {/* Permanent gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-deep/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-amber text-brand-deep text-sm font-bold shadow-glow">
                  عرض المشروع
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
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
