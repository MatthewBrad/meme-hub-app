<template>
  <div class="navbar w-100 d-block shadow bg-black">
    <ul class="nav justify-content-center align-items-center p-3">
      <li class="nav-item">
        <h1 class="mb-0 text-white">TheMemeHub</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar-Component",
};
</script>

<style lang="sass" scoped>
.navbar
  position: sticky
  top: 0
  left: 0
  right: 0
  z-index: 100
  background-color: white

img
  max-width: 150px
</style>
