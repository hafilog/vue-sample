<template>
  <div />
</template>

<script>
export default {
  validate ({ query }) {
    return query.sampleId
  },
  fetch ({ error }) {
    const fetchFn = () => {
      // 50%で失敗する
      if (parseInt(Math.random() * 2, 10) === 1) {
        throw new Error('server error')
      }
      return true
    }

    try {
      // 処理が成功したら400, 失敗したら500
      fetchFn()
      error({ statusCode: 400, message: '操作にミスがあります。最初からやり直してください。' })
    } catch (e) {
      error({ statusCode: 500, message: 'システムがダウンしています。時間をおいてやり直してください。' })
    }
  }
}
</script>

<style></style>
