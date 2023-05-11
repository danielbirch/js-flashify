<template>
  <Header :authenticated="authenticated" />
  <FlashCards />
  <History />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FlashCards from './components/FlashCards.vue'
import History from './components/History.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'JS Flashify',
      authenticated: true
    }
  },
  components: {
    Header,
    Footer,
    FlashCards,
    History
  }
}
</script>

<style>
body {
  margin: 0px
}

button {
  background: white;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 17px;
  font-weight: 600;
  font-family: "Urbanist", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

button:hover {
  background: white;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
}

h3 {
  font-size: 30px;
  margin: 0;
  color: #b6b6b6;
}

#app {
  background-image: url('./assets/bgtexture.png');
  background-repeat: repeat;
  font-family: "Urbanist", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 500;
}

.hidden {
  display: none;
}
</style>
