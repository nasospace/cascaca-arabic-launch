import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    quote:
      "تجربتنا مع الفريق كانت احترافية من البداية حتى التسليم؛ التزام واضح بالجودة والمواعيد. — [اسم العميل]",
    name: "[اسم العميل]",
    role: "[المنصب — جهة العمل]",
  },
  {
    quote:
      "تعاملٌ راقٍ ومستوى تنفيذ يفوق التوقعات. ننصح بالعمل مع CASCACA لأي مشروع يتطلب دقة هندسية. — [اسم العميل]",
    name: "[اسم العميل]",
    role: "[المنصب — جهة العمل]",
  },
  {
    quote:
      "وضوح في الخطة، شفافية في التكلفة، وجودة عالية في التنفيذ. شركاء نعتمد عليهم. — [اسم العميل]",
    name: "[اسم العميل]",
    role: "[المنصب — جهة العمل]",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-pattern opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="آراء عملائنا"
          title="ثقة تُبنى بالعمل لا بالكلام"
          description="نماذج موجزة من ملاحظات العملاء — يتم تحديث المحتوى لاحقاً بشهادات حقيقية."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="h-full bg-card border border-border rounded-2xl p-8 shadow-card-soft hover:shadow-elegant transition-all duration-300 relative">
                <Quote className="h-8 w-8 text-accent-amber/70 mb-4" />
                <blockquote className="text-foreground/85 leading-loose text-[15px]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-display font-black text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
