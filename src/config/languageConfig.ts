import type { LanguageCode } from "@/reducer-actions/appConfigSlice";

export interface LanguageContent {
  search: string;
  searchPlaceholder: string;
  gptSearchPlaceholder: string;
}
export const languageConfig: Record<LanguageCode, LanguageContent> = {
  en: {
    search: "Search",
    searchPlaceholder: "What do you want to watch today?",
    gptSearchPlaceholder:
      "Ask GPT for movie recommendations, e.g. 'Recommend me some action movies'",
  },

  hi: {
    search: "खोज",
    searchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    gptSearchPlaceholder:
      "GPT से फिल्म सुझाव प्राप्त करें, उदाहरण के लिए 'कुछ क्रिमिनल फिल्में सुझाएं'",
  },

  ne: {
    search: "खोज्नुहोस्",
    searchPlaceholder: "तपाईं आज के हेर्न चाहनुहुन्छ?",
    gptSearchPlaceholder:
      "GPT सँग चलचित्र सिफारिस माग्नुहोस्, उदाहरण: 'केही एक्शन चलचित्र सिफारिस गर'",
  },

  zh: {
    search: "搜索",
    searchPlaceholder: "今天你想看什么？",
    gptSearchPlaceholder: "向 GPT 获取电影推荐，例如：'推荐一些动作片'",
  },

  es: {
    search: "Buscar",
    searchPlaceholder: "¿Qué quieres ver hoy?",
    gptSearchPlaceholder:
      "Pregunta a GPT por recomendaciones de películas, por ejemplo: 'Recomiéndame películas de acción'",
  },
} as const;
