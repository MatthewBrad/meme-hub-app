<template>
  <form action="" class="meme-uploader-form mx-auto needs-validation">
    <h2 class="mb-4">My Favourite Memes</h2>

    <!-- file uploader -->
    <div class="input-group mb-3">
      <label class="input-group-text w-100 align-items-center" for="memeUpload"
        ><i class="bi bi-paperclip d-flex me-2"></i>
        <span>Upload Meme</span></label
      >
      <input type="file" class="form-control" id="memeUpload" />
    </div>

    <!-- meme title -->
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control ps-0"
        id="memeTitle"
        placeholder="Meme Title"
        required
      />
      <label for="memeTitle" class="ps-0">Meme Title</label>
    </div>

    <!-- meme description -->
    <div class="form-floating mb-3">
      <textarea
        class="form-control ps-0"
        placeholder="Leave a comment here"
        id="memedescription"
        required
      ></textarea>
      <label for="memedescription" class="ps-0">Reason this is funny</label>
    </div>

    <button class="btn btn-primary float-end" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "Meme-Form",
};
</script>

<style lang="sass" scoped>
.meme-uploader-form
    margin-top: 60px
    max-width: 400px

    textarea, input
        border: 0
        border-bottom: 1px solid grey
        background-color: transparent
        border-radius: 0

        &:focus
            box-shadow: none
</style>
