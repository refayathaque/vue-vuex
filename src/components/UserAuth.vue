<template>
  <button v-if="!getAuthStatus.loggedIn" @click="changeAuthStatus">Login</button>
  <button v-else @click="changeAuthStatus">Logout</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAuthStatus"])
  },
  methods: {
    ...mapActions(["changeAuthStatus"])
  }
}
</script>