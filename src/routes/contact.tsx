import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — CASCACA" },
      { name: "description", content: "تواصل مع فريق CASCACA لطلب عرض سعر أو استشارة هندسية." },
      { property: "og:title", content: "تواصل مع CASCACA" },
      { property: "og:description", content: "أرسل تفاصيل مشروعك ويردّ عليك مهندس مختص." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="pt-40 pb-20 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-accent-amber mb-4">
            <span className="h-px w-8 bg-accent-amber/60" />
            تواصل معنا
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white text-balance leading-[1.1] tracking-tight">
            احصل على استشارة هندسية مجانية
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            فريقنا جاهز لمناقشة تفاصيل مشروعك وتقديم عرض سعر دقيق خلال 24 ساعة.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-12 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
          {/* Info column */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card-soft">
              <h2 className="font-display text-lg font-black text-foreground mb-1">معلومات التواصل</h2>
              <p className="text-sm text-muted-foreground mb-5">اختر الطريقة الأنسب للتواصل معنا.</p>
              <ul className="space-y-4">
                {[
                  { icon: Phone, title: "اتصل بنا", value: "+966 5X XXX XXXX", dir: "ltr" as const },
                  { icon: Mail, title: "البريد الإلكتروني", value: "info@cascaca.com", dir: "ltr" as const },
                  { icon: MapPin, title: "العنوان", value: "[العنوان — يُحدَّث لاحقاً]" },
                  { icon: Clock, title: "ساعات العمل", value: "[الأحد – الخميس · ٨ص – ٥م]" },
                ].map((c) => (
                  <li key={c.title} className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        {c.title}
                      </div>
                      <div className="font-display font-bold text-base text-foreground" dir={c.dir}>
                        {c.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/9665000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-6 bg-gradient-brand text-brand-foreground shadow-elegant hover:brightness-110 transition group"
            >
              <div className="h-12 w-12 rounded-xl bg-accent-amber flex items-center justify-center shrink-0">
                <MessageCircle className="h-6 w-6 text-brand-deep" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent-amber mb-1">
                  واتساب
                </div>
                <div className="font-display font-bold text-lg" dir="ltr">+966 5X XXX XXXX</div>
                <div className="text-xs text-brand-foreground/70 mt-1">رد سريع خلال ساعات العمل</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-24 -end-24 h-60 w-60 rounded-full bg-accent-amber/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-brand mb-3">
                نموذج التواصل
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-2">
                اطلب عرض سعر مخصص
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                املأ النموذج وسنعاود التواصل معك خلال 24 ساعة.
              </p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="الاسم الكامل" name="name" required placeholder="اكتب اسمك" />
                  <Field label="رقم الجوال" name="phone" required placeholder="05XXXXXXXX" type="tel" dir="ltr" />
                </div>
                <Field label="البريد الإلكتروني" name="email" required placeholder="example@email.com" type="email" dir="ltr" />
                <Field label="الموضوع / نوع الخدمة" name="subject" placeholder="مثال: استشارة عزل حراري" />
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">تفاصيل المشروع</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-brand transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-gradient-amber px-7 py-4 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow"
                >
                  <Send className="h-4 w-4" />
                  احصل على استشارة
                </button>
                {submitted && (
                  <div className="rounded-md bg-brand/10 border border-brand/30 p-4 text-sm text-brand font-medium">
                    ✓ تم استلام رسالتك بنجاح. سنتواصل معك قريباً.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
  type = "text",
  dir,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        dir={dir}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-brand transition"
      />
    </div>
  );
}
