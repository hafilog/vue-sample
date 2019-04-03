<template>
  <h1>{{ defaultVal }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('sample/afterEachDefault', [
      'defaultVal'
    ])
  }
}
</script>
