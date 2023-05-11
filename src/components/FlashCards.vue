<template>
  <div class="container-main">
    <div class="container-inner">
      <div class="prev-card" @click="handlePrevious">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="card-container">
        <div class="card" v-for="card in cards" :key="card.id">
          <div class="card-inner" ref="cardInner" @click="flipCard">
            <div class="card-face card-face-front">
              <div class="card-category">
                Vue.js
              </div>
              <div class="card-title">
                <span v-if="firstQuestion">{{ firstQuestion }}</span>
                <span v-if="!firstQuestion">{{ cards.question }}</span>
              </div>
              <div class="flip-prompt">
                <i class="fa-solid fa-rotate"></i>
                <span>flip to view the answer</span>
              </div>
            </div>
            <div class="card-face card-face-back">
              <div class="card-category">
                Vue.js
              </div>
              <div class="card-answer">
                This is the answer to the question.
                <img src="#" alt="" v-if="true" style="width:300px;height:auto;margin-top:20px;">
              </div>
              <div class="flip-prompt">
                <i class="fa-solid fa-rotate"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next-card" @click="handleNext">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
// IMPORTS
import axois from 'axios'

export default {
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    axois.get('http://localhost:3000/cards')
      .then(res => {
        this.cards = res.data
      })
  },
  components: {},
  methods: {
    handlePrevious() {
      console.log('PREV')
    },
    handleNext() {
      console.log('NEXT')
    },
    flipCard(a) {
      this.$refs.cardInner.classList.toggle('is-flipped')
    }
  },
  computed: {
    firstQuestion() {
      if (this.cards.length > 0) {
        return this.cards[0].question
      } else {
        return ''
      }
    }
  },
  props: []
}
</script>

<style>
:root {
  --vue: #42b883;
  --vue-text: #35495e;
  --fundamentals: #f7df1e;
  --fundamentals-text: #f7df1e;
  --methods: #ffffff;
  --methods-text: #1a1a1a;
  --objects: #bababa;
  --objects-text: #bababa;
  --functions: #a4a4a4;
  --functions-text: #a4a4a4;
}

.container-main {
  width: auto;
  height: calc(100vh - 25vh);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 78px 0 0px 0;
  padding: 40px 40px 20px 40px;
}

.container-inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.prev-card,
.next-card {
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #f5f5f5a3;
  font-weight: 600;
  font-size: 40px;
  color: #b6b6b6;
}

.next-card {
  left: auto;
  right: 0;
  top: 0;
}

.prev-card:hover,
.next-card:hover {
  background: #f0db4f;
  color: white;
  cursor: pointer;
}

.card-container {
  width: 90%;
  display: flex;
  justify-content: center;
}

.card {
  width: 350px;
  height: 450px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 2px 0px 0.625rem 2px hsla(210, 7%, 22%, .06), 0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, .08);
}

.card-face-front {
  background: var(--vue);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-face-back {
  transform: rotateY(180deg);
  background: var(--methods);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-category {
  align-self: center;
  color: #1a1a1a;
  font-family: "Urbanist", Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: white;
  padding: 15px 30px;
  position: absolute;
  top: 0;
  background: var(--vue-text);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.card-title {
  color: white;
  font-family: "Special Elite", Arial, Helvetica, sans-serif;
  font-size: 30px;
  line-height: 1.4em;
  padding: 20px;
}

.card-answer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--vue-text);
  padding: 20px;
}

.flip-prompt {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  padding: 20px;
  color: var(--vue-text);
  font-size: 14px;
  font-weight: 700;
}

.flip-prompt i {
  font-size: 25px;
  padding-bottom: 10px;
}
</style>