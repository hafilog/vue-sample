<template>
  <div>
    <div>Cookieの値：{{ cookieVal }}</div>
    <div>
      <input v-model="inputVal">
      <button @click="onClickBtn">Cookieに保存</button>
    </div>
  </div>
</template>

<script>
const COOKIE_KEY = 'InjectInInjectPage'

export default {
  data () {
    return {
      cookieVal: '', // Cookieから取得した値
      inputVal: '' // Formに入力された値
    }
  },
  beforeMount () {
    // Cookieから値を取得
    this.cookieVal = this.$uppercase.convert()
  },
  methods: {
    onClickBtn () {
      // Formの値をCookieに保存
      document.cookie = `${COOKIE_KEY}=${this.inputVal};path=/;max-age=180`
    }
  }
}
</script>
