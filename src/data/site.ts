import type { Locale } from "./projects";

export const siteCopy = {
  zh: {
    name: "陈菲林",
    role: "AI 视觉创作者 / 产品与叙事系统设计",
    intro:
      "我把图像生成当成一种系统设计：从主题、角色、空间、物件和光线出发，建立可复用的视觉方法，而不是只追求单张好看的图片。",
    navPhotography: "摄影",
    navDesign: "设计",
    navContact: "联系",
    languageLabel: "EN",
    photography: "摄影",
    featuredPhotography: "主推摄影",
    morePhotography: "更多摄影研究",
    design: "设计",
    contact: "联系 / 合作",
    contactText: "GitHub: jackykyd",
    viewProject: "查看项目",
    methods: "视觉方法",
    roleTitle: "我负责的工作",
    publicNoteTitle: "公开说明",
    back: "返回作品",
    project: "项目"
  },
  en: {
    name: "Feilin Chan",
    role: "AI visual creator / product and narrative systems designer",
    intro:
      "I treat image generation as systems design: building reusable visual methods through themes, characters, spaces, objects, and light instead of chasing isolated beautiful images.",
    navPhotography: "Photography",
    navDesign: "Design",
    navContact: "Contact",
    languageLabel: "中文",
    photography: "Photography",
    featuredPhotography: "Featured Photography",
    morePhotography: "More Photographic Studies",
    design: "Design",
    contact: "Contact",
    contactText: "GitHub: jackykyd",
    viewProject: "View project",
    methods: "Visual Method",
    roleTitle: "My Role",
    publicNoteTitle: "Public Note",
    back: "Back to work",
    project: "Project"
  }
} satisfies Record<Locale, Record<string, string>>;
