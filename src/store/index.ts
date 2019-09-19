import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './root-states';
import { 
  SYNC_USER_INFO,
  RESET_USER_INFO,
  UPDATE_LOGIN_STATUS,
  UPDATE_CONSTANTS,
} from './mutation-types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    userInfo: {},
    hasLogin: false,
    constants: {
      enterpriseForm: [],
      industryTypes: [],
      positionCatalogs: [],
      districts: [],
      options: {},
    }
  },
  mutations: {
    [UPDATE_LOGIN_STATUS](state: RootState, payload) {
      state.hasLogin = !!payload;
    },
    [SYNC_USER_INFO](state: RootState, payload) {
      state.userInfo = payload;
    },
    [RESET_USER_INFO](state: RootState) {
      state.userInfo = {};
      state.hasLogin = false;
    },
    [UPDATE_CONSTANTS](state: RootState, payload) {
      state.constants = payload;
    },
  },
};

export default new Vuex.Store<RootState>(store);
