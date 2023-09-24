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

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
