import type { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

export type PortfolioProject = {
  title: LocalizedText;
  location?: LocalizedText;
  client?: string;
  consultant?: string;
  contractor?: string;
};

export type PortfolioCategory = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  projects: PortfolioProject[];
};

export const portfolioStakeholders = [
  "ADNOC",
  "Aldar",
  "Miral",
  "DAMAC",
  "ENEC",
  "ADEK",
  "AD Ports",
  "Majid Al Futtaim",
];

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "sovereign-cultural",
    title: {
      en: "Sovereign & Cultural Landmarks",
      ar: "معالم سيادية وثقافية",
    },
    description: {
      en: "Iconic national landmarks demanding precision engineering, technical excellence, and uncompromising reliability.",
      ar: "معالم وطنية بارزة تتطلب دقة هندسية وتميزًا فنيًا واعتمادية عالية دون تنازل.",
    },
    projects: [
      {
        title: {
          en: "Zayed National Museum, Saadiyat Island",
          ar: "متحف زايد الوطني، جزيرة السعديات",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Department of Culture & Tourism",
        consultant: "WSP",
        contractor: "Al Ryum General Cont. Est.",
      },
      {
        title: { en: "Natural History Museum", ar: "متحف التاريخ الطبيعي" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Miral",
        consultant: "Ellasdos",
        contractor: "ALEC",
      },
      {
        title: {
          en: "Sheikh Zayed Palace - Injection Work",
          ar: "قصر الشيخ زايد - أعمال الحقن",
        },
        location: { en: "Dubai", ar: "دبي" },
      },
      {
        title: {
          en: "Siny Majlis - Crown Prince Court",
          ar: "مجلس سيني - ديوان ولي العهد",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Crown Prince Court",
        contractor: "Al Shd General Contracting",
      },
      {
        title: {
          en: "Sheikh Mansoor Palace",
          ar: "قصر الشيخ منصور",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Sheikh Mansoor",
        contractor: "Modular General Contracting LLC",
      },
      {
        title: {
          en: "Al Bateen Palace Service Block",
          ar: "مبنى الخدمات في قصر البطين",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: {
          en: "Qasr Al Watan / Presidential Flight Infrastructure - Roof Waterproofing",
          ar: "قصر الوطن / بنية الطيران الرئاسي - عزل الأسطح",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Presidential Flight",
        contractor: "Maplin for Agricultural Projects LLC",
      },
    ],
  },
  {
    id: "energy-infrastructure",
    title: {
      en: "Energy & Strategic Infrastructure",
      ar: "الطاقة والبنية التحتية الاستراتيجية",
    },
    description: {
      en: "Large-scale energy, logistics, and strategic infrastructure projects built to national-level operational standards.",
      ar: "مشاريع طاقة ولوجستيات وبنية تحتية استراتيجية واسعة النطاق، منفذة وفق معايير تشغيلية على مستوى وطني.",
    },
    projects: [
      {
        title: {
          en: "Auxiliary Buildings at Barakah Nuclear Power Plant",
          ar: "المباني المساندة في محطة براكة للطاقة النووية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Emirates Nuclear Energy Corporation",
        consultant: "Korean Electricity Power Corporation",
        contractor: "Seoyong Construction",
      },
      {
        title: {
          en: "Nuclear Power Plant Refurbishment - Roof Waterproofing",
          ar: "تجديد محطة الطاقة النووية - عزل الأسطح",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Emirates Nuclear Energy Corporation",
        consultant: "Korean Electricity Power Corporation",
        contractor: "Seoyong Construction Co. LLC",
      },
      {
        title: {
          en: "Expansion of Container Terminal 1 at Khalifa Port",
          ar: "توسعة محطة الحاويات 1 في ميناء خليفة",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Abu Dhabi Ports",
        consultant: "Jacobs",
        contractor: "China Harbour Engineering Co. LLC",
      },
      {
        title: {
          en: "ADNOC BAB Office Building, Habshan Field",
          ar: "مبنى مكاتب أدنوك باب، حقل حبشان",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "ADNOC",
        consultant: "Project Lap",
        contractor: "Auburn Electromechanical Contracting Est.",
      },
      {
        title: {
          en: "ADNOC Service Stations Network",
          ar: "شبكة محطات خدمة أدنوك",
        },
        location: { en: "Al Ain & Abu Dhabi", ar: "العين وأبوظبي" },
      },
      {
        title: {
          en: "Rooftop Solar PV Plant at JAFZA",
          ar: "محطة طاقة شمسية كهروضوئية على الأسطح في جافزا",
        },
        location: { en: "Dubai", ar: "دبي" },
        client: "Al Etihad Energy Services",
        contractor: "Al Maden Mena",
      },
      {
        title: { en: "PV2 Power Project", ar: "مشروع الطاقة PV2" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        contractor: "CCS COMSERVICE FZ LLC / Man Energy",
      },
      {
        title: {
          en: "Power Substations Infrastructure",
          ar: "بنية تحتية لمحطات الكهرباء الفرعية",
        },
        location: { en: "Al Ain", ar: "العين" },
        consultant: "SNC LAVALIN",
        contractor: "El Race General Contracting Co. LLC",
      },
      {
        title: {
          en: "Al Wathba Strategic Tunnel",
          ar: "نفق الوثبة الاستراتيجي",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        contractor: "Al Wathba Cement Industries LLC",
      },
    ],
  },
  {
    id: "hospitality-luxury",
    title: {
      en: "Hospitality & Luxury Destinations",
      ar: "الضيافة والوجهات الفاخرة",
    },
    description: {
      en: "Luxury hospitality destinations, premium residential communities, and world-class lifestyle developments.",
      ar: "وجهات ضيافة فاخرة ومجتمعات سكنية راقية ومشاريع أسلوب حياة بمستوى عالمي.",
    },
    projects: [
      {
        title: { en: "Crowne Plaza Hotel", ar: "فندق كراون بلازا" },
        location: { en: "Dubai", ar: "دبي" },
        contractor: "Ancient Builders Constructions LLC",
      },
      {
        title: {
          en: "Al Raha Beach Waterfront Development",
          ar: "تطوير واجهة شاطئ الراحة البحرية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: {
          en: "DAMAC Lagoons, Venice & Portofino Clusters - 61 Luxury Villas",
          ar: "داماك لاجونز، مجموعتا فينيسيا وبورتوفينو - 61 فيلا فاخرة",
        },
        location: { en: "Dubai", ar: "دبي" },
        client: "DAMAC",
        consultant: "Lacasa Architects",
        contractor: "Ancient Builders Constructions LLC",
      },
      {
        title: {
          en: "Tilal Al Ghaf, The Harmony Development",
          ar: "تلال الغاف، مشروع ذا هارموني",
        },
        location: { en: "Dubai / Abu Dhabi", ar: "دبي / أبوظبي" },
      },
      {
        title: {
          en: "Al Forsan International Sports Resort",
          ar: "منتجع الفرسان الرياضي الدولي",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: {
          en: "Al Forsan Equestrian Club Expansion, Phase II",
          ar: "توسعة نادي الفرسان للفروسية، المرحلة الثانية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: {
          en: "Mirfa City Walkway Development",
          ar: "تطوير ممشى مدينة المرفأ",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Department of Municipalities & Transport",
      },
      {
        title: {
          en: "Saadiyat Luxury Villas Complex",
          ar: "مجمع فلل السعديات الفاخرة",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: { en: "Al Reem Island Tower", ar: "برج جزيرة الريم" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        contractor: "Teejan Contracting LLC",
      },
      {
        title: {
          en: "Yas Island Premium Villas, YAS Villa & Private Villas",
          ar: "فلل فاخرة في جزيرة ياس، فيلا ياس وفلل خاصة",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Abdullah Al Zaabi",
        contractor: "Auburn Electromechanical / Al Ahd General Contracting",
      },
    ],
  },
  {
    id: "healthcare-institutional",
    title: {
      en: "Healthcare & Institutional Facilities",
      ar: "المنشآت الصحية والمؤسسية",
    },
    description: {
      en: "Specialized healthcare and institutional facilities developed in compliance with rigorous governmental and operational standards.",
      ar: "منشآت صحية ومؤسسية متخصصة منفذة بما يتوافق مع معايير حكومية وتشغيلية دقيقة.",
    },
    projects: [
      {
        title: {
          en: "Saudi German Hospital",
          ar: "المستشفى السعودي الألماني",
        },
        location: { en: "Ajman & Dubai", ar: "عجمان ودبي" },
        contractor: "IHCC",
      },
      {
        title: {
          en: "YAS Clinic Health Facilities",
          ar: "منشآت ياس كلينك الصحية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: { en: "Fayyhealth Polyclinic", ar: "عيادة فاي هيلث متعددة التخصصات" },
        location: { en: "Dubai", ar: "دبي" },
        contractor: "Cherwell Interior Decoration LLC",
      },
      {
        title: {
          en: "Abu Dhabi Future Schools, ADEK, Various Campuses",
          ar: "مدارس أبوظبي المستقبلية، أدك، عدة مقرات",
        },
        location: { en: "Al Rahba, Al Bahya, etc.", ar: "الرحبة، الباهية، وغيرها" },
        client: "ADEK",
        consultant: "Althorath International",
        contractor: "Teejan Contracting LLC",
      },
      {
        title: {
          en: "Future International School, ADEK",
          ar: "مدرسة فيوتشر الدولية، أدك",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: { en: "Al Yasmina School", ar: "مدرسة الياسمينة" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Al Dar Properties PJSC",
        consultant: "GHD",
        contractor: "Tornado General Contracting LLC",
      },
      {
        title: { en: "Al Hudaybiya School", ar: "مدرسة الحديبية" },
        location: { en: "Dubai", ar: "دبي" },
        contractor: "Ovation General Contracting",
      },
      {
        title: {
          en: "Mirfa Marine Rehabilitation Center",
          ar: "مركز المرفأ لإعادة تأهيل الأحياء البحرية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Environment Agency Abu Dhabi",
      },
    ],
  },
  {
    id: "commercial-corporate",
    title: {
      en: "Commercial & Corporate Developments",
      ar: "المشاريع التجارية والشركات",
    },
    description: {
      en: "Corporate headquarters, premium commercial developments, and international industrial facilities engineered for performance and longevity.",
      ar: "مقار إدارية ومشاريع تجارية راقية ومنشآت صناعية دولية مصممة للأداء طويل الأمد.",
    },
    projects: [
      {
        title: {
          en: "Al Maryah Bank Headquarters",
          ar: "المقر الرئيسي لبنك المارية",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        contractor: "Citisape LLC",
      },
      {
        title: { en: "Al Maryah Vista Tower - SB13", ar: "برج المارية فيستا - SB13" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Webridge Properties LLC",
        consultant: "Pioneer Engineering Consultancy LLC",
        contractor: "A&M International General Contracting LLC",
      },
      {
        title: {
          en: "Mercedes-Benz Showrooms & Service Centers",
          ar: "معارض ومراكز خدمة مرسيدس-بنز",
        },
        location: { en: "Musaffah & Dubai", ar: "مصفح ودبي" },
        contractor: "Al Asser Al Raji Contractor",
      },
      {
        title: {
          en: "Sun Towers Project - Waterproofing Application",
          ar: "مشروع صن تاورز - تنفيذ أعمال العزل المائي",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        contractor: "SUN TOWERS GENERAL CONTRACTING L.L.C.",
      },
      {
        title: { en: "Kizad Headquarters, Area 3", ar: "المقر الرئيسي لكيزاد، المنطقة 3" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
      },
      {
        title: {
          en: "Himalaya Wellness Manufacturing Facility",
          ar: "منشأة تصنيع هيمالايا ويلنس",
        },
        location: { en: "Dubai Industrial City", ar: "مدينة دبي الصناعية" },
      },
      {
        title: {
          en: "Food Factory for Future Foods Industry LTD, Kezad Group",
          ar: "مصنع أغذية لشركة فيوتشر فودز، مجموعة كيزاد",
        },
        location: { en: "Abu Dhabi & Dubai", ar: "أبوظبي ودبي" },
        client: "Future Foods / Kezad Group",
        consultant: "Capital Engineering Consultancy / Winner Holistic Consultants",
        contractor: "China National Chemical Engineering Corporation, CNCEC",
      },
      {
        title: {
          en: "Al Ain Distribution Company",
          ar: "شركة العين للتوزيع",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        consultant: "ATKINS",
        contractor: "Allied ME Contracting & Gen. Maintenance LLC",
      },
      {
        title: { en: "M13B Office Building", ar: "مبنى مكاتب M13B" },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        consultant: "GHD",
        contractor: "Code Contracting Co. LLC",
      },
      {
        title: { en: "Motor City Control Tower", ar: "برج التحكم في موتور سيتي" },
        location: { en: "Dubai", ar: "دبي" },
        contractor: "Modular General Contracting LLC",
      },
      {
        title: {
          en: "Abu Dhabi Business Hub, Phase IV Warehouses",
          ar: "أبوظبي بزنس هب، مستودعات المرحلة الرابعة",
        },
      },
      {
        title: {
          en: "Umm Al Quwain Free Trade Zone Authority Buildings",
          ar: "مباني هيئة منطقة أم القيوين الحرة",
        },
      },
      {
        title: {
          en: "Al Safadi Restaurant Premium Facility",
          ar: "منشأة مطعم الصفدي الفاخرة",
        },
        location: { en: "Abu Dhabi", ar: "أبوظبي" },
        client: "Fadi Al Safadi",
        consultant: "Swah Design",
        contractor: "Continent General Contracting LLC",
      },
    ],
  },
];
