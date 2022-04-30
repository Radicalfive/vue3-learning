import Vue from "vue";

import VueRouter from "vue-router";

import Layout from "../views/Layout";

const Home = () => import("../views/Home");
const Article = () => import("../components/Article");
const News = () => import("../components/News");
const About = () => import("../views/About");
const My = () => import("../views/My");
const Login = () => import("../views/Login");
const Back = () => import("../components/back.vue");
const Front = () => import("../components/front.vue");
const Android = () => import("../components/android.vue");
const Application = () => import("../components/application.vue");
const Artificial = () => import("../components/artificial.vue");
const Ios = () => import("../components/ios.vue");
const Sql = () => import("../components/sql.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        name: "home",
        component: Home,
        children: [
          {
            path: "",
            component: Article,
          },
          {
            path: "article/:id",
            name: "article",
            component: Article,
          },
          {
            path: "news",
            name: "news",
            component: News,
            children: [
              {
                path: "back",
                component: Back,
              },
              {
                path: "front",
                name: "front",
                component: Front,
              },
              {
                path: "android",
                name: "android",
                component: Android,
              },
              {
                path: "application",
                name: "application",
                component: Application,
              },
              {
                path: "artificial",
                name: "artificial",
                component: Artificial,
              },
              {
                path: "ios",
                name: "ios",
                component: Ios,
              },
              {
                path: "sql",
                name: "sql",
                component: Sql,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        name: "about",
        component: About,
        children: [
          {
            path: "back",
            component: Back,
          },
          {
            path: "front",
            name: "front",
            component: Front,
          },
          {
            path: "android",
            name: "android",
            component: Android,
          },
          {
            path: "application",
            name: "application",
            component: Application,
          },
          {
            path: "artificial",
            name: "artificial",
            component: Artificial,
          },
          {
            path: "ios",
            name: "ios",
            component: Ios,
          },
          {
            path: "sql",
            name: "sql",
            component: Sql,
          },
        ],
      },
      {
        path: "my",
        name: "my",
        component: My,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
