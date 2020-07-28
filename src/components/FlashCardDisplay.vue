<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <label for="fontsize">Font Size:</label>
    <select id="fontzie" v-model="fontSize">
      <option value="14px">Small</option>
      <option value="20px">Medium</option>
      <option value="36px">Large</option>
    </select>
    
    <div @auxclick="nextCard" @click="showBack = !showBack" v-if="!showBack" v-bind:style="{ fontSize: fontSize}">
      {{ cards[currentCard].front }}
    </div>
    <div class="back" @auxclick="nextCard" v-if="showBack" @click="showBackFunction" v-bind:style="{fontSize: fontSize}" >
      {{ cards[currentCard].back }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashCardDisplay',
  props: {
    msg: String
  },
  data() {
    return {
      currentCard: 0,
      showBack: false,
      fontSize: "14px",
      isFront: true,
      cards: this.$store.state.cards,
    }
  },
  computed: {
      allCards(){
        return this.$store.state.cards;
      }
  },
  methods: {
      nextCard(){
        let numberOfCards = this.$store.state.cards.length -1;
        let cardNumber = Math.floor(Math.random() * numberOfCards);
        this.showBack = false;
        this.currentCard = cardNumber;
      },
      showBackFunction(){
        if(!this.showBack){
          this.showBack = !this.showBack;
        }
        else {
          this.showBack=false;
          this.nextCard();

        }
        
        }
      }
  }
</script>

<style scoped>
div.card > div {
  height: 600px;
  width: 400px;
  border: 1px solid black;
  border-radius: 6px;
  margin: auto;
  padding: 10px;
  background-color: #00AFEF;
}

.back {
  color: white;
}

#nextCard {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 90%;
}

</style>
