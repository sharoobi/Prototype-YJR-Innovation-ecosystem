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
});

// Database Persistence Manager
function loadDatabase() {
  const localDb = localStorage.getItem("yjr_actors_db");
  const localTheme = localStorage.getItem("yjr_active_theme");
  
  if (localTheme) {
    activeTheme = localTheme;
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector) themeSelector.value = activeTheme;
  }
  
  if (localDb) {
    try {
      actors = JSON.parse(localDb);
    } catch (e) {
      actors = [...defaultActorsBackup];
      localStorage.setItem("yjr_actors_db", JSON.stringify(actors));
    }
  } else {
    actors = [...defaultActorsBackup];
    localStorage.setItem("yjr_actors_db", JSON.stringify(actors));
  }
  filteredActors = [...actors];
}

function saveDatabase() {
  localStorage.setItem("yjr_actors_db", JSON.stringify(actors));
}

function resetDatabase() {
  const confirmMsg = currentLang === 'ar' ? 
    "هل أنت متأكد من إعادة تعيين قاعدة البيانات للمطابقة الأصلية وحذف جميع الجهات المضافة؟" : 
    "Are you sure you want to reset the database to defaults and delete all added actors?";
    
  if (confirm(confirmMsg)) {
    actors = [...defaultActorsBackup];
    saveDatabase();
    filteredActors = [...actors];
    populateFiltersAndForms();
    updateDashboardViews();
    showToast(currentLang === 'ar' ? "تمت إعادة ضبط قاعدة البيانات للوضع الافتراضي" : "Database reset to default settings.");
  }
}

// Visual Theme Swap Manager
function changeTheme(themeName) {
  activeTheme = themeName;
  localStorage.setItem("yjr_active_theme", themeName);
  
  document.body.classList.remove('theme-neon', 'theme-emerald', 'theme-light');
  document.body.classList.add('theme-' + themeName);
  
  // Swap Leaflet map tiles dynamically
  updateMapTiles();
  
  // Update Chart.js default colors dynamically based on light/dark theme
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
  
  // Center of Yemen: Lat 15.0, Lng 46.5, Zoom 6
  mapInstance = L.map("yemen-map").setView([15.0, 46.5], 6);
  
  // Setup theme-based tile layer
  updateMapTiles();
  
  markersGroup = L.layerGroup().addTo(mapInstance);
}

// Update Map tiles dynamically based on theme selection
function updateMapTiles() {
  if (!mapInstance) return;
  
  if (mapTileLayer) {
    mapInstance.removeLayer(mapTileLayer);
  }
  
  let tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'; // Neon (Default Dark)
  if (activeTheme === 'light') {
    tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'; // Frosty Light (Positron)
  } else if (activeTheme === 'emerald') {
    tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'; // Emerald Organic (Voyager)
  }
  
  mapTileLayer = L.tileLayer(tileUrl, {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(mapInstance);
}

// Setup Charts
function initCharts() {
  const ctxSectors = document.getElementById("chart-sectors").getContext("2d");
  const ctxStages = document.getElementById("chart-stages").getContext("2d");
  
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
  toggleBtn.innerText = currentLang === 'ar' ? 'English' : 'العربية';
  
  applyLocalization();
  
  // Re-run graphs and charts in new language
  Chart.defaults.font.family = currentLang === 'ar' ? 'Tajawal' : 'Inter';
  chartSectors.options.plugins.title.text = currentLang === 'ar' ? 'توزيع القطاعات' : 'Sectors Distribution';
  chartStages.options.plugins.title.text = currentLang === 'ar' ? 'مراحل الابتكار' : 'Innovation Stages';
  chartStages.data.datasets[0].label = currentLang === 'ar' ? 'عدد الجهات' : 'No. of Actors';
  
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
  
  document.getElementById("lbl-stat-total").innerText = dict.statTotal;
  document.getElementById("lbl-stat-civil").innerText = dict.statCivil;
  document.getElementById("lbl-stat-private").innerText = dict.statPrivate;
  document.getElementById("lbl-stat-public").innerText = dict.statPublic;
  
  document.getElementById("lbl-filters-title").innerText = dict.filtersTitle;
  document.getElementById("search-box").placeholder = dict.searchPlaceholder;
  document.getElementById("lbl-filter-gov").innerText = dict.filterGov;
  document.getElementById("lbl-filter-sector").innerText = dict.filterSector;
  document.getElementById("lbl-filter-stage").innerText = dict.filterStage;
  
  document.getElementById("opt-gov-all").innerText = dict.govAll;
  document.getElementById("opt-sector-all").innerText = dict.sectorAll;
  document.getElementById("opt-sector-civil").innerText = dict.sectorCivil;
  document.getElementById("opt-sector-private").innerText = dict.sectorPrivate;
  document.getElementById("opt-sector-public").innerText = dict.sectorPublic;
  
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
  document.getElementById("th-stage").innerText = dict.thStage;
  document.getElementById("th-gov").innerText = dict.thGov;
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
  
  document.getElementById(tabId).classList.add("active");
  
  // Highlight correct button
  if (tabId === 'tab-dashboard') {
    document.getElementById("tab-btn-dash").classList.add("active");
    // Recalculate leaflet map sizing since it was hidden
    if (mapInstance) {
      setTimeout(() => mapInstance.invalidateSize(), 100);
    }
  } else if (tabId === 'tab-directory') {
    document.getElementById("tab-btn-dir").classList.add("active");
  } else if (tabId === 'tab-simulator') {
    document.getElementById("tab-btn-sim").classList.add("active");
  }
}

// Filters logic
function applyFilters() {
  const searchQuery = document.getElementById("search-box").value.toLowerCase();
  const govFilter = document.getElementById("filter-gov").value;
  const sectorFilter = document.getElementById("filter-sector").value;
  const stageFilter = document.getElementById("filter-stage").value;
  
  filteredActors = actors.filter(actor => {
    const matchesSearch = actor.name_ar.toLowerCase().includes(searchQuery) || 
                          actor.name_en.toLowerCase().includes(searchQuery) ||
                          actor.description_ar.toLowerCase().includes(searchQuery) ||
                          actor.description_en.toLowerCase().includes(searchQuery);
                          
    const matchesGov = govFilter === 'all' || actor.governorate === govFilter;
    const matchesSector = sectorFilter === 'all' || actor.sector === sectorFilter;
    const matchesStage = stageFilter === 'all' || actor.stage === stageFilter;
    
    return matchesSearch && matchesGov && matchesSector && matchesStage;
  });
  
  updateDashboardViews();
}

function resetFilters() {
  document.getElementById("search-box").value = "";
  document.getElementById("filter-gov").value = "all";
  document.getElementById("filter-sector").value = "all";
  document.getElementById("filter-stage").value = "all";
  applyFilters();
}

// Refresh all UI elements
function updateDashboardViews() {
  // 1. Update Stats Card Counters, Progress Bars & Badges
  const totalCount = filteredActors.length;
  const civilCount = filteredActors.filter(a => a.sector === 'civil_society').length;
  const privateCount = filteredActors.filter(a => a.sector === 'private').length;
  const publicCount = filteredActors.filter(a => a.sector === 'public').length;

  document.getElementById("stat-total").innerText = totalCount;
  document.getElementById("stat-civil").innerText = civilCount;
  document.getElementById("stat-private").innerText = privateCount;
  document.getElementById("stat-public").innerText = publicCount;

  // Calculate percentages
  const civilPct = totalCount > 0 ? Math.round((civilCount / totalCount) * 100) : 0;
  const privatePct = totalCount > 0 ? Math.round((privateCount / totalCount) * 100) : 0;
  const publicPct = totalCount > 0 ? Math.round((publicCount / totalCount) * 100) : 0;

  // Update progress bars widths
  document.getElementById("pb-stat-total").style.width = "100%";
  document.getElementById("pb-stat-civil").style.width = civilPct + "%";
  document.getElementById("pb-stat-private").style.width = privatePct + "%";
  document.getElementById("pb-stat-public").style.width = publicPct + "%";

  // Update badges text
  document.getElementById("badge-stat-civil").innerText = civilPct + "%";
  document.getElementById("badge-stat-private").innerText = privatePct + "%";
  document.getElementById("badge-stat-public").innerText = publicPct + "%";
  
  // 2. Render Map markers with Sonar Pulse CSS
  if (markersGroup) {
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
          ${actor.email || ''} | ${actor.phone || ''}
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
  
  // 3. Render Vis.js Network Graph
  renderNetwork();
  
  // 4. Render Chart.js
  renderCharts();
  
  // 5. Populate table directory
  renderDirectoryTable();
  
  // 6. Run Strategic Gaps Analyzer
  runGapsAnalysis();
}

// Vis.js Network Graph (with interactive neighbors Focus Mode)
function renderNetwork() {
  const container = document.getElementById("network-graph");
  if (!container) return;
  
  const nodesArray = [];
  const edgesArray = [];
  
  // Add filtered nodes
  filteredActors.forEach(actor => {
    const label = currentLang === 'ar' ? actor.name_ar : actor.name_en;
    
    // Node styling by sector
    let color = { background: 'rgba(59, 130, 246, 0.85)', border: '#3b82f6', highlight: '#60a5fa' };
    if (actor.sector === 'private') {
      color = { background: 'rgba(245, 158, 11, 0.85)', border: '#f59e0b', highlight: '#fbbf24' };
    } else if (actor.sector === 'civil_society') {
      color = { background: 'rgba(16, 185, 129, 0.85)', border: '#10b981', highlight: '#34d399' };
    }
    
    nodesArray.push({
      id: actor.id,
      label: label,
      color: color,
      font: { color: activeTheme === 'light' ? '#0f172a' : '#ffffff', face: currentLang === 'ar' ? 'Tajawal' : 'Inter', size: 11, bold: true },
      shape: 'box',
      borderWidth: 1.5,
      shadow: true,
      margin: 8
    });
    
    // Add edges for connections if target exists in our filtered list
    if (actor.connections && Array.isArray(actor.connections)) {
      actor.connections.forEach(connId => {
        if (connId > actor.id && filteredActors.some(a => a.id === connId)) {
          edgesArray.push({
            from: actor.id,
            to: connId,
            color: { color: activeTheme === 'light' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)', highlight: 'var(--primary)' },
            width: 1.5
          });
        }
      });
    }
  });
  
  const nodes = new vis.DataSet(nodesArray);
  const edges = new vis.DataSet(edgesArray);
  
  const data = { nodes, edges };
  
  // Compute Network Density (edges divided by maximum possible edges)
  const nodeCount = filteredActors.length;
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
    nodes: {
      shape: 'box',
      margin: 10
    },
    physics: {
      enabled: networkPhysicsEnabled,
      stabilization: true,
      barnesHut: {
        gravitationalConstant: -1800,
        centralGravity: 0.3,
        springLength: 90
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
          updateArray.push({ id: node.id, font: { size: 14 }, borderWidth: 3 });
        } else if (isConnected) {
          updateArray.push({ id: node.id, opacity: 1, font: { size: 11 } });
        } else {
          updateArray.push({ id: node.id, opacity: 0.2, font: { size: 9 } });
        }
      });
      nodes.update(updateArray);
    } else {
      // Clicked in empty space: Reset opacity & sizing for all nodes
      const resetArray = [];
      nodes.forEach(node => {
        resetArray.push({ id: node.id, opacity: 1, font: { size: 11 }, borderWidth: 1.5 });
      });
      nodes.update(resetArray);
    }
  });
}

// Network Physics Controllers
function toggleNetworkPhysics() {
  networkPhysicsEnabled = !networkPhysicsEnabled;
  if (networkInstance) {
    networkInstance.setOptions({ physics: { enabled: networkPhysicsEnabled } });
  }
  
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
  if (networkInstance) {
    networkInstance.stabilize();
  }
}

// Chart.js render updates
function renderCharts() {
  if (!chartSectors || !chartStages) return;
  
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
}

// Table Directory render
function renderDirectoryTable() {
  const tbody = document.getElementById("directory-table-body");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  if (filteredActors.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="7" style="text-align: center; color: var(--text-secondary);">
      ${currentLang === 'ar' ? 'لا توجد جهات مطابقة للتصفية حالياً' : 'No matching actors found for current filters'}
    </td>`;
    tbody.appendChild(tr);
    return;
  }
  
  filteredActors.forEach(actor => {
    const tr = document.createElement("tr");
    
    const name = currentLang === 'ar' ? actor.name_ar : actor.name_en;
    const secName = currentLang === 'ar' ? actor.sector_ar : actor.sector_en;
    const stgName = currentLang === 'ar' ? actor.stage_ar : actor.stage_en;
    const govName = currentLang === 'ar' ? actor.governorate_ar : actor.governorate_en;
    const desc = currentLang === 'ar' ? actor.description_ar : actor.description_en;
    
    let badgeClass = 'badge-public';
    if (actor.sector === 'private') badgeClass = 'badge-private';
    if (actor.sector === 'civil_society') badgeClass = 'badge-civil';
    
    tr.innerHTML = `
      <td><strong>${name}</strong></td>
      <td><span class="badge ${badgeClass}">${secName}</span></td>
      <td>${stgName}</td>
      <td>${govName}</td>
      <td><a href="mailto:${actor.email}" style="color: var(--primary); text-decoration: none;">${actor.email || '-'}</a></td>
      <td>${actor.phone || '-'}</td>
      <td style="font-size: 12px; color: var(--text-secondary); max-width: 250px;">${desc}</td>
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
  const gov = document.getElementById("form-gov").value;
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
    Hodeidah: { lat: 14.7979 + (Math.random() - 0.5) * 0.05, lng: 42.9530 + (Math.random() - 0.5) * 0.05 }
  };
  
  const coords = govCoordinates[gov];
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
  
  const govMapping = {
    Aden: { ar: "عدن", en: "Aden" },
    Sanaa: { ar: "صنعاء", en: "Sanaa" },
    Taiz: { ar: "تعز", en: "Taiz" },
    Hadramout: { ar: "حضرموت", en: "Hadramout" },
    Marib: { ar: "مأرب", en: "Marib" },
    Hodeidah: { ar: "الحديدة", en: "Hodeidah" }
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
    governorate: gov,
    governorate_ar: govMapping[gov].ar,
    governorate_en: govMapping[gov].en,
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
    const headers = ["ID", "Name (AR)", "Name (EN)", "Sector", "Stage", "Governorate", "Email", "Phone", "Description (AR)", "Description (EN)"];
    const rows = filteredActors.map(a => [
      a.id,
      `"${a.name_ar.replace(/"/g, '""')}"`,
      `"${a.name_en.replace(/"/g, '""')}"`,
      a.sector,
      a.stage,
      a.governorate,
      a.email,
      a.phone,
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
