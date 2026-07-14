//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'
const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en,
  },
})

app.mount('#app')
createApp(App).use(i18n)
