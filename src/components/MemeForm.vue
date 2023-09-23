<template>
  <div class="row w-100">
    <div class="col-12">
      <form
        class="meme-uploader-form mx-auto needs-validation"
        @submit.prevent="handleSubmit"
      >
        <h2 class="mb-4">My Favourite Memes</h2>

        <!-- file uploader -->
        <div class="input-group mb-3 file-upload-input">
          <label
            class="input-group-text w-100 align-items-center"
            for="memeUpload"
            ><i class="bi bi-paperclip d-flex me-2"></i>
            <span>Upload Meme</span></label
          >
          <input
            type="file"
            class="form-control"
            id="memeUpload"
            @change="handleFileUpload"
            accept="image/*"
          />
        </div>

        <!-- meme title -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control ps-3"
            placeholder="Meme Title"
            required
            id="memeTitle"
            v-model="title"
          />
          <label for="memeTitle" class="ps-3">Meme Title</label>
        </div>

        <!-- meme description -->
        <div class="form-floating mb-3">
          <textarea
            class="form-control ps-3"
            placeholder="Leave a comment here"
            required
            id="memeDescription"
            v-model="description"
          ></textarea>
          <label for="memedescription" class="ps-3">Reason this is funny</label>
        </div>

        <button class="btn float-end add-btn rounded-pill px-4" type="submit">
          Add
        </button>
      </form>
    </div>
    <div class="col-12">
      <!-- saved meme section -->
      <h2 class="text-center">Uploaded Memes:</h2>
      <table class="w-100">
        <tr v-for="(meme, index) in memes" :key="index">
          <td>
            <img :src="meme.data" alt="Meme Image" />
          </td>
          <td>
            <h3>Title: {{ meme.title }}</h3>
          </td>
          <td>
            <p>Description: {{ meme.description }}</p>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteMeme(index)">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { meme: null, title: "", description: "", memes: [] };
  },
  created() {
    const storedMemes = JSON.parse(localStorage.getItem("memes")) || [];
    this.memes = storedMemes;
  },
  methods: {
    handleFileUpload(event) {
      this.meme = event.target.files[0];
    },
    handleSubmit() {
      if (this.meme) {
        const reader = new FileReader();
        reader.onload = () => {
          const memeData = {
            name: this.meme.name,
            data: reader.result,
            title: this.title,
            description: this.description,
          };
          this.memes.push(memeData);
          localStorage.setItem("memes", JSON.stringify(this.memes));
          this.meme = null;
          this.title = "";
          this.description = "";
        };
        reader.readAsDataURL(this.meme);
      }
    },
    deleteMeme(index) {
      this.memes.splice(index, 1);
      localStorage.setItem("memes", JSON.stringify(this.memes));
    },
  },
};
</script>

<style lang="sass" scoped>
// variables
$primary-green: #90BF3E
$secondary-green: #1A9546
$white: #ffffff

.meme-uploader-form
    margin-top: 60px
    max-width: 400px

    textarea, input, .file-upload-input label
        border: 0
        border-bottom: 1px solid grey
        background-color: transparent
        border-radius: 0

        &:focus
            box-shadow: none

    .file-upload-input
        label
            &:hover
                cursor: pointer

    // button styles
    .add-btn
        background-color: $primary-green
        border: 1px solid $white
        color: $white
        transition: 0.4s ease
        box-shadow: 0 5px 3px grey

        &:hover
            background-color: $secondary-green
            transition: 0.4s ease
            transform: translateY(-3px)
            box-shadow: 0 5px 10px grey
</style>
