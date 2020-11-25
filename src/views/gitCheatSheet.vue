<template>
  <div class="home">
    <Title
      :title="$t('git.title')"
      :description="$t('git.description')"
    ></Title>
    <ArticleStream :items="$t('git.gitList')"> </ArticleStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import ArticleStream from '@/components/articleStream.vue'

export default {
  name: 'gitCheatSheet',

  components: {
    Title,
    ArticleStream
  },

  data: () => ({
  }),

  watch: {},

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss">
@import 'index.scss';

</style>
