import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Shield } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — CASCACA" },
      { name: "description", content: "تعرّف على شركة CASCACA — رؤيتنا، رسالتنا، وقيمنا في الحلول الهندسية وأعمال العزل." },
      { property: "og:title", content: "من نحن — CASCACA" },
      { property: "og:description", content: "خبرة هندسية وثقة عملاء راسخة." },
      { property: "og:image", content: p4 },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "رسالتنا", desc: "[نص الرسالة — يُحدَّث لاحقاً]. تقديم حلول هندسية موثوقة تلبي تطلعات عملائنا وتساهم في نجاح مشاريعهم." },
  { icon: Eye, title: "رؤيتنا", desc: "[نص الرؤية — يُحدَّث لاحقاً]. أن نكون الخيار الأول في مجال الحلول الهندسية وأعمال العزل في المنطقة." },
  { icon: Heart, title: "قيمنا", desc: "[نص القيم — يُحدَّث لاحقاً]. الجودة، الالتزام، الشفافية، والابتكار في كل مشروع نقوم به." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-amber mb-3">
            من نحن
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-balance leading-tight">
            خبرة هندسية بمعايير عالمية
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            CASCACA — شريكك الموثوق في تقديم الحلول الهندسية المتكاملة بفريق متخصص وخبرة طويلة.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={p4} alt="فريق CASCACA" className="h-full w-full object-cover" loading="lazy" width={1024} height={768} />
          </div>
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">
              قصتنا
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
              نبني الثقة مشروعاً بعد مشروع
            </h2>
            <p className="mt-6 text-muted-foreground leading-loose text-lg">
              [نص تعريفي مفصّل عن الشركة وتاريخها — يُحدَّث لاحقاً بالمعلومات الفعلية]. تأسست
              CASCACA لتقديم حلول هندسية متخصصة في مجال العزل والمشاريع الصناعية، ونعتمد على
              فريق من المهندسين والفنيين المؤهلين لخدمة عملائنا بأعلى معايير الجودة.
            </p>
            <p className="mt-4 text-muted-foreground leading-loose">
              [نص إضافي قابل للتعديل]. نحرص على بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم
              خدمات متميزة ومتابعة دقيقة لكل مرحلة من مراحل المشروع.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="مبادئنا"
            title="ما نؤمن به"
            description="القيم التي توجّه كل قرار وكل خطوة في مسيرتنا."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                  <v.icon className="h-7 w-7 text-brand-foreground" />
                </div>
                <h3 className="font-display text-xl font-black text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Award, n: "+10", l: "سنوات خبرة" },
              { icon: Users, n: "+50", l: "خبير وفني" },
              { icon: Shield, n: "+100", l: "مشروع منجز" },
            ].map((s) => (
              <div key={s.l} className="bg-gradient-brand rounded-2xl p-8 text-center shadow-elegant">
                <s.icon className="h-10 w-10 text-accent-amber mx-auto mb-4" />
                <div className="font-display text-5xl font-black text-brand-foreground">{s.n}</div>
                <div className="mt-2 text-brand-foreground/70 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
