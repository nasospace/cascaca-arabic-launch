import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { ProjectsGrid, type Project } from "@/components/site/ProjectsGrid";
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

const projects: Project[] = [
  { img: p1, title: "[اسم المشروع الأول]", category: "عزل حراري", year: "[٢٠٢٤]" },
  { img: p2, title: "[اسم المشروع الثاني]", category: "عزل مائي", year: "[٢٠٢٤]" },
  { img: p3, title: "[اسم المشروع الثالث]", category: "حلول هندسية", year: "[٢٠٢٣]" },
  { img: p4, title: "[اسم المشروع الرابع]", category: "عزل حراري", year: "[٢٠٢٣]" },
  { img: p2, title: "[اسم المشروع الخامس]", category: "حلول هندسية", year: "[٢٠٢٣]" },
  { img: p1, title: "[اسم المشروع السادس]", category: "عزل مائي", year: "[٢٠٢٢]" },
  { img: p3, title: "[اسم المشروع السابع]", category: "عزل حراري", year: "[٢٠٢٢]" },
  { img: p4, title: "[اسم المشروع الثامن]", category: "حلول هندسية", year: "[٢٠٢٢]" },
];

function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="absolute bottom-0 start-0 w-[20rem] h-[20rem] rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-accent-amber mb-4">
            <span className="h-px w-8 bg-accent-amber/60" />
            المعرض
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white text-balance leading-[1.1] tracking-tight">
            مشاريع تختصر سنوات من الخبرة
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            تصفّح مجموعة مختارة من أعمالنا — كل مشروع يحكي قصة دقة هندسية والتزام لا يتراجع.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectsGrid
            projects={projects}
            categories={["الكل", "عزل حراري", "عزل مائي", "حلول هندسية"]}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
