<template>
  <div class="home">
    <Title
      :title="$t('code.title')"
      :description="$t('code.description')"
    ></Title>
    <ArticleStream :items="$t('code.points')"> </ArticleStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import ArticleStream from '@/components/articleStream.vue'

export default {
  name: 'codeExplanation',

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

.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
