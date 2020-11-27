<template>
  <v-layout class="justify-center mb-4">
    <v-card
      class="pa-0 pt-4 px-4 ma-0"
      width="100%"
      :color="
        'secondary' +
        (sub != undefined && sub.toLowerCase() === 'true' ? '' : ' darken-1')
      "
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
</template>

<script lang="js">

export default {
  name: 'articleStream',

  props: {
    title: {},
    description: {},
    buttons: {},
    sub: {}
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>
