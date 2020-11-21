<template>
  <div v-if="items" class="d-flex flex-wrap justify-center">
    <v-card
      class="grey lighten-4 ma-2 flex-grow-1 flex-shrink-1"
      v-for="(item, i) in items"
      :key="i"
      min-width="400px"
      max-width="400px"
    >
      <v-card-title
        class="secondary justify-center text-center"
        v-html="item.title"
      ></v-card-title>
      <v-card-text class="text-justify" v-html="item.value"></v-card-text>
      <v-card-actions v-if="item.buttons">
        <v-container>
          <v-btn
            class="mb-1"
            v-for="(btn, i) in item.buttons"
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
  </div>
</template>

<script lang="js">

export default {
  name: 'articleStream',

  props: {
    items: {}
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
