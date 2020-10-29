<template>
  <base-container v-if="getAuthStatus.loggedIn" title="Vuex">
    <h3>{{ finalCounter }}</h3>
    <h3>{{ normalizedCounter }}</h3>
    <!-- <button @click="addOne">Add 2</button> -->
    <button @click="increment">Add 2</button>
    <h3><input v-model="number" /></h3>
    <!-- <button @click="addNumber">Add ^</button> -->
    <button @click="increase({ value: parseInt(number) })">Add ^</button>
  </base-container>
  <base-container title="UserAuth.vue">
    <UserAuth />
  </base-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  data() {
    return {
      number: null,
    };
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // normalizedCounter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters("counterModule", ["finalCounter", "normalizedCounter", "getAuthStatus"]),
    ...mapGetters(["getAuthStatus"]),
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    // addNumber() {
    //   this.$store.dispatch("increase", {
    //     value: parseInt(this.number),
    //   });
    // },
    // dispatch takes the action name (as string) and optional payload
    ...mapActions("counterModule", ["increment", "increase"]),
    // with ^ syntax, we call the actions (and pass in the payload) directly through template events
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
