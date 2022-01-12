function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      getElement: "",
      elements: [],
      winner: "",
      youLose: "YOU LOSE",
      youWin: "YOU WIN THE GAME ! ",
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      //console.log(this.currentRound % 3 !== 0);
      return this.currentRound % 3 === 0;
    },
  },
  watch: {
    winner: function () {
      if (this.winner && this.winner == "player") {
        document.getElementById("123").classList.add("player-class");
        document.getElementById("1234").textContent = "PLAYER WIN!";
      } else if (this.winner && this.winner == "monster") {
        document.getElementById("123").classList.add("monster-class");
        document.getElementById("1234").textContent = "MONSTER WIN!";
      }
    },
  },
  methods: {
    resetGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.elements = [];
    },
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      if (this.monsterHealth - attackValue <= 0) {
        this.winner = "player";
        alert(this.youWin);
        this.resetGame();
      } else {
        this.monsterHealth -= attackValue;
        this.getElement = "Player demage : " + attackValue;
        this.elements.push(this.getElement);
        console.log(this.elements);
        this.attackPlayer();
        this.currentRound++;
      }
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      if (this.playerHealth - attackValue <= 0) {
        this.winner = "monster";
        alert(this.youLose);
        this.resetGame();
      } else {
        this.playerHealth -= attackValue;
        this.getElement = "Monster demage : " + attackValue;
        this.elements.push(this.getElement);
      }
    },
    healPlayer() {
      const healValue = getRandomValue(10, 15);
      this.playerHealth += healValue;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.currentRound++;
      this.getElement = "Player heal : " + healValue;
      this.elements.push(this.getElement);
    },
    specialAttack() {
      const attackValue = getRandomValue(10, 15);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.currentRound++;
      this.getElement = "Player Special Attack : " + attackValue;
      this.elements.push(this.getElement);
    },
    surrender() {
      this.playerHealth = 0;
      this.winner = "monster";
      alert(this.youLose);
      this.resetGame();
    },
  },
});

app.mount("#game");
