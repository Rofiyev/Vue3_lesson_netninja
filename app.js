const app = Vue.createApp({
  data() {
    return {
      name: "Dilshod",
      url: "https://rof1yev-blog.vercel.app/",
      avatar: "./assets/author.jpg",
      programmingLanguages: [
        { name: "JavaScript", rating: 9, isFavorite: true },
        { name: "Python", rating: 10, isFavorite: true },
        { name: "Java", rating: 9, isFavorite: false },
        { name: "C#", rating: 7, isFavorite: false },
      ],
    };
  },
  methods: {
    toggleFavorite(language) {
      language.isFavorite = !language.isFavorite;
    },
  },
  computed: {
    favoriteLanguages() {
      return this.programmingLanguages.filter((lang) => lang.isFavorite);
    },
  },
});

app.mount("#app");
