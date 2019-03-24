<template>
  <div>
    <!-- htmlタグ -->
    <nuxt-link v-scroll-to="'#target'" to>targetの位置へ</nuxt-link>
    <!-- clickイベント -->
    <a href="javascript:void(0)" @click.prevent="onClick">targetの位置へ</a>

    <!-- スクロールのアニメーションをわかりやすくするため50に -->
    <h1 v-for="i in 50" :key="i">{{ i }}</h1>

    <div id="target">ここまでスクロールさせたい</div>
  </div>
</template>

<script>
export default {
  mounted () {
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash)
    }
  },
  methods: {
    onClick () {
      console.log('---ここで他の処理を行う---')

      this.$scrollTo('#target')
    }
  }
}
</script>
