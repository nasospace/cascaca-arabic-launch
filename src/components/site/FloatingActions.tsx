import { MessageCircle } from "lucide-react";
import { useT, waLink } from "@/lib/i18n";

export function FloatingActions() {
  const { t, lang } = useT();
  const label = lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp";
  return (
    <a
      href={waLink(t("wa.general"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
    </a>
  );
}
