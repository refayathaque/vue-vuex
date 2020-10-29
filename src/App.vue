<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <h3>{{ normalizedCounter }}</h3>
    <button @click="addOne">Add 2</button>
    <h3><input v-model="number" /></h3>
    <button @click="addNumber">Add ^</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";

export default {
  components: {
    BaseContainer,
  },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    normalizedCounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
  methods: {
    addOne() {
      this.$store.dispatch("increment"); // dispatch takes the action name (as string)
    },
    addNumber() {
      this.$store.dispatch("increase", {
        value: parseInt(this.number),
      });
    },
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
