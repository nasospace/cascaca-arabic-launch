import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

export type Lang = "en" | "ar";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (k: string) => string;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

// Translation dictionary
const dict: Record<string, { en: string; ar: string }> = {
  // Nav
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.mission": { en: "Mission", ar: "الرسالة" },
  "nav.vision": { en: "Vision", ar: "الرؤية" },
  "nav.why": { en: "Why Choose Us", ar: "لماذا CASCATA" },
  "nav.portfolio": { en: "Portfolio", ar: "أعمالنا" },
  "nav.systems": { en: "Specialized Systems", ar: "أنظمتنا المتخصصة" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.commitment": { en: "Commitment", ar: "التزامنا" },
  "nav.alliances": { en: "Strategic Alliances", ar: "تحالفاتنا" },
  "nav.contact": { en: "Contact Us", ar: "تواصل معنا" },
  "cta.start": { en: "Start Your Journey", ar: "ابدأ رحلتك" },
  "cta.startFull": { en: "Start Your Journey with CASCATA", ar: "ابدأ رحلتك مع CASCATA" },
  "cta.explore": { en: "Explore Our Services", ar: "استكشف خدماتنا" },
  "cta.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "cta.askService": { en: "Ask About This Service", ar: "اسأل عن هذه الخدمة" },

  // Hero
  "hero.tagline": { en: "Protection Builds Trust", ar: "الحماية تبني الثقة" },
  "hero.title": { en: "Engineering Excellence in Structural Protection", ar: "التميز الهندسي في حماية المنشآت" },
  "hero.sub": {
    en: "Certified waterproofing, insulation, concrete repair, and long-term protection systems for residential, commercial, and industrial projects across the UAE.",
    ar: "حلول معتمدة في العزل المائي والحراري، ترميم الخرسانة، وحماية المنشآت للمشاريع السكنية والتجارية والصناعية في دولة الإمارات.",
  },
  "hero.badge1": { en: "Certified Systems", ar: "أنظمة معتمدة" },
  "hero.badge2": { en: "Engineer-Supervised Execution", ar: "تنفيذ بإشراف هندسي" },
  "hero.badge3": { en: "Long-Term Warranties", ar: "ضمانات طويلة الأمد" },
  "hero.badge4": { en: "UAE-Based Operations", ar: "عمليات داخل دولة الإمارات" },

  // About
  "about.title": { en: "About CASCATA", ar: "من نحن" },
  "about.eyebrow": { en: "Who We Are", ar: "من نحن" },
  "about.p1": {
    en: "CASCATA provides integrated engineering solutions specialized in protecting structures from water infiltration, moisture damage, and environmental deterioration.",
    ar: "تقدم CASCATA حلولًا هندسية متكاملة ومتخصصة في حماية المنشآت من تسربات المياه، والرطوبة، والعوامل البيئية المختلفة.",
  },
  "about.p2": {
    en: "By combining advanced technologies, certified materials, and precision-driven execution, CASCATA delivers long-lasting durability for residential, commercial, and industrial projects.",
    ar: "نعتمد على أحدث التقنيات والمواد المعتمدة عالميًا، إلى جانب منهجية تنفيذ دقيقة، لضمان أعلى مستويات المتانة والاستدامة للمشروعات السكنية والتجارية والصناعية.",
  },
  "about.p3": {
    en: "Our approach is built on engineering excellence, operational efficiency, and uncompromising quality standards — ensuring seamless project delivery from assessment and system design to installation, maintenance, and repairs.",
    ar: "يقوم نهجنا على التميز الهندسي، والكفاءة التشغيلية، والالتزام الصارم بمعايير الجودة، لنضمن تنفيذًا متكاملًا يبدأ من دراسة المشروع وتصميم النظام المناسب، وصولًا إلى التنفيذ والصيانة والإصلاحات.",
  },

  // Mission / Vision
  "mv.eyebrow": { en: "Direction & Purpose", ar: "الرسالة والرؤية" },
  "vision.title": { en: "Our Vision", ar: "رؤيتنا" },
  "vision.body": {
    en: "To be the gold standard for quality and safety in structural protection across the region.",
    ar: "أن نكون المعيار الذهبي للجودة والسلامة في مجال حماية المنشآت على مستوى المنطقة.",
  },
  "mission.title": { en: "Our Mission", ar: "رسالتنا" },
  "mission.body": {
    en: "Securing real estate investments through professional execution, certified systems, and long-term warranties.",
    ar: "حماية استثماراتكم العقارية من خلال تنفيذ احترافي، وأنظمة معتمدة، وضمانات طويلة الأمد.",
  },

  // Why
  "why.title": { en: "Why Choose CASCATA?", ar: "لماذا CASCATA؟" },
  "why.eyebrow": { en: "Built On Trust", ar: "نبنيها بالثقة" },
  "why.1.t": { en: "Integrated Solutions", ar: "حلول متكاملة" },
  "why.1.b": {
    en: "Multiple specialized services delivered under one contract with a single point of contact for efficient and seamless project management.",
    ar: "تقديم عدة خدمات متخصصة ضمن عقد واحد ونقطة تواصل موحدة لضمان إدارة سلسة وفعالة للمشروع.",
  },
  "why.2.t": { en: "Expert Supervision", ar: "إشراف هندسي متخصص" },
  "why.2.b": {
    en: "All projects are overseen by professional engineers to ensure precise technical execution from design to final delivery.",
    ar: "جميع المشاريع تتم بإشراف مهندسين محترفين لضمان تنفيذ تقني دقيق من مرحلة التصميم وحتى التسليم النهائي.",
  },
  "why.3.t": { en: "On-time Delivery", ar: "الالتزام بالمواعيد" },
  "why.3.b": {
    en: "Commitment to efficient methodologies and strict timelines for both commercial and residential developments.",
    ar: "نعتمد على منهجيات عمل فعالة وخطط تنفيذ دقيقة لضمان تسليم المشاريع في الوقت المحدد.",
  },
  "why.4.t": { en: "Competitive Pricing", ar: "أسعار تنافسية" },
  "why.4.b": {
    en: "Premium-quality engineering solutions delivered at highly competitive market rates.",
    ar: "تقديم أعلى مستويات الجودة الهندسية بأسعار تنافسية تناسب متطلبات السوق.",
  },
  "why.5.t": { en: "Proven Reliability", ar: "موثوقية وضمانات حقيقية" },
  "why.5.b": {
    en: "Long-term client relationships supported by real written warranties for complete peace of mind.",
    ar: "نبني علاقات طويلة الأمد مع عملائنا مدعومة بضمانات مكتوبة تمنحهم راحة واطمئنانًا كاملًا.",
  },

  // Systems
  "sys.title": { en: "Our Specialized Systems", ar: "أنظمتنا المتخصصة" },
  "sys.eyebrow": { en: "Certified Materials", ar: "مواد معتمدة" },
  "sys.desc": {
    en: "We utilize the latest industry-certified materials and technologies to ensure maximum protection and durability.",
    ar: "نعتمد على أحدث الأنظمة والمواد المعتمدة عالميًا لتحقيق أعلى درجات الحماية والمتانة.",
  },
  "sys.1": { en: "Bitumen Systems", ar: "أنظمة البيتومين" },
  "sys.2": { en: "Combo Systems", ar: "أنظمة الكومبو" },
  "sys.3": { en: "Membrane Rolls", ar: "لفائف الممبرين" },
  "sys.4": { en: "Cementitious Waterproofing", ar: "العزل الأسمنتي" },
  "sys.5": { en: "Thermal Insulation Systems", ar: "أنظمة العزل الحراري" },
  "sys.6": { en: "Epoxy Coatings", ar: "طلاءات الإيبوكسي" },
  "sys.7": { en: "Advanced Certified Protection Materials", ar: "مواد حماية متقدمة ومعتمدة" },

  // Services
  "svc.title": { en: "Our Core Services", ar: "خدماتنا الأساسية" },
  "svc.eyebrow": { en: "What We Do", ar: "ماذا نقدم" },
  "svc.a.t": { en: "Sub-structure Waterproofing", ar: "عزل الأساسات والقواعد" },
  "svc.a.b": {
    en: "Protecting foundations against groundwater using advanced membranes such as Bituminous, PVC, HDPE, and pile head treatment.",
    ar: "تأمين المنشآت ضد المياه الجوفية والرطوبة باستخدام لفائف البيتومين، PVC، HDPE، ومعالجة رؤوس الخوازيق.",
  },
  "svc.b.t": { en: "Roofing & Thermal Insulation", ar: "عزل الأسطح والأنظمة الحرارية" },
  "svc.b.b": {
    en: "High-performance leak prevention and energy-saving systems, including Combo Roofing and EPDM solutions.",
    ar: "منع التسريب ورفع كفاءة الطاقة عبر أنظمة متطورة تشمل نظام الكومبو المعتمد وعزل EPDM.",
  },
  "svc.c.t": { en: "Wet Area & Balcony Waterproofing", ar: "عزل المناطق الرطبة والشرفات" },
  "svc.c.b": {
    en: "Certified protection for kitchens, bathrooms, balconies, and terraces to prevent leakage into interior spaces.",
    ar: "حماية متكاملة للمطابخ والحمامات والبالكونات لضمان عدم نفاذ المياه إلى الهيكل الإنشائي والمساحات الداخلية.",
  },
  "svc.d.t": { en: "Concrete Injection", ar: "حقن الخرسانة المتخصص" },
  "svc.d.b": {
    en: "Engineering solutions to seal structural cracks and stop heavy water ingress using high-pressure injection.",
    ar: "حلول هندسية لسد الشروخ الإنشائية ووقف التسريبات القوية باستخدام تقنيات الحقن تحت الضغط.",
  },
  "svc.e.t": { en: "Concrete Repair", ar: "ترميم وإصلاح الخرسانة" },
  "svc.e.b": {
    en: "Comprehensive restoration of damaged structures and reinforcement corrosion to ensure long-term stability.",
    ar: "معالجة تآكل الحديد والعيوب الإنشائية لإعادة تأهيل المبنى وإطالة عمره الافتراضي وضمان سلامته.",
  },
  "svc.f.t": { en: "Flooring & Tank Lining", ar: "الأرضيات وتبطين الخزانات" },
  "svc.f.b": {
    en: "Industrial epoxy flooring and certified, non-toxic lining systems for safe and durable water storage.",
    ar: "تنفيذ أرضيات الإيبوكسي شديدة التحمل، وتبطين الخزانات بمواد معتمدة وآمنة تمنع التآكل والتسريب.",
  },

  // Portfolio
  "pf.title": { en: "Selected Project Work", ar: "نماذج من أعمالنا" },
  "pf.eyebrow": { en: "Portfolio", ar: "أعمالنا" },
  "pf.1": { en: "Sub-structure Waterproofing", ar: "عزل الأساسات والقواعد" },
  "pf.2": { en: "Roofing & Thermal Insulation", ar: "عزل الأسطح والأنظمة الحرارية" },
  "pf.3": { en: "Wet Area & Balcony Waterproofing", ar: "عزل المناطق الرطبة والشرفات" },
  "pf.4": { en: "Specialized Protection Systems", ar: "أنظمة الحماية المتخصصة" },
  "pf.5": { en: "Site Supervision", ar: "إشراف الموقع" },
  "pf.6": { en: "Strategic Engineering Execution", ar: "تنفيذ هندسي استراتيجي" },

  // Commitment
  "com.title": { en: "Our Commitment", ar: "التزامنا" },
  "com.eyebrow": { en: "Lasting Quality", ar: "جودة دائمة" },
  "com.p1": {
    en: "At CASCATA, we believe that structural protection is not just a service — it is a long-term investment in safety, durability, and trust.",
    ar: "في CASCATA، نؤمن أن حماية المنشآت ليست مجرد خدمة، بل استثمار طويل الأمد في الأمان والمتانة والثقة.",
  },
  "com.p2": {
    en: "Every project is executed with engineering precision, certified materials, and a commitment to excellence that ensures lasting results.",
    ar: "لذلك نحرص على تنفيذ كل مشروع بأعلى درجات الدقة الهندسية، باستخدام مواد معتمدة وحلول موثوقة تضمن نتائج تدوم لسنوات.",
  },

  // Alliances
  "al.title": { en: "Our Strategic Alliances", ar: "تحالفاتنا الاستراتيجية" },
  "al.eyebrow": { en: "Trusted Partners", ar: "شركاء موثوقون" },
  "al.body": {
    en: "We collaborate with the world's leading manufacturers to ensure the highest quality of materials and systems. Our strategic associations include industry leaders such as Sika, Fosroc, BASF, Mapei, Henkel Polybit, and other certified protection material providers.",
    ar: "نعتز بشراكتنا مع كبرى الشركات العالمية المصنعة لمواد البناء والعزل، ونستخدم أنظمة معتمدة من رواد الصناعة لضمان تنفيذ المشاريع بأعلى معايير الجودة العالمية والضمانات الموثوقة.",
  },

  // Final CTA
  "fcta.title": { en: "Secure Your Investment with Engineering Precision", ar: "احمِ استثمارك بدقة هندسية" },
  "fcta.sub": {
    en: "Elevate your project's durability with certified systems, expert engineering, and trusted execution.",
    ar: "ارتقِ بمتانة مشروعك من خلال أنظمة معتمدة، وخبرة هندسية، وتنفيذ احترافي موثوق.",
  },

  // Contact
  "ct.title": { en: "Contact CASCATA", ar: "تواصل مع CASCATA" },
  "ct.eyebrow": { en: "Let's Talk", ar: "تواصل معنا" },
  "ct.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "ct.email": { en: "Email", ar: "البريد الإلكتروني" },
  "ct.location": { en: "Location", ar: "الموقع" },
  "ct.addr": {
    en: "OFC-M01, Mezzanine Floor, Bldg No. C203, Shabiya 12, MBZ City, P.O. Box: 137547, Abu Dhabi, UAE",
    ar: "OFC-M01، الميزانين، مبنى رقم C203، شعبية 12، مدينة محمد بن زايد، ص.ب: 137547، أبوظبي، الإمارات",
  },
  "form.name": { en: "Name", ar: "الاسم" },
  "form.phone": { en: "Phone number", ar: "رقم الهاتف" },
  "form.email": { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
  "form.desc": { en: "Project description (optional)", ar: "وصف المشروع (اختياري)" },
  "form.loc": { en: "Project location (optional)", ar: "موقع المشروع (اختياري)" },
  "form.svc": { en: "Service interest (optional)", ar: "الخدمة المطلوبة (اختياري)" },
  "form.send": { en: "Send Inquiry", ar: "إرسال الطلب" },
  "form.required": { en: "Required", ar: "حقل مطلوب" },
  "form.success": { en: "Thank you. Our team will reach out shortly.", ar: "شكراً لك. سيتواصل معك فريقنا قريبًا." },
  "form.invalidPhone": { en: "Please enter a valid phone number", ar: "الرجاء إدخال رقم هاتف صحيح" },
  "form.invalidEmail": { en: "Please enter a valid email", ar: "الرجاء إدخال بريد إلكتروني صحيح" },

  // Footer
  "ft.quick": { en: "Quick Links", ar: "روابط سريعة" },
  "ft.services": { en: "Services", ar: "الخدمات" },
  "ft.contact": { en: "Contact", ar: "بيانات التواصل" },
  "ft.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "ft.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },

  // Switch aria
  "lang.switchToAr": { en: "Switch to Arabic", ar: "Switch to Arabic" },
  "lang.switchToEn": { en: "Switch to English", ar: "Switch to English" },

  // WhatsApp messages
  "wa.general": {
    en: "Hello CASCATA, I'm interested in your structural protection and waterproofing services. I would like to get more details.",
    ar: "مرحبًا CASCATA، أريد الاستفسار عن خدمات حماية المنشآت والعزل المائي. من فضلك أرسل لي التفاصيل.",
  },
};

export function buildServiceWaMessage(lang: Lang, serviceName: string) {
  if (lang === "ar") {
    return `مرحبًا CASCATA، أريد الاستفسار عن خدمة ${serviceName}. من فضلك أرسل لي التفاصيل.`;
  }
  return `Hello CASCATA, I'm interested in ${serviceName}. Please send me more details.`;
}

export const WA_NUMBER = "971555309240";
export const WA_DISPLAY = "+971 55 530 9240";
export const EMAIL = "Operation@cascata.ae";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // Read stored or detect once on client
    try {
      const stored = (typeof localStorage !== "undefined" && localStorage.getItem("cascata.lang")) as Lang | null;
      if (stored === "en" || stored === "ar") {
        setLangState(stored);
        return;
      }
      const nav = typeof navigator !== "undefined" ? navigator.language || "" : "";
      if (nav.toLowerCase().startsWith("ar")) setLangState("ar");
    } catch {}
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
    try {
      localStorage.setItem("cascata.lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "ar" : "en")), []);

  const t = useCallback(
    (k: string) => {
      const entry = dict[k];
      if (!entry) return k;
      return entry[lang];
    },
    [lang]
  );

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggle, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
