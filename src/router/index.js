import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      //   activeLinkClassName: "tv-list-anchor",
    },
    {
      path: "/show/:id",
      component: () => import("../views/DetailView.vue"),
    },
  ],
});
