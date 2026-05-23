import { useT, WA_DISPLAY, EMAIL, waLink } from "@/lib/i18n";
import logo from "@/assets/logo-cascata.png";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-[#334260] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 px-2.5 py-1.5 shadow-sm transition-all duration-300">
              <img src={logo} alt="CASCATA" className="h-full w-auto object-contain" />
            </div>
            <span className="font-display text-xl font-extrabold tracking-[0.15em] text-white">CASCATA</span>
          </div>
          <p className="text-sm text-[#a1a1a1] leading-relaxed">
            {t("hero.tagline")} — {t("about.p1")}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.quick")}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="inline-block text-[#a1a1a1] hover:text-white hover:translate-x-1 transition-all duration-300">{t("nav.about")}</a></li>
            <li><a href="#why" className="inline-block text-[#a1a1a1] hover:text-white hover:translate-x-1 transition-all duration-300">{t("nav.why")}</a></li>
            <li><a href="#portfolio" className="inline-block text-[#a1a1a1] hover:text-white hover:translate-x-1 transition-all duration-300">{t("nav.portfolio")}</a></li>
            <li><a href="#alliances" className="inline-block text-[#a1a1a1] hover:text-white hover:translate-x-1 transition-all duration-300">{t("nav.alliances")}</a></li>
            <li><a href="#contact" className="inline-block text-[#a1a1a1] hover:text-white hover:translate-x-1 transition-all duration-300">{t("nav.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.services")}</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-[#a1a1a1]">{t("svc.a.t")}</li>
            <li className="text-[#a1a1a1]">{t("svc.b.t")}</li>
            <li className="text-[#a1a1a1]">{t("svc.c.t")}</li>
            <li className="text-[#a1a1a1]">{t("svc.d.t")}</li>
            <li className="text-[#a1a1a1]">{t("svc.e.t")}</li>
            <li className="text-[#a1a1a1]">{t("svc.f.t")}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4 tracking-widest uppercase">{t("ft.contact")}</h4>
          <ul className="space-y-2 text-sm text-[#a1a1a1] mb-4">
            <li dir="ltr">{WA_DISPLAY}</li>
            <li>{EMAIL}</li>
            <li className="text-xs leading-relaxed">{t("ct.addr")}</li>
          </ul>
          <a
            href={waLink(t("wa.general"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            {t("cta.whatsapp")}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-[#a1a1a1] flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} CASCATA. {t("ft.rights")}</span>
          <span className="tracking-widest font-display">{t("hero.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
