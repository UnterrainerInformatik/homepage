<template>
  <div class="home">
    <Title
      :title="$t('throbaxScreenshots.title')"
      :description="$t('throbaxScreenshots.description')"
    ></Title>
    <Gallery
    :title="$t('throbaxScreenshots.gallery')"
    startWith=1
    endWith=23
    imageBaseString="https://files.unterrainer.info/Throbax_Galleries/Intro1/img"
    imageBaseEnd=".png"
    thumbBaseString="https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb"
    thumbBaseEnd=".png"
    titleLocalizationBaseString="throbaxScreenshots.gallery"
    descriptionLocalizationBaseString="throbaxScreenshots.description"
    padZerosLeftUpTo=3
    padThumbs=true
    padImages=true
    padTitleLocalization=false
    padDescriptionLocalization=false
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
