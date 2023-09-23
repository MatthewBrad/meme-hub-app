<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div>
    <navbar-component></navbar-component>
    <meme-form></meme-form>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from "./components/NavbarComponent.vue";
import MemeForm from "./components/MemeForm.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    NavbarComponent,
    MemeForm,
  },
};
</script>

<style lang="sass">
$primary-font: 'Nunito', sans-serif

#app
  font-family: $primary-font
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
