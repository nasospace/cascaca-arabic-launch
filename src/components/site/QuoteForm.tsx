import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "الرجاء إدخال الاسم").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "رقم الهاتف غير صحيح")
    .max(20)
    .regex(/^[+\d\s-]+$/, "رقم الهاتف غير صحيح"),
  service: z.string().min(1, "اختر نوع الخدمة"),
  details: z.string().trim().max(800).optional().or(z.literal("")),
});

const services = [
  "[الخدمة الأولى — مثال: عزل حراري]",
  "[الخدمة الثانية — مثال: عزل مائي]",
  "[الخدمة الثالثة — مثال: حلول هندسية]",
  "[خدمة أخرى]",
];

export function QuoteForm({ compact = false, onDone }: { compact?: boolean; onDone?: () => void }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      details: fd.get("details") ?? "",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
    e.currentTarget.reset();
    setTimeout(() => {
      setDone(false);
      onDone?.();
    }, 2500);
  };

  if (done) {
    return (
      <div className="rounded-xl bg-brand/5 border border-brand/30 p-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand mx-auto mb-3" />
        <h3 className="font-display text-lg font-black text-foreground mb-1">تم استلام طلبك</h3>
        <p className="text-sm text-muted-foreground">سيتواصل معك أحد المهندسين خلال 24 ساعة.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"} noValidate>
      <div className={compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"}>
        <Input name="name" label="الاسم" placeholder="اكتب اسمك الكامل" error={errors.name} />
        <Input
          name="phone"
          label="رقم الجوال"
          placeholder="05XXXXXXXX"
          dir="ltr"
          type="tel"
          error={errors.phone}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">نوع الخدمة</label>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-brand transition"
        >
          <option value="" disabled>
            اختر نوع الخدمة
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">
          وصف بسيط للمشروع <span className="text-muted-foreground font-normal">(اختياري)</span>
        </label>
        <textarea
          name="details"
          rows={compact ? 2 : 3}
          placeholder="مثال: مستودع 600م²، نحتاج عزل أسطح."
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-brand transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-amber px-6 py-3 text-sm font-bold text-brand-deep hover:brightness-110 transition shadow-glow"
      >
        <Send className="h-4 w-4" />
        أرسل الطلب — يردّ مهندس خلال 24 ساعة
      </button>
      <p className="text-[11px] text-muted-foreground text-center">
        بإرسالك الطلب، توافق على أن نتواصل معك بخصوص مشروعك فقط.
      </p>
    </form>
  );
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
  dir,
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  dir?: "ltr" | "rtl";
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        dir={dir}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition ${
          error ? "border-destructive" : "border-input focus:border-brand"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
