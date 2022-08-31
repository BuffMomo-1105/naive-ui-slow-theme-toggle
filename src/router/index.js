import { createRouter, createWebHistory } from 'vue-router'

import Menu from '../layouts/TheMenu.vue'
import Footer from '../layouts/TheFooter.vue'
import Home from '../views/home/index.vue'

//FIXME
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        Menu,
        Footer,
      },
    },
  ],
})

export default router
