import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      // having access to other getters here helpful if the value of this getter here depends on the value from other getters
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
  mutations: {
    // must be synchronous, can't be asynchronous
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    // asynchronous operations allowed
    increment(context) {
      context.commit("increment");
    },
    increase(context, payload) {
      context.commit("increase", payload);
      // context object has dispatch method, allowing you to dispatch other actions in the store here, and also getters, giving you access to calculated values from this store
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
