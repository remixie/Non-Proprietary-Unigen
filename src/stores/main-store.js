import Vue from "vue";
import Vuex from "vuex";

import generateSQL from "./generation_modules/generateSQL";
import SQLInputModel from "./form_modules/SQLInputModel";
import tabModel from "./form_modules/tabModel";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SQLInputModel,
    generateSQL,
    tabModel
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});
