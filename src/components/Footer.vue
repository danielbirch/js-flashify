<template>
  <footer>
    <div class="container-2">
      <div class="copyright">
        Copyright © {{ getYear() }} <a href="https://danielbirch.dev/">DanielBirch.dev</a>. All rights reserved.
      </div>
      <div class="footer-links">
        <a href="#">Privacy</a> | 
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </footer>
</template>

<script>
// IMPORTS

export default {
  data() {
    return {

    }
  },
  components: {},
  methods: {
    getYear() {
      const date = new Date()
      let year = date.getFullYear()
      return year
    }
  },
  computed: {},
  props: []
}
</script>

<style>
  footer {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .container-2 {
    width: 1100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-family: "Urbanist", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    /* position: fixed;
    bottom: 0; */
  }
  .copyright, .footer-links {
    padding: 10px;
  }
  .footer-links a {
    color: #1a1a1a;
    text-decoration: none;
  }
  .footer-links a:hover {
    text-decoration: underline;
  }
  .copyright a {
    text-decoration: none;
    color: #1a1a1a;
  }
  .copyright a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width:768px) {
    .container-2 {
      flex-direction: column;
    }
  }
</style>