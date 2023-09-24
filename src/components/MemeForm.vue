<template>
  <div class="row app-content-container mx-auto">
    <div class="col-12" id="memeForm">
      <form
        class="meme-uploader-form mx-auto needs-validation"
        @submit.prevent="handleSubmit"
        novalidate
      >
        <h2 class="mb-4 text-center">My Favourite Memes</h2>

        <!-- file uploader -->
        <div class="input-group mb-3 file-upload-input">
          <label
            class="input-group-text w-100 align-items-center ps-3"
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
        <div class="form-floating mb-3 has-validation">
          <input
            type="text"
            class="form-control ps-3"
            placeholder="Meme Title"
            required
            id="memeTitle"
            v-model="title"
          />
          <label for="memeTitle" class="ps-3">Meme Title</label>
          <div class="invalid-feedback">Please enter your Meme Title.</div>
        </div>

        <!-- meme description -->
        <div class="form-floating mb-3">
          <textarea
            class="form-control ps-3 has-validation"
            placeholder="Leave a comment here"
            required
            id="memeDescription"
            v-model="description"
          ></textarea>
          <label for="memeDescription" class="ps-3">Reason this is funny</label>
          <div class="invalid-feedback">
            Please enter your Meme Description.
          </div>
        </div>

        <button
          class="btn mx-auto d-block add-btn rounded-pill px-4"
          type="submit"
        >
          Add
        </button>
        <div
          v-if="memes.length > 0"
          class="alert alert-success text-center mt-4"
          role="alert"
        >
          Please click
          <a href="#bottom" class="text-success">here</a> to view your latest
          upload.
        </div>
        <div v-else class="alert alert-success text-center mt-4" role="alert">
          There are no memes uploaded yet...
        </div>
      </form>
    </div>
    <div class="col-12">
      <div class="saved-memes-section">
        <div v-if="memes.length > 0">
          <!-- saved meme section -->
          <h2 class="text-center mb-4">Uploaded Memes:</h2>
          <div
            class="d-flex justify-content-center justify-content-md-between align-content-center align-items-md-start flex-column flex-md-row mb-4 pt-4 saved-meme-loop-block"
            v-for="(meme, index) in memes"
            :key="index"
          >
            <img
              class="mb-2 mb-md-0 mx-0 mx-md-2"
              :src="meme.data"
              alt="Meme Image"
            />

            <div class="mx-0 mx-md-2">
              <p class="mb-2 mb-md-0">
                <span class="fw-bold"
                  >{{ meme.editing ? "Editing Title" : "Title" }}:</span
                ><br />

                {{ meme.editing ? meme.updatedTitle : meme.title }}
              </p>
              <input
                v-if="meme.editing"
                v-model="meme.updatedTitle"
                class="form-control mt-2"
              />
            </div>
            <div class="mx-0 mx-md-2">
              <p class="mb-2 mb-md-0 text-break flex-grow-1">
                <span class="fw-bold"
                  >{{
                    meme.editing ? "Editing Description" : "Description"
                  }}:</span
                ><br />

                {{ meme.editing ? meme.updatedDescription : meme.description }}
              </p>
              <input
                v-if="meme.editing"
                v-model="meme.updatedDescription"
                class="form-control mt-2"
              />
            </div>
            <div class="text-center mt-3 mt-md-0">
              <button
                class="btn bg-black mb-2 mb-sm-0 mb-md-2 rounded-pill px-4 mx-0 mx-md-2"
                @click="editMeme(index)"
              >
                Edit
              </button>
              <button
                v-if="meme.editing"
                class="btn btn-success mb-2 mb-sm-0 mb-md-2 rounded-pill px-4 mx-0 mx-md-2"
                @click="saveMeme(index)"
              >
                Save
              </button>
              <button
                class="btn add-btn rounded-pill px-4 btn-delete mx-0 mx-md-2"
                @click="deleteMeme(index)"
              >
                Delete
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </div>
        </div>
        <span id="bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMemeStore } from "../store/store";

export default {
  name: "Meme-Form",
  setup() {
    const memeStore = useMemeStore();

    const editMeme = (index) => {
      const meme = memeStore.memes[index];
      meme.editing = true;
      meme.updatedTitle = meme.title;
      meme.updatedDescription = meme.description;
    };

    const saveMeme = (index) => {
      const meme = memeStore.memes[index];
      meme.title = meme.updatedTitle;
      meme.description = meme.updatedDescription;
      meme.editing = false;
      memeStore.persistMemes();
    };

    const meme = ref(null);
    const title = ref("");
    const description = ref("");

    const handleFileUpload = (event) => {
      meme.value = event.target.files[0];
    };

    const handleSubmit = () => {
      if (meme.value) {
        const reader = new FileReader();

        reader.onload = () => {
          const memeData = {
            name: meme.value.name,
            data: reader.result,
            title: title.value,
            description: description.value,
          };

          // use pinia store to add the meme
          memeStore.addMeme(memeData);

          // creset input fields
          meme.value = "";
          title.value = "";
          description.value = "";
        };

        reader.readAsDataURL(meme.value);
        location.reload();
      }
    };

    const deleteMeme = (index) => {
      // use pinia store to delete meme
      memeStore.deleteMeme(index);
    };

    const memes = memeStore.memes;

    return {
      meme,
      title,
      description,
      handleFileUpload,
      handleSubmit,
      deleteMeme,
      memes,
      memeStore,
      editMeme,
      saveMeme,
    };
  },
};
</script>

<style lang="sass" scoped>
// variables
$primary-green: #90BF3E
$secondary-green: #1A9546
$white: #ffffff
$primary-red: #E13126
$secondary-red: #C02926

.app-content-container
  max-width: 900px
  position: relative
  z-index: 50
.meme-uploader-form
    margin-top: 30px

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
.btn
  border: 1px solid $white
  color: $white
  transition: 0.4s ease
  box-shadow: 0 5px 3px grey
  max-width: 150px
  width: 100%

  @media (max-width: 575.98px)
      max-width: 100%

  &:hover
    transition: 0.4s ease
    transform: translateY(-3px)
    box-shadow: 0 5px 10px grey
    border: 1px solid $white
    color: $white
.add-btn
    background-color: $primary-green

    &:hover
        background-color: $secondary-green

.btn-delete
  background-color: $primary-red

  &:hover
      background-color: $secondary-red

.saved-memes-section
  margin: 50px 0

  img
    max-width: 250px
    width: 100%

    @media (max-width: 575.98px)
      max-width: 100%

.saved-meme-loop-block + .saved-meme-loop-block
  border-top: 1px grey solid
</style>
