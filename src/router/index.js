import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/overwatch",
  },
  {
    path: "/overwatch",
    name: "overwatch",
    component: () => import("../views/overwatch"),
  },
  {
    path: "/starcraft",
    name: "starcraft",
    component: () => import("../views/starcraft"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
