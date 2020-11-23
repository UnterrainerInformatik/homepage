<template>
  <div>
    <Title
      :title="$t('coding.title')"
      :description="$t('coding.description')"
    ></Title>
    <ArticleStream :items="$t('coding.infoList')"> </ArticleStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import ArticleStream from '@/components/articleStream.vue'

export default {
  name: 'coding',

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

.v-card__text, .v-card__title {
  word-break: break-word;
  word-wrap: break-word;
}
</style>
