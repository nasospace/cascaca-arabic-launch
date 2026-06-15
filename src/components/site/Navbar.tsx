import { useT, waLink } from "@/lib/i18n";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-cascata-final.png";

const navItems = [
  { id: "home", key: "nav.home" },
  { id: "portfolio", key: "nav.portfolio" },
  { id: "about", key: "nav.about" },
  { id: "mission-vision", key: "nav.core" },
  { id: "systems", key: "nav.systems" },
  { id: "services", key: "nav.services" },
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
          ? "bg-[#334260]/95 backdrop-blur-xl border-b border-white/10 shadow-card-soft"
          : "bg-gradient-to-b from-[#334260]/55 to-transparent",
      )}
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[auto_auto] xl:grid-cols-[auto_1fr_auto] h-16 lg:h-20 items-center gap-4 lg:gap-6 2xl:gap-8 w-full">
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            aria-label="CASCATA — Home"
          >
            <span
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-lg px-1.5 py-1 transition-all duration-300",
                "bg-transparent",
              )}
            >
              <img
                src={logo}
                alt="CASCATA Waterproofing"
                className="h-[calc(var(--spacing)*16)] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] lg:h-[calc(var(--spacing)*20)] border-0 rounded-none"
              />
            </span>
            <span
              className={cn(
                "font-cinzel max-w-28 text-[9px] font-semibold uppercase leading-[1.35] tracking-[0.15em] sm:max-w-40 sm:tracking-[0.18em] lg:max-w-none",
                scrolled ? "text-white/90" : "text-white/90",
              )}
            >
              <span className="block">Insulation</span>
              <span className="block whitespace-nowrap">Material works</span>
            </span>
          </a>

          <div className="hidden xl:flex justify-center pr-2 2xl:pr-4">
            <nav className="flex items-center gap-0.5 2xl:gap-1">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={cn(
                    "whitespace-nowrap px-1.5 2xl:px-2 py-2 text-[12px] 2xl:text-[13px] font-bold tracking-tight rounded-md transition-all duration-300",
                    scrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                  )}
                >
                  {t(it.key)}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden xl:flex items-center justify-end gap-2 2xl:gap-3 shrink-0">
            <button
              onClick={toggle}
              aria-label={switchAria}
              className={cn(
                "h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-md border text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                scrolled
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  : "border-white/30 text-white hover:bg-white/10 hover:border-white/50",
              )}
            >
              <span
                className={cn(
                  "flex h-full w-full items-center justify-center leading-none",
                  lang === "en" ? "font-arabic" : "font-display",
                )}
              >
                {switchLabel}
              </span>
            </button>
            <a
              href={waLink(t("wa.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "shrink-0 inline-flex items-center gap-2 rounded-md bg-transparent px-4 lg:px-5 py-2.5 text-sm font-bold hover:-translate-y-0.5 transition-all duration-300",
                scrolled
                  ? "border border-white/40 text-white hover:bg-white/10"
                  : "border border-white/40 text-white hover:bg-white/10",
              )}
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.start")}
            </a>
          </div>

          <button
            className={cn(
              "xl:hidden col-start-2 ml-auto inline-flex items-center justify-center p-2 rounded-md",
              "text-white",
            )}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-white/98 backdrop-blur-xl pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <nav className="flex flex-col gap-1 pt-3">
              {navItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={close}
                  className="px-3 py-2.5 text-sm font-medium rounded-md text-[#334260] hover:bg-[#637eb5]/10 hover:text-[#637eb5]"
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
                  className="h-11 w-11 shrink-0 inline-flex items-center justify-center rounded-md border border-[#a1a1a1]/35 text-base font-bold text-[#334260]"
                >
                  <span
                    className={cn(
                      "flex h-full w-full items-center justify-center leading-none",
                      lang === "en" ? "font-arabic" : "font-display",
                    )}
                  >
                    {switchLabel}
                  </span>
                </button>
                <a
                  href={waLink(t("wa.general"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-transparent border border-current px-4 py-3 text-sm font-bold text-primary"
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
