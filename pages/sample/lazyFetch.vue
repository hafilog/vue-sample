<template>
  <lazy-fetch-page :isFetchedDailyNecessitiesData="isFetchedDailyNecessitiesData" />
</template>

<script>
import LazyFetchPage from '~/components/pages/sample/LazyFetchPage/index.vue'

export default {
  components: {
    LazyFetchPage
  },
  data () {
    return {
      isFetchedDailyNecessitiesData: false // 「日用品」のデータが取得完了したかどうか
    }
  },
  async fetch (context) {
    // 「家電」のデータを取得する処理（APIから1秒間かけて取得する想定）
    const getAppliancesData = () => {
      return new Promise(resolve => setTimeout(resolve, 1000))
    }

    // ファーストビューに必要なデータのみ取得
    await getAppliancesData()
  },
  created () {
    this.getDailyNecessitiesData()
  },
  methods: {
    // 「日用品」のデータを取得する処理（APIから2秒間かけて取得する想定）
    getDailyNecessitiesData () {
      return new Promise(resolve => setTimeout(() => {
        this.isFetchedDailyNecessitiesData = true
        resolve(true)
      }, 2000))
    }
  }
}
</script>
