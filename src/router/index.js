import Vue from "vue";
import VueRouter from "vue-router";

import index from "../views/index";

const reqCtx = require.context("../modules/", true, /index.vue/);
const matchName = str => str.replace(/.\//, "").replace(/\/(index.vue)/, "");
Vue.use(VueRouter);

const routes = reqCtx.keys().reduce((acc, el) => {
  acc.push({
    name: matchName(el),
    path: `/${matchName(el)}/:id`,
    component: async () => await reqCtx(el),
    meta: {
      type: "module"
    }
  });
  return acc;
}, []);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: "/*",
      name: "index",
      component: index,
      meta: {
        type: "system"
      }
    }
  ]
});

export default router;
