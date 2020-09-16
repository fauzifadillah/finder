import { createApp } from "vue";
import router from "@/router/router";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const myApp = createApp(App);
myApp.use(AOS.init());
myApp.use(router);
myApp.mount("#app");
