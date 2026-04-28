import { MessageSquare, ClipboardCheck, HardHat, PackageCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Step = { icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  { icon: MessageSquare, title: "التواصل والاستشارة", desc: "نستمع لاحتياجك ونحدد نطاق العمل بدقة منذ أول تواصل." },
  { icon: ClipboardCheck, title: "المعاينة والدراسة", desc: "زيارة موقعية وتقديم دراسة فنية شاملة مع عرض سعر تفصيلي." },
  { icon: HardHat, title: "التنفيذ الاحترافي", desc: "تنفيذ منظّم وفق جدول زمني واضح ومعايير سلامة صارمة." },
  { icon: PackageCheck, title: "التسليم والمتابعة", desc: "تسليم رسمي مع ضمان الجودة ومتابعة ما بعد التشغيل." },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-pattern opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="من أول مكالمة، إلى آخر تفصيلة."
          description="مسارٌ هادئ ومنظّم نتبعه في كل مشروع — لأن العمل الجيّد لا يحتمل الارتجال."
        />

        {/* Connecting line (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-9 inset-x-12 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative text-center">
                  <div className="relative mx-auto h-18 w-18 flex items-center justify-center rounded-2xl bg-gradient-brand shadow-elegant">
                    <s.icon className="h-8 w-8 text-brand-foreground" strokeWidth={1.75} />
                    <span className="absolute -top-2 -end-2 h-7 w-7 rounded-full bg-accent-amber text-brand-deep font-display text-xs font-black flex items-center justify-center shadow-card-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-black text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
