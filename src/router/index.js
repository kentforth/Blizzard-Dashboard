import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/overwatch',
    component: () =>
      import("../views/Home")
  },
  {
    path: "/overwatch",
    name: "overwatch",
    component: () =>
      import("../views/overwatch")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
