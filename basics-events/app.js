const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert("here we go aggain");
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
