import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { QuoteDialog } from "./QuoteDialog";

const WHATSAPP_NUMBER = "9665000000000";
const PHONE_NUMBER = "+9665000000000";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onContact = pathname === "/contact";

  return (
    <>
      {/* Floating WhatsApp — persistent on all pages */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 start-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
      </a>

      {/* Sticky mobile CTA bar */}
      {!onContact && (
        <div
          className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
            show ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl bg-brand-deep/95 backdrop-blur-xl border border-white/10 p-2 shadow-elegant">
            <QuoteDialog
              trigger={
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-amber px-3 py-3 text-sm font-bold text-brand-deep">
                  اطلب عرض سعر
                </button>
              }
            />
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              اتصل بمهندس
            </a>
          </div>
        </div>
      )}
    </>
  );
}
