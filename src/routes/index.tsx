import { createFileRoute } from "@tanstack/react-router";
import { useT, waLink, buildServiceWaMessage, WA_DISPLAY, EMAIL } from "@/lib/i18n";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  HardHat,
  Clock,
  BadgeDollarSign,
  Award,
  Layers,
  CheckCircle2,
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Droplets,
  Building2,
  Bath,
  Syringe,
  Wrench,
  Square,
} from "lucide-react";
import { useState, FormEvent, ReactNode } from "react";
import { z } from "zod";

import hero from "@/assets/hero-cascata.jpg";
import substructure from "@/assets/substructure.jpg";
import roofing from "@/assets/roofing.jpg";
import wetarea from "@/assets/wetarea.jpg";
import flooring from "@/assets/flooring.jpg";
import injection from "@/assets/injection.jpg";
import repair from "@/assets/repair.jpg";
import systemsImg from "@/assets/systems.jpg";
import mission from "@/assets/mission.jpg";
import commitment from "@/assets/commitment.jpg";

// Partner logos
import logoSika from "@/assets/partners/sika.png";
import logoMc from "@/assets/partners/mc.png";
import logoFosroc from "@/assets/partners/fosroc.png";
import logoSoprema from "@/assets/partners/soprema.png";
import logoBasf from "@/assets/partners/basf.png";
import logoPolybit from "@/assets/partners/polybit.png";
import logoStoncor from "@/assets/partners/stoncor.png";
import logoFlowcrete from "@/assets/partners/flowcrete.png";
import logoAwazel from "@/assets/partners/awazel.png";
import logoHilti from "@/assets/partners/hilti.png";
import logoHenkel from "@/assets/partners/henkel.png";
import logoCorrotech from "@/assets/partners/corrotech.png";
import logoMapei from "@/assets/partners/mapei.png";
import logoVip from "@/assets/partners/vip.png";
import logoWeber from "@/assets/partners/weber.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t, lang, dir } = useT();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div id="home" className="lang-fade" key={lang}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
        <img
          src={hero}
          alt={t("hero.title")}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/85 via-[#1c2c54]/60 to-[#050814]/95" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero.tagline")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
              {t("hero.sub")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(t("wa.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/95 transition-all duration-300"
              >
                {t("cta.startFull")}
                <Arrow className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {t("cta.explore")}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {[t("hero.badge1"), t("hero.badge2"), t("hero.badge3"), t("hero.badge4")].map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg border border-white/15 bg-white/5 backdrop-blur px-3 py-2.5"
                >
                  <ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-10 rounded-2xl blur-2xl" />
            <img
              src={systemsImg}
              alt={t("sys.title")}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
              width={1280}
              height={960}
            />
          </div>
        </div>
      </Section>

      {/* ── MISSION & VISION ─────────────────────────────────── */}
      <Section id="mission-vision" className="bg-[color:var(--brand-soft)]">
        <div className="text-center mb-12">
          <Eyebrow center>{t("mv.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("vision.title")} &amp; {t("mission.title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <Card>
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground mb-3" id="vision">
              {t("vision.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("vision.body")}</p>
          </Card>
          <Card>
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-black text-foreground mb-3" id="mission">
              {t("mission.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{t("mission.body")}</p>
          </Card>
        </div>
        <div className="mt-12 relative rounded-2xl overflow-hidden shadow-elegant">
          <img src={mission} alt="" loading="lazy" className="w-full h-64 sm:h-80 object-cover" width={1280} height={960} />
        </div>
      </Section>

      {/* ── WHY CHOOSE ───────────────────────────────────────── */}
      <Section id="why">
        <div className="text-center mb-12">
          <Eyebrow center>{t("why.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("why.title")}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { i: Layers, t: t("why.1.t"), b: t("why.1.b") },
            { i: HardHat, t: t("why.2.t"), b: t("why.2.b") },
            { i: Clock, t: t("why.3.t"), b: t("why.3.b") },
            { i: BadgeDollarSign, t: t("why.4.t"), b: t("why.4.b") },
            { i: Award, t: t("why.5.t"), b: t("why.5.b") },
          ].map((c, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-elegant hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <c.i className="h-6 w-6 text-primary group-hover:text-white transition" />
              </div>
              <h3 className="font-display text-lg font-black text-foreground mb-2">{c.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SPECIALIZED SYSTEMS ──────────────────────────────── */}
      <Section id="systems" className="bg-[color:var(--brand-deep)] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="relative">
          <div className="text-center mb-12">
            <Eyebrow center light>
              {t("sys.eyebrow")}
            </Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              {t("sys.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-white/70">{t("sys.desc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {["sys.1", "sys.2", "sys.3", "sys.4", "sys.5", "sys.6", "sys.7"].map((k) => (
              <div
                key={k}
                className="group rounded-xl border border-white/15 bg-white/5 backdrop-blur p-5 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-display text-base font-bold text-white leading-snug">{t(k)}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CORE SERVICES ────────────────────────────────────── */}
      <Section id="services">
        <div className="text-center mb-12">
          <Eyebrow center>{t("svc.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("svc.title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: substructure, icon: Droplets, t: t("svc.a.t"), b: t("svc.a.b") },
            { img: roofing, icon: Building2, t: t("svc.b.t"), b: t("svc.b.b") },
            { img: wetarea, icon: Bath, t: t("svc.c.t"), b: t("svc.c.b") },
            { img: injection, icon: Syringe, t: t("svc.d.t"), b: t("svc.d.b") },
            { img: repair, icon: Wrench, t: t("svc.e.t"), b: t("svc.e.b") },
            { img: flooring, icon: Square, t: t("svc.f.t"), b: t("svc.f.b") },
          ].map((s, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={1280}
                  height={960}
                />
                <div className="absolute top-3 start-3 h-10 w-10 rounded-lg bg-white/95 backdrop-blur flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-black text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.b}</p>
                <a
                  href={waLink(buildServiceWaMessage(lang, s.t))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-bold text-foreground hover:bg-primary hover:text-white transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.askService")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── PORTFOLIO ────────────────────────────────────────── */}
      <Section id="portfolio" className="bg-[color:var(--brand-soft)]">
        <div className="text-center mb-12">
          <Eyebrow center>{t("pf.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("pf.title")}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { img: substructure, t: t("pf.1") },
            { img: roofing, t: t("pf.2") },
            { img: wetarea, t: t("pf.3") },
            { img: systemsImg, t: t("pf.4") },
            { img: commitment, t: t("pf.5") },
            { img: mission, t: t("pf.6") },
          ].map((p, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-card-soft aspect-[4/3]">
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-black text-white">{p.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMMITMENT ───────────────────────────────────────── */}
      <Section id="commitment">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-brand opacity-10 rounded-2xl blur-2xl" />
            <img
              src={commitment}
              alt={t("com.title")}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
              width={1280}
              height={960}
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>{t("com.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              {t("com.title")}
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>{t("com.p1")}</p>
              <p>{t("com.p2")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ALLIANCES ────────────────────────────────────────── */}
      <Section id="alliances" className="bg-[color:var(--brand-soft)]">
        <div className="text-center mb-12">
          <Eyebrow center>{t("al.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-5">
            {t("al.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">{t("al.body")}</p>
        </div>

        {/* Partner logo grid — 5 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {[
            { src: logoSika,      name: "Sika" },
            { src: logoMc,        name: "MC – Be Sure. Build Sure." },
            { src: logoFosroc,    name: "Fosroc" },
            { src: logoSoprema,   name: "Soprema" },
            { src: logoBasf,      name: "BASF Master Builders" },
            { src: logoPolybit,   name: "Polybit" },
            { src: logoStoncor,   name: "StonCor Group" },
            { src: logoFlowcrete, name: "Flowcrete" },
            { src: logoAwazel,    name: "Awazel" },
            { src: logoHilti,     name: "Hilti" },
            { src: logoHenkel,    name: "Henkel" },
            { src: logoCorrotech, name: "Corrotech" },
            { src: logoMapei,     name: "Mapei" },
            { src: logoVip,       name: "VIP Coating Solutions" },
            { src: logoWeber,     name: "Weber" },
          ].map(({ src, name }) => (
            <div
              key={name}
              title={name}
              className="group relative flex aspect-[3/2] items-center justify-center rounded-2xl border border-border bg-white px-5 py-4 shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300"
            >
              <img
                src={src}
                alt={name}
                className="h-full w-full object-contain mix-blend-multiply filter group-hover:brightness-110 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1128] to-[#1c2c54] border border-white/5 p-10 md:p-16 shadow-2xl">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-32 -start-32 w-[26rem] h-[26rem] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.15] max-w-2xl">
                  {t("fcta.title")}
                </h3>
                <p className="mt-5 text-white/80 max-w-2xl text-base md:text-lg leading-relaxed">
                  {t("fcta.sub")}
                </p>
              </div>
              <a
                href={waLink(t("wa.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-bold text-[#0a1128] shadow-glow hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5" />
                {t("cta.startFull")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <Section id="contact">
        <div className="text-center mb-12">
          <Eyebrow center>{t("ct.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t("ct.title")}
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <a
              href={waLink(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  {t("ct.whatsapp")}
                </p>
                <p dir="ltr" className="font-display text-lg font-black text-foreground">{WA_DISPLAY}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  {t("ct.email")}
                </p>
                <p className="text-base font-bold text-foreground break-all">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  {t("ct.location")}
                </p>
                <p className="text-sm text-foreground leading-relaxed">{t("ct.addr")}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ── helpers ─────────────────────────────────────────────────── */

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

function Eyebrow({
  children,
  center,
  light,
}: {
  children: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase mb-4 ${
        light ? "text-primary" : "text-primary"
      } ${center ? "" : ""}`}
      style={center ? { display: "inline-flex" } : undefined}
    >
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-all h-full">
      {children}
    </div>
  );
}

function ContactForm() {
  const { t, lang } = useT();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, t("form.required")).max(100),
    phone: z
      .string()
      .trim()
      .min(6, t("form.invalidPhone"))
      .max(25)
      .regex(/^[+\d\s\-()]+$/, t("form.invalidPhone")),
    email: z
      .union([z.string().trim().email(t("form.invalidEmail")).max(150), z.literal("")])
      .optional(),
    description: z.string().trim().max(1000).optional(),
    location: z.string().trim().max(200).optional(),
    service: z.string().trim().max(120).optional(),
    company: z.string().max(0).optional(), // honeypot
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name") ?? "",
      phone: fd.get("phone") ?? "",
      email: fd.get("email") ?? "",
      description: fd.get("description") ?? "",
      location: fd.get("location") ?? "",
      service: fd.get("service") ?? "",
      company: fd.get("company") ?? "",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    if (parsed.data.company) return; // honeypot triggered, silently drop
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <p className="text-lg font-bold text-foreground">{t("form.success")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card-soft space-y-4"
    >
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={t("form.name")} name="name" required error={errors.name} />
        <Field label={t("form.phone")} name="phone" type="tel" required dir="ltr" error={errors.phone} />
      </div>
      <Field label={t("form.email")} name="email" type="email" dir="ltr" error={errors.email} />
      <Field label={t("form.svc")} name="service" />
      <Field label={t("form.loc")} name="location" />
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">{t("form.desc")}</label>
        <textarea
          name="description"
          rows={4}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/95 transition-all duration-300"
      >
        <Send className="h-4 w-4" />
        {t("form.send")}
      </button>
      <p className="text-[11px] text-muted-foreground text-center">
        <span dir="ltr">{lang === "ar" ? "" : "+971 55 530 9240"}</span>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  dir,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-foreground mb-1.5">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        dir={dir}
        className={`w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${
          error ? "border-destructive" : "border-input focus:border-primary"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
