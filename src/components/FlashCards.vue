<template>
	<div class="container-main">
		<div class="container-inner">
			<div
				class="prev-card" @click="handlePrevious">
				<i class="fa-solid fa-chevron-left"></i>
			</div>
			<div class="card-container">
				<div class="card" v-if="currentCard !== null">
					<div class="card-inner" ref="cardInner" @click="flipCard">
						<div class="card-face card-face-front" :style="{ background: `var(--${cards[currentCard].primary})`}">
							<div class="card-category" :style="{ background: `var(--${cards[currentCard].secondary})`}">{{ cards[currentCard].technology }}</div>
							<div class="card-title" :style="{ color: `var(--${cards[currentCard].text})` }">
								<span>{{ cards[currentCard].question }}</span>
							</div>
							<div class="flip-prompt">
								<i class="fa-solid fa-rotate"></i>
								<span>flip to view the answer</span>
							</div>
						</div>
						<div class="card-face card-face-back">
							<div class="card-category" :style="{ background: `var(--${cards[currentCard].secondary})`}"> {{ cards[currentCard].technology }}</div>
							<div class="card-answer">
								{{ cards[currentCard].answer }}
								<img :src="cards[currentCard].answerImage" alt="" v-if="true" style="width: 100%; height: auto; margin-top: 20px;"/>
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
// import axois from "axios";
import { db } from "../firebase/config.js";
import { query, collection, getDocs } from 'firebase/firestore';

export default {
	data() {
		return {
			cards: [],
			currentCard: null,
		};
	},
	created() {
		this.getCards()
	},
	mounted() {
		// axois.get("http://localhost:3000/cards").then((res) => {
		// 	this.cards = res.data;
		// 	this.randomiseCards(this.cards);
		// 	this.currentCard = 0;
		// });
	},
	components: {},
	methods: {
		async getCards() {
			const querySnap = await getDocs(query(collection(db, 'cards')))
			this.cards = querySnap.docs.map(doc => doc.data())
				this.randomiseCards(this.cards);
				this.currentCard = 0;
			console.log(this.cards)
		},
		flipCard(a) {
			this.$refs.cardInner.classList.toggle("is-flipped");
		},
		randomiseCards(cards) {
			// Get number of items in array, minus 1 to keep it within range
			const cardsLength = cards.length - 1;
			// Math random, multiplied by number of items in array
			const random = Math.floor(Math.random() * cardsLength);
			// For each array item, switch with item equal to half of the math random
			const switchWith = Math.round(random / 2);

			cards.forEach((card) => {
				if (cards.length >= 3) {
					if (random === switchWith) {
						[cards[random], cards[cardsLength]] = [
							cards[cardsLength],
							cards[random],
						];
					} else {
						const temp = cards[random];
						cards[random] = cards[switchWith];
						cards[switchWith] = temp;
					}
				} else {
					console.error(
						"Oops! There's not enough cards to randomise."
					);
				}
			});
		},
		handleNext() {
			if (this.currentCard < this.cards.length - 1) {
				if (this.$refs.cardInner.classList.contains("is-flipped")) {
					this.flipCard()
					setTimeout(() => {
						this.currentCard++
					}, 900)
				} else {
					this.currentCard++
				}
			}
		},
		handlePrevious() {
			if (this.currentCard < this.cards.length && this.currentCard !== 0) {
				if (this.$refs.cardInner.classList.contains("is-flipped")) {
					this.flipCard()
					setTimeout(() => {
						this.currentCard--
					}, 900)
				} else {
					this.currentCard--
				}
			}
		},
	},
	computed: {},
	props: [],
};
</script>

<style>
:root {
	--vue: #42b883;
	--vue-secondary: #35495e;
	--fundamentals: #f0db4f;
	--fundamentals-secondary: #1a1a1a;
	--methods: #f0db4f;
	--methods-secondary: #1a1a1a;
	--objects: #f0db4f;
	--objects-secondary: #1a1a1a;
	--functions: #f0db4f;
	--functions-secondary: #1a1a1a;
	--dark: #1a1a1a;
	--light: #ffffff;
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
	background: var(--fundamentals);
	color: white;
	cursor: pointer;
}

.card-container {
	width: 90%;
	display: flex;
	justify-content: center;
}

.card {
	width: 420px;
	height: 520px;
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
	box-shadow: 2px 0px 0.625rem 2px hsla(210, 7%, 22%, 0.06),
		0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, 0.08);
}

.card-face-front {
	background: var(--card-face-front);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.card-face-back {
	transform: rotateY(180deg);
	background: white;
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
	background: var(--card-category);
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
}

.card-title {
	color: white;
	font-family: "Special Elite", Arial, Helvetica, sans-serif;
	font-size: 30px;
	line-height: 1.4em;
	width: 80%;
  justify-content: center;
  display: flex;
  word-break: break-word;
}

.card-answer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--dark);
	padding: 20px;
	word-break: break-word;
}

.flip-prompt {
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	padding: 20px;
	color: var(--dark);
	font-size: 14px;
	font-weight: 700;
}

.flip-prompt i {
	font-size: 25px;
	padding-bottom: 10px;
}
</style>