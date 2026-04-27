import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — CASCACA" },
      { name: "description", content: "تواصل مع فريق CASCACA لطلب عرض سعر أو استشارة هندسية مجانية." },
      { property: "og:title", content: "تواصل مع CASCACA" },
      { property: "og:description", content: "نحن هنا لمساعدتك — اتصل بنا الآن." },
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
      <section className="pt-36 pb-16 bg-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-amber/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent-amber mb-3">
            تواصل معنا
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-balance leading-tight">
            دعنا نتحدث عن مشروعك
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto text-balance">
            فريقنا جاهز للإجابة على استفساراتك وتقديم استشارة مجانية وعرض سعر تفصيلي.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: Phone, title: "اتصل بنا", value: "+966 5X XXX XXXX", dir: "ltr" as const },
              { icon: Mail, title: "البريد الإلكتروني", value: "info@cascaca.com" },
              { icon: MapPin, title: "العنوان", value: "[العنوان — يُحدَّث لاحقاً]" },
              { icon: MessageCircle, title: "واتساب", value: "+966 5X XXX XXXX", dir: "ltr" as const, accent: true },
            ].map((c) => (
              <div
                key={c.title}
                className={`flex items-start gap-4 rounded-2xl p-6 border transition ${
                  c.accent
                    ? "bg-gradient-brand border-transparent text-brand-foreground shadow-elegant"
                    : "bg-card border-border hover:shadow-card-soft"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    c.accent ? "bg-accent-amber" : "bg-secondary"
                  }`}
                >
                  <c.icon className={`h-6 w-6 ${c.accent ? "text-brand-deep" : "text-brand"}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold tracking-wider uppercase mb-1 ${c.accent ? "text-accent-amber" : "text-muted-foreground"}`}>
                    {c.title}
                  </div>
                  <div className="font-display font-bold text-lg" dir={c.dir}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card-soft">
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-2">
              أرسل لنا رسالة
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
              <Field label="الموضوع" name="subject" placeholder="نوع الخدمة المطلوبة" />
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">رسالتك</label>
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
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground hover:brightness-110 transition shadow-card-soft"
              >
                <Send className="h-4 w-4" />
                إرسال الرسالة
              </button>
              {submitted && (
                <div className="rounded-md bg-brand/10 border border-brand/30 p-4 text-sm text-brand font-medium">
                  ✓ تم استلام رسالتك بنجاح. سنتواصل معك قريباً.
                </div>
              )}
            </form>
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
