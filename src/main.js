import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import i18nInstance from './boot/i18n'
import 'uno.css'
import naive from 'naive-ui'

import { useUserStore } from '@/stores/user'
import { useShopStore } from '@/stores/shop'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(pinia)
window.isMobileScreen = function (w) {
  if (w < 1000) {
    return true
  } else {
    return false
  }
}

const userStore = useUserStore()
const shopStore = useShopStore()
shopStore.getShop()

//this is demo of i18n use within store
// userStore.i18nTest()
//
app.use(router)
app.use(naive)
app.use(i18nInstance)
app.mount('#app')
