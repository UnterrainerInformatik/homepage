<template>
  <div v-if="items" class="d-flex flex-wrap justify-center">
    <v-card
      style="cursor: url(/cursor_mail.png), auto"
      class="grey lighten-4 ma-2 flex-grow-1 flex-shrink-1 d-flex flex-column"
      v-for="(item, i) in items"
      :key="i"
      min-width="285px"
      max-width="285px"
      :href="`mailto:${item.mail}?subject=${$t(
        'about.personalEmailSubject'
      )}&body=${$t('about.personalEmailBody')}`"
    >
      <v-card-title class="secondary justify-center text-center"
        ><span>{{ item.title }}</span>
        <v-spacer></v-spacer>
        <span><Gravatar :email="item.mail" rating="r"></Gravatar></span
      ></v-card-title>
      <v-card-text class="text-justify" v-html="item.value"></v-card-text>
      <v-spacer v-if="item.buttons"></v-spacer>
      <v-card-actions class="ma-0 pa-0" v-if="item.buttons">
        <v-container>
          <v-btn
            class="mb-1"
            v-for="(btn, i) in item.buttons"
            :key="i"
            :color="btn.color"
            small
            block
            :href="btn.href"
            :target="btn.target ? btn.target : '_blank'"
          >
            <v-icon v-if="btn.icon">{{ btn.icon }}</v-icon> {{ btn.text }}
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="js">
import Gravatar from 'vue-gravatar'

export default {
  name: 'peopleStream',

  props: {
    items: {}
  },

  components: {
    Gravatar
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>
