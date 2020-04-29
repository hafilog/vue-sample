<template>
  <div class="lazy-fetch-page">
    <div class="row">
      <h1>家電</h1>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/tv.png">
        </div>
        <div class="price">10,000円</div>
      </div>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/reizouko.png">
        </div>
        <div class="price">20,000円</div>
      </div>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/soujiki.png">
        </div>
        <div class="price">5,000円</div>
      </div>
    </div>

    <div v-if="isFetchedDailyNecessitiesData" class="row">
      <h1>日用品</h1>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/water.png">
        </div>
        <div class="price">100円</div>
      </div>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/tissue.png">
        </div>
        <div class="price">300円</div>
      </div>
      <div class="column">
        <div class="card">
          <img src="~/assets/img/shampoo.png">
        </div>
        <div class="price">1,000円</div>
      </div>
    </div>
    <div v-else class="loading">
      <img src="~/assets/img/loading.gif">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFetchedDailyNecessitiesData: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.lazy-fetch-page {
  margin: 50px 10% 0 10%;
}

.row {
  margin-bottom: 80px;
}

.row h1 {
  margin-bottom: 30px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 320px;
  height: 332px;
  margin-right: 40px;
}

.column .price {
  font-size: x-large;
  text-align: center;
  margin-top: 20px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  height: 100%;
}

.card img {
  max-height: 100%;
  max-width: 100%;
}

.loading {
  text-align: center;
}
</style>
