import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "أعمالنا" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-transparent",
      )}
    >
      {/* Top utility bar */}
      <div
        className={cn(
          "hidden md:block transition-all overflow-hidden",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
          "border-b border-white/10",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-2 text-xs text-white/70">
          <span>هندسة موثوقة · حلول عزل بمعايير عالمية</span>
          <a href="tel:+9665000000000" className="inline-flex items-center gap-2 hover:text-accent-amber transition" dir="ltr">
            <Phone className="h-3.5 w-3.5" />
            +966 5X XXX XXXX
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-18 items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
              <span className="font-display text-lg font-black text-brand-foreground">C</span>
              <span className="absolute -bottom-1 -end-1 h-3 w-3 rounded-full bg-accent-amber border-2 border-background" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-xl font-black tracking-tight transition-colors",
                  scrolled ? "text-foreground" : "text-white",
                )}
              >
                CASCACA
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-[0.25em] uppercase mt-1 transition-colors",
                  scrolled ? "text-muted-foreground" : "text-white/55",
                )}
              >
                Engineering · Insulation
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-colors link-underline",
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-white/80 hover:text-white",
                )}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: cn(
                    "relative px-4 py-2 text-sm font-bold rounded-md link-underline is-active",
                    scrolled ? "text-brand" : "text-white",
                  ),
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-amber px-5 py-2.5 text-sm font-bold text-brand-deep shadow-glow hover:brightness-110 transition"
            >
              اطلب عرض سعر
            </Link>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled ? "text-foreground" : "text-white",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 border-t border-border bg-background/95 backdrop-blur-xl -mx-6 px-6">
            <nav className="flex flex-col gap-1 pt-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium rounded-md text-foreground hover:bg-accent"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "px-4 py-3 text-base font-bold rounded-md text-brand bg-accent" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-amber px-5 py-3 text-sm font-bold text-brand-deep"
              >
                اطلب عرض سعر
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
