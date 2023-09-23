import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useMemeStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
const initialMemes = JSON.parse(localStorage.getItem("memes")) || [];
const memeStore = useMemeStore();

memeStore.setMemes(initialMemes);

app.mount("#app");
