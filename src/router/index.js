import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import('../components/Login.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../components/Login.vue')
  },
  {
    path: "/registrasi",
    name: "registrasi",
    component: () => import('../components/Registrasi.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
