import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/90 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-amber">
              <span className="font-display text-lg font-black text-brand-deep">C</span>
            </div>
            <span className="font-display text-xl font-black text-white">CASCACA</span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">
            نُصمّم الحل قبل أن نُنفّذه. شركة هندسية متخصصة في حلول العزل
            للقطاعين الصناعي والتجاري — عملٌ يبقى بعد أن نُغادر الموقع.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-accent-amber/80 font-bold">
            <span className="h-px w-6 bg-accent-amber/40" />
            دقة · طبقة · استمرار
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-white/70 hover:text-accent-amber transition">الرئيسية</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-accent-amber transition">خدماتنا</Link></li>
            <li><Link to="/projects" className="text-white/70 hover:text-accent-amber transition">أعمالنا</Link></li>
            <li><Link to="/about" className="text-white/70 hover:text-accent-amber transition">من نحن</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-accent-amber transition">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent-amber shrink-0" />
              <span dir="ltr">+966 5X XXX XXXX</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent-amber shrink-0" />
              <span>info@cascaca.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent-amber shrink-0" />
              <span>[العنوان — يُحدَّث لاحقاً]</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white mb-4">جاهزون لخدمتك</h4>
          <p className="text-sm text-white/65 mb-4">احصل على عرض سعر مخصص لمشروعك خلال 24 ساعة.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent-amber px-5 py-2.5 text-sm font-bold text-brand-deep hover:brightness-110 transition"
          >
            اطلب عرض سعر
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} CASCACA. جميع الحقوق محفوظة.</span>
          <span className="tracking-widest">نَبني عزلاً يدوم — طبقةً فوق طبقة.</span>
        </div>
      </div>
    </footer>
  );
}
