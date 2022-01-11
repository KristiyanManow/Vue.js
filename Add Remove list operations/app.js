const app = Vue.createApp({
  data() {
    return {
      curentGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.curentGoal);
      this.curentGoal = "";
    },
    removeGoal(ind) {
      this.goals.splice(ind, 1);
    },
  },
});

app.mount("#user-goals");
