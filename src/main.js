import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './assets/sass/index.scss'

Vue.prototype.$moduleRoutes = router.options.routes.filter(r => r.meta.type == "module")

Vue.config.productionTip = false;

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
