import { createRouter, createWebHistory } from 'vue-router'
// import routes from "./routes";
// import MainLayout from "../layouts/MainLayout.vue";
import Menu from '../layouts/TheMenu.vue'
import Footer from '../layouts/TheFooter.vue'
import Home from '../views/home/index.vue'
import About from '../views/about/index.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Password from '../views/user/password.vue'
import Profile from '../views/user/profile.vue'
import adminRouter from './modules/admin'
import { useUserStore } from '@/stores/user'

//FIXME
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    adminRouter,
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
      path: '/auth/login',
      component: Login,
    },
    {
      path: '/auth/register',
      component: Register,
    },
    {
      path: '/user/profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/password',
      component: Password,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})
// requiresAuth: user.role == 'user' || user.role == 'admin'

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.roleGetter == 'user') {
      next()
      return
    }
    next('/auth/login')
  } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (userStore.roleGetter == 'admin') {
      next()
      return
    }
    next('/auth/login')
  } else {
    next()
  }
})

export default router
