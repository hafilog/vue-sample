<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h1>{{ errorMessage }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default () { return {} } }
  },
  computed: {
    errorMessage () {
      if (this.error.statusCode === 404) {
        return 'ページが存在しません'
      }
      if (this.error.message) {
        return this.error.message
      }
      return 'エラーが発生しました'
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 10%;
  margin-left: 10%;
  padding: 10px;
  width: 70%;
  border: medium solid #000000;
}
</style>
