<template>
  <div>
    <div v-for="(n, i) in 100" :key="`lazyload-img_${i}`">
      <img v-lazy="imgObj" :alt="`lazyload-img_${i}`">
    </div>
  </div>
</template>

<script>
import src from '~/assets/img/reiwa.png'
import loading from '~/assets/img/loading.gif'

export default {
  data () {
    return {
      imgObj: {
        src,
        loading
      }
    }
  }
}
</script>

<style scoped>
img[lazy=loaded] {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: scrollIn;
}

@keyframes scrollIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
