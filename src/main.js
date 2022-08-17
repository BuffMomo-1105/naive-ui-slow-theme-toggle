import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import i18n from "./boot/i18n";
import "./assets/main.css";
import "uno.css";
import naive from "naive-ui";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);
app.use(i18n);
app.mount("#app");
