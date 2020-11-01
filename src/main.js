import router from './router.js';
import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from './components/BaseBadge.vue';
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-badge', BaseBadge);

app.mount("#app");
