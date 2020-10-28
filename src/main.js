import { createApp } from 'vue'
import { createStore }  from 'vuex';

import App from './App.vue'

const store = createStore({
  state() {
    return {
      counter: 0
    }
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
        return 100
      }
      return finalCounter
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  }
})

const app = createApp(App)

app.use(store);

app.mount('#app')
