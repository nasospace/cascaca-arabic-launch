import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero grid-pattern p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-amber/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-amber mb-3">
                ابدأ مشروعك معنا
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white text-balance leading-tight">
                هل تبحث عن شريك موثوق لمشروعك القادم؟
              </h3>
              <p className="mt-4 text-white/75 text-balance max-w-xl">
                فريقنا جاهز لتقديم استشارة مجانية وعرض سعر مخصص يلبي احتياجاتك بأعلى معايير الجودة.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-amber px-6 py-3.5 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow"
              >
                اطلب عرض سعر
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
