import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero grid-pattern p-10 md:p-16 shadow-elegant">
          {/* Decorative blurs */}
          <div className="absolute -top-32 -start-32 w-[28rem] h-[28rem] rounded-full bg-accent-amber/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -end-20 w-[26rem] h-[26rem] rounded-full bg-brand/40 blur-3xl pointer-events-none" />
          {/* Diagonal stripes accent */}
          <div className="absolute inset-y-0 end-0 w-1/3 stripes-pattern opacity-40 pointer-events-none" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-amber/40 bg-accent-amber/10 px-3 py-1 text-[11px] font-bold tracking-[0.25em] uppercase text-accent-amber mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                ابدأ مشروعك معنا
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-black text-white text-balance leading-[1.15]">
                جاهزون لتنفيذ مشروعك القادم بأعلى معايير الهندسة والعزل.
              </h3>
              <p className="mt-5 text-white/75 text-balance max-w-xl text-base md:text-lg leading-relaxed">
                احصل على استشارة فنية وعرض سعر مخصص خلال 24 ساعة من فريق متخصص يفهم متطلبات مشروعك.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[14rem]">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-amber px-6 py-4 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow"
              >
                اطلب عرض سعر
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <a
                href="tel:+9665000000000"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-6 py-4 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" />
                اتصل بنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
