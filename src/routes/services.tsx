import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Wrench,
  Building2,
  ShieldCheck,
  Flame,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { TrustStrip } from "@/components/site/TrustStrip";
import { QuoteDialog } from "@/components/site/QuoteDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا — CASCACA" },
      {
        name: "description",
        content:
          "حلول عزل متكاملة وخدمات هندسية بمعايير تنفيذ دقيقة من فريق متخصص — اطلب عرض سعر الآن.",
      },
      { property: "og:title", content: "خدمات CASCACA الهندسية وأعمال العزل" },
      { property: "og:description", content: "حلول مخصصة لكل مشروع صناعي وتجاري." },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  icon: typeof Layers;
  title: string;
  short: string;
  includes: string[];
  why: string[];
};

const services: Service[] = [
  {
    icon: Layers,
    title: "[الخدمة الأولى — مثال: عزل حراري]",
    short: "حلول عزل حراري لرفع كفاءة الطاقة وحماية المنشآت من تقلبات الحرارة.",
    includes: [
      "[معاينة موقعية ودراسة فنية للحالة]",
      "[اختيار المادة المناسبة لطبيعة المشروع]",
      "[تنفيذ بفريق متخصص ومعدات مناسبة]",
      "[فحص نهائي وتسليم رسمي]",
    ],
    why: [
      "خبرة في تنفيذ أنظمة عزل متعددة",
      "التزام بمعايير الجودة في كل مرحلة",
      "متابعة بعد التسليم لضمان الأداء",
    ],
  },
  {
    icon: Droplets,
    title: "[الخدمة الثانية — مثال: عزل مائي]",
    short: "أنظمة عزل مائي لحماية الأسطح والقواعد من التسرب والرطوبة.",
    includes: [
      "[تجهيز ومعالجة الأسطح قبل التنفيذ]",
      "[تركيب طبقات العزل وفق المواصفات]",
      "[اختبار الجودة بعد التنفيذ]",
      "[ضمان كتابي على الأعمال المنفذة]",
    ],
    why: [
      "دقة في تجهيز الأسطح",
      "مواد معتمدة من موردين موثوقين",
      "تنفيذ يقلل التكلفة على المدى الطويل",
    ],
  },
  {
    icon: Building2,
    title: "[الخدمة الثالثة — مثال: حلول هندسية]",
    short: "استشارات وتنفيذ هندسي للمشاريع الصناعية والتجارية.",
    includes: [
      "[تقييم فني للموقع والمتطلبات]",
      "[إعداد عرض سعر تفصيلي]",
      "[تنفيذ بإشراف هندسي مباشر]",
      "[توثيق مراحل العمل]",
    ],
    why: [
      "فريق هندسي متخصص",
      "تخطيط واضح لكل مرحلة",
      "شفافية كاملة في التكلفة والوقت",
    ],
  },
  {
    icon: Flame,
    title: "[الخدمة الرابعة — مثال: عزل حراري للأنابيب]",
    short: "عزل خطوط الأنابيب الصناعية لتقليل فقد الطاقة.",
    includes: ["[فحص الخطوط]", "[اختيار سماكة العزل المناسبة]", "[تنفيذ احترافي]", "[تقرير فني]"],
    why: ["تقليل الفقد الحراري", "تنفيذ مطابق للمواصفات", "خبرة في البيئات الصناعية"],
  },
  {
    icon: Wrench,
    title: "[الخدمة الخامسة]",
    short: "[وصف مختصر للخدمة — يُحدَّث لاحقاً].",
    includes: ["[ما تشمله الخدمة]", "[نطاق العمل]", "[مخرجات التسليم]"],
    why: ["[ميزة]", "[ميزة]", "[ميزة]"],
  },
  {
    icon: ShieldCheck,
    title: "[الخدمة السادسة]",
    short: "[وصف مختصر للخدمة — يُحدَّث لاحقاً].",
    includes: ["[ما تشمله الخدمة]", "[نطاق العمل]", "[مخرجات التسليم]"],
    why: ["[ميزة]", "[ميزة]", "[ميزة]"],
  },
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
            حلول عزل وخدمات هندسية مدروسة
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            خدمات منظّمة المراحل، تنفّذ بمعايير هندسية دقيقة. اضغط على أي خدمة لمعرفة ما تشمله.
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:shadow-elegant hover:border-brand/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                    <s.icon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-black text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  </div>
                </div>

                <Accordion type="single" collapsible defaultValue={i === 0 ? "includes" : undefined}>
                  <AccordionItem value="includes" className="border-t border-border">
                    <AccordionTrigger className="text-sm font-bold text-foreground">
                      ماذا تشمل الخدمة
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {s.includes.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="why" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-foreground">
                      لماذا تختارنا في هذه الخدمة
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {s.why.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 text-accent-amber-deep mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-5 flex flex-wrap gap-2">
                  <QuoteDialog
                    trigger={
                      <button className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-xs font-bold text-brand-foreground hover:brightness-110 transition">
                        اطلب عرض سعر
                      </button>
                    }
                  />
                  <a
                    href="https://wa.me/9665000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-bold text-foreground hover:bg-secondary transition"
                  >
                    تواصل مع مهندس
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
