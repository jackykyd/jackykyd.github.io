export type Locale = "zh" | "en";

export type Project = {
  slug: string;
  order: string;
  featured: boolean;
  discipline: "photography" | "design" | "motion";
  year: string;
  coverFit?: "cover" | "contain";
  cover: string;
  images: string[];
  motionItems?: MotionItem[];
  zh: ProjectCopy;
  en: ProjectCopy;
};

export type MotionItem = {
  number: string;
  year: string;
  poster: string;
  video: string;
  zh: MotionItemCopy;
  en: MotionItemCopy;
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

type MotionItemCopy = {
  title: string;
  datePlace: string;
  medium: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "between-night",
    order: "P-01",
    featured: true,
    discipline: "photography",
    year: "2026",
    cover: "/assets/projects/between-night/street-figure-display.webp",
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
    cover: "/assets/projects/ergun-river/evening-wind-display.webp",
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
    slug: "back-to-2006",
    order: "M-01",
    featured: true,
    discipline: "motion",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/back-to-2006/scene-006-display.webp",
    images: [
      "/assets/projects/back-to-2006/scene-002.jpg",
      "/assets/projects/back-to-2006/scene-003.jpg",
      "/assets/projects/back-to-2006/scene-004.jpg",
      "/assets/projects/back-to-2006/scene-005.jpg",
      "/assets/projects/back-to-2006/scene-006.jpg",
      "/assets/projects/back-to-2006/scene-007.jpg",
      "/assets/projects/back-to-2006/scene-008.jpg",
      "/assets/projects/back-to-2006/scene-009.jpg",
      "/assets/projects/back-to-2006/scene-010.jpg"
    ],
    motionItems: [
      {
        number: "01",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-002.jpg",
        video: "/assets/projects/back-to-2006/scene-002.mp4",
        zh: {
          title: "网吧门口",
          datePlace: "2006年6月18日，武汉",
          medium: "AI 生成静音循环影像，5秒",
          description: "一台未来旅行车停在网吧楼下，像被误放进旧街区的道具。"
        },
        en: {
          title: "Internet Cafe Entrance",
          datePlace: "June 18, 2006, Wuhan",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A future wagon sits below an internet cafe, misplaced inside an older street."
        }
      },
      {
        number: "02",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-003.jpg",
        video: "/assets/projects/back-to-2006/scene-003.mp4",
        zh: {
          title: "公交站",
          datePlace: "2006年7月20日，湛江",
          medium: "AI 生成静音循环影像，5秒",
          description: "站牌、校服和玻璃反光把一辆电车压回潮湿的夏天。"
        },
        en: {
          title: "Bus Stop",
          datePlace: "July 20, 2006, Zhanjiang",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A bus shelter, school uniform, and glass reflection pull an EV back into a humid summer."
        }
      },
      {
        number: "03",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-004.jpg",
        video: "/assets/projects/back-to-2006/scene-004.mp4",
        zh: {
          title: "音像店",
          datePlace: "2006年8月4日，长沙",
          medium: "AI 生成静音循环影像，5秒",
          description: "红色车身停在旧招牌下，像一段没有解释的未来广告。"
        },
        en: {
          title: "Record Shop",
          datePlace: "August 4, 2006, Changsha",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A red body rests under old shop signs like a future advertisement without explanation."
        }
      },
      {
        number: "04",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-005.jpg",
        video: "/assets/projects/back-to-2006/scene-005.mp4",
        zh: {
          title: "小卖部电视",
          datePlace: "2006年7月3日，昆明",
          medium: "AI 生成静音循环影像，5秒",
          description: "孩子们看电视，窗外的车安静得像另一个频道。"
        },
        en: {
          title: "Shop Television",
          datePlace: "July 3, 2006, Kunming",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "Children watch television while the car outside stays quiet, like another channel."
        }
      },
      {
        number: "05",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-006.jpg",
        video: "/assets/projects/back-to-2006/scene-006.mp4",
        zh: {
          title: "中学校门雨后",
          datePlace: "2006年9月1日，南京",
          medium: "AI 生成静音循环影像，5秒",
          description: "几个学生站在校门外，未来汽车成为新学期最不合时宜的物件。"
        },
        en: {
          title: "After Rain at the School Gate",
          datePlace: "September 1, 2006, Nanjing",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "Students pause outside the school gate as a future car becomes the wrong object for a new term."
        }
      },
      {
        number: "06",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-007.jpg",
        video: "/assets/projects/back-to-2006/scene-007.mp4",
        zh: {
          title: "河边",
          datePlace: "2006年8月17日，贵州镇远",
          medium: "AI 生成静音循环影像，5秒",
          description: "傍晚的水面和山影让车看起来不像穿越，而像被地方接纳。"
        },
        en: {
          title: "By the River",
          datePlace: "August 17, 2006, Zhenyuan, Guizhou",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "Evening water and mountain shade make the car feel less transported than absorbed."
        }
      },
      {
        number: "07",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-008.jpg",
        video: "/assets/projects/back-to-2006/scene-008.mp4",
        zh: {
          title: "冰淇淋店",
          datePlace: "2006年7月29日，汕头",
          medium: "AI 生成静音循环影像，5秒",
          description: "店门口的孩子和淡紫色车头共享同一块下午阴影。"
        },
        en: {
          title: "Ice-Cream Shop",
          datePlace: "July 29, 2006, Shantou",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A child at the storefront and a pale violet front end share the same afternoon shade."
        }
      },
      {
        number: "08",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-009.jpg",
        video: "/assets/projects/back-to-2006/scene-009.mp4",
        zh: {
          title: "老小区冬日",
          datePlace: "2006年12月6日，哈尔滨",
          medium: "AI 生成静音循环影像，5秒",
          description: "冬天的巷子里，黑色车身把未来感降低成日常噪音。"
        },
        en: {
          title: "Winter Residential Lane",
          datePlace: "December 6, 2006, Harbin",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "In a winter lane, a dark vehicle reduces futurity into ordinary street noise."
        }
      },
      {
        number: "09",
        year: "2026",
        poster: "/assets/projects/back-to-2006/scene-010.jpg",
        video: "/assets/projects/back-to-2006/scene-010.mp4",
        zh: {
          title: "世界杯广场",
          datePlace: "2006年7月10日，西安",
          medium: "AI 生成静音循环影像，5秒",
          description: "人群看向屏幕，车停在边缘，像另一个还没有播出的结果。"
        },
        en: {
          title: "World Cup Square",
          datePlace: "July 10, 2006, Xi'an",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The crowd faces the screen while the car waits at the edge, like another result not yet broadcast."
        }
      }
    ],
    zh: {
      title: "回到 2006",
      subtitle: "Back to 2006",
      category: "AI 动态影像系列",
      summary:
        "一组关于当代国产电车突然出现在 2006 年中国学生时代街景里的静音循环影像。项目不解释穿越机制，只保留过去的人、旧街区和未来物之间的停顿。",
      method: [
        "用 2006 年的校门、网吧、小卖部和老小区建立时代现场",
        "让当代国产电车成为画面中唯一不合时宜的物件",
        "以 5 秒静音循环保留电影剧照和环境短片之间的状态"
      ],
      role:
        "完成系列设定、分集结构、场景与车型关系、静帧筛选、视频生成和公开展示整理。",
      publicNote:
        "公开版本只展示压缩后的代表循环影像、静帧和展览式铭牌，不公开完整 Prompt、分集工作文档或原始大图。"
    },
    en: {
      title: "Back to 2006",
      subtitle: "Contemporary Chinese EVs in an older student life",
      category: "AI Moving Image Series",
      summary:
        "A silent loop series in which contemporary Chinese EVs appear inside everyday Chinese student-life scenes from 2006. The work does not explain time travel; it holds the pause between old streets, past people, and future objects.",
      method: [
        "Build 2006 through school gates, internet cafes, small shops, and residential lanes",
        "Use contemporary Chinese EVs as the only misplaced object in the frame",
        "Keep each piece between cinematic stillness and environmental motion through a 5-second silent loop"
      ],
      role:
        "Series concept, episode structure, scene and vehicle relationships, still selection, video generation, and public presentation editing.",
      publicNote:
        "The public version shows compressed representative loops, stills, and exhibition-style labels only. Full prompts, episode working documents, and raw images are excluded."
    }
  },
  {
    slug: "classic-car-studies",
    order: "M-02",
    featured: true,
    discipline: "motion",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/classic-car-studies/scene-07-display.webp",
    images: [
      "/assets/projects/classic-car-studies/scene-01.jpg",
      "/assets/projects/classic-car-studies/scene-02.jpg",
      "/assets/projects/classic-car-studies/scene-03.jpg",
      "/assets/projects/classic-car-studies/scene-04.jpg",
      "/assets/projects/classic-car-studies/scene-05.jpg",
      "/assets/projects/classic-car-studies/scene-06.jpg",
      "/assets/projects/classic-car-studies/scene-07.jpg",
      "/assets/projects/classic-car-studies/scene-08.jpg",
      "/assets/projects/classic-car-studies/scene-09.jpg"
    ],
    motionItems: [
      {
        number: "01",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-01.jpg",
        video: "/assets/projects/classic-car-studies/scene-01.mp4",
        zh: {
          title: "Honda NSX NA1",
          datePlace: "Honda NSX NA1",
          medium: "AI 生成静音循环影像，5秒",
          description: "红色 NSX 停在清晨维修区，计时屏还亮着，像一次突然中断的测试。"
        },
        en: {
          title: "Honda NSX NA1",
          datePlace: "Honda NSX NA1",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A red NSX waits in the morning pit lane, the timing screen still lit like an interrupted test."
        }
      },
      {
        number: "02",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-02.jpg",
        video: "/assets/projects/classic-car-studies/scene-02.mp4",
        zh: {
          title: "Jaguar XJ12",
          datePlace: "Jaguar XJ12",
          medium: "AI 生成静音循环影像，5秒",
          description: "深色 XJ12 停在酒店门口，后座阅读灯还亮着，大堂里没有人。"
        },
        en: {
          title: "Jaguar XJ12",
          datePlace: "Jaguar XJ12",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A dark XJ12 holds outside the hotel, rear reading light on, the lobby bright and empty."
        }
      },
      {
        number: "03",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-03.jpg",
        video: "/assets/projects/classic-car-studies/scene-03.mp4",
        zh: {
          title: "Porsche 901",
          datePlace: "Porsche 901",
          medium: "AI 生成静音循环影像，5秒",
          description: "一辆 1964 Porsche 901 停在私人小机场边，远处小型飞机舱灯仍然亮着。"
        },
        en: {
          title: "Porsche 901",
          datePlace: "Porsche 901",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A 1964 Porsche 901 sits at the edge of a private airstrip, a small aircraft still lit behind it."
        }
      },
      {
        number: "04",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-04.jpg",
        video: "/assets/projects/classic-car-studies/scene-04.mp4",
        zh: {
          title: "Volvo P1800",
          datePlace: "Volvo P1800",
          medium: "AI 生成静音循环影像，5秒",
          description: "P1800 带着行李停在无人边境岗亭前，栏杆抬起，烈日和尘土让时间停住。"
        },
        en: {
          title: "Volvo P1800",
          datePlace: "Volvo P1800",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The P1800 waits with luggage at an unmanned border post, the raised barrier holding time still."
        }
      },
      {
        number: "05",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-05.jpg",
        video: "/assets/projects/classic-car-studies/scene-05.mp4",
        zh: {
          title: "Saab 900 Convertible",
          datePlace: "Saab 900 Convertible",
          medium: "AI 生成静音循环影像，5秒",
          description: "黄色 Saab 900 停在空荡汽车影院，银幕只剩雪花噪点。"
        },
        en: {
          title: "Saab 900 Convertible",
          datePlace: "Saab 900 Convertible",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A yellow Saab 900 waits in an empty drive-in, the screen reduced to static."
        }
      },
      {
        number: "06",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-06.jpg",
        video: "/assets/projects/classic-car-studies/scene-06.mp4",
        zh: {
          title: "Mazda RX-7 FD",
          datePlace: "Mazda RX-7 FD",
          medium: "AI 生成静音循环影像，5秒",
          description: "银灰 RX-7 停在北海道海边加油站，油枪还插着，车内灯没有熄灭。"
        },
        en: {
          title: "Mazda RX-7 FD",
          datePlace: "Mazda RX-7 FD",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A silver-gray RX-7 waits at a Hokkaido seaside gas station, fuel nozzle still inserted."
        }
      },
      {
        number: "07",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-07.jpg",
        video: "/assets/projects/classic-car-studies/scene-07.mp4",
        zh: {
          title: "Toyota 2000GT",
          datePlace: "Toyota 2000GT",
          medium: "AI 生成静音循环影像，5秒",
          description: "白色 2000GT 停在香港半山车库坡道口，闸机抬着，车内灯仍亮。"
        },
        en: {
          title: "Toyota 2000GT",
          datePlace: "Toyota 2000GT",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A white 2000GT stops at a Mid-Levels garage ramp, barrier raised and cabin light still on."
        }
      },
      {
        number: "08",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-08.jpg",
        video: "/assets/projects/classic-car-studies/scene-08.mp4",
        zh: {
          title: "Mercedes-Benz 280 SL",
          datePlace: "Mercedes-Benz 280 SL",
          medium: "AI 生成静音循环影像，5秒",
          description: "银色 280 SL 停在海边咖啡馆外，桌上的咖啡还冒着热气。"
        },
        en: {
          title: "Mercedes-Benz 280 SL",
          datePlace: "Mercedes-Benz 280 SL",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A silver 280 SL waits outside a seaside cafe, steam still rising from the coffee."
        }
      },
      {
        number: "09",
        year: "2026",
        poster: "/assets/projects/classic-car-studies/scene-09.jpg",
        video: "/assets/projects/classic-car-studies/scene-09.mp4",
        zh: {
          title: "BMW M1",
          datePlace: "BMW M1",
          medium: "AI 生成静音循环影像，5秒",
          description: "橙色 BMW M1 停在黑森林雪后的古堡外，冷光让车身像一件遗留证物。"
        },
        en: {
          title: "BMW M1",
          datePlace: "BMW M1",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "An orange BMW M1 rests outside a snowy Black Forest castle, vivid as evidence left behind."
        }
      }
    ],
    zh: {
      title: "未熄火",
      subtitle: "Still Running",
      category: "AI 动态影像系列",
      summary:
        "一组关于汽车、失踪感和未完成故事的短循环影像。车还在，灯还亮着，人却不见了。",
      method: [
        "以具体车型、地点和异常痕迹建立单集叙事",
        "让车保持静止，只用灯光、屏幕、反光和微弱排气制造循环",
        "用展览式铭牌把每辆车处理成故事里最后留下的证据"
      ],
      role:
        "完成系列方向、车型与场景设定、低难度循环动效规划、视频筛选、压缩和公开展示整理。",
      publicNote:
        "公开版本展示压缩循环影像、静帧和对外铭牌信息，不公开完整提示词和原始生成过程。"
    },
    en: {
      title: "Still Running",
      subtitle: "The car remains; the person is gone",
      category: "AI Moving Image Series",
      summary:
        "A series of short loops about cars, disappearance, and unfinished stories. The car remains, the lights stay on, and the person is gone.",
      method: [
        "Build each episode through a specific model, place, and unresolved trace",
        "Keep the car still while using lights, screens, reflections, and faint exhaust as loopable motion",
        "Use exhibition-style labels to treat each vehicle as the last evidence inside a story"
      ],
      role:
        "Series direction, vehicle-scene relationships, low-difficulty loop planning, video selection, compression, and public presentation editing.",
      publicNote:
        "The public version shows compressed loops, stills, and public-facing labels. Full prompts and raw generation processes are excluded."
    }
  },
  {
    slug: "bubble-economy",
    order: "M-03",
    featured: true,
    discipline: "motion",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/bubble-economy/scene-06-display.webp",
    images: [
      "/assets/projects/bubble-economy/scene-01.jpg",
      "/assets/projects/bubble-economy/scene-02.jpg",
      "/assets/projects/bubble-economy/scene-03.jpg",
      "/assets/projects/bubble-economy/scene-04.jpg",
      "/assets/projects/bubble-economy/scene-05.jpg",
      "/assets/projects/bubble-economy/scene-06.jpg"
    ],
    motionItems: [
      {
        number: "01",
        year: "2026",
        poster: "/assets/projects/bubble-economy/scene-01.jpg",
        video: "/assets/projects/bubble-economy/scene-01.mp4",
        zh: {
          title: "W140 雨街",
          datePlace: "Mercedes-Benz S-Class W140",
          medium: "AI 生成静音循环影像，5秒",
          description: "大型豪华轿车停在雨天街面，泡沫经济的想象被压缩成车灯和湿地反光。"
        },
        en: {
          title: "W140 Rain Street",
          datePlace: "Mercedes-Benz S-Class W140",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "A large luxury sedan waits on wet pavement, compressing an imagined bubble economy into lights and reflections."
        }
      },
      {
        number: "02",
        year: "2026",
        poster: "/assets/projects/bubble-economy/scene-02.jpg",
        video: "/assets/projects/bubble-economy/scene-02.mp4",
        zh: {
          title: "Crown Majesta 雪后",
          datePlace: "Toyota Crown Majesta",
          medium: "AI 生成静音循环影像，5秒",
          description: "Crown Majesta 被放进冷色工业背景，豪华感不再明亮，而是变成沉默的库存。"
        },
        en: {
          title: "Crown Majesta After Snow",
          datePlace: "Toyota Crown Majesta",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The Crown Majesta enters a cold industrial field, where luxury becomes silent inventory rather than shine."
        }
      },
      {
        number: "03",
        year: "2026",
        poster: "/assets/projects/bubble-economy/scene-03.jpg",
        video: "/assets/projects/bubble-economy/scene-03.mp4",
        zh: {
          title: "Eclipse 1G 雨停",
          datePlace: "Mitsubishi Eclipse 1G",
          medium: "AI 生成静音循环影像，5秒",
          description: "Eclipse 1G 的低矮车身停在潮湿开阔处，像一次没有到来的消费高峰。"
        },
        en: {
          title: "Eclipse 1G After Rain",
          datePlace: "Mitsubishi Eclipse 1G",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The low Eclipse 1G sits in a wet open space, like a consumer peak that never quite arrived."
        }
      },
      {
        number: "04",
        year: "2026",
        poster: "/assets/projects/bubble-economy/scene-04.jpg",
        video: "/assets/projects/bubble-economy/scene-04.mp4",
        zh: {
          title: "Silvia S13 黄昏",
          datePlace: "Nissan Silvia S13",
          medium: "AI 生成静音循环影像，5秒",
          description: "Silvia S13 靠近旧街立面，运动化轮廓和潮湿霓虹形成一种未发生的九十年代。"
        },
        en: {
          title: "Silvia S13 Dusk",
          datePlace: "Nissan Silvia S13",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The Silvia S13 sits near an older street facade, where its sporting profile meets a nineties that never happened."
        }
      },
      {
        number: "05",
        year: "2026",
        poster: "/assets/projects/bubble-economy/scene-05.jpg",
        video: "/assets/projects/bubble-economy/scene-05.mp4",
        zh: {
          title: "Audi 100 C4 冷暮",
          datePlace: "Audi 100 C4",
          medium: "AI 生成静音循环影像，5秒",
          description: "Audi 100 C4 的方正比例被冷光拉长，像一段从公务车想象滑向资本景观的过渡。"
        },
        en: {
          title: "Audi 100 C4 Cold Dusk",
          datePlace: "Audi 100 C4",
          medium: "AI-generated silent loop video, 5 sec.",
          description: "The Audi 100 C4's square proportion stretches under cold light, sliding from official-car memory toward capital spectacle."
        }
      }
    ],
    zh: {
      title: "如果中国有泡沫经济",
      subtitle: "If China Had Bubble Economy",
      category: "AI 动态影像系列",
      summary:
        "一组假想中国曾经拥有泡沫经济高峰的短循环影像。九十年代豪华轿车、日系性能车和潮湿城市表面被放在一起，形成一种并不存在的消费记忆。",
      method: [
        "以可识别车型作为时代入口，而不是使用具体地点说明",
        "用雨、雪、冷光和建筑外墙制造经济过热后的静默感",
        "让车辆保持原地，依靠灯光、天气和环境运动推动叙事"
      ],
      role:
        "完成系列概念、车型线索整理、静帧选择、视频压缩和公开展示文案。",
      publicNote:
        "公开版本展示压缩循环影像、静帧和展览式铭牌，不公开完整提示词、工作文档或原始素材。"
    },
    en: {
      title: "If China Had a Bubble Economy",
      subtitle: "A fictional automotive-economic memory",
      category: "AI Moving Image Series",
      summary:
        "A short-loop series imagining a Chinese bubble-economy peak that never existed. Nineties luxury sedans, Japanese performance cars, and wet urban surfaces combine into a fictional consumer memory.",
      method: [
        "Use identifiable vehicle models as period anchors instead of specific location labels",
        "Build post-boom stillness through rain, snow, cold light, and building surfaces",
        "Keep cars stationary while light, weather, and environmental motion carry the narrative"
      ],
      role:
        "Series concept, vehicle clue editing, still selection, video compression, and public-facing label writing.",
      publicNote:
        "The public version shows compressed loops, stills, and exhibition-style labels only. Full prompts, working documents, and raw assets are excluded."
    }
  },
  {
    slug: "overlooked",
    order: "P-03",
    featured: false,
    discipline: "photography",
    year: "2026",
    coverFit: "contain",
    cover: "/assets/projects/overlooked/portrait-03-display.webp",
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
    cover: "/assets/projects/riders/woman-rider-display.webp",
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
