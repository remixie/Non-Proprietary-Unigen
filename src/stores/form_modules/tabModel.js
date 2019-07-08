import Vue from "vue";

export default {
  state: {
    titles: ["SQL", "Addon"],
    current: 0
  },
  getters: {
    tabs: state => state,
    otherTab: state => (state.current === 0 ? 1 : 0)
  },
  mutations: {
    changeTab(state, current) {
      Vue.set(state, "current", current);
    }
  },
  actions: {
    changeTab: ({ commit, dispatch }, current) => {
      commit("changeTab", current);
    }
  }
};
