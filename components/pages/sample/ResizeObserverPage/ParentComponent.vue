<template>
  <div>
    <child-component v-show="isShownChildComponent" />

    <button @click.prevent="onClickBtn">クリック</button>
    <p>childComponentは{{ isShownChildComponent ? '表示' : '非表示' }}状態です</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  components: {
    ChildComponent
  },
  data () {
    return {
      isShownChildComponent: false
    }
  },
  methods: {
    onClickBtn () {
      this.isShownChildComponent = !this.isShownChildComponent
    }
  }
}
</script>
