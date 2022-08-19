import { createRouter, createWebHistory } from 'vue-router'
// import routes from "./routes";
// import MainLayout from "../layouts/MainLayout.vue";
import Menu from '../layouts/TheMenu.vue'
import Footer from '../layouts/TheFooter.vue'
import Home from '../views/home/index.vue'
import About from '../views/about/index.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'

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
    {
      path: '/about',
      components: {
        default: About,
        Menu,
        Footer,
      },
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
  ],
})

export default router
