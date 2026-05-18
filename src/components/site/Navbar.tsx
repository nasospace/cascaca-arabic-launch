import { useT, WA_NUMBER, waLink } from "@/lib/i18n";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "mission-vision", key: "nav.mission" },
  { id: "why", key: "nav.why" },
  { id: "portfolio", key: "nav.portfolio" },
  { id: "systems", key: "nav.systems" },
  { id: "services", key: "nav.services" },
  { id: "commitment", key: "nav.commitment" },
  { id: "alliances", key: "nav.alliances" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { t, lang, toggle } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const switchLabel = lang === "en" ? "ع" : "E";
  const switchAria = lang === "en" ? "Switch to Arabic" : "Switch to English";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-gradient-to-b from-black/40 to-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-brand shadow-glow">
              <span className="font-display text-base font-black text-white">C</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-lg lg:text-xl font-black tracking-[0.15em]",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                CASCATA
              </span>
              <span
                className={cn(
                  "text-[9px] tracking-[0.3em] uppercase mt-1 font-medium",
                  scrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                {t("hero.tagline")}
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={cn(
                  "px-2.5 py-2 text-[13px] font-medium rounded-md transition-colors",
                  scrolled
                    ? "text-foreground/75 hover:text-primary"
                    : "text-white/85 hover:text-white"
                )}
              >
                {t(it.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={switchAria}
              className={cn(
                "h-10 w-10 inline-flex items-center justify-center rounded-md border text-sm font-bold transition",
                scrolled
                  ? "border-border text-foreground hover:bg-secondary"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <span className={lang === "en" ? "font-arabic" : "font-display"}>{switchLabel}</span>
            </button>
            <a
              href={waLink(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-glow hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.start")}
            </a>
          </div>

          <button
            className={cn(
              "lg:hidden inline-flex items-center justify-center p-2 rounded-md",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white/98 backdrop-blur-xl pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <nav className="flex flex-col gap-1 pt-3">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={close}
                  className="px-3 py-2.5 text-sm font-medium rounded-md text-foreground hover:bg-secondary"
                >
                  {t(it.key)}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={() => {
                    toggle();
                    close();
                  }}
                  aria-label={switchAria}
                  className="h-11 w-11 shrink-0 inline-flex items-center justify-center rounded-md border border-border text-base font-bold"
                >
                  {switchLabel}
                </button>
                <a
                  href={waLink(t("wa.general"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.start")}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
