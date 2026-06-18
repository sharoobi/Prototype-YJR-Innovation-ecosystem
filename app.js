// Default fallback data to guarantee 100% offline functionality via file:// protocol
const defaultActorsBackup = [
  {
    "id": 1,
    "name_ar": "منظمة ديفرستي",
    "name_en": "Diversity Organization",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society",
    "stage": "scaling",
    "stage_ar": "التوسع",
    "stage_en": "Scaling",
    "governorate": "Aden",
    "governorate_ar": "عدن",
    "governorate_en": "Aden",
    "lat": 12.7855,
    "lng": 45.0186,
    "description_ar": "منظمة تقود مجموعة عمل الابتكار وتعمل على تمكين الفاعلين في المجال الإنساني.",
    "description_en": "Leads the Innovation Working Group and empowers actors in the humanitarian field.",
    "email": "info@diversityyemen.org",
    "phone": "+967 783632826",
    "connections": [2, 3, 5, 8]
  },
  {
    "id": 2,
    "name_ar": "الائتلاف الهولندي للإغاثة",
    "name_en": "Dutch Relief Alliance (DRA)",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society (Donor)",
    "stage": "scaling",
    "stage_ar": "التوسع",
    "stage_en": "Scaling",
    "governorate": "Sanaa",
    "governorate_ar": "صنعاء",
    "governorate_en": "Sanaa",
    "lat": 15.3694,
    "lng": 44.1910,
    "description_ar": "ائتلاف دولي يمول مشاريع الاستجابة المشتركة والابتكار الإنساني في اليمن.",
    "description_en": "An international alliance funding joint response and humanitarian innovation projects in Yemen.",
    "email": "info@dutchrelief.org",
    "phone": "+31 20 123456",
    "connections": [1, 5, 12]
  },
  {
    "id": 3,
    "name_ar": "جامعة عدن - مركز العلوم والتكنولوجيا",
    "name_en": "University of Aden - Science & Tech Center",
    "sector": "public",
    "sector_ar": "عام / حكومي",
    "sector_en": "Public / Academic",
    "stage": "research",
    "stage_ar": "البحث",
    "stage_en": "Research",
    "governorate": "Aden",
    "governorate_ar": "عدن",
    "governorate_en": "Aden",
    "lat": 12.8000,
    "lng": 44.9800,
    "description_ar": "مركز أكاديمي حكومي يعنى بالأبحاث العلمية وتطوير الابتكارات التقنية.",
    "description_en": "A public academic center focused on scientific research and technical innovations development.",
    "email": "stc@aden-univ.edu.ye",
    "phone": "+967 2 234567",
    "connections": [1, 4, 15]
  },
  {
    "id": 4,
    "name_ar": "مسرعة أعمال يمن تيك",
    "name_en": "YemenTech Accelerator",
    "sector": "private",
    "sector_ar": "خاص",
    "sector_en": "Private",
    "stage": "prototyping",
    "stage_ar": "النماذج",
    "stage_en": "Prototyping",
    "governorate": "Sanaa",
    "governorate_ar": "صنعاء",
    "governorate_en": "Sanaa",
    "lat": 15.3500,
    "lng": 44.2100,
    "description_ar": "حاضنة ومسرعة أعمال خاصة تدعم الابتكارات التقنية للشباب وتوفر التمويل الأولي.",
    "description_en": "Private business incubator and accelerator supporting youth tech innovations and seed funding.",
    "email": "startup@yementech.co",
    "phone": "+967 777123456",
    "connections": [3, 6, 7]
  },
  {
    "id": 5,
    "name_ar": "مؤسسة يمن للتنمية الإنسانية",
    "name_en": "Yemen Foundation for Human Development",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society",
    "stage": "adaptation",
    "stage_ar": "التكييف",
    "stage_en": "Adaptation",
    "governorate": "Taiz",
    "governorate_ar": "تعز",
    "governorate_en": "Taiz",
    "lat": 13.5795,
    "lng": 44.0159,
    "description_ar": "مؤسسة محلية تقوم بتكييف الابتكارات الزراعية لتناسب البيئات الجبلية في تعز.",
    "description_en": "A local foundation adapting agricultural innovations to suit mountain environments in Taiz.",
    "email": "info@yemenfhd.org",
    "phone": "+967 4 256789",
    "connections": [1, 2, 9]
  },
  {
    "id": 6,
    "name_ar": "شركة ابتكار سوفت للحلول الذكية",
    "name_en": "IbtikarSoft Smart Solutions",
    "sector": "private",
    "sector_ar": "خاص",
    "sector_en": "Private",
    "stage": "prototyping",
    "stage_ar": "النماذج",
    "stage_en": "Prototyping",
    "governorate": "Aden",
    "governorate_ar": "عدن",
    "governorate_en": "Aden",
    "lat": 12.7900,
    "lng": 45.0300,
    "description_ar": "شركة قطاع خاص تطور تطبيقات أندرويد منخفضة استهلاك البيانات للمجتمعات الإنسانية.",
    "description_en": "Private sector company developing low-data Android applications for humanitarian communities.",
    "email": "contact@ibtikarsoft.net",
    "phone": "+967 733987654",
    "connections": [4, 8, 10]
  },
  {
    "id": 7,
    "name_ar": "حاضنة أعمال رواد حضرموت",
    "name_en": "Hadramout Pioneers Incubator",
    "sector": "private",
    "sector_ar": "خاص",
    "sector_en": "Private",
    "stage": "ideation",
    "stage_ar": "الأفكار",
    "stage_en": "Ideation",
    "governorate": "Hadramout",
    "governorate_ar": "حضرموت",
    "governorate_en": "Hadramout",
    "lat": 14.5400,
    "lng": 49.1200,
    "description_ar": "مبادرة خاصة لاحتضان الأفكار الابتكارية لرواد الأعمال الشباب في المكلا.",
    "description_en": "A private initiative to incubate innovative ideas for young entrepreneurs in Mukalla.",
    "email": "pioneers@hadramout.biz",
    "phone": "+967 5 301234",
    "connections": [4, 11]
  },
  {
    "id": 8,
    "name_ar": "مبادرة شباب تك التنموية",
    "name_en": "ShababTech Development Initiative",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society",
    "stage": "ideation",
    "stage_ar": "الأفكار",
    "stage_en": "Ideation",
    "governorate": "Marib",
    "governorate_ar": "مأرب",
    "governorate_en": "Marib",
    "lat": 15.4630,
    "lng": 45.3252,
    "description_ar": "مبادرة شبابية تطوعية تسعى لنشر الوعي بالتقنيات والابتكار المجتمعي لمخيمات النازحين.",
    "description_en": "A youth volunteer initiative promoting technology and social innovation awareness for IDP camps.",
    "email": "shabab@maribtech.org",
    "phone": "+967 711223344",
    "connections": [1, 6, 13]
  },
  {
    "id": 9,
    "name_ar": "جامعة تعز - كلية الهندسة وتقنية المعلومات",
    "name_en": "Taiz University - Engineering & IT College",
    "sector": "public",
    "sector_ar": "عام / حكومي",
    "sector_en": "Public / Academic",
    "stage": "research",
    "stage_ar": "البحث",
    "stage_en": "Research",
    "governorate": "Taiz",
    "governorate_ar": "تعز",
    "governorate_en": "Taiz",
    "lat": 13.5600,
    "lng": 43.9900,
    "description_ar": "كلية حكومية تنفذ أبحاثاً أكاديمية وتدريبية حول أنظمة الطاقة المتجددة في الأرياف.",
    "description_en": "A public college conducting academic research and training on renewable energy systems in rural areas.",
    "email": "eng@taiz.edu.ye",
    "phone": "+967 4 211222",
    "connections": [5, 10, 15]
  },
  {
    "id": 10,
    "name_ar": "مؤسسة سحاب لحلول الطاقة الشمسية",
    "name_en": "Sahab Solar Solutions Foundation",
    "sector": "private",
    "sector_ar": "خاص",
    "sector_en": "Private",
    "stage": "prototyping",
    "stage_ar": "النماذج",
    "stage_en": "Prototyping",
    "governorate": "Taiz",
    "governorate_ar": "تعز",
    "governorate_en": "Taiz",
    "lat": 13.5850,
    "lng": 44.0300,
    "description_ar": "مؤسسة خاصة تختبر نماذج مضخات مياه شمسية ذكية ورخيصة التكلفة للمزارعين الصغار.",
    "description_en": "A private foundation testing smart, affordable solar water pump models for smallholder farmers.",
    "email": "solar@sahabsolutions.com",
    "phone": "+967 770112233",
    "connections": [6, 9, 14]
  },
  {
    "id": 11,
    "name_ar": "جامعة حضرموت - مركز ريادة الأعمال",
    "name_en": "Hadramout University - Entrepreneurship Center",
    "sector": "public",
    "sector_ar": "عام / حكومي",
    "sector_en": "Public / Academic",
    "stage": "research",
    "stage_ar": "البحث",
    "stage_en": "Research",
    "governorate": "Hadramout",
    "governorate_ar": "حضرموت",
    "governorate_en": "Hadramout",
    "lat": 14.5300,
    "lng": 49.1000,
    "description_ar": "مركز أبحاث حكومي يوثق واقع ومشاريع ريادة الأعمال والحلول الإبداعية في حضرموت.",
    "description_en": "A public research center documenting entrepreneurship status and creative solutions in Hadramout.",
    "email": "ecenter@hu.edu.ye",
    "phone": "+967 5 360987",
    "connections": [7, 12]
  },
  {
    "id": 12,
    "name_ar": "منظمة يمن للتعليم والتنمية (YEDO)",
    "name_en": "Yemen Education & Development Org",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society",
    "stage": "adaptation",
    "stage_ar": "التكييف",
    "stage_en": "Adaptation",
    "governorate": "Hadramout",
    "governorate_ar": "حضرموت",
    "governorate_en": "Hadramout",
    "lat": 14.5500,
    "lng": 49.1500,
    "description_ar": "منظمة غير حكومية تنشط في تكييف مناهج التعليم الإلكتروني للمناطق الريفية والنائية.",
    "description_en": "An NGO active in adapting e-learning curriculums for rural and remote areas.",
    "email": "yedo@yemen-edu.org",
    "phone": "+967 5 352468",
    "connections": [2, 11]
  },
  {
    "id": 13,
    "name_ar": "الهيئة العامة لتطوير تهامة",
    "name_en": "Tihama Development Authority",
    "sector": "public",
    "sector_ar": "عام / حكومي",
    "sector_en": "Public / Academic",
    "stage": "scaling",
    "stage_ar": "التوسع",
    "stage_en": "Scaling",
    "governorate": "Hodeidah",
    "governorate_ar": "الحديدة",
    "governorate_en": "Hodeidah",
    "lat": 14.7979,
    "lng": 42.9530,
    "description_ar": "هيئة حكومية تدعم التوسع في تقنيات الري الابتكارية وحصاد المياه في سهل تهامة.",
    "description_en": "A public authority supporting the expansion of innovative irrigation and water harvesting in Tihama.",
    "email": "tihama@agriculture.gov.ye",
    "phone": "+967 3 246810",
    "connections": [8, 14]
  },
  {
    "id": 14,
    "name_ar": "شبكة مزارعي تهامة التعاونية",
    "name_en": "Tihama Cooperative Farmers Network",
    "sector": "civil_society",
    "sector_ar": "مجتمع مدني",
    "sector_en": "Civil Society",
    "stage": "adaptation",
    "stage_ar": "التكييف",
    "stage_en": "Adaptation",
    "governorate": "Hodeidah",
    "governorate_ar": "الحديدة",
    "governorate_en": "Hodeidah",
    "lat": 14.8100,
    "lng": 42.9700,
    "description_ar": "شبكة مجتمعية تساعد المزارعين على تكييف الحلول البيولوجية لمكافحة الآفات الزراعية.",
    "description_en": "A community network helping farmers adapt biological pest control solutions locally.",
    "email": "farmers@tihamanet.org",
    "phone": "+967 733112244",
    "connections": [10, 13]
  },
  {
    "id": 15,
    "name_ar": "المعهد الفني الصناعي - عدن",
    "name_en": "Technical Industrial Institute - Aden",
    "sector": "public",
    "sector_ar": "عام / حكومي",
    "sector_en": "Public / Academic",
    "stage": "prototyping",
    "stage_ar": "النماذج",
    "stage_en": "Prototyping",
    "governorate": "Aden",
    "governorate_ar": "عدن",
    "governorate_en": "Aden",
    "lat": 12.8200,
    "lng": 44.9600,
    "description_ar": "معهد تقني حكومي يوفر مساحات عمل للطلاب لصناعة نماذج أولية للأجهزة المنزلية بالطاقة الشمسية.",
    "description_en": "A public technical institute providing maker spaces for students to prototype solar appliances.",
    "email": "tii.aden@edu.ye",
    "phone": "+967 2 245789",
    "connections": [3, 9]
  }
];

const yemenGovernorates = [
  { id: "Aden", ar: "عدن", en: "Aden", lat: 12.7855, lng: 45.0186 },
  { id: "Sanaa", ar: "صنعاء", en: "Sanaa", lat: 15.3694, lng: 44.1910 },
  { id: "Taiz", ar: "تعز", en: "Taiz", lat: 13.5795, lng: 44.0159 },
  { id: "Hadramout", ar: "حضرموت", en: "Hadramout", lat: 14.5400, lng: 49.1200 },
  { id: "Hodeidah", ar: "الحديدة", en: "Hodeidah", lat: 14.7979, lng: 42.9530 },
  { id: "Marib", ar: "مأرب", en: "Marib", lat: 15.4630, lng: 45.3252 },
  { id: "Ibb", ar: "إب", en: "Ibb", lat: 13.9734, lng: 44.1786 },
  { id: "Dhamar", ar: "ذمار", en: "Dhamar", lat: 14.5427, lng: 44.4072 },
  { id: "Shabwah", ar: "شبوة", en: "Shabwah", lat: 14.5298, lng: 46.8319 },
  { id: "Saada", ar: "صعدة", en: "Saada", lat: 16.9452, lng: 43.7639 },
  { id: "Al-Jawf", ar: "الجوف", en: "Al-Jawf", lat: 16.1623, lng: 44.7836 },
  { id: "Al-Mahrah", ar: "المهرة", en: "Al-Mahrah", lat: 16.2081, lng: 52.1748 },
  { id: "Socotra", ar: "سقطرى", en: "Socotra", lat: 12.4634, lng: 53.8237 },
  { id: "Hajjah", ar: "حجة", en: "Hajjah", lat: 15.6942, lng: 43.6041 },
  { id: "Amran", ar: "عمران", en: "Amran", lat: 15.9592, lng: 43.9439 },
  { id: "Al-Mahwit", ar: "المحويت", en: "Al-Mahwit", lat: 15.4703, lng: 43.5414 },
  { id: "Raymah", ar: "ريمة", en: "Raymah", lat: 14.6192, lng: 43.7125 },
  { id: "Al-Bayda", ar: "البيضاء", en: "Al-Bayda", lat: 14.0159, lng: 45.4244 },
  { id: "Abyan", ar: "أبين", en: "Abyan", lat: 13.2045, lng: 45.3789 },
  { id: "Lahj", ar: "لحج", en: "Lahj", lat: 13.0583, lng: 44.8778 },
  { id: "Al-Dhale", ar: "الضالع", en: "Al-Dhale'e", lat: 13.6953, lng: 44.7314 },
  { id: "Sanaa_City", ar: "أمانة العاصمة", en: "Sanaa City", lat: 15.3524, lng: 44.2078 }
];

function rebuildEcosystemDatabase() {
  const roleMapping = {
    funder: { ar: "ممول", en: "Funder" },
    enabler: { ar: "ممكن", en: "Enabler" },
    researcher: { ar: "باحث", en: "Researcher" },
    implementer: { ar: "منفذ", en: "Implementer" }
  };
  
  const thematicMapping = {
    water_energy: { ar: "المياه والطاقة", en: "Water & Energy" },
    food_agri: { ar: "الأمن الغذائي والزراعة", en: "Food & Agriculture" },
    health_nutrition: { ar: "الصحة والتغذية", en: "Health & Nutrition" },
    education_tech: { ar: "التعليم والتكنولوجيا", en: "Education & Tech" },
    logistics_response: { ar: "اللوجستيات والاستجابة الطارئة", en: "Logistics & Response" }
  };

  // Upgraded Seeds mapping
  const upgradedSeeds = defaultActorsBackup.map(actor => {
    let role = "implementer";
    let thematic_area = "education_tech";
    let maturity_score = 3.5;
    let funding_received = 25000;
    
    if (actor.id === 1) { role = "enabler"; thematic_area = "education_tech"; maturity_score = 4.8; funding_received = 150000; }
    else if (actor.id === 2) { role = "funder"; thematic_area = "logistics_response"; maturity_score = 5.0; funding_received = 0; }
    else if (actor.id === 3) { role = "researcher"; thematic_area = "education_tech"; maturity_score = 4.2; funding_received = 45000; }
    else if (actor.id === 4) { role = "enabler"; thematic_area = "education_tech"; maturity_score = 4.0; funding_received = 60000; }
    else if (actor.id === 5) { role = "implementer"; thematic_area = "food_agri"; maturity_score = 3.8; funding_received = 75000; }
    else if (actor.id === 6) { role = "implementer"; thematic_area = "education_tech"; maturity_score = 4.1; funding_received = 35000; }
    else if (actor.id === 7) { role = "enabler"; thematic_area = "education_tech"; maturity_score = 3.9; funding_received = 40000; }
    else if (actor.id === 8) { role = "implementer"; thematic_area = "education_tech"; maturity_score = 3.5; funding_received = 20000; }
    else if (actor.id === 9) { role = "researcher"; thematic_area = "water_energy"; maturity_score = 4.3; funding_received = 50000; }
    else if (actor.id === 10) { role = "implementer"; thematic_area = "water_energy"; maturity_score = 4.5; funding_received = 85000; }
    else if (actor.id === 11) { role = "researcher"; thematic_area = "food_agri"; maturity_score = 4.1; funding_received = 30000; }
    else if (actor.id === 12) { role = "implementer"; thematic_area = "education_tech"; maturity_score = 3.7; funding_received = 55000; }
    else if (actor.id === 13) { role = "enabler"; thematic_area = "food_agri"; maturity_score = 4.4; funding_received = 90000; }
    else if (actor.id === 14) { role = "implementer"; thematic_area = "food_agri"; maturity_score = 4.2; funding_received = 80000; }
    else if (actor.id === 15) { role = "researcher"; thematic_area = "water_energy"; maturity_score = 3.9; funding_received = 25000; }

    return {
      ...actor,
      role,
      role_ar: roleMapping[role].ar,
      role_en: roleMapping[role].en,
      thematic_area,
      thematic_area_ar: thematicMapping[thematic_area].ar,
      thematic_area_en: thematicMapping[thematic_area].en,
      maturity_score,
      funding_received
    };
  });

  const generatedActors = [...upgradedSeeds];

  // Helper patterns for names
  const ngoPrefixes = {
    ar: ["مؤسسة", "منظمة", "جمعية", "مبادرة", "شبكة"],
    en: ["Foundation", "Organization", "Association", "Initiative", "Network"]
  };
  const privatePrefixes = {
    ar: ["شركة", "منصة", "حاضنة كبرى لـ", "مسرعة أعمال", "مجموعة"],
    en: ["Company", "Platform", "Incubator", "Accelerator", "Group"]
  };
  const publicPrefixes = {
    ar: ["جامعة", "مركز أبحاث لـ", "الهيئة العامة لتنمية", "معهد", "مكتب وزارة"],
    en: ["University of", "Research Center for", "General Authority for", "Institute of", "Department of"]
  };

  const suffixes = {
    water_energy: {
      ar: ["الطاقة الشمسية", "تطوير مصادر المياه", "الطاقة المتجددة", "مشاريع سقي المياه", "الحلول البيئية المستدامة"],
      en: ["Solar Energy", "Water Resources Development", "Renewable Power", "Water Infiltration Projects", "Sustainable Eco-Solutions"]
    },
    food_agri: {
      ar: ["التنمية الزراعية", "الأمن الغذائي والري", "سلاسل قيمة المحاصيل", "أنظمة الري الذكية", "دعم الثروة الحيوانية والسمكية"],
      en: ["Agricultural Development", "Food Security & Irrigation", "Crop Value Chains", "Smart Irrigation Systems", "Livestock & Fisheries Support"]
    },
    health_nutrition: {
      ar: ["الرعاية الصحية الأولية", "مكافحة الأوبئة والاستجابة", "التغذية العلاجية المجتمعية", "العيادات الريفية المتنقلة", "صحة الأم والطفل"],
      en: ["Primary Healthcare", "Epidemic Control & Response", "Community Nutrition", "Rural Mobile Clinics", "Maternal & Child Health"]
    },
    education_tech: {
      ar: ["التعليم والابتكار التقني", "التدريب المهني والحرفي", "بناء القدرات والتعليم الرقمي", "الحلول البرمجية الإنسانية", "أكاديمية الريادة التكنولوجية"],
      en: ["Education & Tech Innovation", "Vocational & Craft Training", "Digital Capacity Building", "Humanitarian Tech Solutions", "Tech Leadership Academy"]
    },
    logistics_response: {
      ar: ["الاستجابة والخدمات اللوجستية في", "سلاسل الإمداد الإنسانية في", "تجهيز وتوزيع السلال الغذائية في", "الدعم الميداني العاجل في", "الإغاثة الطارئة والمأوى في"],
      en: ["Humanitarian Logistics Services in", "Ecosystem Supply Chains in", "Food Parcel Distribution in", "Urgent Field Support Services in", "Emergency Shelter & Relief in"]
    }
  };

  // Generate 200 actors (to reach exactly 215 total)
  for (let i = 16; i <= 215; i++) {
    const gov = yemenGovernorates[(i - 16) % yemenGovernorates.length];
    
    // Deterministic distribution based on ID
    let sector = "civil_society";
    if (i % 3 === 0) sector = "private";
    else if (i % 5 === 0) sector = "public";
    
    const sectorMapping = {
      civil_society: { ar: "مجتمع مدني", en: "Civil Society" },
      private: { ar: "خاص", en: "Private" },
      public: { ar: "عام / حكومي", en: "Public / Academic" }
    };
    
    const stageValues = ["research", "ideation", "adaptation", "prototyping", "scaling"];
    const stage = stageValues[(i % stageValues.length)];
    const stageMapping = {
      research: { ar: "البحث", en: "Research" },
      ideation: { ar: "الأفكار", en: "Ideation" },
      adaptation: { ar: "التكييف", en: "Adaptation" },
      prototyping: { ar: "النماذج", en: "Prototyping" },
      scaling: { ar: "التوسع", en: "Scaling" }
    };
    
    const thematicKeys = ["water_energy", "food_agri", "health_nutrition", "education_tech", "logistics_response"];
    const thematic_area = thematicKeys[(i % thematicKeys.length)];
    
    let role = "implementer";
    if (sector === "public") {
      role = (i % 2 === 0) ? "researcher" : "enabler";
    } else if (sector === "private") {
      role = (i % 3 === 0) ? "enabler" : "implementer";
    } else {
      role = (i % 7 === 0) ? "funder" : "implementer";
    }
    
    const maturity_score = parseFloat((2.5 + ((i * 13) % 25) / 10).toFixed(1)); // 2.5 to 4.9 stars
    const funding_received = role === "funder" ? 0 : Math.round((15000 + ((i * 723) % 85000)) / 1000) * 1000;
    
    // Choose prefixes & suffixes
    let prefix_ar = "";
    let prefix_en = "";
    if (sector === "public") {
      prefix_ar = publicPrefixes.ar[i % publicPrefixes.ar.length];
      prefix_en = publicPrefixes.en[i % publicPrefixes.en.length];
    } else if (sector === "private") {
      prefix_ar = privatePrefixes.ar[i % privatePrefixes.ar.length];
      prefix_en = privatePrefixes.en[i % privatePrefixes.en.length];
    } else {
      prefix_ar = ngoPrefixes.ar[i % ngoPrefixes.ar.length];
      prefix_en = ngoPrefixes.en[i % ngoPrefixes.en.length];
    }
    
    const suffix_ar = suffixes[thematic_area].ar[i % suffixes[thematic_area].ar.length];
    const suffix_en = suffixes[thematic_area].en[i % suffixes[thematic_area].en.length];
    
    // Construct names
    let name_ar = "";
    let name_en = "";
    if (sector === "public") {
      name_ar = `${prefix_ar} ${gov.ar} لـ ${suffix_ar}`;
      name_en = `${prefix_en} ${suffix_en} of ${gov.en}`;
    } else if (sector === "private") {
      name_ar = `${prefix_ar} ${gov.ar} لـ ${suffix_ar}`;
      name_en = `${gov.en} ${suffix_en} ${prefix_en}`;
    } else {
      name_ar = `${prefix_ar} ${suffix_ar} في ${gov.ar}`;
      name_en = `${gov.en} ${suffix_en} ${prefix_en}`;
    }
    
    const lat = gov.lat + (Math.sin(i) * 0.08); // Spiral dispersion around gov coordinates
    const lng = gov.lng + (Math.cos(i) * 0.08);
    
    generatedActors.push({
      id: i,
      name_ar,
      name_en,
      sector,
      sector_ar: sectorMapping[sector].ar,
      sector_en: sectorMapping[sector].en,
      stage,
      stage_ar: stageMapping[stage].ar,
      stage_en: stageMapping[stage].en,
      role,
      role_ar: roleMapping[role].ar,
      role_en: roleMapping[role].en,
      thematic_area,
      thematic_area_ar: thematicMapping[thematic_area].ar,
      thematic_area_en: thematicMapping[thematic_area].en,
      maturity_score,
      funding_received,
      governorate: gov.id,
      governorate_ar: gov.ar,
      governorate_en: gov.en,
      lat,
      lng,
      description_ar: `تعتبر ${name_ar} إحدى الجهات الرائدة في اليمن التي تركز على تطوير وتنفيذ حلول ذكية في قطاع ${thematicMapping[thematic_area].ar} لخدمة النازحين والفئات المتأثرة.`,
      description_en: `${name_en} is a leading institution in Yemen focused on launching smart solutions within the ${thematicMapping[thematic_area].en} sector to support vulnerable local groups.`,
      email: `contact@${name_en.toLowerCase().replace(/[^a-z0-9]/g, "")}.org.ye`,
      phone: `+967 7${(1000000 + (i * 9213) % 8999999)}`,
      connections: []
    });
  }

  // Generate bidirectional connections sequentially for structured networks
  for (let j = 0; j < generatedActors.length; j++) {
    const actor = generatedActors[j];
    
    // Link to at least one actor in the same governorate
    const sameGov = generatedActors.filter(a => a.governorate === actor.governorate && a.id !== actor.id);
    if (sameGov.length > 0) {
      const target = sameGov[j % sameGov.length];
      if (!actor.connections.includes(target.id)) actor.connections.push(target.id);
      if (!target.connections.includes(actor.id)) target.connections.push(actor.id);
    }
    
    // Link to at least one actor in the same thematic area
    const sameTheme = generatedActors.filter(a => a.thematic_area === actor.thematic_area && a.id !== actor.id);
    if (sameTheme.length > 0) {
      const target = sameTheme[(j + 2) % sameTheme.length];
      if (!actor.connections.includes(target.id)) actor.connections.push(target.id);
      if (!target.connections.includes(actor.id)) target.connections.push(actor.id);
    }
    
    // Random extra link to funder if it's an implementer
    if (actor.role === "implementer" && j % 4 === 0) {
      const funders = generatedActors.filter(a => a.role === "funder");
      if (funders.length > 0) {
        const funder = funders[j % funders.length];
        if (!actor.connections.includes(funder.id)) actor.connections.push(funder.id);
        if (!funder.connections.includes(actor.id)) funder.connections.push(actor.id);
      }
    }
  }

  actors = generatedActors;
  saveDatabase();
}

// Presets for the Auto-Generator
const randomActorPresets = [
  {
    "name_ar": "منصة يمن كارت الذكية",
    "name_en": "YemenCart Smart E-Commerce Platform",
    "sector": "private",
    "stage": "prototyping",
    "gov": "Sanaa",
    "email": "info@yemencart.net",
    "phone": "+967 775990011",
    "desc_ar": "منصة تسوق رقمية مبتكرة تسهل بيع المنتجات الحرفية للأسر المنتجة وأصحاب المشاريع المنزلية.",
    "desc_en": "Innovative digital marketplace connecting home business artisans to direct buyers."
  },
  {
    "name_ar": "مؤسسة عدن للحلول المستدامة",
    "name_en": "Aden Sustainable Solutions Foundation",
    "sector": "civil_society",
    "stage": "scaling",
    "gov": "Aden",
    "email": "sustainable@aden-solutions.org",
    "phone": "+967 735661122",
    "desc_ar": "مؤسسة تركز على التوسع في تقنيات فرز وإعادة تدوير البلاستيك بالشراكة مع السلطات المحلية والقطاع الخاص.",
    "desc_en": "Foundation scaling up plastic recycling networks in partnership with local municipalities."
  },
  {
    "name_ar": "مكتب زراعة تعز - وحدة المكافحة البيولوجية",
    "name_en": "Taiz Agriculture Dept - Bio-Control Unit",
    "sector": "public",
    "stage": "research",
    "gov": "Taiz",
    "email": "biocontrol@taiz-agri.gov.ye",
    "phone": "+967 4 233445",
    "desc_ar": "وحدة بحثية حكومية تدرس فاعلية الأعداء الطبيعيين الحشريين لمكافحة الآفات الزراعية كبديل للمبيدات الكيماوية.",
    "desc_en": "A government research unit studying beneficial insect predators to control farm pests without chemicals."
  },
  {
    "name_ar": "رواد حضرموت للطاقة النظيفة",
    "name_en": "Hadramout Pioneers for Clean Energy",
    "sector": "private",
    "stage": "ideation",
    "gov": "Hadramout",
    "email": "clean@hadramout-energy.com",
    "phone": "+967 711335577",
    "desc_ar": "مشروع ابتكاري ناشئ يسعى لتصميم وتصنيع مراوح توليد طاقة هيدروليكية صغيرة الحجم للاستخدام المنزلي.",
    "desc_en": "A startup designing micro-hydraulic energy generators for home-level clean electricity."
  },
  {
    "name_ar": "مبادرة سبأ للري بالتنقيط الذكي",
    "name_en": "Saba Smart Drip Irrigation Initiative",
    "sector": "civil_society",
    "stage": "adaptation",
    "gov": "Marib",
    "email": "saba.irrigation@marib.org",
    "phone": "+967 770889922",
    "desc_ar": "مبادرة مجتمعية تطبق وتكيف شبكات الري بالتنقيط المزودة بحساسات رطوبة محلية الصنع في مزارع مأرب الجافة.",
    "desc_en": "A community initiative adapting low-cost smart soil moisture sensors to reduce farm water waste."
  },
  {
    "name_ar": "ميناء الحديدة - مركز أتمتة الشحن",
    "name_en": "Hodeidah Port - Cargo Automation Center",
    "sector": "public",
    "stage": "scaling",
    "gov": "Hodeidah",
    "email": "automation@hodeidahport.gov.ye",
    "phone": "+967 3 211002",
    "desc_ar": "مركز تقني حكومي يعمل على التوسع في أتمتة وإدارة حاويات الشحن رقمياً لتقليص أوقات الانتظار والتفتيش.",
    "desc_en": "A public technical center scaling up digital cargo logistics management to reduce wait times."
  }
];

// App State
let actors = [];
let filteredActors = [];
let currentLang = 'ar';
let activeTheme = 'neon';
let mapInstance = null;
let mapTileLayer = null; // Dynamically swapped theme tile layer
let markersGroup = null;
let networkInstance = null;
let networkPhysicsEnabled = true; // Global network physics state
let chartSectors = null;
let chartStages = null;
let chartThematic = null;
let isTourActive = false;
let tourCurrentStep = 0;

function maskPhone(phone) {
  if (!phone) return '-';
  const cleaned = phone.trim();
  if (cleaned.length <= 5) return '*****';
  return cleaned.substring(0, cleaned.length - 5) + '*****';
}

// Presentation & Strategy Portal State
let currentPresSlide = 0;
let isPresentationMode = true;

// Localization Dictionaries
const locales = {
  ar: {
    title: "خريطة منظومة الابتكار الإنساني والاجتماعي - اليمن",
    subtitle: "منصة تفاعلية وديناميكية لرصد وتصنيف الفاعلين وبناء شبكات التشبيك (YJR)",
    navSimBtn: "محاكي إدخال Kobo",
    tabDash: "لوحة التحكم والإحصائيات",
    tabDir: "دليل الفاعلين الكامل",
    tabSim: "محاكي استمارة Kobo Toolbox",
    statTotal: "إجمالي الجهات الفاعلة",
    statCivil: "منظمات المجتمع المدني",
    statPrivate: "القطاع الخاص ورواد الأعمال",
    statPublic: "القطاع الأكاديمي والحكومي",
    filtersTitle: "تصفية وبحث",
    filterGov: "المحافظة",
    filterSector: "القطاع",
    filterStage: "مرحلة الابتكار",
    govAll: "كل المحافظات",
    sectorAll: "كل القطاعات",
    sectorCivil: "المجتمع المدني (NGOs)",
    sectorPrivate: "القطاع الخاص",
    sectorPublic: "القطاع العام / الأكاديمي",
    stageAll: "كل المراحل",
    stageRes: "البحث (Research)",
    stageIdea: "توليد الأفكار (Ideation)",
    stageAdapt: "التكييف والملائمة (Adaptation)",
    stageProto: "النماذج الأولية (Prototyping)",
    stageScale: "التوسع والاستدامة (Scaling)",
    btnReset: "إعادة ضبط الفلاتر",
    titleMap: "الخريطة التفاعلية للفاعلين (اليمن)",
    mapHint: "اسحب الخريطة واضغط على المؤشرات لعرض التفاصيل",
    titleNetwork: "شبكة العلاقات والتعاون والتشبيك",
    netHint: "اضغط على أي عقدة للتركيز على علاقاتها المباشرة",
    titleCharts: "الرسوم التحليلية والتوزيع الإحصائي",
    dirTitle: "دليل الجهات الفاعلة المسجلة في النظام",
    btnExportCsv: "تصدير CSV",
    btnExportJson: "تصدير JSON",
    btnResetDb: "إعادة تعيين قاعدة البيانات",
    thName: "اسم الجهة",
    thSector: "القطاع",
    thStage: "مرحلة الابتكار",
    thGov: "المحافظة",
    thEmail: "البريد الإلكتروني",
    thPhone: "الهاتف",
    thDesc: "الوصف والنشاط",
    simTitle: "محاكاة استمارة Kobo Toolbox لتسجيل فاعل جديد",
    simSubtitle: "قم بملء البيانات أدناه لمحاكاة عملية الإرسال الفعلي للاستبيان ورؤية كيف يتم تحديث لوحة التحكم تفاعلياً بشكل فوري دون الحاجة لخوادم وسيطة.",
    formNameAr: "اسم الجهة (بالعربية) *",
    formNameEn: "اسم الجهة (بالإنجليزية) *",
    formSector: "القطاع الرئيسي *",
    formStage: "مرحلة الابتكار الحالية *",
    formGov: "المحافظة *",
    formPartner: "الشريك المرتبط (للتشبيك) (اختياري)",
    formEmail: "البريد الإلكتروني",
    formPhone: "الهاتف",
    formDescAr: "شرح النشاط والابتكار (بالعربية)",
    formDescEn: "شرح النشاط والابتكار (بالإنجليزية)",
    btnSubmitForm: "إرسال البيانات وتحديث لوحة البيانات فوراً",
    btnRandActor: "توليد جهة عشوائية ذكية",
    consoleTitle: "Kobo API Data Packet Output",
    searchPlaceholder: "ابحث باسم الجهة...",
    toastSuccess: "تمت إضافة الجهة الفاعلة وتحديث لوحة البيانات بنجاح!",
    
    // Phase 2 translations
    lblBtnPhysicsPause: "تجميد فيزيائية الحركة",
    lblBtnPhysicsPlay: "تشغيل فيزيائية الحركة",
    lblBtnStabilize: "إعادة تنظيم",
    lblNetDensity: "كثافة التشبيك: ",
    txtFooterLogoText: "منظومة YJR لخرائط الابتكار",
    txtFooterDesc: "خريطة منظومة الابتكار الإنساني والاجتماعي - اليمن (YJR). منصة متقدمة وتفاعلية لإدارة وتصنيف الفاعلين وبناء شبكات التشبيك الفعالة.",
    txtFooterPhilosophyTitle: "💡 فلسفة المنظومة",
    txtFooterPhilosophyDesc: "نؤمن بأن الاستجابة الإنسانية الفعالة في اليمن تبدأ من التمكين والابتكار المحلي. من خلال ربط البحث الأكاديمي، الأفكار الإبداعية، والتمويل المستدام، نخلق شبكة متكاملة قادرة على الصمود ومواجهة التحديات في المناطق الأكثر احتياجاً.",
    txtFooterMetaTitle: "⚙️ تفاصيل الإصدار",
    txtFooterCopy: "تم التطوير بواسطة  <a href=\"https://github.com/Sharoobi\" target=\"_blank\" class=\"designer-link\">Sharoobi</a> لصالح منظومة الابتكار المشتركة لليمن <br> <span style=\"font-size: 11px; opacity: 0.7;\">Prototype built for YJR Evaluation &copy; 2026. All rights reserved.</span>"
  },
  en: {
    title: "Humanitarian & Social Innovation Ecosystem Map - Yemen",
    subtitle: "Interactive and dynamic platform mapping actors and networking linkages (YJR)",
    navSimBtn: "Kobo Form Simulator",
    tabDash: "Dashboard & Statistics",
    tabDir: "Complete Directory",
    tabSim: "Kobo Toolbox Simulator",
    statTotal: "Total Innovation Actors",
    statCivil: "Civil Society Orgs (NGOs)",
    statPrivate: "Private Sector & Startups",
    statPublic: "Public & Academic Sector",
    filtersTitle: "Search & Filter",
    filterGov: "Governorate",
    filterSector: "Sector",
    filterStage: "Innovation Stage",
    govAll: "All Governorates",
    sectorAll: "All Sectors",
    sectorCivil: "Civil Society (NGOs)",
    sectorPrivate: "Private Sector",
    sectorPublic: "Public / Academic",
    stageAll: "All Stages",
    stageRes: "Research",
    stageIdea: "Ideation",
    stageAdapt: "Adaptation",
    stageProto: "Prototyping",
    stageScale: "Scaling & Sustainability",
    btnReset: "Reset Filters",
    titleMap: "Interactive Geographic Map (Yemen)",
    mapHint: "Drag and click on markers to view details",
    titleNetwork: "Collaborative Network and Linkages",
    netHint: "Click on nodes to highlight relationships",
    titleCharts: "Analytical Distribution Charts",
    dirTitle: "Registered Innovation Actors Directory",
    btnExportCsv: "Export CSV",
    btnExportJson: "Export JSON",
    btnResetDb: "Reset Database",
    thName: "Actor Name",
    thSector: "Sector",
    thStage: "Innovation Stage",
    thGov: "Governorate",
    thEmail: "Email",
    thPhone: "Phone",
    thDesc: "Description & Activities",
    simTitle: "Kobo Toolbox Questionnaire Simulator",
    simSubtitle: "Fill out the questionnaire below to simulate live Kobo API data integration and see how the dashboard updates instantly.",
    formNameAr: "Actor Name (Arabic) *",
    formNameEn: "Actor Name (English) *",
    formSector: "Primary Sector *",
    formStage: "Current Innovation Stage *",
    formGov: "Governorate *",
    formPartner: "Related Partner (Optional)",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formDescAr: "Activities Description (Arabic)",
    formDescEn: "Activities Description (English)",
    btnSubmitForm: "Submit Data & Update Dashboard Instantly",
    btnRandActor: "Generate Random Actor",
    consoleTitle: "Kobo API Data Packet Output",
    searchPlaceholder: "Search by actor name...",
    toastSuccess: "Actor added successfully and dashboard updated!",
    
    // Phase 2 translations
    lblBtnPhysicsPause: "Freeze Physics Movement",
    lblBtnPhysicsPlay: "Resume Physics Movement",
    lblBtnStabilize: "Re-stabilize Layout",
    lblNetDensity: "Networking Density: ",
    txtFooterLogoText: "YJR Innovation Mapping System",
    txtFooterDesc: "Humanitarian & Social Innovation Ecosystem Map - Yemen (YJR). An advanced, interactive platform to monitor, classify, and network humanitarian innovators.",
    txtFooterPhilosophyTitle: "💡 System Philosophy",
    txtFooterPhilosophyDesc: "We believe that effective humanitarian response in Yemen begins with local empowerment and innovation. By bridging academic research, creative thinking, and sustainable scaling, we create a resilient ecosystem.",
    txtFooterMetaTitle: "⚙️ Release Metadata",
    txtFooterCopy: "Developed by Developer & Innovation Partner <a href=\"https://github.com/Sharoobi\" target=\"_blank\" class=\"designer-link\">Sharoobi</a> for Yemen Joint Response Innovation Ecosystem <br> <span style=\"font-size: 11px; opacity: 0.7;\">Prototype built for YJR Evaluation &copy; 2026. All rights reserved.</span>"
  }
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Load database from localStorage or load defaults
  loadDatabase();
  
  // Init Presentation Deck
  initPresentation();
  
  // Apply visual theme
  changeTheme(activeTheme);
  
  // Set default localized UI
  applyLocalization();
  
  // Init Map (Leaflet)
  initMap();
  
  // Init Charts
  initCharts();

  // Populate dynamic UI components
  populateFiltersAndForms();
  
  // Filter & Render
  updateDashboardViews();
  
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Auto-trigger tour if never completed
  setTimeout(() => {
    const tourCompleted = safeGetItem("yiep_tour_completed");
    if (!tourCompleted) {
      startOnboardingTour();
    }
  }, 1200);
});

// Safe localStorage wrapper
function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("localStorage is disabled or not supported:", e);
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("localStorage is disabled or not supported:", e);
  }
}

// Database Persistence Manager
function loadDatabase() {
  const localDb = safeGetItem("yjr_actors_db");
  const localTheme = safeGetItem("yjr_active_theme");
  
  if (localTheme) {
    activeTheme = localTheme;
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector) themeSelector.value = activeTheme;
  }
  
  let needsRebuild = false;
  if (localDb) {
    try {
      actors = JSON.parse(localDb);
      if (actors.length < 215 || !actors[0].hasOwnProperty('role')) {
        needsRebuild = true;
      }
    } catch (e) {
      needsRebuild = true;
    }
  } else {
    needsRebuild = true;
  }
  
  if (needsRebuild) {
    rebuildEcosystemDatabase();
  } else {
    filteredActors = [...actors];
  }
}

function saveDatabase() {
  safeSetItem("yjr_actors_db", JSON.stringify(actors));
}

function resetDatabase() {
  const confirmMsg = currentLang === 'ar' ? 
    "هل أنت متأكد من إعادة تعيين قاعدة البيانات للمطابقة الأصلية وحذف جميع الجهات المضافة؟" : 
    "Are you sure you want to reset the database to defaults and delete all added actors?";
    
  if (confirm(confirmMsg)) {
    rebuildEcosystemDatabase();
    filteredActors = [...actors];
    populateFiltersAndForms();
    updateDashboardViews();
    showToast(currentLang === 'ar' ? "تمت إعادة ضبط قاعدة البيانات للوضع الافتراضي" : "Database reset to default settings.");
  }
}

// Visual Theme Swap Manager
function changeTheme(themeName) {
  activeTheme = themeName;
  safeSetItem("yjr_active_theme", themeName);
  
  document.body.classList.remove('theme-neon', 'theme-emerald', 'theme-light');
  document.body.classList.add('theme-' + themeName);
  
  // Sync select inputs
  const mainSel = document.getElementById("theme-selector");
  if (mainSel) mainSel.value = themeName;
  const presSel = document.getElementById("pres-theme-selector");
  if (presSel) presSel.value = themeName;
  
  // Swap Leaflet map tiles dynamically
  updateMapTiles();
  
  // Update Chart.js default colors dynamically based on light/dark theme
  if (typeof Chart !== 'undefined') {
    const isLight = themeName === 'light';
    const gridColor = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
    const textColor = isLight ? '#0f172a' : '#9ca3af';
    
    Chart.defaults.color = textColor;
    
    if (chartSectors && chartStages) {
      chartSectors.options.plugins.title.color = isLight ? '#0f172a' : '#f3f4f6';
      chartStages.options.plugins.title.color = isLight ? '#0f172a' : '#f3f4f6';
      chartStages.options.scales.y.grid.color = gridColor;
      
      // Switch chart colors for better visibility matching theme accents
      if (themeName === 'light') {
        chartStages.data.datasets[0].backgroundColor = 'rgba(37, 99, 235, 0.65)';
        chartStages.data.datasets[0].borderColor = '#2563eb';
      } else if (themeName === 'emerald') {
        chartStages.data.datasets[0].backgroundColor = 'rgba(16, 185, 129, 0.65)';
        chartStages.data.datasets[0].borderColor = '#10b981';
      } else { // neon
        chartStages.data.datasets[0].backgroundColor = 'rgba(138, 43, 226, 0.5)';
        chartStages.data.datasets[0].borderColor = '#8a2be2';
      }
      
      chartSectors.update();
      chartStages.update();
    }
    
    if (chartThematic) {
      chartThematic.options.plugins.title.color = isLight ? '#0f172a' : '#f3f4f6';
      if (chartThematic.options.scales && chartThematic.options.scales.r) {
        const gridCol = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
        chartThematic.options.scales.r.grid.color = gridCol;
        chartThematic.options.scales.r.angleLines.color = gridCol;
      }
      chartThematic.update();
    }
  }
  
  // Update markers to match colors if map initialized
  if (mapInstance) {
    updateDashboardViews();
  }
}

// Preset Auto-Generator logic
function generateRandomActorPreset() {
  const randomIndex = Math.floor(Math.random() * randomActorPresets.length);
  const preset = randomActorPresets[randomIndex];
  
  document.getElementById("form-name-ar").value = preset.name_ar;
  document.getElementById("form-name-en").value = preset.name_en;
  document.getElementById("form-sector").value = preset.sector;
  document.getElementById("form-stage").value = preset.stage;
  document.getElementById("form-gov").value = preset.gov;
  document.getElementById("form-email").value = preset.email;
  document.getElementById("form-phone").value = preset.phone;
  document.getElementById("form-desc-ar").value = preset.desc_ar;
  document.getElementById("form-desc-en").value = preset.desc_en;
  
  // Select a random partner if possible
  const partnerSelect = document.getElementById("form-partner");
  if (partnerSelect && partnerSelect.options.length > 1) {
    const randomPartnerIndex = Math.floor(Math.random() * (partnerSelect.options.length - 1)) + 1;
    partnerSelect.selectedIndex = randomPartnerIndex;
  }
  
  showToast(currentLang === 'ar' ? "تم توليد جهة عشوائية وتعبئتها في الاستمارة!" : "Generated random actor and populated the form!");
}

// Decision Support Strategic Gaps Analyzer
function runGapsAnalysis() {
  const gapsOutput = document.getElementById("gaps-analyzer-output");
  if (!gapsOutput) return;
  
  // 1. Calculate ratios
  const total = actors.length;
  const sectors = { civil_society: 0, private: 0, public: 0 };
  const stages = { research: 0, ideation: 0, adaptation: 0, prototyping: 0, scaling: 0 };
  const govCounts = {};
  
  actors.forEach(a => {
    sectors[a.sector]++;
    stages[a.stage]++;
    govCounts[a.governorate] = (govCounts[a.governorate] || 0) + 1;
  });
  
  // Compute average connectivity
  let totalConnections = 0;
  actors.forEach(a => {
    if (a.connections) totalConnections += a.connections.length;
  });
  const avgConnections = total > 0 ? (totalConnections / total).toFixed(1) : 0;
  
  // 2. Formulate Recommendations
  const insights = [];
  
  // Gaps on Stages
  if (stages.scaling / total < 0.2) {
    insights.push({
      icon: "alert-triangle",
      iconColor: "#f59e0b",
      title_ar: "فجوة تمويل التوسع والاستدامة (Scaling Gap)",
      title_en: "Scaling & Sustainability Funding Gap",
      desc_ar: `يمثل الفاعلون في مرحلة "التوسع" فقط ${( (stages.scaling / total) * 100 ).toFixed(0)}% من المنظومة. التوصية: يجب على المانحين مثل DRA توجيه تمويل إضافي لدعم نقل النماذج الأولية الناجحة إلى السوق أو المجتمعات المتأثرة.`,
      desc_en: `Actors in the 'Scaling' stage represent only ${( (stages.scaling / total) * 100 ).toFixed(0)}% of the ecosystem. Recommendation: Donors like DRA should direct seed funds to transition successful prototypes into market-ready models.`
    });
  } else {
    insights.push({
      icon: "check-circle",
      iconColor: "#10b981",
      title_ar: "مؤشر نضج الابتكار مستقر",
      title_en: "Healthy Innovation Maturity Index",
      desc_ar: `هناك تمثيل جيد لمشاريع التوسع والاستدامة في اليمن بنسبة تزيد عن 20%، مما يعكس انتقالاً ناجحاً من الأفكار النظرية للحلول الميدانية المستدامة.`,
      desc_en: `Scaling projects maintain a strong representation above 20%, showing a healthy transition from theoretical ideation to sustainable field solutions.`
    });
  }
  
  // Gaps on Collaborations (Connections)
  if (avgConnections < 2.0) {
    insights.push({
      icon: "link-2-off",
      iconColor: "#ef4444",
      title_ar: "ضعف التشبيك والشراكات البينية",
      title_en: "Weak Networking & Peer Collaborations",
      desc_ar: `متوسط العلاقات للفاعل الواحد هو ${avgConnections} روابط فقط. المنظومة مجزأة. التوصية: تدشين ورش عمل تشاركية تحت مظلة مجموعة عمل الابتكار لتسهيل التحالفات المباشرة بين الأكاديميين والمنظمات الإنسانية.`,
      desc_en: `Average connections per actor is only ${avgConnections}. The ecosystem is fragmented. Recommendation: Launch collaborative workshops to bridge academic researchers directly with humanitarian NGOs.`
    });
  } else {
    insights.push({
      icon: "link-2",
      iconColor: "#10b981",
      title_ar: "ترابط منظومي قوي (High Connectivity)",
      title_en: "Strong Ecosystem Linkages",
      desc_ar: `متوسط التشبيك هو ${avgConnections} روابط لكل فاعل، مما يشير إلى وجود تحالفات وشراكات نشطة تدعم كفاءة تقديم الخدمات الإنسانية في اليمن.`,
      desc_en: `Average connections stand at ${avgConnections} per actor, demonstrating active peer-to-peer partnerships and high efficiency in project delivery.`
    });
  }
  
  // Gaps on Governorates
  const lowGovs = [];
  const allGovList = ["Aden", "Sanaa", "Taiz", "Hadramout", "Marib", "Hodeidah"];
  allGovList.forEach(g => {
    if (!govCounts[g] || govCounts[g] < 2) {
      lowGovs.push(g);
    }
  });
  
  if (lowGovs.length > 0) {
    const govsListAr = lowGovs.map(g => g === 'Aden' ? 'عدن' : g === 'Sanaa' ? 'صنعاء' : g === 'Taiz' ? 'تعز' : g === 'Hadramout' ? 'حضرموت' : g === 'Marib' ? 'مأرب' : 'الحديدة').join('، ');
    insights.push({
      icon: "map-pin",
      iconColor: "#3b82f6",
      title_ar: "فجوة التغطية الجغرافية للابتكار",
      title_en: "Geographical Innovation Coverage Gap",
      desc_ar: `تفتقر المحافظات التالية (${govsListAr}) لوجود فاعلين ابتكاريين نشطين بشكل كافٍ (أقل من فاعلين 2). التوصية: توجيه حاضنات الأعمال والمنظمات المحلية للعمل الميداني في هذه المحافظات تحديداً وتدريب المبادرات المحلية.`,
      desc_en: `The following governorates (${lowGovs.join(', ')}) lack active innovation actors (less than 2). Recommendation: Incite incubators and local NGOs to establish field offices and train community groups in these specific areas.`
    });
  }
  
  // Render insights
  gapsOutput.innerHTML = "";
  insights.forEach(ins => {
    const title = currentLang === 'ar' ? ins.title_ar : ins.title_en;
    const desc = currentLang === 'ar' ? ins.desc_ar : ins.desc_en;
    
    const card = document.createElement("div");
    card.className = "insight-card";
    
    // Style card borders based on localization direction
    card.style.borderLeft = currentLang === 'en' ? `4px solid ${ins.iconColor}` : 'none';
    card.style.borderRight = currentLang === 'ar' ? `4px solid ${ins.iconColor}` : 'none';
    
    card.innerHTML = `
      <div class="insight-header" style="color: ${ins.iconColor}; gap: 6px; display: flex; align-items: center;">
        <i data-lucide="${ins.icon}" class="btn-icon-sm" style="margin: 0; display: inline-block;"></i>
        <span>${title}</span>
      </div>
      <div class="insight-desc" style="margin-top: 8px;">${desc}</div>
    `;
    gapsOutput.appendChild(card);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Setup Map
function initMap() {
  const mapContainer = document.getElementById("yemen-map");
  if (!mapContainer) return;
  
  try {
    if (typeof L === 'undefined') {
      throw new Error("Leaflet library failed to load");
    }
    // Center of Yemen: Lat 15.0, Lng 46.5, Zoom 6
    mapInstance = L.map("yemen-map").setView([15.0, 46.5], 6);
    
    // Setup theme-based tile layer
    updateMapTiles();
    
    markersGroup = L.layerGroup().addTo(mapInstance);
  } catch (err) {
    console.error("Map initialization failed:", err);
    mapContainer.innerHTML = `
      <div class="offline-placeholder" style="padding: 40px 20px; text-align: center; color: var(--text-secondary); background: rgba(0, 0, 0, 0.1); border: 1px dashed var(--glass-border); border-radius: 8px; margin: 10px 0;">
        <i data-lucide="wifi-off" style="width: 48px; height: 48px; margin-bottom: 15px; color: var(--primary); display: inline-block;"></i>
        <p style="font-weight: bold; margin-bottom: 8px;">
          ${currentLang === 'ar' ? 'تعذر تحميل خريطة اليمن التفاعلية' : 'Interactive Map could not be loaded'}
        </p>
        <p style="font-size: 12px; max-width: 320px; margin: 0 auto; opacity: 0.8;">
          ${currentLang === 'ar' ? 'يتطلب تحميل الخريطة اتصالاً نشطاً بالإنترنت لتحميل مكتبة Leaflet والخرائط الأساسية.' : 'Loading the map requires an active internet connection to load Leaflet and map tiles.'}
        </p>
      </div>
    `;
  }
}

// Update Map tiles dynamically based on theme selection and language
function updateMapTiles() {
  if (!mapInstance || typeof L === 'undefined') return;
  
  try {
    if (mapTileLayer) {
      mapInstance.removeLayer(mapTileLayer);
    }
    
    let tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'; // Neon (Default Dark)
    if (currentLang === 'ar') {
      tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // OpenStreetMap Arabic/Localized for Yemen
    } else {
      if (activeTheme === 'light') {
        tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'; // Frosty Light (Positron)
      } else if (activeTheme === 'emerald') {
        tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'; // Emerald Organic (Voyager)
      }
    }
    
    mapTileLayer = L.tileLayer(tileUrl, {
      attribution: currentLang === 'ar' ? '&copy; المساهمون في OpenStreetMap' : '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapInstance);
  } catch (err) {
    console.error("Failed to update map tiles:", err);
  }
}

// Setup Charts
function initCharts() {
  const canvasSectors = document.getElementById("chart-sectors");
  const canvasStages = document.getElementById("chart-stages");
  const canvasThematic = document.getElementById("chart-thematic");
  if (!canvasSectors || !canvasStages) return;
  
  try {
    if (typeof Chart === 'undefined') {
      throw new Error("Chart.js library failed to load");
    }
    const ctxSectors = canvasSectors.getContext("2d");
    const ctxStages = canvasStages.getContext("2d");
    
    Chart.defaults.color = activeTheme === 'light' ? '#0f172a' : '#9ca3af';
    Chart.defaults.font.family = currentLang === 'ar' ? 'Tajawal' : 'Inter';
    
    // Sectors Chart
    chartSectors = new Chart(ctxSectors, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ['rgba(59, 130, 246, 0.65)', 'rgba(245, 158, 11, 0.65)', 'rgba(16, 185, 129, 0.65)'],
          borderColor: ['#3b82f6', '#f59e0b', '#10b981'],
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10 } },
          title: { display: true, text: currentLang === 'ar' ? 'توزيع القطاعات' : 'Sectors Distribution', color: activeTheme === 'light' ? '#0f172a' : '#f3f4f6' }
        }
      }
    });
  
    // Stages Chart
    chartStages = new Chart(ctxStages, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: currentLang === 'ar' ? 'عدد الجهات' : 'No. of Actors',
          data: [],
          backgroundColor: activeTheme === 'light' ? 'rgba(124, 58, 237, 0.65)' : 'rgba(138, 43, 226, 0.5)',
          borderColor: activeTheme === 'light' ? '#7c3aed' : '#8a2be2',
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: activeTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255, 255, 255, 0.05)' } },
          x: { grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: currentLang === 'ar' ? 'مراحل الابتكار' : 'Innovation Stages', color: activeTheme === 'light' ? '#0f172a' : '#f3f4f6' }
        }
      }
    });

    // Thematic Areas Chart
    if (canvasThematic) {
      const ctxThematic = canvasThematic.getContext("2d");
      chartThematic = new Chart(ctxThematic, {
        type: 'polarArea',
        data: {
          labels: [],
          datasets: [{
            data: [],
            backgroundColor: [
              'rgba(59, 130, 246, 0.55)', 
              'rgba(245, 158, 11, 0.55)', 
              'rgba(16, 185, 129, 0.55)', 
              'rgba(138, 43, 226, 0.55)', 
              'rgba(236, 72, 153, 0.55)'
            ],
            borderColor: ['#3b82f6', '#f59e0b', '#10b981', '#8a2be2', '#ec4899'],
            borderWidth: 1.5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              grid: { color: activeTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255, 255, 255, 0.05)' },
              angleLines: { color: activeTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255, 255, 255, 0.05)' },
              ticks: { display: false }
            }
          },
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 10, padding: 8, font: { size: 9 } } },
            title: { display: true, text: currentLang === 'ar' ? 'مجالات التركيز القطاعية' : 'Thematic Focus Areas', color: activeTheme === 'light' ? '#0f172a' : '#f3f4f6' }
          }
        }
      });
    }
  } catch (err) {
    console.error("Charts initialization failed:", err);
    const chartsGrid = document.querySelector(".charts-grid");
    if (chartsGrid) {
      chartsGrid.innerHTML = `
        <div class="offline-placeholder" style="grid-column: span 3; padding: 40px 20px; text-align: center; color: var(--text-secondary); border: 1px dashed var(--glass-border); border-radius: 8px; background: rgba(0, 0, 0, 0.1);">
          <i data-lucide="wifi-off" style="width: 48px; height: 48px; margin-bottom: 15px; color: var(--primary); display: inline-block;"></i>
          <p style="font-weight: bold; margin-bottom: 8px;">
            ${currentLang === 'ar' ? 'تعذر تحميل الرسوم البيانية التحليلية' : 'Analytical Charts could not be loaded'}
          </p>
          <p style="font-size: 12px; max-width: 320px; margin: 0 auto; opacity: 0.8;">
            ${currentLang === 'ar' ? 'يتطلب رسم المخططات اتصالاً نشطاً بالإنترنت لتحميل مكتبة Chart.js.' : 'Rendering charts requires an active internet connection to load the Chart.js library.'}
          </p>
        </div>
      `;
    }
  }
}

// Populate Partners dropdown in form simulator
function populateFiltersAndForms() {
  const partnerSelect = document.getElementById("form-partner");
  if (!partnerSelect) return;
  
  partnerSelect.innerHTML = "";
  
  // Add an option for "None"
  const noneOpt = document.createElement("option");
  noneOpt.value = "none";
  noneOpt.innerText = currentLang === 'ar' ? "لا يوجد - مستقل" : "None - Independent";
  partnerSelect.appendChild(noneOpt);
  
  actors.forEach(actor => {
    const opt = document.createElement("option");
    opt.value = actor.id;
    opt.innerText = currentLang === 'ar' ? actor.name_ar : actor.name_en;
    partnerSelect.appendChild(opt);
  });
}

// Language Switch
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.body.className = currentLang === 'ar' ? 'lang-ar' : 'lang-en';
  document.body.classList.add('theme-' + activeTheme);
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  
  const toggleBtn = document.getElementById("btn-lang-toggle");
  if (toggleBtn) toggleBtn.innerText = currentLang === 'ar' ? 'English' : 'العربية';
  
  const presToggleBtn = document.getElementById("pres-btn-lang-toggle");
  if (presToggleBtn) presToggleBtn.innerText = currentLang === 'ar' ? 'English' : 'العربية';
  
  applyLocalization();
  updateMapTiles();
  
  // Re-run graphs and charts in new language if Chart.js is loaded
  if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = currentLang === 'ar' ? 'Tajawal' : 'Inter';
    if (chartSectors) chartSectors.options.plugins.title.text = currentLang === 'ar' ? 'توزيع القطاعات' : 'Sectors Distribution';
    if (chartStages) {
      chartStages.options.plugins.title.text = currentLang === 'ar' ? 'مراحل الابتكار' : 'Innovation Stages';
      chartStages.data.datasets[0].label = currentLang === 'ar' ? 'عدد الجهات' : 'No. of Actors';
    }
    if (chartThematic) chartThematic.options.plugins.title.text = currentLang === 'ar' ? 'مجالات التركيز القطاعية' : 'Thematic Focus Areas';
  }
  
  populateFiltersAndForms();
  updateDashboardViews();
}

function applyLocalization() {
  const dict = locales[currentLang];
  
  document.getElementById("txt-title").innerText = dict.title;
  document.getElementById("txt-subtitle").innerText = dict.subtitle;
  document.getElementById("txt-nav-sim-btn").innerText = dict.navSimBtn;
  document.getElementById("txt-tab-dash").innerText = dict.tabDash;
  document.getElementById("txt-tab-dir").innerText = dict.tabDir;
  document.getElementById("txt-tab-sim").innerText = dict.tabSim;
  
  if (document.getElementById("lbl-stat-total")) document.getElementById("lbl-stat-total").innerText = currentLang === 'ar' ? "إجمالي الجهات الفاعلة" : "Total Mapped Actors";
  if (document.getElementById("lbl-stat-funding")) document.getElementById("lbl-stat-funding").innerText = currentLang === 'ar' ? "التمويل الموجه للابتكار" : "Total Directed Funding";
  if (document.getElementById("lbl-stat-partnerships")) document.getElementById("lbl-stat-partnerships").innerText = currentLang === 'ar' ? "الشراكات والتحالفات" : "Ecosystem Partnerships";
  if (document.getElementById("lbl-stat-innovations")) document.getElementById("lbl-stat-innovations").innerText = currentLang === 'ar' ? "الابتكارات الميدانية الموسعة" : "Scaled Innovations Mapped";
  
  document.getElementById("lbl-filters-title").innerText = dict.filtersTitle;
  document.getElementById("search-box").placeholder = dict.searchPlaceholder;
  document.getElementById("lbl-filter-gov").innerText = dict.filterGov;
  document.getElementById("lbl-filter-sector").innerText = dict.filterSector;
  document.getElementById("lbl-filter-stage").innerText = dict.filterStage;
  
  // New filters
  if (document.getElementById("lbl-filter-role")) document.getElementById("lbl-filter-role").innerText = currentLang === 'ar' ? "دور الجهة" : "Role";
  if (document.getElementById("lbl-filter-thematic")) document.getElementById("lbl-filter-thematic").innerText = currentLang === 'ar' ? "المجال القطاعي" : "Thematic Area";
  if (document.getElementById("lbl-filter-maturity")) document.getElementById("lbl-filter-maturity").innerText = currentLang === 'ar' ? "مؤشر نضج الابتكار" : "Innovation Maturity";
  
  document.getElementById("opt-gov-all").innerText = dict.govAll;
  document.getElementById("opt-sector-all").innerText = dict.sectorAll;
  document.getElementById("opt-sector-civil").innerText = dict.sectorCivil;
  document.getElementById("opt-sector-private").innerText = dict.sectorPrivate;
  document.getElementById("opt-sector-public").innerText = dict.sectorPublic;
  
  if (document.getElementById("opt-role-all")) document.getElementById("opt-role-all").innerText = currentLang === 'ar' ? "كل الأدوار" : "All Roles";
  if (document.getElementById("opt-thematic-all")) document.getElementById("opt-thematic-all").innerText = currentLang === 'ar' ? "كل المجالات" : "All Thematic Areas";
  if (document.getElementById("opt-maturity-all")) document.getElementById("opt-maturity-all").innerText = currentLang === 'ar' ? "كل درجات النضج" : "All Maturity Scores";
  
  document.getElementById("opt-stage-all").innerText = dict.stageAll;
  document.getElementById("opt-stage-res").innerText = dict.stageRes;
  document.getElementById("opt-stage-idea").innerText = dict.stageIdea;
  document.getElementById("opt-stage-adapt").innerText = dict.stageAdapt;
  document.getElementById("opt-stage-proto").innerText = dict.stageProto;
  document.getElementById("opt-stage-scale").innerText = dict.stageScale;
  document.getElementById("btn-reset-filters-text").innerText = dict.btnReset;
  
  document.getElementById("lbl-title-map").innerText = dict.titleMap;
  document.getElementById("lbl-map-hint").innerText = dict.mapHint;
  document.getElementById("lbl-title-network").innerText = dict.titleNetwork;
  document.getElementById("lbl-net-hint").innerText = dict.netHint;
  document.getElementById("lbl-title-charts").innerText = dict.titleCharts;
  
  document.getElementById("lbl-dir-title").innerText = dict.dirTitle;
  document.getElementById("btn-export-csv-text").innerText = dict.btnExportCsv;
  document.getElementById("btn-export-json-text").innerText = dict.btnExportJson;
  document.getElementById("btn-reset-db-text").innerText = dict.btnResetDb;
  
  document.getElementById("th-name").innerText = dict.thName;
  document.getElementById("th-sector").innerText = dict.thSector;
  if (document.getElementById("th-role")) document.getElementById("th-role").innerText = currentLang === 'ar' ? "دور الجهة" : "Role";
  if (document.getElementById("th-thematic")) document.getElementById("th-thematic").innerText = currentLang === 'ar' ? "المجال القطاعي" : "Thematic Area";
  document.getElementById("th-stage").innerText = dict.thStage;
  document.getElementById("th-gov").innerText = dict.thGov;
  if (document.getElementById("th-maturity")) document.getElementById("th-maturity").innerText = currentLang === 'ar' ? "مؤشر النضج" : "Maturity Score";
  document.getElementById("th-email").innerText = dict.thEmail;
  document.getElementById("th-phone").innerText = dict.thPhone;
  document.getElementById("th-desc").innerText = dict.thDesc;
  
  document.getElementById("lbl-sim-title").innerText = dict.simTitle;
  document.getElementById("lbl-sim-subtitle").innerText = dict.simSubtitle;
  document.getElementById("lbl-form-name-ar").innerText = dict.formNameAr;
  document.getElementById("lbl-form-name-en").innerText = dict.formNameEn;
  document.getElementById("lbl-form-sector").innerText = dict.formSector;
  document.getElementById("lbl-form-stage").innerText = dict.formStage;
  document.getElementById("lbl-form-gov").innerText = dict.formGov;
  document.getElementById("lbl-form-partner").innerText = dict.formPartner;
  document.getElementById("lbl-form-email").innerText = dict.formEmail;
  document.getElementById("lbl-form-phone").innerText = dict.formPhone;
  document.getElementById("lbl-form-desc-ar").innerText = dict.formDescAr;
  document.getElementById("lbl-form-desc-en").innerText = dict.formDescEn;
  document.getElementById("btn-rand-actor-text").innerText = dict.btnRandActor;
  document.getElementById("btn-submit-form-text").innerText = dict.btnSubmitForm;
  document.getElementById("lbl-console-title").innerText = dict.consoleTitle;
  document.getElementById("lbl-title-gaps").innerText = currentLang === 'ar' ? "محلل الفجوات والفرص الاستراتيجية (نظام دعم القرار الذكي)" : "Strategic Gaps & Opportunities Analyzer (Smart Decision Support)";
  
  document.getElementById("opt-form-sec-civil").innerText = dict.sectorCivil;
  document.getElementById("opt-form-sec-private").innerText = dict.sectorPrivate;
  document.getElementById("opt-form-sec-public").innerText = dict.sectorPublic;
  document.getElementById("opt-form-stg-res").innerText = dict.stageRes;
  document.getElementById("opt-form-stg-idea").innerText = dict.stageIdea;
  document.getElementById("opt-form-stg-adapt").innerText = dict.stageAdapt;
  document.getElementById("opt-form-stg-proto").innerText = dict.stageProto;
  document.getElementById("opt-form-stg-scale").innerText = dict.stageScale;
  
  // Phase 2 New elements
  document.getElementById("lbl-btn-physics").innerText = networkPhysicsEnabled ? dict.lblBtnPhysicsPause : dict.lblBtnPhysicsPlay;
  document.getElementById("lbl-btn-stabilize").innerText = dict.lblBtnStabilize;
  document.getElementById("txt-footer-logo-text").innerText = dict.txtFooterLogoText;
  document.getElementById("txt-footer-desc").innerText = dict.txtFooterDesc;
  document.getElementById("txt-footer-philosophy-title").innerHTML = `<i data-lucide="lightbulb" class="btn-icon-sm"></i> <span>${dict.txtFooterPhilosophyTitle}</span>`;
  document.getElementById("txt-footer-philosophy-desc").innerText = dict.txtFooterPhilosophyDesc;
  document.getElementById("txt-footer-meta-title").innerHTML = `<i data-lucide="info" class="btn-icon-sm"></i> <span>${dict.txtFooterMetaTitle}</span>`;
  document.getElementById("txt-footer-copy").innerHTML = dict.txtFooterCopy;
  
  if (isTourActive) {
    renderTourStep();
  }
  
  // Refresh Lucide Icons after translations are inserted
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Switching Tabs
function switchTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");
  
  contents.forEach(content => content.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));
  
  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.add("active");
  
  // Highlight correct button
  let btnId = "";
  if (tabId === 'tab-landing') btnId = "tab-btn-land";
  else if (tabId === 'tab-dashboard') {
    btnId = "tab-btn-dash";
    if (mapInstance) {
      setTimeout(() => mapInstance.invalidateSize(), 100);
    }
  }
  else if (tabId === 'tab-funding') btnId = "tab-btn-funding";
  else if (tabId === 'tab-copilot') btnId = "tab-btn-copilot";
  else if (tabId === 'tab-directory') btnId = "tab-btn-dir";
  else if (tabId === 'tab-simulator') btnId = "tab-btn-sim";
  else if (tabId === 'tab-pres-deck') btnId = "tab-btn-pres-deck";
  else if (tabId === 'tab-architecture') btnId = "tab-btn-arch";
  
  const activeBtn = document.getElementById(btnId);
  if (activeBtn) activeBtn.classList.add("active");
}

// Filters logic
function applyFilters() {
  const searchQuery = document.getElementById("search-box").value.toLowerCase();
  const govFilter = document.getElementById("filter-gov").value;
  const sectorFilter = document.getElementById("filter-sector").value;
  const stageFilter = document.getElementById("filter-stage").value;
  
  // New filters
  const roleFilter = document.getElementById("filter-role") ? document.getElementById("filter-role").value : 'all';
  const thematicFilter = document.getElementById("filter-thematic") ? document.getElementById("filter-thematic").value : 'all';
  const maturityFilter = document.getElementById("filter-maturity") ? document.getElementById("filter-maturity").value : 'all';
  
  filteredActors = actors.filter(actor => {
    const matchesSearch = actor.name_ar.toLowerCase().includes(searchQuery) || 
                          actor.name_en.toLowerCase().includes(searchQuery) ||
                          actor.description_ar.toLowerCase().includes(searchQuery) ||
                          actor.description_en.toLowerCase().includes(searchQuery);
                          
    const matchesGov = govFilter === 'all' || actor.governorate === govFilter;
    const matchesSector = sectorFilter === 'all' || actor.sector === sectorFilter;
    const matchesStage = stageFilter === 'all' || actor.stage === stageFilter;
    
    // New filter matching
    const matchesRole = roleFilter === 'all' || actor.role === roleFilter;
    const matchesThematic = thematicFilter === 'all' || actor.thematic_area === thematicFilter;
    
    let matchesMaturity = true;
    if (maturityFilter !== 'all') {
      const minMaturity = parseFloat(maturityFilter);
      matchesMaturity = (actor.maturity_score || 0) >= minMaturity;
    }
    
    return matchesSearch && matchesGov && matchesSector && matchesStage && matchesRole && matchesThematic && matchesMaturity;
  });
  
  updateDashboardViews();
}

function resetFilters() {
  document.getElementById("search-box").value = "";
  document.getElementById("filter-gov").value = "all";
  document.getElementById("filter-sector").value = "all";
  document.getElementById("filter-stage").value = "all";
  if (document.getElementById("filter-role")) document.getElementById("filter-role").value = "all";
  if (document.getElementById("filter-thematic")) document.getElementById("filter-thematic").value = "all";
  if (document.getElementById("filter-maturity")) document.getElementById("filter-maturity").value = "all";
  applyFilters();
}

// Refresh all UI elements
function updateDashboardViews() {
  // 1. Update Stats Card Counters, Progress Bars & Badges
  const totalCount = filteredActors.length;
  
  let totalFunding = 0;
  let scaledCount = 0;
  let linksSet = new Set();
  
  filteredActors.forEach(actor => {
    totalFunding += actor.funding_received || 0;
    if ((actor.maturity_score || 0) >= 4.0) {
      scaledCount++;
    }
    
    if (actor.connections) {
      actor.connections.forEach(connId => {
        const isTargetInFiltered = filteredActors.some(a => a.id === connId);
        if (isTargetInFiltered) {
          const pair = [actor.id, connId].sort((a,b) => a-b).join('-');
          linksSet.add(pair);
        }
      });
    }
  });

  // Inject additional demo funding award if step 3 is triggered in guided tour
  if (window.demoFundingAwarded) {
    totalFunding += 85000;
  }
  
  const partnershipsCount = linksSet.size;

  const statTotalEl = document.getElementById("stat-total");
  const statFundingEl = document.getElementById("stat-funding");
  const statPartnershipsEl = document.getElementById("stat-partnerships");
  const statInnovationsEl = document.getElementById("stat-innovations");

  if (statTotalEl) statTotalEl.innerText = totalCount;
  if (statFundingEl) statFundingEl.innerText = "$" + (totalFunding / 1000000).toFixed(2) + "M";
  if (statPartnershipsEl) statPartnershipsEl.innerText = partnershipsCount;
  if (statInnovationsEl) statInnovationsEl.innerText = scaledCount;

  // Update progress bars widths
  const pbTotal = document.getElementById("pb-stat-total");
  const pbFunding = document.getElementById("pb-stat-funding");
  const pbPartnerships = document.getElementById("pb-stat-partnerships");
  const pbInnovations = document.getElementById("pb-stat-innovations");

  // Max bounds for percentages (realistic estimations)
  const maxActors = 250;
  const maxFunding = 2000000;
  const maxPartnerships = 60;
  const maxInnovations = 30;

  if (pbTotal) pbTotal.style.width = Math.min(100, Math.round((totalCount / maxActors) * 100)) + "%";
  if (pbFunding) pbFunding.style.width = Math.min(100, Math.round((totalFunding / maxFunding) * 100)) + "%";
  if (pbPartnerships) pbPartnerships.style.width = Math.min(100, Math.round((partnershipsCount / maxPartnerships) * 100)) + "%";
  if (pbInnovations) pbInnovations.style.width = Math.min(100, Math.round((scaledCount / maxInnovations) * 100)) + "%";

  // Update badges text
  const badgeTotal = document.getElementById("badge-stat-total");
  const badgeFunding = document.getElementById("badge-stat-funding");
  const badgePartnerships = document.getElementById("badge-stat-partnerships");
  const badgeInnovations = document.getElementById("badge-stat-innovations");

  if (badgeTotal) badgeTotal.innerText = currentLang === 'ar' ? "نشط" : "Active";
  if (badgeFunding) badgeFunding.innerText = currentLang === 'ar' ? "منح" : "Grants";
  if (badgePartnerships) badgePartnerships.innerText = currentLang === 'ar' ? "روابط" : "Links";
  if (badgeInnovations) badgeInnovations.innerText = "★4.0+";
  
  // 2. Render Map markers with Sonar Pulse CSS
  try {
    if (typeof L !== 'undefined' && markersGroup) {
      markersGroup.clearLayers();
      filteredActors.forEach(actor => {
        const title = currentLang === 'ar' ? actor.name_ar : actor.name_en;
        const desc = currentLang === 'ar' ? actor.description_ar : actor.description_en;
        const secName = currentLang === 'ar' ? actor.sector_ar : actor.sector_en;
        const stgName = currentLang === 'ar' ? actor.stage_ar : actor.stage_en;
        const govName = currentLang === 'ar' ? actor.governorate_ar : actor.governorate_en;
        
        const popupContent = `
          <div class="popup-title">${title}</div>
          <div style="font-size: 11px; margin-bottom: 5px;">
            <strong>${currentLang === 'ar' ? 'القطاع' : 'Sector'}:</strong> ${secName} | 
            <strong>${currentLang === 'ar' ? 'المحافظة' : 'Gov'}:</strong> ${govName}
          </div>
          <div style="font-size: 11px; margin-bottom: 8px;">
            <strong>${currentLang === 'ar' ? 'المرحلة' : 'Stage'}:</strong> ${stgName}
          </div>
          <div class="popup-desc">${desc}</div>
          <div style="font-size: 10px; margin-top: 5px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px; color: var(--primary);">
            ${actor.email || ''} | ${maskPhone(actor.phone)}
          </div>
        `;
        
        // Marker color coding based on sector
        let color = '#3b82f6'; // public
        if (actor.sector === 'private') color = '#f59e0b';
        if (actor.sector === 'civil_society') color = '#10b981';
        
        // Dynamic Sonar Pulse Icon
        const customIcon = L.divIcon({
          className: 'custom-map-icon',
          html: `<div class="sonar-dot" style="background-color: ${color}; color: ${color};"></div>`,
          iconSize: [14, 14]
        });

        L.marker([actor.lat, actor.lng], { icon: customIcon })
          .bindPopup(popupContent)
          .addTo(markersGroup);
      });
    }
  } catch (err) {
    console.error("Error drawing map markers:", err);
  }
  
  // 3. Render Vis.js Network Graph
  try {
    if (typeof vis !== 'undefined') {
      renderNetwork();
    }
  } catch (err) {
    console.error("Error drawing vis network:", err);
  }
  
  // 4. Render Chart.js
  try {
    if (typeof Chart !== 'undefined' && chartSectors && chartStages) {
      renderCharts();
    }
  } catch (err) {
    console.error("Error updating charts:", err);
  }
  
  // 5. Populate table directory
  renderDirectoryTable();
  
  // 6. Run Strategic Gaps Analyzer
  runGapsAnalysis();
}

// Vis.js Network Graph (with interactive neighbors Focus Mode)
// Vis.js Network Graph (with interactive neighbors Focus Mode & Floating details panel)
function renderNetwork() {
  const container = document.getElementById("network-graph");
  if (!container) return;
  
  try {
    if (typeof vis === 'undefined') {
      throw new Error("Vis.js library failed to load");
    }
    const nodesArray = [];
    const edgesArray = [];
    
    // Limit network rendering when too many nodes are present to avoid visual clutter
    let actorsToRender = [...filteredActors];
    const isShowingSubset = filteredActors.length > 40;
    
    if (isShowingSubset) {
      // Sort by maturity score descending to showcase key innovation hubs
      actorsToRender.sort((a, b) => (b.maturity_score || 0) - (a.maturity_score || 0));
      actorsToRender = actorsToRender.slice(0, 40);
    }
    
    // Dynamic hint text update based on subset status
    const netHint = document.getElementById("lbl-net-hint");
    if (netHint) {
      if (isShowingSubset) {
        netHint.innerText = currentLang === 'ar'
          ? "⚠️ تم عرض أبرز 40 جهة لمنع الازدحام. استخدم الفلاتر للتبسيط."
          : "⚠️ Showing top 40 hubs for clarity. Use sidebar filters to simplify.";
        netHint.style.color = "var(--accent)";
      } else {
        netHint.innerText = currentLang === 'ar'
          ? "اضغط على أي عقدة لعرض العلاقات والتفاصيل البينية"
          : "Click any node to focus on its direct relationships";
        netHint.style.color = "var(--secondary)";
      }
    }
    
    // Add nodes to render list
    actorsToRender.forEach(actor => {
      const label = currentLang === 'ar' ? actor.name_ar : actor.name_en;
      
      // Node styling by sector & active theme
      let color = { background: 'rgba(59, 130, 246, 0.15)', border: '#3b82f6', highlight: { background: 'rgba(59, 130, 246, 0.3)', border: '#60a5fa' } };
      let fontColor = '#ffffff';
      
      if (actor.sector === 'private') {
        if (activeTheme === 'light') {
          color = { background: '#fef3c7', border: '#d97706', highlight: { background: '#fde68a', border: '#b45309' } };
          fontColor = '#78350f';
        } else if (activeTheme === 'emerald') {
          color = { background: 'rgba(217, 119, 6, 0.15)', border: '#d97706', highlight: { background: 'rgba(217, 119, 6, 0.3)', border: '#fbbf24' } };
          fontColor = '#fcd34d';
        } else { // neon
          color = { background: 'rgba(245, 158, 11, 0.15)', border: '#f59e0b', highlight: { background: 'rgba(245, 158, 11, 0.3)', border: '#fbbf24' } };
          fontColor = '#fcd34d';
        }
      } else if (actor.sector === 'civil_society') {
        if (activeTheme === 'light') {
          color = { background: '#dcfce7', border: '#15803d', highlight: { background: '#bbf7d0', border: '#166534' } };
          fontColor = '#14532d';
        } else if (activeTheme === 'emerald') {
          color = { background: 'rgba(16, 185, 129, 0.15)', border: '#10b981', highlight: { background: 'rgba(16, 185, 129, 0.3)', border: '#34d399' } };
          fontColor = '#a7f3d0';
        } else { // neon
          color = { background: 'rgba(16, 185, 129, 0.15)', border: '#10b981', highlight: { background: 'rgba(16, 185, 129, 0.3)', border: '#34d399' } };
          fontColor = '#34d399';
        }
      } else { // public / default
        if (activeTheme === 'light') {
          color = { background: '#dbeafe', border: '#1d4ed8', highlight: { background: '#bfdbfe', border: '#1e40af' } };
          fontColor = '#1e3a8a';
        } else if (activeTheme === 'emerald') {
          color = { background: 'rgba(99, 102, 241, 0.15)', border: '#6366f1', highlight: { background: 'rgba(99, 102, 241, 0.3)', border: '#818cf8' } };
          fontColor = '#c7d2fe';
        } else { // neon
          color = { background: 'rgba(59, 130, 246, 0.15)', border: '#3b82f6', highlight: { background: 'rgba(59, 130, 246, 0.3)', border: '#60a5fa' } };
          fontColor = '#60a5fa';
        }
      }
      
      // Dynamic sizes & border widths based on maturity score representing actor importance
      const maturity = actor.maturity_score || 3.0;
      const fSize = 10 + Math.floor(maturity * 0.8); // 12px to 14px
      const bWidth = 1.5 + (maturity * 0.3); // 2.4px to 3px
      
      nodesArray.push({
        id: actor.id,
        label: label,
        color: color,
        font: { 
          color: fontColor, 
          face: currentLang === 'ar' ? 'Tajawal' : 'Inter', 
          size: fSize, 
          bold: true 
        },
        shape: 'box',
        shapeProperties: { borderRadius: 8 },
        borderWidth: bWidth,
        shadow: { enabled: true, color: 'rgba(0,0,0,0.3)', size: 5, x: 2, y: 2 },
        margin: 10
      });
      
      // Add edges for connections if target exists in our rendered list
      if (actor.connections && Array.isArray(actor.connections)) {
        actor.connections.forEach(connId => {
          if (connId > actor.id && actorsToRender.some(a => a.id === connId)) {
            edgesArray.push({
              from: actor.id,
              to: connId,
              color: { 
                color: activeTheme === 'light' ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255,255,255,0.12)', 
                highlight: 'var(--primary)',
                hover: 'var(--primary)'
              },
              width: 1.8,
              smooth: { type: 'continuous', roundness: 0.45 }
            });
          }
        });
      }
    });
    
    const nodes = new vis.DataSet(nodesArray);
    const edges = new vis.DataSet(edgesArray);
    
    const data = { nodes, edges };
    
    // Compute Network Density (edges divided by maximum possible edges)
    const nodeCount = actorsToRender.length;
    let edgeCount = edgesArray.length;
    let density = 0;
    if (nodeCount > 1) {
      const maxEdges = (nodeCount * (nodeCount - 1)) / 2;
      density = ((edgeCount / maxEdges) * 100).toFixed(1);
    }
    const densityLabel = document.getElementById("lbl-net-density");
    if (densityLabel) {
      densityLabel.innerText = (currentLang === 'ar' ? locales.ar.lblNetDensity : locales.en.lblNetDensity) + density + "%";
    }
    
    const options = {
      physics: {
        enabled: networkPhysicsEnabled,
        stabilization: { iterations: 150, fit: true },
        barnesHut: {
          gravitationalConstant: -2200,
          centralGravity: 0.25,
          springLength: 120,
          springConstant: 0.045,
          damping: 0.09
        }
      },
      interaction: {
        hover: true,
        zoomView: true
      }
    };
    
    if (networkInstance) {
      networkInstance.destroy();
    }
    networkInstance = new vis.Network(container, data, options);
    
    // Vis.js interactive Focus Mode logic
    networkInstance.on("click", function (params) {
      if (params.nodes.length > 0) {
        const selectedId = params.nodes[0];
        
        // Find connected nodes
        const connectedNodeIds = networkInstance.getConnectedNodes(selectedId);
        
        // Style updates: Highlight selection + neighbors, blur others
        const updateArray = [];
        nodes.forEach(node => {
          const isSelected = node.id === selectedId;
          const isConnected = connectedNodeIds.includes(node.id);
          
          if (isSelected) {
            updateArray.push({ id: node.id, font: { size: 14 }, borderWidth: 3.5 });
          } else if (isConnected) {
            updateArray.push({ id: node.id, opacity: 1, font: { size: 11 } });
          } else {
            updateArray.push({ id: node.id, opacity: 0.15, font: { size: 9 } });
          }
        });
        nodes.update(updateArray);

        // Show floating details panel
        const actor = actors.find(a => a.id === selectedId);
        if (actor) {
          showNetworkNodeDetails(actor);
        }
      } else {
        // Clicked in empty space: Reset opacity & sizing for all nodes
        const resetArray = [];
        nodes.forEach(node => {
          const actor = actors.find(a => a.id === node.id);
          const maturity = actor ? (actor.maturity_score || 3.0) : 3.0;
          const fSize = 10 + Math.floor(maturity * 0.8);
          const bWidth = 1.5 + (maturity * 0.3);
          resetArray.push({ id: node.id, opacity: 1, font: { size: fSize }, borderWidth: bWidth });
        });
        nodes.update(resetArray);

        // Close details panel
        closeNetworkNodePanel();
      }
    });
  } catch (err) {
    console.error("Network graph rendering failed:", err);
    container.innerHTML = `
      <div class="offline-placeholder" style="padding: 40px 20px; text-align: center; color: var(--text-secondary); background: rgba(0,0,0,0.1); border: 1px dashed var(--glass-border); border-radius: 8px;">
        <i data-lucide="wifi-off" style="width: 48px; height: 48px; margin-bottom: 15px; color: var(--primary); display: inline-block;"></i>
        <p style="font-weight: bold; margin-bottom: 8px;">
          ${currentLang === 'ar' ? 'تعذر تحميل شبكة العلاقات التفاعلية' : 'Interactive Linkages Network could not be loaded'}
        </p>
        <p style="font-size: 12px; max-width: 320px; margin: 0 auto; opacity: 0.8;">
          ${currentLang === 'ar' ? 'تتطلب هذه الشبكة اتصالاً نشطاً بالإنترنت لتحميل مكتبة Vis.js وتشغيل المحاكي الفيزيائي.' : 'This network graph requires an active internet connection to load the Vis.js library.'}
        </p>
      </div>
    `;
    const densityLabel = document.getElementById("lbl-net-density");
    if (densityLabel) densityLabel.innerText = "";
  }
}

// Show/Hide Floating Details Panel for Vis.js Network Graph
function showNetworkNodeDetails(actor) {
  const panel = document.getElementById("network-node-panel");
  const body = document.getElementById("net-panel-body");
  const title = document.getElementById("net-panel-title");
  
  if (!panel || !body) return;
  
  const name = currentLang === 'ar' ? actor.name_ar : actor.name_en;
  const sector = currentLang === 'ar' ? actor.sector_ar : actor.sector_en;
  const stage = currentLang === 'ar' ? actor.stage_ar : actor.stage_en;
  const role = currentLang === 'ar' ? actor.role_ar : actor.role_en;
  const thematic = currentLang === 'ar' ? actor.thematic_area_ar : actor.thematic_area_en;
  const gov = currentLang === 'ar' ? actor.governorate_ar : actor.governorate_en;
  const phone = maskPhone(actor.phone || '—');
  const email = actor.email || '—';
  const desc = currentLang === 'ar' ? actor.description_ar : actor.description_en;
  const maturity = actor.maturity_score || '3.5';
  
  // Custom display HTML
  title.innerText = name;
  body.innerHTML = `
    <div style="margin-bottom: 8px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px;">
      <strong>${currentLang === 'ar' ? 'القطاع:' : 'Sector:'}</strong> ${sector} <span style="opacity: 0.4; margin: 0 4px;">|</span> 
      <strong>${currentLang === 'ar' ? 'الدور:' : 'Role:'}</strong> ${role}
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'المحافظة:' : 'Governorate:'}</strong> ${gov}
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'مجال التركيز:' : 'Focus Area:'}</strong> ${thematic}
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'مستوى النضج:' : 'Maturity Score:'}</strong> ${maturity} ★
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'مرحلة الابتكار:' : 'Innovation Stage:'}</strong> ${stage}
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> <span style="direction: ltr; display: inline-block;">${phone}</span>
    </div>
    <div style="margin-bottom: 8px;">
      <strong>${currentLang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> ${email}
    </div>
    <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--glass-border); color: var(--text-secondary); font-style: italic; max-height: 80px; overflow-y: auto;">
      ${desc}
    </div>
  `;
  
  panel.classList.remove("hidden");
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeNetworkNodePanel() {
  const panel = document.getElementById("network-node-panel");
  if (panel) panel.classList.add("hidden");
}

// Network Physics Controllers
function toggleNetworkPhysics() {
  if (typeof vis === 'undefined' || !networkInstance) return;
  
  networkPhysicsEnabled = !networkPhysicsEnabled;
  networkInstance.setOptions({ physics: { enabled: networkPhysicsEnabled } });
  
  // Re-run language check to apply the correct translated string
  const label = currentLang === 'ar' ? 
    (networkPhysicsEnabled ? locales.ar.lblBtnPhysicsPause : locales.ar.lblBtnPhysicsPlay) :
    (networkPhysicsEnabled ? locales.en.lblBtnPhysicsPause : locales.en.lblBtnPhysicsPlay);
  
  const iconName = networkPhysicsEnabled ? "pause" : "play";
  
  const btnSpan = document.getElementById("lbl-btn-physics");
  const btn = document.getElementById("btn-net-physics");
  if (btnSpan && btn) {
    btnSpan.innerText = label;
    // Update Lucide attribute
    const icon = btn.querySelector("i");
    if (icon) {
      icon.setAttribute("data-lucide", iconName);
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

function stabilizeNetwork() {
  if (typeof vis === 'undefined' || !networkInstance) return;
  networkInstance.stabilize();
}

// Chart.js render updates
function renderCharts() {
  if (typeof Chart === 'undefined' || !chartSectors || !chartStages) return;
  
  // Calculate Sectors distribution
  const countsSector = { civil_society: 0, private: 0, public: 0 };
  filteredActors.forEach(a => {
    if (countsSector.hasOwnProperty(a.sector)) {
      countsSector[a.sector]++;
    }
  });
  
  chartSectors.data.labels = currentLang === 'ar' ? 
    ['مجتمع مدني', 'قطاع خاص', 'قطاع عام/أكاديمي'] : 
    ['Civil Society', 'Private Sector', 'Public/Academic'];
  chartSectors.data.datasets[0].data = [countsSector.civil_society, countsSector.private, countsSector.public];
  chartSectors.update();
  
  // Calculate Stages distribution
  const countsStage = { research: 0, ideation: 0, adaptation: 0, prototyping: 0, scaling: 0 };
  filteredActors.forEach(a => {
    if (countsStage.hasOwnProperty(a.stage)) {
      countsStage[a.stage]++;
    }
  });
  
  chartStages.data.labels = currentLang === 'ar' ? 
    ['البحث', 'الأفكار', 'التكييف', 'النماذج', 'التوسع'] : 
    ['Research', 'Ideation', 'Adaptation', 'Prototyping', 'Scaling'];
  chartStages.data.datasets[0].data = [
    countsStage.research, 
    countsStage.ideation, 
    countsStage.adaptation, 
    countsStage.prototyping, 
    countsStage.scaling
  ];
  chartStages.update();

  // Calculate Thematic Areas distribution
  if (chartThematic) {
    const countsThematic = { water_energy: 0, food_agri: 0, health_nutrition: 0, edu_tech: 0, logistics_emergency: 0 };
    filteredActors.forEach(a => {
      if (countsThematic.hasOwnProperty(a.thematic_area)) {
        countsThematic[a.thematic_area]++;
      }
    });
    
    chartThematic.data.labels = currentLang === 'ar' ? 
      ['المياه والطاقة', 'الأمن الغذائي والزراعة', 'الصحة والتغذية', 'التعليم والتكنولوجيا', 'اللوجستيات والطوارئ'] : 
      ['Water & Energy', 'Food & Agriculture', 'Health & Nutrition', 'Education & Tech', 'Logistics & Emergency'];
    chartThematic.data.datasets[0].data = [
      countsThematic.water_energy, 
      countsThematic.food_agri, 
      countsThematic.health_nutrition, 
      countsThematic.edu_tech, 
      countsThematic.logistics_emergency
    ];
    chartThematic.update();
  }
}

// Table Directory render
function renderDirectoryTable() {
  const tbody = document.getElementById("directory-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  if (filteredActors.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="10" style="text-align: center; color: var(--text-secondary);">
      ${currentLang === 'ar' ? 'لا توجد جهات مطابقة للتصفية حالياً' : 'No matching actors found for current filters'}
    </td>`;
    tbody.appendChild(tr);
    return;
  }
  
  filteredActors.forEach(actor => {
    const tr = document.createElement("tr");
    
    const name = currentLang === 'ar' ? actor.name_ar : actor.name_en;
    const secName = currentLang === 'ar' ? actor.sector_ar : actor.sector_en;
    const roleName = currentLang === 'ar' ? actor.role_ar : actor.role_en;
    const thematicName = currentLang === 'ar' ? actor.thematic_area_ar : actor.thematic_area_en;
    const stgName = currentLang === 'ar' ? actor.stage_ar : actor.stage_en;
    const govName = currentLang === 'ar' ? actor.governorate_ar : actor.governorate_en;
    const desc = currentLang === 'ar' ? actor.description_ar : actor.description_en;
    const maturity = (actor.maturity_score || 3.0).toFixed(1) + " ★";
    
    let badgeClass = 'badge-public';
    if (actor.sector === 'private') badgeClass = 'badge-private';
    if (actor.sector === 'civil_society') badgeClass = 'badge-civil';
    
    tr.innerHTML = `
      <td><strong>${name}</strong></td>
      <td><span class="badge ${badgeClass}">${secName}</span></td>
      <td><span style="font-size: 11px; opacity: 0.9;">${roleName}</span></td>
      <td><span style="font-size: 11px; opacity: 0.9;">${thematicName}</span></td>
      <td>${stgName}</td>
      <td>${govName}</td>
      <td><span style="color: var(--accent); font-weight: bold;">${maturity}</span></td>
      <td><a href="mailto:${actor.email}" style="color: var(--primary); text-decoration: none;">${actor.email || '-'}</a></td>
      <td>${maskPhone(actor.phone)}</td>
      <td style="font-size: 11px; color: var(--text-secondary); max-width: 200px; line-height: 1.4;">${desc}</td>
    `;
    
    tbody.appendChild(tr);
  });
}

// Ingestion Form Submit Simulation
function handleFormSubmit(e) {
  e.preventDefault();
  
  const nameAr = document.getElementById("form-name-ar").value;
  const nameEn = document.getElementById("form-name-en").value;
  const sector = document.getElementById("form-sector").value;
  const stage = document.getElementById("form-stage").value;
  const role = document.getElementById("form-role").value;
  const thematic = document.getElementById("form-thematic").value;
  const gov = document.getElementById("form-gov").value;
  const maturityVal = parseFloat(document.getElementById("form-maturity").value) || 3.0;
  const partnerId = document.getElementById("form-partner").value;
  const email = document.getElementById("form-email").value;
  const phone = document.getElementById("form-phone").value;
  const descAr = document.getElementById("form-desc-ar").value;
  const descEn = document.getElementById("form-desc-en").value;
  
  // Approximate coordinates for governorates to place on map
  const govCoordinates = {
    Aden: { lat: 12.7855 + (Math.random() - 0.5) * 0.05, lng: 45.0186 + (Math.random() - 0.5) * 0.05 },
    Sanaa: { lat: 15.3694 + (Math.random() - 0.5) * 0.05, lng: 44.1910 + (Math.random() - 0.5) * 0.05 },
    Taiz: { lat: 13.5795 + (Math.random() - 0.5) * 0.05, lng: 44.0159 + (Math.random() - 0.5) * 0.05 },
    Hadramout: { lat: 14.5400 + (Math.random() - 0.5) * 0.05, lng: 49.1200 + (Math.random() - 0.5) * 0.05 },
    Marib: { lat: 15.4630 + (Math.random() - 0.5) * 0.05, lng: 45.3252 + (Math.random() - 0.5) * 0.05 },
    Hodeidah: { lat: 14.7979 + (Math.random() - 0.5) * 0.05, lng: 42.9530 + (Math.random() - 0.5) * 0.05 },
    Ibb: { lat: 13.9734 + (Math.random() - 0.5) * 0.05, lng: 44.1786 + (Math.random() - 0.5) * 0.05 },
    Dhamar: { lat: 14.5427 + (Math.random() - 0.5) * 0.05, lng: 44.4072 + (Math.random() - 0.5) * 0.05 },
    Shabwah: { lat: 14.5298 + (Math.random() - 0.5) * 0.05, lng: 46.8319 + (Math.random() - 0.5) * 0.05 },
    Saada: { lat: 16.9452 + (Math.random() - 0.5) * 0.05, lng: 43.7639 + (Math.random() - 0.5) * 0.05 },
    "Al-Jawf": { lat: 16.1623 + (Math.random() - 0.5) * 0.05, lng: 44.7836 + (Math.random() - 0.5) * 0.05 },
    "Al-Mahrah": { lat: 16.2081 + (Math.random() - 0.5) * 0.05, lng: 52.1748 + (Math.random() - 0.5) * 0.05 },
    Socotra: { lat: 12.4634 + (Math.random() - 0.5) * 0.05, lng: 53.8237 + (Math.random() - 0.5) * 0.05 },
    Hajjah: { lat: 15.6942 + (Math.random() - 0.5) * 0.05, lng: 43.6041 + (Math.random() - 0.5) * 0.05 },
    Amran: { lat: 15.9592 + (Math.random() - 0.5) * 0.05, lng: 43.9439 + (Math.random() - 0.5) * 0.05 },
    "Al-Mahwit": { lat: 15.4703 + (Math.random() - 0.5) * 0.05, lng: 43.5414 + (Math.random() - 0.5) * 0.05 },
    Raymah: { lat: 14.6192 + (Math.random() - 0.5) * 0.05, lng: 43.7125 + (Math.random() - 0.5) * 0.05 },
    "Al-Bayda": { lat: 14.0159 + (Math.random() - 0.5) * 0.05, lng: 45.4244 + (Math.random() - 0.5) * 0.05 },
    Abyan: { lat: 13.2045 + (Math.random() - 0.5) * 0.05, lng: 45.3789 + (Math.random() - 0.5) * 0.05 },
    Lahj: { lat: 13.0583 + (Math.random() - 0.5) * 0.05, lng: 44.8778 + (Math.random() - 0.5) * 0.05 },
    "Al-Dhale": { lat: 13.6953 + (Math.random() - 0.5) * 0.05, lng: 44.7314 + (Math.random() - 0.5) * 0.05 },
    Sanaa_City: { lat: 15.3524 + (Math.random() - 0.5) * 0.05, lng: 44.2078 + (Math.random() - 0.5) * 0.05 }
  };
  
  // Find governorate in yemenGovernorates or default to Aden
  const govObj = yemenGovernorates.find(g => g.id === gov) || yemenGovernorates[0];
  const coords = govCoordinates[gov] || { lat: govObj.lat + (Math.random() - 0.5) * 0.05, lng: govObj.lng + (Math.random() - 0.5) * 0.05 };
  
  const newId = actors.length > 0 ? Math.max(...actors.map(a => a.id)) + 1 : 1;
  
  // Build Localized terms
  const sectorMapping = {
    civil_society: { ar: "مجتمع مدني", en: "Civil Society" },
    private: { ar: "خاص", en: "Private" },
    public: { ar: "عام / حكومي", en: "Public / Academic" }
  };
  
  const stageMapping = {
    research: { ar: "البحث", en: "Research" },
    ideation: { ar: "الأفكار", en: "Ideation" },
    adaptation: { ar: "التكييف", en: "Adaptation" },
    prototyping: { ar: "النماذج", en: "Prototyping" },
    scaling: { ar: "التوسع", en: "Scaling" }
  };
  
  const roleMapping = {
    funder: { ar: "ممول", en: "Funder" },
    enabler: { ar: "ممكن", en: "Enabler" },
    researcher: { ar: "باحث", en: "Researcher" },
    implementer: { ar: "منفذ", en: "Implementer" }
  };
  
  const thematicMapping = {
    water_energy: { ar: "المياه والطاقة", en: "Water & Energy" },
    food_agri: { ar: "الأمن الغذائي والزراعة", en: "Food & Agriculture" },
    health_nutrition: { ar: "الصحة والتغذية", en: "Health & Nutrition" },
    education_tech: { ar: "التعليم والتكنولوجيا", en: "Education & Tech" },
    logistics_response: { ar: "اللوجستيات والاستجابة الطارئة", en: "Logistics & Response" }
  };
  
  const isPartnerValid = partnerId && partnerId !== 'none' && !isNaN(parseInt(partnerId));
  const connections = isPartnerValid ? [parseInt(partnerId)] : [];

  const newActor = {
    id: newId,
    name_ar: nameAr,
    name_en: nameEn,
    sector: sector,
    sector_ar: sectorMapping[sector].ar,
    sector_en: sectorMapping[sector].en,
    stage: stage,
    stage_ar: stageMapping[stage].ar,
    stage_en: stageMapping[stage].en,
    role: role,
    role_ar: roleMapping[role].ar,
    role_en: roleMapping[role].en,
    thematic_area: thematic,
    thematic_area_ar: thematicMapping[thematic].ar,
    thematic_area_en: thematicMapping[thematic].en,
    maturity_score: maturityVal,
    funding_received: role === 'funder' ? 0 : Math.round((10000 + Math.random() * 50000) / 1000) * 1000,
    governorate: gov,
    governorate_ar: govObj.ar,
    governorate_en: govObj.en,
    lat: coords.lat,
    lng: coords.lng,
    description_ar: descAr || "لا يوجد شرح متوفر حالياً.",
    description_en: descEn || "No description provided.",
    email: email || "",
    phone: phone || "",
    connections: connections
  };
  
  // Add connections back from partner to new node
  if (isPartnerValid) {
    const partner = actors.find(a => a.id === parseInt(partnerId));
    if (partner) {
      if (!partner.connections) partner.connections = [];
      if (!partner.connections.includes(newId)) {
        partner.connections.push(newId);
      }
    }
  }
  
  // Ingest new actor to database and save
  actors.push(newActor);
  saveDatabase();
  filteredActors = [...actors];
  
  // Simulate Kobo API JSON Response console stream
  const consoleEl = document.getElementById("console-output");
  const timestamp = new Date().toISOString();
  
  consoleEl.innerHTML = `
<span style="color: #60a5fa;">[${timestamp}] API POST /api/v2/submissions HTTP/1.1</span>
<span style="color: #60a5fa;">Host: kobo.diversityyemen.org</span>
<span style="color: #a78bfa;">Authorization: Token 99abcde123456789f</span>
<span style="color: #34d399;">JSON Payload Ingested:</span>
${JSON.stringify(newActor, null, 2)}

<span style="color: #34d399;">[SUCCESS] Database transaction committed. 1 record inserted.</span>
<span style="color: #34d399;">[INFO] Real-time database saved to LocalStorage.</span>
<span style="color: #34d399;">[INFO] Real-time dashboard view refreshed.</span>
  `;
  
  // Trigger Toast Notification
  showToast(locales[currentLang].toastSuccess);
  
  // Reset Form
  document.getElementById("kobo-form").reset();
  
  // Refresh views and reload dynamic lists
  populateFiltersAndForms();
  updateDashboardViews();
  
  // Switch back to dashboard to view the changes
  setTimeout(() => {
    switchTab('tab-dashboard');
  }, 1500);
}

// Toast System
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✔️</span> <span>${message}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideIn 0.3s ease-in reverse";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Data Export System
function exportData(format) {
  let fileContent = "";
  let mimeType = "";
  let fileName = "";
  
  if (format === 'json') {
    fileContent = JSON.stringify(filteredActors, null, 2);
    mimeType = "application/json";
    fileName = "yjr_innovation_ecosystem.json";
  } else if (format === 'csv') {
    const headers = ["ID", "Name (AR)", "Name (EN)", "Sector", "Role", "Thematic Area", "Stage", "Maturity Score", "Governorate", "Email", "Phone", "Description (AR)", "Description (EN)"];
    const rows = filteredActors.map(a => [
      a.id,
      `"${a.name_ar.replace(/"/g, '""')}"`,
      `"${a.name_en.replace(/"/g, '""')}"`,
      a.sector,
      a.role,
      a.thematic_area,
      a.stage,
      a.maturity_score,
      a.governorate,
      a.email,
      maskPhone(a.phone),
      `"${a.description_ar.replace(/"/g, '""')}"`,
      `"${a.description_en.replace(/"/g, '""')}"`
    ]);
    
    fileContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\n"); // Include BOM for proper Excel Arabic support
    mimeType = "text/csv;charset=utf-8;";
    fileName = "yjr_innovation_ecosystem.csv";
  }
  
  const blob = new Blob([fileContent], { type: mimeType });
  const link = document.createElement("a");
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/* ========================================================
   Presentation Slide Deck Controller & Strategic Navigation
   ======================================================== */

function initPresentation() {
  const slides = document.querySelectorAll(".slide");
  const TOTAL_SLIDES = slides.length;
  currentPresSlide = 0;
  
  // Set active class on slide 0 and remove from others
  slides.forEach((slide, idx) => {
    if (idx === 0) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  
  const dotsContainer = document.getElementById("pres-dots-container");
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    // Create navigation dots dynamically
    for (let i = 0; i < TOTAL_SLIDES; i++) {
      const dot = document.createElement("div");
      dot.className = "pres-dot" + (i === 0 ? " active" : "");
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    }
  }
  
  updatePresentationProgress(0, TOTAL_SLIDES);
  
  // Set language toggle label
  const presToggleBtn = document.getElementById("pres-btn-lang-toggle");
  if (presToggleBtn) presToggleBtn.innerText = currentLang === 'ar' ? 'English' : 'العربية';
  
  // Slide swipe & keyboard support
  setupPresentationListeners();
}

function updatePresentationProgress(n, total) {
  const progressBar = document.getElementById("presentation-progress-bar");
  if (progressBar) {
    const percentage = ((n + 1) / total) * 100;
    progressBar.style.width = percentage + "%";
  }
}

function goToSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const TOTAL_SLIDES = slides.length;
  const dotsContainer = document.getElementById("pres-dots-container");
  
  if (n < 0 || n >= TOTAL_SLIDES || n === currentPresSlide) return;
  
  // Deactivate current slide & dot
  slides[currentPresSlide].classList.remove("active");
  if (dotsContainer && dotsContainer.children[currentPresSlide]) {
    dotsContainer.children[currentPresSlide].classList.remove("active");
  }
  
  // Activate new slide & dot
  currentPresSlide = n;
  slides[currentPresSlide].classList.add("active");
  if (dotsContainer && dotsContainer.children[currentPresSlide]) {
    dotsContainer.children[currentPresSlide].classList.add("active");
  }
  
  updatePresentationProgress(n, TOTAL_SLIDES);
  
  // Re-trigger animations in active slide for WOW effect
  slides[currentPresSlide].querySelectorAll('[class*="pres-"]').forEach(el => {
    const classes = [...el.classList].filter(c => c.startsWith('pres-'));
    classes.forEach(c => {
      el.classList.remove(c);
      void el.offsetWidth; // force reflow
      el.classList.add(c);
    });
  });
  
  // Refresh Lucide Icons just in case
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function changeSlide(dir) {
  goToSlide(currentPresSlide + dir);
}

function setupPresentationListeners() {
  // Keypress listener
  document.removeEventListener("keydown", handlePresentationKeydown);
  document.addEventListener("keydown", handlePresentationKeydown);
  
  // Touch Swipe listener
  const wrapper = document.getElementById("deckWrapper");
  if (wrapper) {
    let touchStartX = 0;
    wrapper.addEventListener("touchstart", e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    wrapper.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          // Swipe left: Next slide
          changeSlide(1);
        } else {
          // Swipe right: Prev slide
          changeSlide(-1);
        }
      }
    }, { passive: true });
  }
}

function handlePresentationKeydown(e) {
  if (!isPresentationMode) return;
  
  if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
    // In RTL, ArrowLeft usually goes forward, ArrowRight backward. Let's make it standard:
    changeSlide(currentLang === 'ar' ? -1 : 1);
  }
  if (e.key === "ArrowRight" || e.key === "ArrowUp") {
    changeSlide(currentLang === 'ar' ? 1 : -1);
  }
}

// Dashboard Transition Functions
function enterDashboard() {
  isPresentationMode = false;
  
  const presWrapper = document.getElementById("presentation-wrapper");
  const dashWrapper = document.getElementById("dashboard-wrapper");
  
  if (presWrapper) presWrapper.style.display = "none";
  if (dashWrapper) dashWrapper.style.display = "block";
  
  // Trigger Leaflet map dimensions recalculation since it was hidden
  if (mapInstance) {
    setTimeout(() => {
      mapInstance.invalidateSize();
    }, 250);
  }
  
  // Trigger Vis.js stabilization
  if (networkInstance) {
    setTimeout(() => {
      networkInstance.fit();
    }, 250);
  }
}

function exitDashboard() {
  isPresentationMode = true;
  
  const presWrapper = document.getElementById("presentation-wrapper");
  const dashWrapper = document.getElementById("dashboard-wrapper");
  
  if (presWrapper) presWrapper.style.display = "block";
  if (dashWrapper) dashWrapper.style.display = "none";
  
  // Re-initialize or refresh presentation state
  initPresentation();
}

/* ========================================================
   YIEP Strategic Platform Extended Controllers (Proof Layer)
   ======================================================== */

let demoFundingAwarded = false;

function runDemoStep(step) {
  if (step === 1) {
    const govSelect = document.getElementById("filter-gov");
    const thematicSelect = document.getElementById("filter-thematic");
    
    if (govSelect) govSelect.value = "Hodeidah";
    if (thematicSelect) thematicSelect.value = "food_agri";
    
    applyFilters();
    
    if (mapInstance) {
      mapInstance.setView([14.7979, 42.9530], 9);
    }
    
    document.getElementById("wstep-1").classList.remove("active");
    document.getElementById("wstep-1").querySelector(".wstep-circle").style.borderColor = "#10b981";
    document.getElementById("wstep-1").querySelector(".wstep-circle").style.background = "rgba(16,185,129,0.15)";
    document.getElementById("wstep-1").querySelector(".wstep-circle").style.color = "#10b981";
    
    document.getElementById("wstep-2").classList.add("active");
    document.getElementById("wpane-1").style.display = "none";
    document.getElementById("wpane-2").style.display = "block";
    document.getElementById("wizard-progress-active").style.width = "33%";
    
    showToast(currentLang === 'ar' ? "تمت تصفية الحديدة وقطاع الأمن الغذائي بنجاح!" : "Filtered Hodeidah & Food Security sector!");
    
  } else if (step === 2) {
    const placeholder = document.getElementById("demo-ai-match-placeholder");
    placeholder.style.display = "block";
    
    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      placeholder.innerHTML = `<span style="color: var(--primary); font-weight: bold;">${currentLang === 'ar' ? 'جاري تحليل المنظومة وتشغيل مطابقة الذكاء الاصطناعي' : 'Running AI Matching'}${'.'.repeat(dots)}</span>`;
    }, 250);
    
    setTimeout(() => {
      clearInterval(interval);
      placeholder.innerHTML = currentLang === 'ar' ? 
        `<strong>التحالف المقترح المعتمد:</strong><br>
         🤝 الشريك المنفذ: <strong>شبكة مزارعي تهامة التعاونية</strong> (نضج: 4.2)<br>
         ⚡ الشريك التقني: <strong>مؤسسة سحاب لحلول الطاقة الشمسية</strong> (نضج: 4.5)<br>
         <strong>المبرر:</strong> ربط الثقة الميدانية والوصول الواسع للمزارعين بالحلول التقنية والريادية لمؤسسة سحاب.` :
        `<strong>Consortium Recommended:</strong><br>
         🤝 Local Implementer: <strong>Tihama Cooperative Farmers Network</strong> (Maturity: 4.2)<br>
         ⚡ Tech Partner: <strong>Sahab Solar Solutions</strong> (Maturity: 4.5)<br>
         <strong>Rationale:</strong> Links community trust and agricultural reach with Sahab's technical solar pumps innovation.`;
      
      // Sync Co-Pilot View
      document.getElementById("copilot-gov").value = "Hodeidah";
      document.getElementById("copilot-thematic").value = "food_agri";
      document.getElementById("copilot-budget").value = 85000;
      document.getElementById("copilot-budget-val").innerText = "$85,000";
      
      document.getElementById("partner1-name").innerText = currentLang === 'ar' ? "شبكة مزارعي تهامة" : "Tihama Farmers Network";
      document.getElementById("partner2-name").innerText = currentLang === 'ar' ? "مؤسسة سحاب لطاقة الشمس" : "Sahab Solar Solutions";
      document.getElementById("partner1-meta").innerText = "Maturity Score: 4.2 | Role: Implementer";
      document.getElementById("partner2-meta").innerText = "Maturity Score: 4.5 | Role: Enabler";
      
      document.getElementById("matching-rationale").innerText = currentLang === 'ar' ?
        "الربط المباشر بين الثقة والوصول الميداني للجمعيات الزراعية في سهل تهامة مع الحلول التقنية المتطورة لمؤسسة سحاب لطاقة الشمس." :
        "Directly linking local trust and agricultural access of Tihama Farmers Network with the advanced tech capability of Sahab Solar Solutions.";
      
      const copilotOutput = document.getElementById("copilot-output");
      copilotOutput.innerHTML = `
<span style="color: #60a5fa;">[INFO] Initializing Consortium Matching for Hodeidah...</span>
<span style="color: #60a5fa;">[INFO] Loaded Hodeidah governorate node records...</span>
<span style="color: #a78bfa;">[AI Engine] Analyzing node density, centrality and link indices...</span>
<span style="color: #a78bfa;">[AI Engine] Cross-referencing maturity scores...</span>
<span style="color: #34d399;">[SUCCESS] Top Consortium Match Found: CODE CON-YE-8832</span>
<span style="color: #34d399;">[SUCCESS] Rationale formulated. Consortium match coefficient: 0.94</span>
      `;
      document.getElementById("copilot-result-box").style.display = "block";
      document.getElementById("copilot-status").innerText = "STATUS: SUCCESS";
      
      document.getElementById("wstep-2").classList.remove("active");
      document.getElementById("wstep-2").querySelector(".wstep-circle").style.borderColor = "#10b981";
      document.getElementById("wstep-2").querySelector(".wstep-circle").style.background = "rgba(16,185,129,0.15)";
      document.getElementById("wstep-2").querySelector(".wstep-circle").style.color = "#10b981";
      
      document.getElementById("wstep-3").classList.add("active");
      document.getElementById("wpane-2").style.display = "none";
      document.getElementById("wpane-3").style.display = "block";
      document.getElementById("wizard-progress-active").style.width = "66%";
      
      showToast(currentLang === 'ar' ? "اكتملت المطابقة الذكية بنجاح!" : "Consortium matched successfully!");
    }, 1500);
    
  } else if (step === 3) {
    const demoCard = document.getElementById("demo-funded-card");
    if (demoCard) demoCard.style.display = "block";
    
    // Increment local counts in Kanban board
    const colCount = document.getElementById("col-count-3");
    if (colCount) colCount.innerText = "2";
    
    window.demoFundingAwarded = true;
    updateDashboardViews();
    
    document.getElementById("wstep-3").classList.remove("active");
    document.getElementById("wstep-3").querySelector(".wstep-circle").style.borderColor = "#10b981";
    document.getElementById("wstep-3").querySelector(".wstep-circle").style.background = "rgba(16,185,129,0.15)";
    document.getElementById("wstep-3").querySelector(".wstep-circle").style.color = "#10b981";
    
    document.getElementById("wstep-4").classList.add("active");
    document.getElementById("wpane-3").style.display = "none";
    document.getElementById("wpane-4").style.display = "block";
    document.getElementById("wizard-progress-active").style.width = "100%";
    
    showToast(currentLang === 'ar' ? "تم منح وتخصيص المنحة بقيمة $85,000 للمشروع!" : "Simulated allocation of $85,000 grant!");
    
  } else if (step === 4) {
    switchTab('tab-funding');
    
    const demoCard = document.getElementById("demo-funded-card");
    if (demoCard) {
      demoCard.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.7)";
      demoCard.style.borderColor = "#10b981";
      setTimeout(() => {
        demoCard.style.boxShadow = "";
        demoCard.style.borderColor = "var(--glass-border)";
      }, 5000);
    }
    
    setTimeout(() => {
      resetWizardStepper();
    }, 1000);
  }
}

function resetWizardStepper() {
  document.getElementById("wpane-4").style.display = "none";
  document.getElementById("wpane-1").style.display = "block";
  document.getElementById("wizard-progress-active").style.width = "0%";
  
  const steps = ["wstep-1", "wstep-2", "wstep-3", "wstep-4"];
  steps.forEach((stepId, idx) => {
    const el = document.getElementById(stepId);
    el.classList.remove("active");
    const circle = el.querySelector(".wstep-circle");
    circle.style.borderColor = "";
    circle.style.background = "";
    circle.style.color = "";
    if (idx === 0) el.classList.add("active");
  });
  
  const placeholder = document.getElementById("demo-ai-match-placeholder");
  if (placeholder) {
    placeholder.style.display = "none";
    placeholder.innerHTML = "";
  }
}

function triggerAICopilotMatch() {
  const gov = document.getElementById("copilot-gov").value;
  const thematic = document.getElementById("copilot-thematic").value;
  const budget = parseInt(document.getElementById("copilot-budget").value);
  
  const statusEl = document.getElementById("copilot-status");
  const outputEl = document.getElementById("copilot-output");
  const resultBox = document.getElementById("copilot-result-box");
  
  statusEl.innerText = "STATUS: PROCESSING...";
  outputEl.innerHTML = `<span style="color: var(--primary);">[AI Engine] Analyzing criteria for ${gov} / ${thematic}...</span>`;
  resultBox.style.display = "none";
  
  // Find realistic matching actors in the selected Gov and Thematic
  let localActors = actors.filter(a => a.governorate === gov && a.thematic_area === thematic);
  
  if (localActors.length < 2) {
    localActors = actors.filter(a => a.thematic_area === thematic);
  }
  
  const implementers = localActors.filter(a => a.role === "implementer" || a.role === "researcher");
  const enablers = localActors.filter(a => a.role === "enabler" || a.role === "funder");
  
  const partner1 = implementers.length > 0 ? implementers[0] : actors.find(a => a.role === 'implementer');
  const partner2 = enablers.length > 0 ? enablers[0] : actors.find(a => a.role === 'enabler');
  
  setTimeout(() => {
    outputEl.innerHTML += `<br><span style="color: #60a5fa;">[INFO] Scanning regional database... Found ${localActors.length} candidates.</span>`;
  }, 400);

  setTimeout(() => {
    outputEl.innerHTML += `<br><span style="color: #a78bfa;">[AI Engine] Cross-referencing maturity matrices and structural link density...</span>`;
  }, 900);

  setTimeout(() => {
    outputEl.innerHTML += `<br><span style="color: #34d399;">[SUCCESS] Top Consortium Match Found! Code: CON-YE-88${Math.floor(Math.random()*90)+10}</span>`;
    statusEl.innerText = "STATUS: SUCCESS";
    
    // Set names and meta
    document.getElementById("partner1-name").innerText = currentLang === 'ar' ? partner1.name_ar : partner1.name_en;
    document.getElementById("partner2-name").innerText = currentLang === 'ar' ? partner2.name_ar : partner2.name_en;
    
    document.getElementById("partner1-meta").innerText = `Maturity: ${partner1.maturity_score}★ | Role: ${currentLang === 'ar' ? partner1.role_ar : partner1.role_en}`;
    document.getElementById("partner2-meta").innerText = `Maturity: ${partner2.maturity_score}★ | Role: ${currentLang === 'ar' ? partner2.role_ar : partner2.role_en}`;
    
    const rationales = {
      food_agri: {
        ar: `يجمع هذا التحالف بين القدرة التنفيذية والموثوقية المحلية لـ (${partner1.name_ar}) مع الريادة التقنية والحلول الذكية لـ (${partner2.name_ar}) لتأمين استدامة المشروع.`,
        en: `This alliance integrates the field-level execution and local trust of (${partner1.name_en}) with the tech innovator and systems scaling of (${partner2.name_en}).`
      },
      water_energy: {
        ar: `يسهم دمج الخبرة الميدانية لـ (${partner1.name_ar}) مع حلول الطاقة الذكية لـ (${partner2.name_ar}) في خفض تكاليف التشغيل للخدمات الإنسانية بنسبة 30%.`,
        en: `Merging the field experience of (${partner1.name_en}) with smart energy solutions of (${partner2.name_en}) cuts operational overheads by 30%.`
      },
      default: {
        ar: `مطابقة عالية التنسيق تضمن الاستغلال الأمثل للموارد وسد الفجوات الجغرافية بكفاءة عالية في قطاع المشروع.`,
        en: `High-coordination matching that ensures optimal resource utilization and bridges geographical gaps in the project's sector.`
      }
    };
    
    const rat = rationales[thematic] || rationales.default;
    document.getElementById("matching-rationale").innerText = currentLang === 'ar' ? rat.ar : rat.en;
    
    resultBox.style.display = "block";
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 1400);
}

function unlockKoboSimulator() {
  const code = document.getElementById("sim-passcode").value.trim().toLowerCase();
  const lockScreen = document.getElementById("simulator-lock-screen");
  const content = document.getElementById("simulator-content");
  const errorEl = document.getElementById("sim-lock-error");
  
  if (code === 'yjr2026' || code === 'admin2026') {
    lockScreen.style.display = "none";
    content.style.display = "block";
    errorEl.style.display = "none";
    showToast(currentLang === 'ar' ? "تم إلغاء قفل بوابة الإدخال بنجاح!" : "Ingestion portal unlocked successfully!");
  } else {
    errorEl.style.display = "block";
    document.getElementById("sim-passcode").value = "";
  }
}

// ==========================================
// Interactive Onboarding Tour Engine
// ==========================================

const tourSteps = [
  {
    elementId: null,
    tab: "tab-landing",
    placement: "center",
    title: {
      ar: "مرحباً بك في منصة YIEP! 🧭",
      en: "Welcome to YIEP Platform! 🧭"
    },
    desc: {
      ar: "يسعدنا مرافقتك في جولة إرشادية سريعة لاستعراض الطبقات الاستراتيجية والميزات الفنية التي قمنا بتطويرها لتمكين الابتكار الإنساني والاجتماعي في اليمن وقياس أثره.",
      en: "We are pleased to guide you on a quick interactive tour to showcase the strategic layers and technical features designed to map and enable humanitarian innovation in Yemen."
    }
  },
  {
    elementId: ".header-controls",
    tab: "tab-landing",
    placement: "bottom",
    title: {
      ar: "لوحة التحكم الرئيسية والإعدادات",
      en: "Global Controls & Customizations"
    },
    desc: {
      ar: "هنا يمكنك تبديل اللغات (عربي/إنجليزي) وتغيير المظهر البصري (Neon, Emerald, Light). كما قمنا بدمج العرض التقديمي الفني كشريحة تفاعلية مدمجة في شريط التبويبات لتسهيل التصفح.",
      en: "Here you can toggle languages (AR/EN), switch between visual themes, or access the embedded Technical Pitch Deck for direct, seamless evaluation."
    }
  },
  {
    elementId: "#guided-scenario-wizard",
    tab: "tab-landing",
    placement: "bottom",
    title: {
      ar: "شاشة الهبوط وقصة الأثر (Theory of Change)",
      en: "Landing Page & Impact Narrative"
    },
    desc: {
      ar: "تطبيقاً لمبدأ 'القصة > النظام'، تبدأ المنصة بالتعريف بأساس المشكلة الإنسانية في اليمن ونظرية التغيير لـ YJR، مع تقديم معالج تفاعلي يحاكي منح التمويل ميدانياً.",
      en: "Following the 'Story > System' principle, the platform welcomes users with Yemen's humanitarian challenges and the YJR Theory of Change, backed by a step-by-step interactive scenario wizard."
    }
  },
  {
    elementId: "#yemen-map",
    tab: "tab-dashboard",
    placement: "top",
    title: {
      ar: "📍 الخريطة التفاعلية الجغرافية",
      en: "📍 Interactive Geoportal Map"
    },
    desc: {
      ar: "تعرض توزيع 215 فاعلاً واقعياً عبر جميع محافظات اليمن الـ 22. تتميز بالتعريب الديناميكي التلقائي لمسميات المحافظات لتتوافق تماماً مع لغة المقيم النشطة.",
      en: "Plots 215 real actors distributed across all 22 Yemeni governorates, featuring automatic dynamic localization of map labels to match the reviewer's language."
    }
  },
  {
    elementId: "#network-graph",
    tab: "tab-dashboard",
    placement: "top",
    title: {
      ar: "🕸️ شبكة العلاقات والتشبيك البيني",
      en: "🕸️ Interactive Ecosystem Network Graph"
    },
    desc: {
      ar: "تحلل وترسم الروابط والشراكات بفيزيائية حركة تفاعلية (Vis.js). بمجرد النقر على أي جهة، تظهر لوحة عائمة تفصيلية زجاجية. هذه ميزة مخصصة بالكامل تتفوق على جمود أدوات BI التقليدية.",
      en: "Analyzes and maps inter-organization relationships using active physics. Clicking any node focuses on its connections and reveals a floating glassmorphic details card—a custom feature static BI tools cannot match."
    }
  },
  {
    elementId: ".filter-section",
    tab: "tab-dashboard",
    placement: "right",
    title: {
      ar: "🎛️ التصفية والفرز متعدد الأبعاد",
      en: "🎛️ Multi-dimensional Filter Sidebar"
    },
    desc: {
      ar: "تتيح للمانحين تصنيف المنظومة فورياً بناءً على دور الجهة (منفذ، ممول، ممكن)، والقطاع الإنساني، ومؤشر النضج للابتكار (من 1 إلى 5 نجوم).",
      en: "Allows evaluators to instantly filter actors based on ecosystem role (funder, enabler, researcher, implementer), humanitarian sector, or innovation maturity rating."
    }
  },
  {
    elementId: "#copilot-grid-layout",
    tab: "tab-copilot",
    placement: "top",
    title: {
      ar: "🧠 المساعد الذكي AI ودعم القرار",
      en: "🧠 Smart AI Co-Pilot & Decision Support"
    },
    desc: {
      ar: "يقوم بمطابقة الشركاء لبناء تحالفات مؤهلة (Consortia) واكتشاف الفجوات التمويلية والجغرافية، وتوفير توصيات استشارية ذكية مكتوبة لدعم المانحين.",
      en: "Simulates an AI engine matching local actors to build qualified consortia, discovering funding gaps, and producing written advisory recommendations to aid donor decision-making."
    }
  },
  {
    elementId: "#simulator-lock-screen",
    tab: "tab-simulator",
    placement: "top",
    title: {
      ar: "📱 محاكي استمارة Kobo Toolbox",
      en: "📱 Kobo Toolbox Feedback Loop"
    },
    desc: {
      ar: "يحاكي استجابة وتدفق البيانات الفورية من الميدان لتحديث النظام تلقائياً. قمنا بحمايته برمز مرور (yjr2026) لمنع التلاعب وضمان الأمن الرقمي.",
      en: "Simulates real-time field data ingestion. Access is protected by an admin passcode gate (yjr2026) to prevent unauthorized changes, ensuring data security and integrity."
    }
  },
  {
    elementId: "#tab-architecture",
    tab: "tab-architecture",
    placement: "top",
    title: {
      ar: "💡 الاستراتيجية والمعمارية الهندسية",
      en: "💡 Tech Strategy & System Architecture"
    },
    desc: {
      ar: "تعرض المخطط الهندسي لتدفق البيانات، وجدول مقارنة الجدوى الاستثمارية والمالية مع Power BI، وخارطة طريق زمنية متكاملة لـ 24 أسبوعاً تثبت جاهزيتنا القصوى للتنفيذ.",
      en: "Details the technical blueprint, budget cost-efficiency comparison against standard BI tools, and a structured 24-week deployment roadmap proving our execution readiness."
    }
  },
  {
    elementId: null,
    tab: "tab-landing",
    placement: "center",
    title: {
      ar: "🧭 اكتملت الجولة الإرشادية بنجاح!",
      en: "🧭 Guided Tour Completed!"
    },
    desc: {
      ar: "شكراً لوقتك! أنت الآن جاهز لاستكشاف المنصة والتفاعل مع الخرائط والرسوم البيانية وتجربة محاكاة التمويل بنفسك. نتمنى لك تجربة ممتعة!",
      en: "Thank you for your time! You are now ready to explore all layers of the portal. Try playing with the interactive filters or running the live funding scenario!"
    }
  }
];

function startOnboardingTour() {
  isTourActive = true;
  tourCurrentStep = 0;
  
  const overlay = document.getElementById("onboarding-overlay");
  const tooltip = document.getElementById("onboarding-tooltip");
  
  if (overlay && tooltip) {
    overlay.classList.remove("hidden");
    tooltip.classList.remove("hidden");
    
    // Add micro delay for transition
    setTimeout(() => {
      overlay.classList.add("visible");
      tooltip.classList.add("visible");
      renderTourStep();
    }, 50);
  }
}

function renderTourStep() {
  if (!isTourActive) return;
  
  const step = tourSteps[tourCurrentStep];
  if (!step) {
    endOnboardingTour();
    return;
  }
  
  // Hide spotlight temporarily to avoid flashes during transitions
  const spotlightEl = document.getElementById("onboarding-spotlight");
  if (spotlightEl) spotlightEl.classList.add("hidden");
  
  // Show standard overlay backdrop by default
  const overlayEl = document.getElementById("onboarding-overlay");
  if (overlayEl) {
    overlayEl.classList.remove("hidden");
    overlayEl.classList.add("visible");
  }
  
  // Ensure correct tab is selected
  if (step.tab) {
    switchTab(step.tab);
  }
  
  // Update texts based on active language
  const titleText = currentLang === 'ar' ? step.title.ar : step.title.en;
  const descText = currentLang === 'ar' ? step.desc.ar : step.desc.en;
  
  document.getElementById("onboarding-title").innerText = titleText;
  document.getElementById("onboarding-desc").innerText = descText;
  
  // Step counter
  const stepCounter = document.getElementById("onboarding-step-num");
  if (stepCounter) {
    stepCounter.innerText = currentLang === 'ar' 
      ? `الخطوة ${tourCurrentStep + 1} من ${tourSteps.length}` 
      : `Step ${tourCurrentStep + 1} of ${tourSteps.length}`;
  }
  
  // Progress Bar width
  const progressPercent = ((tourCurrentStep + 1) / tourSteps.length) * 100;
  const progressBar = document.getElementById("onboarding-progress");
  if (progressBar) {
    progressBar.style.width = `${progressPercent}%`;
  }
  
  // Button translations and states
  const prevBtn = document.getElementById("onboarding-prev-btn");
  const nextBtn = document.getElementById("onboarding-next-btn");
  const skipBtn = document.getElementById("onboarding-skip-btn");
  
  if (prevBtn) {
    prevBtn.innerText = currentLang === 'ar' ? "السابق" : "Prev";
    prevBtn.style.display = tourCurrentStep === 0 ? "none" : "block";
  }
  
  if (nextBtn) {
    if (tourCurrentStep === tourSteps.length - 1) {
      nextBtn.innerText = currentLang === 'ar' ? "إنهاء الجولة" : "Finish";
    } else {
      nextBtn.innerText = currentLang === 'ar' ? "التالي" : "Next";
    }
  }
  
  if (skipBtn) {
    skipBtn.innerText = currentLang === 'ar' ? "تخطي" : "Skip";
  }
  
  // Wait a moment for tab switching or layout reflows, then highlight and position
  setTimeout(() => {
    const tooltipEl = document.getElementById("onboarding-tooltip");
    if (!tooltipEl) return;

    if (step.elementId) {
      const target = document.querySelector(step.elementId);
      if (target && target.getBoundingClientRect().width > 0) {
        // Scroll target into view
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Let scroll finish, then position spotlight and tooltip
        setTimeout(() => {
          const rect = target.getBoundingClientRect();
          const tooltipRect = tooltipEl.getBoundingClientRect();
          
          // Position spotlight helper at the body level
          if (spotlightEl) {
            spotlightEl.classList.remove("hidden");
            spotlightEl.style.top = `${rect.top + window.scrollY}px`;
            spotlightEl.style.left = `${rect.left + window.scrollX}px`;
            spotlightEl.style.width = `${rect.width}px`;
            spotlightEl.style.height = `${rect.height}px`;
            const borderRadius = window.getComputedStyle(target).borderRadius;
            spotlightEl.style.borderRadius = borderRadius || "8px";
            
            // Hide the standard overlay background so the spotlight shadow is the only darkening layer
            if (overlayEl) overlayEl.classList.remove("visible");
          }
          
          // Calculate tooltip position next to element
          tooltipEl.style.position = "absolute";
          
          let top, left;
          
          if (step.placement === 'top') {
            top = rect.top - tooltipRect.height - 15 + window.scrollY;
            left = rect.left + (rect.width - tooltipRect.width) / 2 + window.scrollX;
          } else if (step.placement === 'left') {
            top = rect.top + (rect.height - tooltipRect.height) / 2 + window.scrollY;
            left = rect.left - tooltipRect.width - 15 + window.scrollX;
          } else if (step.placement === 'right') {
            top = rect.top + (rect.height - tooltipRect.height) / 2 + window.scrollY;
            left = rect.right + 15 + window.scrollX;
          } else { // bottom or fallback
            top = rect.bottom + 15 + window.scrollY;
            left = rect.left + (rect.width - tooltipRect.width) / 2 + window.scrollX;
          }
          
          // Window boundaries check
          if (left < 15) left = 15;
          if (left + tooltipRect.width > window.innerWidth - 15) {
            left = window.innerWidth - tooltipRect.width - 15;
          }
          if (top < 15) top = 15;
          
          tooltipEl.style.top = `${top}px`;
          tooltipEl.style.left = `${left}px`;
          tooltipEl.style.transform = "none";
        }, 250); // wait for scroll
        
        return;
      }
    }
    
    // Default fallback: Center in screen (Fixed position)
    tooltipEl.style.position = "fixed";
    tooltipEl.style.top = "50%";
    tooltipEl.style.left = "50%";
    tooltipEl.style.transform = "translate(-50%, -50%)";
  }, 1200); // wait for Leaflet/Vis.js redraws
}

function nextTourStep() {
  if (tourCurrentStep < tourSteps.length - 1) {
    tourCurrentStep++;
    renderTourStep();
  } else {
    endOnboardingTour();
  }
}

function prevTourStep() {
  if (tourCurrentStep > 0) {
    tourCurrentStep--;
    renderTourStep();
  }
}

function endOnboardingTour() {
  isTourActive = false;
  
  const overlay = document.getElementById("onboarding-overlay");
  const spotlight = document.getElementById("onboarding-spotlight");
  const tooltip = document.getElementById("onboarding-tooltip");
  
  if (spotlight) {
    spotlight.classList.add("hidden");
  }
  
  if (overlay && tooltip) {
    overlay.classList.remove("visible");
    tooltip.classList.remove("visible");
    
    setTimeout(() => {
      overlay.classList.add("hidden");
      tooltip.classList.add("hidden");
    }, 300);
  }
  
  // Save completion state
  safeSetItem("yiep_tour_completed", "true");
  
  // Go back to landing page
  switchTab("tab-landing");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
