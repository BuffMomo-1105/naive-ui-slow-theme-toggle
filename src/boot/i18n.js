import { createI18n } from "vue-i18n";

import zh from "../locales/zh.json";
import en from "../locales/en.json";

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: "zh",
  messages: {
    zh,
    en,
  },
});
export default i18n;
