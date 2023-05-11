<template>
  <header>
    <div class="set-width">
      <div class="container-1">
          <div class="logo">
            <span>JS</span> Flashify
          </div>
          <div class="nav">
            <!-- <nav> -->
                <button v-if="!authenticated">Login</button>
                <button v-if="!authenticated">Register</button>
                <button v-if="authenticated" @click="actionSubMenu">My Account</button>
            <!-- </nav> -->
          </div>
        </div>
    </div>
  </header>
  <div class="container-links">
    <div class="set-width-links">
      <div class="sub-nav hidden" v-if="authenticated" ref="subNav">
        <nav>
          <a href="#">Add a Card</a>
          <a href="#">Edit a Card</a>
          <a href="#">Logout</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// IMPORTS
import gsap from 'gsap'
export default {
  data() {
    return {

    }
  },
  components: {},
  methods: {
    actionSubMenu() {
      if (this.$refs.subNav.classList.contains('hidden')) {
        this.$refs.subNav.classList.toggle('hidden')
        gsap.fromTo(
        ".sub-nav", {top:-60}, {top:78,duration:0.4}
      )
      } else {
        gsap.fromTo(
        ".sub-nav", {top:78}, {top:-60,duration:0.4}
        )
        setTimeout(() => {
          this.$refs.subNav.classList.toggle('hidden')
        }, 400)
      }
    }
  },
  computed: {},
  props: ['authenticated']
}
</script>

<style>
  header {
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 1px 0.625rem 0 hsla(210, 7%, 22%, .06), 0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, .08);
    background: white;
  }
  .set-width {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 99;
  }
  .container-1 {
    width: 1100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10.5px 20px;
    background: white;
  }
  .logo {
    padding: 10px;
    color: #1a1a1a;
    font-size: 2rem;
    font-family: "Urbanist", Arial, Helvetica, sans-serif;
    font-weight: 900;
  }
  .logo span {
    background: #F0DB4F;
    padding: 13px 5px 1px 13px;
    font-size: 24px;
    position: relative;
    top: 3px;
}
  .nav {
    color: #333;
    padding: 10px;
    font-family: "Urbanist", Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0;
  }
  .nav button {
    margin-left: 15px;
  }
  .container-links {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .set-width-links {
    width: 1100px;
    display: grid;
  }
  .sub-nav {
    position: fixed;
    right: auto;
    top: 78px;
    background: #fff;
    z-index: 9;
    justify-self: flex-end;
    width: 180px;
    box-shadow: 0 1px 0.625rem 0 hsla(210, 7%, 22%, .06), 0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, .08);
    text-align: end;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .sub-nav nav {
    display: flex;
    flex-direction: column;
  }
  .sub-nav nav a {
    text-decoration: none;
    color: #1a1a1a;
    font-family: "Urbanist", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;
  }
  .sub-nav nav a:hover {
    background: #f5f5f5;
    padding: 10px;
  }
  .body-mod {
    overflow: hidden;
  }
</style>