import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload);
    },

    modifyCartItem(state, payload) {
      state.cart[payload.index].quantity += payload.quantity;
      // parseInt(state.cart[payload.index].quantity) +
      // parseInt(payload.quantity);
    },
  },
  actions: {
    addToCart({ commit, state }, payload) {
      const foundIndex = state.cart.findIndex((e) => e.id == payload.id);

      if (foundIndex !== -1) {
        commit("modifyCartItem", {
          index: foundIndex,
          quantity: payload.quantity,
        });
      } else {
        commit("addToCart", {
          id: payload.id,
          quantity: payload.quantity,
        });
      }
    },
  },
  modules: {},
});
