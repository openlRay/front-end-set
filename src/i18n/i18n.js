import Vue from 'vue'
import VueI18n from 'vue-i18n'
import dateTimeFormats from './dateTimeFormats'
import numberFormats from './numberFormats'

Vue.use(VueI18n)

let i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  dateTimeFormats,
  numberFormats,
  messages: {
    en: require('./locales/en.json'),
    zh: require('./locales/zh.json')
  }
})

if (!__BUILD__) {
  if (module.hot) {
    module.hot.accept(['./locales/en.json', './locales/zh.json'], () => {
      i18n.setLocaleMessage('en', require('./locales/en.json'))
      i18n.setLocaleMessage('zh', require('./locales/zh.json'))
    })
  }
}

export default i18n
