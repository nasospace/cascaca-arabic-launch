import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Award, Users, Clock, CheckCircle2, Wrench, Building2, Layers, MessageSquare, ClipboardCheck, HardHat, PackageCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CASCACA — الرئيسية | حلول هندسية وأعمال عزل احترافية" },
      { name: "description", content: "شركة CASCACA تقدم حلولاً هندسية متكاملة وأعمال عزل بجودة عالية وثقة عملاء راسخة." },
      { property: "og:title", content: "CASCACA — حلول هندسية وأعمال عزل" },
      { property: "og:description", content: "شريكك الموثوق للمشاريع الصناعية والتجارية." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Layers, title: "[الخدمة الأولى]", desc: "وصف موجز للخدمة الأولى — يُستبدل لاحقاً بتفاصيل دقيقة عن نطاق العمل والمواد المستخدمة." },
  { icon: Wrench, title: "[الخدمة الثانية]", desc: "وصف موجز للخدمة الثانية — يمكن تخصيصه ليعكس خبرات الشركة الفعلية في هذا المجال." },
  { icon: Building2, title: "[الخدمة الثالثة]", desc: "وصف موجز للخدمة الثالثة — قابل للتعديل ليتناسب مع احتياجات العملاء المستهدفين." },
];

const projects = [
  { img: p1, title: "[اسم المشروع]", category: "[التصنيف]" },
  { img: p2, title: "[اسم المشروع]", category: "[التصنيف]" },
  { img: p3, title: "[اسم المشروع]", category: "[التصنيف]" },
];

const benefits = [
  { icon: Shield, title: "جودة معتمدة", desc: "نلتزم بأعلى المعايير الفنية في جميع مراحل التنفيذ." },
  { icon: Award, title: "خبرة موثوقة", desc: "سجل حافل بالمشاريع الناجحة في القطاعين الصناعي والتجاري." },
  { icon: Users, title: "فريق متخصص", desc: "كوادر هندسية وفنية مدربة على أحدث الأساليب والمواد." },
  { icon: Clock, title: "التزام بالمواعيد", desc: "تسليم المشاريع في الوقت المتفق عليه دون تنازل عن الجودة." },
];

const steps = [
  { icon: MessageSquare, title: "التواصل", desc: "استلام طلبكم وفهم احتياجاتكم بدقة." },
  { icon: ClipboardCheck, title: "المعاينة", desc: "زيارة الموقع وتقديم دراسة فنية مفصّلة." },
  { icon: HardHat, title: "التنفيذ", desc: "بدء العمل وفق خطة زمنية واضحة وجودة عالية." },
  { icon: PackageCheck, title: "التسليم", desc: "تسليم المشروع مع ضمان الجودة والمتابعة." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-deep">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="منشأة صناعية متخصصة في أعمال العزل"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-deep via-brand-deep/85 to-brand-deep/40" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-amber/40 bg-accent-amber/10 px-4 py-1.5 text-xs font-bold text-accent-amber tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
              CASCACA — هندسة وعزل احترافي
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] text-balance">
              حلول هندسية موثوقة <br />
              <span className="text-accent-amber">لأعمال عزل</span> بمعايير عالمية
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl text-balance">
              نقدم خدمات هندسية متكاملة وحلول عزل متطورة للمشاريع الصناعية والتجارية، مع فريق
              متخصص يضمن الجودة والالتزام في كل تفاصيل التنفيذ.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-amber px-7 py-4 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow"
              >
                اطلب عرض سعر
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                تواصل معنا
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "+10", l: "سنوات خبرة" },
                { n: "+100", l: "مشروع منجز" },
                { n: "100%", l: "رضا العملاء" },
              ].map((s) => (
                <div key={s.l} className="border-r-2 border-accent-amber/60 pr-4">
                  <div className="font-display text-3xl md:text-4xl font-black text-white">{s.n}</div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">
              من نحن
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
              شريكك الهندسي الموثوق منذ سنوات
            </h2>
            <p className="mt-6 text-muted-foreground leading-loose text-lg">
              [نص تعريفي عن الشركة — يُحدَّث لاحقاً]. CASCACA شركة متخصصة في تقديم حلول هندسية
              وأعمال عزل بجودة عالية، نخدم قطاعات متعددة بفريق فني متمرس وأحدث المواد والمعدات.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "كوادر هندسية مؤهلة ومعتمدة",
                "مواد عالية الجودة من موردين موثوقين",
                "حلول مخصصة لكل عميل",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-brand font-bold hover:gap-3 transition-all"
            >
              تعرّف علينا أكثر
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={p1}
                alt="أعمال عزل احترافية"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="absolute -bottom-8 -start-8 bg-card border border-border rounded-2xl p-6 shadow-card-soft max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <Award className="h-6 w-6 text-brand-foreground" />
                </div>
                <div>
                  <div className="font-display font-black text-xl">جودة</div>
                  <div className="text-xs text-muted-foreground">معتمدة عالمياً</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                نلتزم بأعلى معايير السلامة والجودة في كل مشروع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="خدماتنا"
            title="حلول متكاملة لاحتياجاتك الهندسية"
            description="نقدم باقة متنوعة من الخدمات المصممة لتلبية متطلبات المشاريع الصناعية والتجارية بأعلى مستويات الاحترافية."
          />
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
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
                >
                  المزيد <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="أعمالنا"
            title="مشاريع نفخر بإنجازها"
            description="نماذج مختارة من أعمالنا التي تعكس خبرتنا ومستوى الجودة الذي نقدمه لعملائنا."
          />
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-xs font-bold tracking-wider text-accent-amber">{p.category}</span>
                  <h3 className="font-display text-xl font-black mt-1">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand bg-transparent px-7 py-3.5 text-sm font-bold text-brand hover:bg-brand hover:text-brand-foreground transition"
            >
              عرض كل الأعمال
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-amber/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            invert
            eyebrow="لماذا نحن"
            title="ما الذي يميز CASCACA؟"
            description="نلتزم بمعايير صارمة لضمان تقديم أفضل تجربة لعملائنا في كل مرحلة من مراحل المشروع."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-accent-amber/20 flex items-center justify-center mb-5">
                  <b.icon className="h-6 w-6 text-accent-amber" />
                </div>
                <h3 className="font-display text-lg font-black text-white mb-2">{b.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="منهجية العمل"
            title="من الفكرة إلى التسليم"
            description="نتبع منهجية واضحة ومنظمة تضمن إنجاز مشروعك بكفاءة وسلاسة."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-elegant transition">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                      <s.icon className="h-7 w-7 text-brand-foreground" />
                    </div>
                    <span className="font-display text-5xl font-black text-muted/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-black text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
