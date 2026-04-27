import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "أعمالنا — CASCACA" },
      { name: "description", content: "معرض مشاريع CASCACA في الحلول الهندسية وأعمال العزل." },
      { property: "og:title", content: "مشاريع وأعمال CASCACA" },
      { property: "og:description", content: "نماذج من المشاريع المنجزة بأعلى معايير الجودة." },
      { property: "og:image", content: p1 },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: p1, title: "[اسم المشروع الأول]", category: "[التصنيف]", year: "[السنة]" },
  { img: p2, title: "[اسم المشروع الثاني]", category: "[التصنيف]", year: "[السنة]" },
  { img: p3, title: "[اسم المشروع الثالث]", category: "[التصنيف]", year: "[السنة]" },
  { img: p4, title: "[اسم المشروع الرابع]", category: "[التصنيف]", year: "[السنة]" },
  { img: p2, title: "[اسم المشروع الخامس]", category: "[التصنيف]", year: "[السنة]" },
  { img: p1, title: "[اسم المشروع السادس]", category: "[التصنيف]", year: "[السنة]" },
];

function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-amber mb-3">
            المعرض
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-balance leading-tight">
            مشاريع نفخر بها
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            تصفّح مجموعة مختارة من مشاريعنا التي تعكس خبرتنا والتزامنا بالجودة في كل التفاصيل.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-card-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold tracking-wider text-accent-amber">{p.category}</span>
                    <span className="text-xs text-white/70">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-black">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
