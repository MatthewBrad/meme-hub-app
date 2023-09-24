<template>
  <div class="banner-container container-fluid">
    <div class="container banner-inner-container mx-auto">
      <div class="row justify-content-evenly">
        <div
          class="col-12 col-md-5 order-2 order-md-1 align-items-center justify-content-center d-flex flex-column"
        >
          <div class="banner-img-block w-100 rounded"></div>
        </div>
        <div
          class="col-12 col-md-5 order-1 order-md-2 align-items-center align-items-md-start justify-content-center d-flex flex-column"
        >
          <h1 class="fw-bold">Welcome!</h1>
          <p>
            Welcome to TheMemeHub where you can upload your favourite meme's.
            You will be able to upload, edit and delete memes from your very own
            meme list!
          </p>
          <p class="mb-2">
            Enjoy keeping all your favourite meme's in one place! 😉
          </p>
          <a href="#memeForm" class="text-dark">
            <i
              class="bi bi-chevron-double-down fs-5 down-arrow mb-4 mb-md-0"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner-Component",
};
</script>

<style lang="sass" scoped>
.banner-container
  min-height: 400px
  padding: 100px 30px

  @media (max-width: 575.98px)
    min-height: auto
    padding: 40px 20px

  .banner-inner-container
    max-width: 900px

  img
    max-width: 250px
    width: 100%
    display: block

    @media (max-width: 575.98px)
      display: none

  p
    font-size: 1.125rem //18px

  p, h1, i
    text-align: left

    @media (max-width: 575.98px)
      text-align: center

  .banner-img-block
    background-image: url('../assets/minions-unsplash.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: center center
    height: 400px

    @media (max-width: 575.98px)
      height: 300px

  .down-arrow
    animation: down-arrow 2s linear infinite
    display: block
    position: relative

    @keyframes down-arrow
      0%
        opacity: 0

      50%
        opacity: 1

      100%
        opacity: 0
</style>
