import { createStore } from "vuex";
import counterModule from "./modules/counter.js";

const store = createStore({
  // this is the "global"/"root"/"main" store
  state() {
    return {
      authStatus: { loggedIn: false }
    };
  },
  getters: {
    getAuthStatus({ authStatus }) { // ES6 destructuring of state.authStatus
      return authStatus
    }
  },
  mutations: {
    // must be synchronous, can't be asynchronous
    changeAuthStatus(state) {
      state.authStatus.loggedIn = !state.authStatus.loggedIn
    }
  },
  actions: {
    // asynchronous operations allowed
    changeAuthStatus(context) {
      context.commit("changeAuthStatus")
    }
  },
  modules: {
    counterModule
  }
});

export default store;