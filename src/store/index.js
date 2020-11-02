import { createStore } from "vuex";
import counterModule from "./modules/counter.js";
import cartModule from "./modules/cart.js";
import products from "./products.js";

const store = createStore({
  // this is the "global"/"root"/"main" store
  state() {
    return {
      authStatus: { loggedIn: false, shopLoggedIn: false },
      products,
    };
  },
  getters: {
    getAuthStatus({ authStatus }) {
      // ES6 destructuring of state.authStatus
      return authStatus;
    },
    getProducts({ products }) {
      return products;
    },
  },
  mutations: {
    // must be synchronous, can't be asynchronous
    changeAuthStatus(state) {
      state.authStatus.loggedIn = !state.authStatus.loggedIn;
    },
    changeShopAuthStatus(state) {
      state.authStatus.shopLoggedIn = !state.authStatus.shopLoggedIn;
    },
  },
  actions: {
    // asynchronous operations allowed
    changeAuthStatus(context) {
      context.commit("changeAuthStatus");
    },
    changeShopAuthStatus(context) {
      context.commit("changeShopAuthStatus");
    },
  },
  modules: {
    counterModule,
    cartModule,
  },
});

export default store;
