import { useT, WA_DISPLAY, EMAIL, waLink } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-[color:var(--brand-deep)] text-white/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <span className="font-display text-base font-black text-white">C</span>
            </div>
            <span className="font-display text-xl font-black tracking-[0.15em] text-white">CASCATA</span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">
            {t("hero.tagline")} — {t("about.p1")}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.quick")}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="text-white/70 hover:text-white transition">{t("nav.about")}</a></li>
            <li><a href="#why" className="text-white/70 hover:text-white transition">{t("nav.why")}</a></li>
            <li><a href="#portfolio" className="text-white/70 hover:text-white transition">{t("nav.portfolio")}</a></li>
            <li><a href="#alliances" className="text-white/70 hover:text-white transition">{t("nav.alliances")}</a></li>
            <li><a href="#contact" className="text-white/70 hover:text-white transition">{t("nav.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.services")}</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-white/70">{t("svc.a.t")}</li>
            <li className="text-white/70">{t("svc.b.t")}</li>
            <li className="text-white/70">{t("svc.c.t")}</li>
            <li className="text-white/70">{t("svc.d.t")}</li>
            <li className="text-white/70">{t("svc.e.t")}</li>
            <li className="text-white/70">{t("svc.f.t")}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.contact")}</h4>
          <ul className="space-y-2 text-sm text-white/70 mb-4">
            <li dir="ltr">{WA_DISPLAY}</li>
            <li>{EMAIL}</li>
            <li className="text-xs leading-relaxed">{t("ct.addr")}</li>
          </ul>
          <a
            href={waLink(t("wa.general"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white hover:brightness-110 transition"
          >
            {t("cta.whatsapp")}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/55 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} CASCATA. {t("ft.rights")}</span>
          <span className="tracking-widest font-display">{t("hero.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
