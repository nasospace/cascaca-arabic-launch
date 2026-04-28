import { CalendarCheck, Ruler, Headphones, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: CalendarCheck, title: "نلتزم بالمواعيد", desc: "جدول زمني واضح من اليوم الأول وحتى التسليم." },
  { icon: Ruler, title: "دقة في التنفيذ", desc: "تنفيذ بمعايير هندسية موثّقة في كل مرحلة." },
  { icon: Headphones, title: "متابعة بعد التسليم", desc: "نبقى على تواصل لضمان أداء العمل على المدى الطويل." },
  { icon: ShieldCheck, title: "فريق متخصص", desc: "كوادر فنية وهندسية تتعامل مع تحديات المشاريع بكفاءة." },
];

export function TrustStrip() {
  return (
    <section className="py-14 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                <it.icon className="h-5 w-5 text-brand" strokeWidth={1.85} />
              </div>
              <div>
                <div className="font-display font-black text-foreground text-[15px]">{it.title}</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
