import Vue from "vue";
import VueRouter from "vue-router";

// import {loaderComponent} from '../autoloader'

const reqCtx = require.context('../modules/', true, /index.vue/)



console.log(reqCtx);
// loaderComponent('../modules/')




const matchName = (str) => {
  return str.replace(/.\//, '').replace(/\/(index.vue)/, '')
}


Vue.use(VueRouter);

const routes = reqCtx.keys().reduce((acc, el) => {
  const component = async () => await reqCtx(el)
  acc.push({
    name: matchName(el),
    path: `/${matchName(el)}/:id`,
    component
  })
  return acc
}, [])

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
