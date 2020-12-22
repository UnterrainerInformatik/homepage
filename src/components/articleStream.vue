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
          'justify-center text-center mb-3' +
          (item.sub ? ' blue-grey lighten-5' : ' secondary')
        "
        v-html="item.title"
      ></v-card-title>
      <v-card-text
        v-if="!Array.isArray(item.value)"
        class="text-justify"
        v-html="item.value"
      ></v-card-text>
      <span v-else>
        <span v-for="(element, j) in item.value" :key="j">
          <v-card-text
            v-if="element.text"
            class="text-justify pt-2 pb-1"
            v-html="element.text"
          >
          </v-card-text>
          <Code class="mycode" v-if="element.code" :content="element.code" :language="element.language" />
          <br v-if="element.newLine"/>
        </span>
      </span>
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
import Code from '@/components/code.vue'
export default {
  name: 'articleStream',

  props: {
    items: {}
  },

  components: {
    Code
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>

<style scoped>
.mycode >>> code {
  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
    'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
    monospace !important;
  color: #202070 !important;
  background-color: #d1d1d1 !important;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  padding-left: 2px !important;
  padding-right: 2px !important;
  margin: 0px !important;
  font-size: 75% !important;
  text-align: left !important;
  text-justify: none !important;
  white-space: pre-wrap;
  margin: 0px !important;
  padding: 0px !important;
}
.mycode >>> pre {
  text-align: left !important;
  white-space: pre-wrap;
  margin: 0px !important;
  padding: 0px !important;
}
</style>
