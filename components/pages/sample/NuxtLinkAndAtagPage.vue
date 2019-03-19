<template>
  <div>
    <!-- 悪い例 -->
    <ul>
      <li v-for="(link, i) in links" :key="`bad-sample_${i}`">
        <template v-if="isInternalLink(link.path)">
          <!-- 内部リンク -->
          <nuxt-link :to="link.path">{{ link.label }}</nuxt-link>
        </template>
        <template v-else>
          <!-- 外部リンク -->
          <a :href="link.path">{{ link.label }}</a>
        </template>
      </li>
    </ul>
    <!-- /悪い例 -->

    <!-- 良い例(componentタグ) -->
    <ul>
      <li v-for="(link, i) in links" :key="`bad-sample_${i}`">
        <component
          :is="isInternalLink(link.path) ? 'nuxt-link' : 'a'"
          :to="isInternalLink(link.path) ? link.path : ''"
          :href="isInternalLink(link.path) ? '' : link.path"
        >
          {{ link.label }}
        </component>
      </li>
    </ul>
    <!-- /良い例(componentタグ) -->

    <!-- 良い例(clickイベント) -->
    <ul>
      <li v-for="(link, i) in links" :key="`bad-sample_${i}`">
        <a href="javascript:void(0)" @click.prevent="onClick(link.path)">
          {{ link.label }}
        </a>
      </li>
    </ul>
    <!-- /良い例(clickイベント) -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { label: '内部リンク', path: '/internal' },
        { label: '外部リンク(HAFILOGサイト)', path: 'https://hafilog.com' }
      ]
    }
  },
  methods: {
    isInternalLink (path) {
      return !/^https?:\/\//.test(path)
    },
    onClick (path) {
      if (this.isInternalLink(path)) {
        this.$router.push(path)
      } else {
        location.href = path
      }
    }
  }
}
</script>
