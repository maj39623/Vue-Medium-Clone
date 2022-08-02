import { createRouter, createWebHashHistory } from "vue-router";

import GlobalFeed from "@/views/GlobalFeed.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "globalFeed",
    component: GlobalFeed,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
