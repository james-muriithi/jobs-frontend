import { createApp } from "vue";
import App from "./App.vue";
import TheNavBar from "@/components/UI/TheNavBar.vue";
import router from "./router";

import "@/assets/scss/styles.scss";

const app = createApp(App).use(router);

// global components
app.component("TheNavBar", TheNavBar);

app.mount("#app");
