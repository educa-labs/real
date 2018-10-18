import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbar: {
      isSticky: false,
      isOpen: false,
    },
  },
  mutations: {
    updateNavbar(state, payload) {
      state.navbar = Object.assign(state.navbar, payload);
    },
  },
  actions: {
    updateNavbar(context, payload) {
      return new Promise(resolve => {
        context.commit('updateNavbar', payload);

        resolve();
      });
    },
  },
});
