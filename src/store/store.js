import { defineStore } from "pinia";

export const useMemeStore = defineStore("memeStore", {
  id: "memeStore",
  state: () => ({
    memes: [],
  }),
  actions: {
    setMemes(memes) {
      this.memes = memes;
    },
    addMeme(memeData) {
      // this.memes.push(memeData);
      const { name, data, title, description } = memeData;
      this.memes.push({
        name,
        data,
        title,
        description,
      });
      // update local storage
      this.persistMemes();
    },
    deleteMeme(index) {
      this.memes.splice(index, 1);
      // update local storage
      this.persistMemes();
    },
    persistMemes() {
      // save to local storage
      localStorage.setItem("memes", JSON.stringify(this.memes));
    },
  },
});
