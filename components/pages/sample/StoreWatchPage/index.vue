<template>
  <div>
    <div>苗字：<input v-model="lastName"></div>
    <div>名前：<input v-model="firstName"></div>
    <div>氏名は「{{ fullName }}」です。</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      lastName: '',
      firstName: ''
    }
  },
  computed: {
    ...mapState('sample/storeWatch', [
      'fullName'
    ])
  },
  watch: {
    lastName (val) {
      this.setLastName(val)
    },
    firstName (val) {
      this.setFirstName(val)
    }
  },
  methods: {
    ...mapMutations('sample/storeWatch', [
      'setLastName',
      'setFirstName'
    ])
  }
}
</script>
