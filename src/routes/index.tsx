import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Wrench,
  Building2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { Clients } from "@/components/site/Clients";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ProjectsGrid, type Project } from "@/components/site/ProjectsGrid";
import { QuoteDialog } from "@/components/site/QuoteDialog";
import { TrustStrip } from "@/components/site/TrustStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CASCACA — هندسة موثوقة وحلول عزل بمعايير عالمية" },
      {
        name: "description",
        content:
          "CASCACA — شركة متخصصة في الحلول الهندسية وأعمال العزل للمشاريع الصناعية والتجارية. خبرة، جودة، والتزام في كل مرحلة.",
      },
      { property: "og:title", content: "CASCACA — حلول هندسية وأعمال عزل" },
      { property: "og:description", content: "شريكك الموثوق للمشاريع الصناعية والتجارية." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Layers,
    title: "[الخدمة الأولى — مثال: عزل حراري]",
    desc: "حلول عزل حراري متقدمة ترفع كفاءة الطاقة وتحمي المنشآت من تقلبات درجات الحرارة بمواد معتمدة.",
  },
  {
    icon: Wrench,
    title: "[الخدمة الثانية — مثال: عزل مائي]",
    desc: "أنظمة عزل مائي موثوقة لحماية الأسطح والقواعد الخرسانية من التسرب والرطوبة على المدى الطويل.",
  },
  {
    icon: Building2,
    title: "[الخدمة الثالثة — مثال: حلول هندسية]",
    desc: "استشارات وتنفيذ هندسي للمشاريع الصناعية والتجارية بفريق متخصص ومعدات حديثة.",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "تنفيذ بمعايير دقيقة", desc: "نعتمد مواصفات تنفيذ موثّقة، ونتابع كل مرحلة لضمان نتيجة مطابقة." },
  { icon: Award, title: "خبرة هندسية متخصصة", desc: "كوادر مؤهلة في العزل والمشاريع الصناعية، تتعامل مع التحديات بكفاءة." },
  { icon: Users, title: "متابعة بعد التسليم", desc: "نبقى على تواصل بعد انتهاء العمل لضمان الأداء على المدى الطويل." },
  { icon: Clock, title: "التزام بالمواعيد", desc: "خطة زمنية واضحة منذ اليوم الأول، وتسليم في الوقت المتفق عليه." },
];

const projects: Project[] = [
  { img: p1, title: "[اسم المشروع الأول]", category: "عزل حراري", year: "[٢٠٢٤]" },
  { img: p2, title: "[اسم المشروع الثاني]", category: "عزل مائي", year: "[٢٠٢٤]" },
  { img: p3, title: "[اسم المشروع الثالث]", category: "حلول هندسية", year: "[٢٠٢٣]" },
  { img: p4, title: "[اسم المشروع الرابع]", category: "عزل حراري", year: "[٢٠٢٣]" },
  { img: p2, title: "[اسم المشروع الخامس]", category: "حلول هندسية", year: "[٢٠٢٣]" },
  { img: p1, title: "[اسم المشروع السادس]", category: "عزل مائي", year: "[٢٠٢٢]" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden bg-brand-deep vignette">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="منشأة صناعية متخصصة في أعمال العزل"
            className="h-full w-full object-cover opacity-35"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-deep via-brand-deep/85 to-brand-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/40 via-transparent to-brand-deep" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute -top-32 -end-32 w-[34rem] h-[34rem] rounded-full bg-accent-amber/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-amber/40 bg-accent-amber/10 px-4 py-1.5 text-xs font-bold text-accent-amber tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-amber animate-pulse" />
                CASCACA · الهندسة والعزل
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] text-balance tracking-tight">
                حلول عزل تدوم،
                <br />
                <span className="text-accent-amber">وتنفيذ هندسي</span> تثق به.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl text-balance">
                في CASCACA، نقدّم حلول عزل متكاملة وخدمات هندسية للمشاريع الصناعية والتجارية،
                بفريق متخصص يعمل وفق معايير تنفيذ دقيقة ومواعيد ملتزمة.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <QuoteDialog
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-amber px-7 py-4 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow">
                      اطلب عرض سعر الآن
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                  }
                />
                <a
                  href="https://wa.me/9665000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition"
                >
                  تواصل مع مهندس
                </a>
              </div>
            </Reveal>

            {/* Trust hint pill */}
            <Reveal delay={420}>
              <div className="mt-12 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3">
                {["خبرة", "جودة", "التزام"].map((w, i) => (
                  <span key={w} className="flex items-center gap-2 text-sm font-bold text-white/85">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-amber/70" />}
                    <Sparkles className="h-3.5 w-3.5 text-accent-amber" />
                    {w}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 inset-x-0 hidden md:flex justify-center">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <span className="h-2 w-1 rounded-full bg-accent-amber animate-bounce" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <Clients />

      {/* TRUST STRIP — practical commitments */}
      <TrustStrip />

      {/* ABOUT */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-brand mb-4">
                <span className="h-px w-8 bg-brand/40" />
                من نحن
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-[1.15] text-balance">
                هندسة دقيقة. تنفيذ موثوق. ثقة تتجدّد مع كل مشروع.
              </h2>
              <p className="mt-6 text-muted-foreground leading-loose text-lg">
                [نص تعريفي عن الشركة — يُحدَّث لاحقاً]. CASCACA شركة متخصصة في الحلول الهندسية وأعمال
                العزل، نخدم القطاعين الصناعي والتجاري بفريق فنّي متمرس وأحدث المواد والأساليب.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "كوادر هندسية مؤهلة وخبرات متخصصة في العزل",
                  "مواد معتمدة من موردين موثوقين عالمياً",
                  "حلول مخصصة تتناسب مع طبيعة كل مشروع",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand/10">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                    </span>
                    <span className="text-foreground/85">{t}</span>
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
          </Reveal>

          <Reveal delay={150}>
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
              {/* Floating amber badge */}
              <div className="absolute -top-6 -end-6 rounded-2xl bg-gradient-amber text-brand-deep p-5 shadow-glow hidden md:block">
                <div className="font-display text-3xl font-black leading-none">جودة</div>
                <div className="text-xs font-bold mt-1 opacity-80">معايير عالمية</div>
              </div>
              <div className="absolute -bottom-8 -start-8 bg-card border border-border rounded-2xl p-6 shadow-elegant max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <Shield className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-black text-lg">سلامة وثقة</div>
                    <div className="text-xs text-muted-foreground">في كل مشروع</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ملتزمون بأعلى معايير السلامة المهنية والجودة الفنية.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/40 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="خدماتنا"
            title="حلول هندسية متكاملة بدقة فنية عالية"
            description="نقدم باقة من الخدمات المتخصصة في العزل والحلول الهندسية، مصممة لتلبي متطلبات المشاريع الصناعية والتجارية."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 110}>
                <div className="group relative h-full bg-card border border-border rounded-2xl p-8 hover:shadow-elegant hover:-translate-y-1.5 hover:border-brand/30 transition-all duration-500 overflow-hidden">
                  {/* Hover accent corner */}
                  <div className="absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-amber opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" />
                  <div className="relative">
                    <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:shadow-glow transition">
                      <s.icon className="h-7 w-7 text-brand-foreground" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-black text-foreground mb-3 group-hover:text-brand transition">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                    <Link
                      to="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
                    >
                      اعرف المزيد <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
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
            description="نماذج مختارة من أعمالنا تعكس مستوى الجودة والاحتراف الذي نقدمه لعملائنا."
          />
          <ProjectsGrid
            projects={projects}
            categories={["الكل", "عزل حراري", "عزل مائي", "حلول هندسية"]}
          />
          <div className="text-center mt-14">
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
      <section className="py-28 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute top-0 end-0 w-[28rem] h-[28rem] rounded-full bg-accent-amber/10 blur-3xl" />
        <div className="absolute bottom-0 start-0 w-[24rem] h-[24rem] rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            invert
            eyebrow="لماذا CASCACA"
            title="ما الذي يجعلنا الخيار الموثوق؟"
            description="نلتزم بمعايير صارمة في كل تفصيل، لأن مشروعك يستحق شريكاً يفهم قيمة الدقة."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="group relative h-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-accent-amber/40 transition-all duration-500">
                  <div className="h-12 w-12 rounded-xl bg-accent-amber/15 border border-accent-amber/30 flex items-center justify-center mb-5 group-hover:bg-accent-amber group-hover:border-accent-amber transition">
                    <b.icon className="h-6 w-6 text-accent-amber group-hover:text-brand-deep transition" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-black text-white mb-2">{b.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <CTASection />
    </>
  );
}
