import { createFileRoute } from "@tanstack/react-router";
import { Layers, Wrench, Building2, ShieldCheck, Flame, Droplets, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا — CASCACA" },
      { name: "description", content: "خدمات هندسية وأعمال عزل متكاملة من CASCACA لمختلف القطاعات." },
      { property: "og:title", content: "خدمات CASCACA الهندسية وأعمال العزل" },
      { property: "og:description", content: "حلول مخصصة لكل احتياج صناعي وتجاري." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Layers, title: "[الخدمة الأولى]", desc: "وصف تفصيلي للخدمة الأولى — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
  { icon: Wrench, title: "[الخدمة الثانية]", desc: "وصف تفصيلي للخدمة الثانية — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
  { icon: Building2, title: "[الخدمة الثالثة]", desc: "وصف تفصيلي للخدمة الثالثة — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
  { icon: ShieldCheck, title: "[الخدمة الرابعة]", desc: "وصف تفصيلي للخدمة الرابعة — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
  { icon: Flame, title: "[الخدمة الخامسة]", desc: "وصف تفصيلي للخدمة الخامسة — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
  { icon: Droplets, title: "[الخدمة السادسة]", desc: "وصف تفصيلي للخدمة السادسة — يمكن تعديله لاحقاً.", points: ["[ميزة]", "[ميزة]", "[ميزة]"] },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-amber mb-3">
            الخدمات
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-balance leading-tight">
            حلول هندسية شاملة لمشاريعك
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            باقة متكاملة من الخدمات المصممة بعناية لتلبية احتياجات المشاريع الصناعية والتجارية بكفاءة عالية.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:shadow-glow transition">
                  <s.icon className="h-7 w-7 text-brand-foreground" />
                </div>
                <h3 className="font-display text-xl font-black text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
