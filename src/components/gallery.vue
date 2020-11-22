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
      <v-flex align-center v-for="(item, i) in data" :key="i" class="ma-2 pa-0">
        <v-card
          width="200px"
          class="secondary justify-center text-center align-center flex-grow-1 flex-shrink-1 ma-0 pa-0"
          @click="() => showImage(item)"
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

    <v-dialog
      v-model="visible"
      width="unset"
      max-width="90vw"
      max-height="95vh"
    >
      <v-btn
        class="mt-9 primary"
        dark
        icon
        fab
        absolute
        small
        top
        right
        @click.native="closeImage()"
      >
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        class="primary"
        dark
        icon
        fab
        absolute
        right
        @click.native="nextImage()"
        :style="{ top: '50%', transform: 'translateY(-50%)' }"
      >
        <v-icon>navigate_next</v-icon>
      </v-btn>
      <v-btn
        class="primary"
        dark
        icon
        fab
        absolute
        left
        @click.native="prevImage()"
        :style="{ top: '50%', transform: 'translateY(-50%)' }"
      >
        <v-icon>navigate_before</v-icon>
      </v-btn>

      <v-card
        class="secondary justify-center text-center align-center flex-grow-1 flex-shrink-1 ma-0 pa-0"
        @click="() => closeImage()"
      >
        <v-card-title
          class="justify-center align-center text-center ma-0 pa-0"
          v-if="currentItem.title"
          v-html="currentItem.title"
        ></v-card-title>
        <v-img
          class="ma-0 pa-0"
          max-height="80vh"
          :src="currentItem.img"
          contain
        ></v-img>
        <v-card-text
          class="justify-center align-center text-center ma-0 pa-0"
          v-if="currentItem.description"
          v-html="currentItem.description"
        ></v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="js">

export default {
  name: 'gallery',

  props: {
    title: {},
    startWith: {},
    endWith: {},
    imageBaseString: {},
    imageBaseEnd: {},
    thumbBaseString: {},
    thumbBaseEnd: {},
    titleLocalizationBaseString: {},
    descriptionLocalizationBaseString: {},
    descriptionBaseString: {},
    padZerosLeftUpTo: {},
    padThumbs: {},
    padImages: {},
    padTitleLocalization: {},
    padDescriptionLocalization: {}
  },

  components: {
  },

  data: () => ({
    data: [],
    visible: false,
    currentItem: {}
  }),

  watch: {},

  computed: {
  },

  methods: {
    getData () {
      let index = 0
      for (let i = this.startWith; i <= this.endWith; i++) {
        let n = i
        if (this.padZerosLeftUpTo) {
          n = ('0000000000' + i).slice(-this.padZerosLeftUpTo)
        }

        let lookupValue = this.titleLocalizationBaseString + (this.padTitleLocalization.toLowerCase() === 'true' ? n : i)
        let title = this.$t(lookupValue)
        if (!this.$te(lookupValue)) {
          title = undefined
        }

        lookupValue = this.descriptionLocalizationBaseString + (this.padDescriptionLocalization.toLowerCase() === 'true' ? n : i)
        let description = this.$t(lookupValue)
        if (!this.$te(lookupValue)) {
          description = undefined
        }

        const img = this.imageBaseString + (this.padImages.toLowerCase() === 'true' ? n : i) + this.imageBaseEnd
        const thumb = this.thumbBaseString + (this.padThumbs.toLowerCase() === 'true' ? n : i) + this.thumbBaseEnd

        this.data.push({
          index,
          thumb,
          img,
          title,
          description
        })
        index++
      }
    },
    showImage (item) {
      this.currentItem = item
      this.visible = true
    },
    closeImage () {
      this.visible = false
    },
    nextImage () {
      let i = this.currentItem.index
      i++
      if (i >= this.data.length) {
        i = 0
      }
      this.currentItem = this.data[i]
    },
    prevImage () {
      let i = this.currentItem.index
      i--
      if (i < 0) {
        i = this.data.length - 1
      }
      this.currentItem = this.data[i]
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
