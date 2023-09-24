<template>
  <div>
    <navbar-component></navbar-component>
    <banner-component></banner-component>
    <meme-form></meme-form>
    <i
      class="bi bi-arrow-up-circle-fill position-fixed end-0 bottom-0 d-block fs-3 me-3 mb-3 top-floor"
      @click="scrollToTop"
    ></i>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BannerComponent from "./components/BannerComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import MemeForm from "./components/MemeForm.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    BannerComponent,
    MemeForm,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="sass">
$primary-font: 'Nunito', sans-serif

#app
  font-family: $primary-font
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.top-floor
  transition: 0.3s ease
  z-index: 100

  &:hover
    transform: scale(1.2)
    transition: 0.3s ease
    cursor: pointer
</style>
