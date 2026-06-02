export type Locale = "zh" | "en";

export type Project = {
  slug: string;
  order: string;
  featured: boolean;
  discipline: "photography" | "design";
  year: string;
  coverFit?: "cover" | "contain";
  cover: string;
  images: string[];
  zh: ProjectCopy;
  en: ProjectCopy;
};

type ProjectCopy = {
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  method: string[];
  role: string;
  publicNote: string;
};

export const projects: Project[] = [
  {
    slug: "between-night",
    order: "P-01",
    featured: true,
    discipline: "photography",
    year: "2026",
    cover: "/assets/projects/between-night/street-figure.png",
    images: [
      "/assets/projects/between-night/rain-bus-stop.png",
      "/assets/projects/between-night/factory-court.png",
      "/assets/projects/between-night/night-balcony.png",
      "/assets/projects/between-night/street-figure.png",
      "/assets/projects/between-night/night-entrance.png",
      "/assets/projects/between-night/interior-night.png",
      "/assets/projects/between-night/county-street.png",
      "/assets/projects/between-night/rain-crossing.png",
      "/assets/projects/between-night/night-room.png"
    ],
    zh: {
      title: "临界夜",
      subtitle: "The Between Night",
      category: "电影化 AI 影像系列",
      summary:
        "一组关于县城夜晚、空间孤独和城市化余震的影像。项目把人物放回街道、阳台、候车亭和废弃场地，让空间成为主角。",
      method: [
        "以黄昏、雨夜和人造光建立临界时刻",
        "用门框、站台、球场和玻璃作为空间切割",
        "控制人物比例，让孤独来自人与场景的关系"
      ],
      role:
        "完成概念设定、序列设计、角色与场景控制、图像生成提示体系和成片筛选。",
      publicNote:
        "公开版本只展示项目摘要和代表图，不包含完整 Prompt 总表、工作记忆或角色全档案。"
    },
    en: {
      title: "The Between Night",
      subtitle: "Liminal county-town nights",
      category: "Cinematic AI Image Series",
      summary:
        "A visual sequence about small-city nights, spatial solitude, and the afterimage of urbanization. People appear as elements inside bus stops, balconies, streets, and abandoned courts.",
      method: [
        "Build liminal moments with dusk, rain, and artificial light",
        "Use frames, glass, courts, and street furniture to divide space",
        "Keep figures modest in scale so loneliness comes from the place"
      ],
      role:
        "Concept direction, sequence design, scene and character control, prompt system design, and final image selection.",
      publicNote:
        "The public version shows summaries and selected images only. Full prompt tables, working notes, and internal character files are excluded."
    }
  },
  {
    slug: "ergun-river",
    order: "P-02",
    featured: true,
    discipline: "photography",
    year: "2026",
    cover: "/assets/projects/ergun-river/evening-wind.png",
    images: [
      "/assets/projects/ergun-river/evening-wind.png",
      "/assets/projects/ergun-river/frozen-river-game.png",
      "/assets/projects/ergun-river/sleeping-dog.png",
      "/assets/projects/ergun-river/blue-basin.png",
      "/assets/projects/ergun-river/ice-bicycle.png",
      "/assets/projects/ergun-river/market-snow.png",
      "/assets/projects/ergun-river/stove-smoke.png",
      "/assets/projects/ergun-river/red-scarf.png",
      "/assets/projects/ergun-river/winter-shop.png",
      "/assets/projects/ergun-river/winter-nap.png",
      "/assets/projects/ergun-river/frost-window.png",
      "/assets/projects/ergun-river/horse-shovel.png"
    ],
    zh: {
      title: "额尔古纳河",
      subtitle: "Ergun River",
      category: "冬季纪实感 AI 图像系列",
      summary:
        "围绕内蒙古边境村庄的冬季日常，捕捉炉烟、木刻楞、白桦林和小卖部里几乎不重要却很有重量的瞬间。",
      method: [
        "以中画幅胶片感和自然光限制图像气质",
        "让地方性来自真实物件，而不是旅游符号",
        "用 12 图序列呈现北方冬日的安静节奏"
      ],
      role:
        "完成地域调性设定、12 图结构化序列、视觉约束、成片选择和公开叙事整理。",
      publicNote:
        "公开版本保留地方性与方法说明，不直接发布完整结构化提示词。"
    },
    en: {
      title: "Ergun River",
      subtitle: "Winter everyday life on the border",
      category: "Documentary-style AI Image Series",
      summary:
        "A winter sequence set around border villages in Inner Mongolia, focusing on stove smoke, log houses, birch woods, small shops, and almost-unimportant daily moments.",
      method: [
        "Use medium-format film language and natural light constraints",
        "Build regional specificity through practical objects, not tourist signs",
        "Shape a quiet northern rhythm through a 12-image sequence"
      ],
      role:
        "Regional art direction, 12-image structure, visual constraints, image selection, and public-facing case writing.",
      publicNote:
        "The public version keeps the project logic and selected imagery while excluding full structured prompts."
    }
  },
  {
    slug: "auto-exterior-engine",
    order: "D-01",
    featured: false,
    discipline: "design",
    year: "2026",
    cover: "/assets/projects/auto-exterior/cover.jpg",
    images: [
      "/assets/projects/auto-exterior/cover.jpg",
      "/assets/projects/auto-exterior/offroad-suv-hero.jpg",
      "/assets/projects/auto-exterior/mini-hypercore.jpg",
      "/assets/projects/auto-exterior/concept-04.jpg",
      "/assets/projects/auto-exterior/concept-05.jpg"
    ],
    zh: {
      title: "Auto Exterior Engine",
      subtitle: "汽车外观概念引擎",
      category: "AI 设计工作流",
      summary:
        "一个面向多车型、多品牌语气的汽车外观概念生成系统，从定位陈述到概念卡，再到可执行图像提示。",
      method: [
        "用规则和模板约束车型、年代、品牌语气",
        "把概念卡转译成可复用的图像生成指令",
        "通过多视角结果回写规则库"
      ],
      role:
        "设计文件型工作流、规则结构、概念模板和示例项目。",
      publicNote:
        "公开版本展示方法和结果图，不公开完整规则库细节。"
    },
    en: {
      title: "Auto Exterior Engine",
      subtitle: "Automotive concept workflow",
      category: "AI Design Workflow",
      summary:
        "A file-based concept engine for automotive exterior ideation across body types, decades, and brand tones.",
      method: [
        "Constrain body type, era, and brand tone with rules and templates",
        "Translate concept cards into reusable image-generation instructions",
        "Feed visual review back into the rule system"
      ],
      role:
        "Workflow architecture, rule structure, concept templates, and sample runs.",
      publicNote:
        "The public version shows the method and selected output while keeping detailed rule files private."
    }
  },
  {
    slug: "overlooked",
    order: "P-03",
    featured: false,
    discipline: "photography",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/overlooked/portrait-03.jpg",
    images: [
      "/assets/projects/overlooked/portrait-03.jpg",
      "/assets/projects/overlooked/delivery-rider.jpg",
      "/assets/projects/overlooked/sanitation-worker.jpg",
      "/assets/projects/overlooked/portrait-01.jpg",
      "/assets/projects/overlooked/portrait-02.jpg",
      "/assets/projects/overlooked/portrait-04.jpg",
      "/assets/projects/overlooked/portrait-05.jpg"
    ],
    zh: {
      title: "忽视者",
      subtitle: "The Overlooked",
      category: "人物肖像系统",
      summary:
        "以正面肖像和角色档案重新组织被日常生活轻易滑过的人物，强调劳动痕迹、衣物状态和凝视权。",
      method: [
        "用统一棚拍式构图减少环境噪音",
        "通过服装、污渍、姿态和面部细节建立人物真实感",
        "把角色档案转化为稳定的视觉控制语言"
      ],
      role:
        "完成主题设定、角色系统、服装细节、图像提示和代表图整理。",
      publicNote:
        "公开版本不展示完整角色档案和提示词，只展示视觉方向。"
    },
    en: {
      title: "The Overlooked",
      subtitle: "Portraits of social invisibility",
      category: "Portrait System",
      summary:
        "A portrait system that gives visual weight to people easily passed over in daily life, using clothing, traces, posture, and direct frontal framing.",
      method: [
        "Reduce environmental noise with a consistent studio-like frame",
        "Build realism through wear, stains, posture, and facial detail",
        "Translate character files into stable visual control language"
      ],
      role:
        "Theme direction, character system, wardrobe detail, image prompting, and selected image editing.",
      publicNote:
        "The public version shows the visual direction, not the full character files or prompts."
    }
  },
  {
    slug: "riders",
    order: "P-04",
    featured: false,
    discipline: "photography",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/riders/woman-rider.jpg",
    images: [
      "/assets/projects/riders/woman-rider.jpg",
      "/assets/projects/riders/vendor-tricycle.jpg",
      "/assets/projects/riders/commuter-rider.jpg",
      "/assets/projects/riders/rain-commuter.jpg",
      "/assets/projects/riders/night-worker.jpg",
      "/assets/projects/riders/utility-rider.jpg"
    ],
    zh: {
      title: "骑电动车的人",
      subtitle: "Riders",
      category: "物件痕迹与人物研究",
      summary:
        "围绕电动助力车的外观、磨损、职业使用和人物身份，建立一套纪实式 AI 图像生成研究。",
      method: [
        "拆解车型、部件、材料和磨损痕迹",
        "用车辆状态反推职业、地域和生活方式",
        "让人和交通工具获得同等视觉权重"
      ],
      role:
        "完成研究框架、视觉矩阵、角色方向和生成指南。",
      publicNote:
        "公开版本不发布完整研究表格和可直接复用的生成指南。"
    },
    en: {
      title: "Riders",
      subtitle: "People and electric utility vehicles",
      category: "Object Trace Research",
      summary:
        "A documentary-style visual study of electric utility vehicles, wear patterns, labor use, and the people shaped by those tools.",
      method: [
        "Break down vehicle types, parts, materials, and traces of use",
        "Infer occupation, region, and daily life through vehicle condition",
        "Give people and tools equal visual weight"
      ],
      role:
        "Research framework, visual matrix, character direction, and generation guide.",
      publicNote:
        "The public version does not include full research tables or directly reusable generation guides."
    }
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const locales: Locale[] = ["zh", "en"];
