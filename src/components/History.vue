<template>
  <div class="container-history">
    <div class="history-inner">
      <h3>History</h3>
      <div class="history-card">
        <div class="card-details">
          Title of card
        </div>
        <div class="card-status">
          <span v-if="false"><i class="fa-solid fa-check"></i></span>
          <span v-if="true"><i class="fa-solid fa-xmark"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// IMPORTS

export default {
  data() {
    return {
      // theme: wrong,
    }
  },
  components: {},
  methods: {},
  computed: {},
  props: []
}
</script>

<style>
  .container-history {
    width: auto;
    display: flex;
    justify-content: center;
  }
  .history-inner {
    width: 1100px;
  }
  .history-card {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 0px;
    box-shadow: 0 1px 0.625rem 0 hsla(210, 7%, 22%, .06), 0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, .08);
    border-radius: 6px;
    font-size: 18px;
    background: white;
  }
  .card-status {
    background: #f5f5f5;
    padding: 20px;
    cursor: pointer;
  }
  .card-details {
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    .history-card {
    width: 75%;
    margin: 20px auto;
    }
  }
</style>