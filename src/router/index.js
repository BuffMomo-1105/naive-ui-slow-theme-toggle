import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: routes,
    },
  ],
});

export default router;
