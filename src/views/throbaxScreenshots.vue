<template>
  <div class="home">
    <Title
      :title="$t('throbaxScreenshots.title')"
      :description="$t('throbaxScreenshots.description')"
    ></Title>
    <Gallery
    :title="$t('throbaxScreenshots.gallery')"
    descriptionBaseString="gallery"
    ></Gallery>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import Gallery from '@/components/gallery.vue'

export default {
  name: 'throbaxScreenshots',

  components: {
    Title,
    Gallery
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
  word-break: normal;
}
</style>
