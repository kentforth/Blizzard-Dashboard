import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starcraftArmyUnits: [200, 1200, 800],
  },
  mutations: {
    SET_STARCRAFT_ARMY_UNITS: (state, armyUnits) => {
      state.starcraftArmyUnits = armyUnits;
    },
  },
  actions: {
    CHANGE_STARCRAFT_ARMY_UNITS({ commit }, armyUnits) {
      commit("SET_STARCRAFT_ARMY_UNITS", armyUnits);
    },
  },
  getters: {
    starcraftArmyUnits(state) {
      return state.starcraftArmyUnits;
    },
  },
  modules: {},
});
