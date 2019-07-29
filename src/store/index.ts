import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './root-states';
import { DONE_LOGOUT, DONE_LOGIN } from './mutation-types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = new Vuex.Store({
  state: {
    hasLogin: false,
  },
  mutations: {
    [DONE_LOGIN](state: RootState) {
      state.hasLogin = true;
    },
    [DONE_LOGOUT](state: RootState) {
      state.hasLogin = false;
    },
  },
});

export default new Vuex.Store<RootState>(store);
