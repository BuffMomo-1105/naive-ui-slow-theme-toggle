import { createI18n } from 'vue-i18n'

import zh from '../locales/zh.json'
import en from '../locales/en.json'

const instance = createI18n({
  // something vue-i18n options here ..
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  messages: {
    zh,
    en,
  },
})
export default instance
export const i18n = instance.global
