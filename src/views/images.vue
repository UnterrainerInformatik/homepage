<template>
  <div>
    <masonry-gallery
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
    ></masonry-gallery>
  </div>
</template>

<script lang="js">
import MasonryGallery from 'vue-masonry-gallery'

export default {
  name: 'images',

  components: {
    MasonryGallery
  },

  data: () => ({
    imgsArr: [],
    group: 0 // request param
  }),

  watch: {},

  computed: {
  },

  methods: {
    getData () {
      this.imgsArr.push({
        src: './static/img/adam-bixby-562004-unsplash.jpg',
        srcBig: './static/img/adam-bixby-562004-unsplash.jpg',
        href: null,
        title: 'This is first img title',
        info: 'First description',
        target: 'modal'
      })
    }
  },

  created () {
    this.getData()
  }
}
</script>

<style lang="scss">
@import 'index.scss';

.v-card__text, .v-card__title {
  word-break: normal;
}
</style>
