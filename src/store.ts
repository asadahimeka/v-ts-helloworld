import Vue from 'vue';
import Vuex from 'vuex';

interface CounterState {
  count: number;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state: CounterState) {
      state.count++;
    },
  },
  actions: {

  },
});
