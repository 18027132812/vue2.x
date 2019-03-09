import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loadingBol: false,
  navShowBol: true,
  shopCartNumber: 0
};

const mutations = {
  LSHOW(state){
    state.loadingBol = true;
  },
  LHIDE(state){
    state.loadingBol = false;
  },
  setNavShowBol (state, bol) {
    state.navShowBol = bol;
  },
  setShopCartNumber (state, num) {
    if (num) {
      state.shopCartNumber += num;
    } else {
      state.shopCartNumber += 1;
    }
  }
};

export default new Vuex.Store({
  state,
  mutations
});
