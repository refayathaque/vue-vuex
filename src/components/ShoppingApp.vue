<template>
  <the-header></the-header>
  <router-view v-if="getAuthStatus.shopLoggedIn"></router-view>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "./TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  computed: {
    ...mapGetters(["getAuthStatus"]),
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
