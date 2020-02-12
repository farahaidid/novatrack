import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import loginInfo from "./loginInfo"
import dashboardFields from "./dashboardFields"

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules:{
    loginInfo,
    dashboardFields
  },
})
