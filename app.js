const app = Vue.createApp({
  data() {
    return {
      name: "Dilshod",
    };
  },
  methods: {
    handleEvent(e, number) {
      console.log(number, e.type);
    },
  },
});

app.mount("#app");
