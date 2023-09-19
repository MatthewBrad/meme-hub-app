<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <navbar-component></navbar-component>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    NavbarComponent,
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
