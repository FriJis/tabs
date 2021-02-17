import Vue from "vue";
import Vuex from "vuex";

import tabs from './modules/tabs'

const reqCtx = require.context('../modules/', true, /store.js/)

const matchName = (str) => str.replace(/.\//, '').replace(/\/(store.js)/, '');

Vue.use(Vuex);

const stores = reqCtx.keys().reduce((acc, i) => {
  acc[matchName(i)] = reqCtx(i).default
  return acc
}, {})


export default new Vuex.Store({
  modules: {
    ...stores,
    tabs
  }
});
