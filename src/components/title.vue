<template>
  <div>
    <v-layout class="justify-center mb-4">
      <v-card
        class="pa-0 pt-4 px-4 ma-0"
        min-width="400px"
        max-width="800px"
        color="secondary darken-1"
      >
        <v-card-title
          class="justify-center text-center"
          v-html="title"
        ></v-card-title>
        <v-card-text
          class="justify-center text-center"
          v-html="description"
        ></v-card-text>
        <v-card-actions class="ma-0 pa-0" v-if="buttons">
          <v-container>
            <v-btn
              class="mb-1"
              v-for="(btn, i) in buttons"
              :key="i"
              :color="btn.color"
              small
              block
              :href="btn.href"
            >
              <v-icon v-if="btn.icon">{{ btn.icon }}</v-icon> {{ btn.text }}
            </v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script lang="js">

export default {
  name: 'articleStream',

  props: {
    title: {},
    description: {},
    buttons: {}
  },

  data: () => ({
    navMenu: false
  }),

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
