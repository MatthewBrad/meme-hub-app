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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
