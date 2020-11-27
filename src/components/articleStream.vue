<template>
  <div v-if="items" class="d-flex flex-wrap justify-center">
    <v-card
      class="ma-2 flex-grow-1 flex-shrink-1 d-flex flex-column grey lighten-4"
      v-for="(item, i) in items"
      :key="i"
      min-width="285px"
      max-width="285px"
    >
      <v-card-title
        :class="
          'justify-center text-center' +
          (item.sub ? ' blue-grey lighten-5' : ' secondary')
        "
        v-html="item.title"
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

export default {
  name: 'articleStream',

  props: {
    items: {}
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>
