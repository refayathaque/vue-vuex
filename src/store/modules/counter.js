const counterModule = {
  namespaced: true,
  // state inside of a module is treated as a local state inside of a module, e.g., if you log state you won't find `authStatus` that's in the global store below
  // you can access global mutations, actions and getters however
  // if you need access to the global state you can access via the context object and also through the `rootState` argument in getter functions
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
      console.log("context", context);
    },
    increase(context, payload) {
      context.commit("increase", payload);
      // context object has dispatch method, allowing you to dispatch other actions in the store here, and also getters, giving you access to calculated values from this store
    },
  },
  getters: {
    finalCounter(state, rootState) {
      console.log("state", state);
      console.log("rootState", rootState);
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
};

export default counterModule;
