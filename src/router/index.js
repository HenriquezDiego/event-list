import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () => import("../views/EventList.vue"),
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: () => import("../views/EventShow.vue"),
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: () => import("../views/EventCreate.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
