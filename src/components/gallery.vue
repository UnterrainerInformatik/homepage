<template>
  <div>
    <v-layout v-if="title" class="justify-center mb-4">
      <v-card
        class="pa-0 ma-0"
        min-width="400px"
        width="100%"
        color="secondary darken-1"
      >
        <v-card-title class="justify-center text-center">{{
          title
        }}</v-card-title>
      </v-card>
    </v-layout>
    <div v-if="data" class="d-flex flex-wrap row justify-center">
      <v-flex
        align-center
        v-for="(item, index) in data"
        :key="index"
        class="ma-2 pa-0"
      >
        <v-card
          width="200px"
          class="secondary justify-center text-center align-center flex-grow-1 flex-shrink-1 ma-0 pa-0"
          @click="() => showImg(index)"
        >
          <v-img
            v-if="item.img"
            class="ma-0 pa-0"
            height="100px"
            width="200px"
            :src="item.thumb"
          >
          </v-img>
          <v-card-text
            class="justify-center align-center text-center ma-0 pa-0"
            v-if="item.title"
            v-html="item.title"
          >
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'gallery',

  props: {
    title: {},
    descriptionBaseString: {}
  },

  components: {
  },

  data: () => ({
    data: [],
    visible: false,
    index: 0
  }),

  watch: {},

  computed: {
  },

  methods: {
    getData () {
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb001.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img001.png',
        title: 'title 1'
      })
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb002.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img002.png'
      })
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb003.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img003.png',
        title: 'title 3'
      })
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb004.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img004.png',
        title: 'title 4'
      })
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb005.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img005.png',
        title: 'title f ai i8wf hwuorhgf erg 5'
      })
      this.data.push({
        thumb: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/thumb006.png',
        img: 'https://files.unterrainer.info/Throbax_Galleries/Intro1/img006.png',
        title: 'title 6'
      })
    },
    showImg (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  },

  created () {
    this.getData()
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
