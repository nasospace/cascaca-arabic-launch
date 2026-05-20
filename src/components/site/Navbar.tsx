import { useT, waLink } from "@/lib/i18n";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-cascata.png";

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
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[auto_auto] 2xl:grid-cols-[auto_1fr_auto] h-16 lg:h-20 items-center gap-4 lg:gap-8 w-full">
          <a href="#home" className="flex items-center gap-3 group shrink-0" aria-label="CASCATA — Home">
            <div className={cn(
              "flex items-center justify-center rounded-lg p-1 transition-all duration-300",
              scrolled
                ? "bg-white shadow-sm ring-1 ring-black/[0.04]"
                : "bg-white/90 backdrop-blur-sm ring-1 ring-white/20"
            )}>
              <img src={logo} alt="CASCATA Waterproofing" className="h-10 w-10 lg:h-11 lg:w-11 object-contain" width={44} height={44} />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span
                className={cn(
                  "font-display text-[17px] lg:text-[19px] font-black tracking-[0.14em]",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                CASCATA
              </span>
              <span
                className={cn(
                  "text-[8px] lg:text-[8.5px] tracking-[0.25em] uppercase mt-[3px] font-semibold",
                  scrolled ? "text-muted-foreground/70" : "text-white/60"
                )}
              >
                {t("hero.tagline")}
              </span>
            </div>
          </a>

          <div className="hidden 2xl:flex justify-center pr-4">
            <nav className="flex items-center gap-0.5 2xl:gap-1">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={cn(
                    "whitespace-nowrap px-2 py-2 text-[13px] font-bold tracking-tight rounded-md transition-all duration-300",
                    scrolled
                      ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {t(it.key)}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden 2xl:flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={toggle}
              aria-label={switchAria}
              className={cn(
                "h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-md border text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                scrolled
                  ? "border-border text-foreground hover:bg-secondary hover:shadow-sm"
                  : "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              )}
            >
              <span className={cn("leading-none flex items-center justify-center", lang === "en" ? "font-arabic mt-1" : "font-display")}>{switchLabel}</span>
            </button>
            <a
              href={waLink(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-primary px-4 lg:px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/95 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.start")}
            </a>
          </div>

          <button
            className={cn(
              "2xl:hidden col-start-2 ml-auto inline-flex items-center justify-center p-2 rounded-md",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="2xl:hidden border-t border-border bg-white/98 backdrop-blur-xl pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
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
