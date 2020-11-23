<template>
  <div class="home">
    <Title
      :title="$t('throbax.title')"
      :description="$t('throbax.description')"
      :buttons="$t('throbax.buttons')"
    ></Title>
    <ArticleStream :items="$t('throbax.points')"> </ArticleStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import ArticleStream from '@/components/articleStream.vue'

export default {
  name: 'throbaxMain',

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
  word-break: break-word;
  word-wrap: break-word;
}
</style>
