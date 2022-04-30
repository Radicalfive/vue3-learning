import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/MarkRaw",
    name: "MarkRaw",
    component: () => import("../views/MarkRaw.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/TestCounter.vue"),
  },
  {
    path: "/parent",
    name: "Parent",
    component: () => import("../views/Parent.vue"),
  },
  {
    path: "/slotName",
    name: "slotName",
    component: () => import("../views/SlotName.vue"),
  },
  {
    path: "/slotScopes",
    name: "slotScopes",
    component: () => import("../views/SlotScopes.vue"),
  },
  {
    path: "/dynamicArguments",
    name: "DynamicArguments",
    component: () => import("../views/DynamicArguments.vue"),
  },
  {
    path: "/globalApi",
    name: "GlobalApi",
    component: () => import("../views/GlobalApi.vue"),
  },
  {
    path: "/transition",
    name: "transition",
    component: () => import("../views/Transition.vue"),
  },
  {
    path: "/tele",
    name: "tele",
    component: () => import("../views/tele.vue"),
  },
  {
    path: "/testAsync",
    name: "testAsync",
    component: () => import("../views/TestAsync.vue"),
  },
  {
    path: "/testAsync1",
    name: "testAsync1",
    component: () => import("../views/TestAsync1.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
