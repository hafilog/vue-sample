<template>
  <div ref="rootDiv">
    <h3>Hello HAFILOG!</h3>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'

export default {
  data () {
    return {
      observer: null,
      isShown: false
    }
  },
  watch: {
    isShown (val) {
      console.log(`ChildComponentは${this.isShown ? '表示' : '非表示'}状態です`)
    }
  },
  mounted () {
    this.observer = new ResizeObserver((entries) => {
      this.isShown = !this.isShown
    })
    this.observer.observe(this.$refs.rootDiv)
  },
  beforeDestroy () {
    this.observer.disconnect(this.$refs.rootDiv)
  }
}
</script>
