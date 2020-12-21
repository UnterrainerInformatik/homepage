<template>
  <v-card v-if="!inline" class="secondary ma-1 my-2 pa-0"
    ><v-card-text class="ma-1 pa-0 px-1">
      <Prism
        style="width: unset"
        v-if="content && language"
        :language="language"
        class="markdown-body"
        >{{ content }}</Prism
      >
    </v-card-text>
  </v-card>
  <v-chip v-else label x-small class="elevation-1 secondary ma-0 mx-1 pa-0 px-1" style="font-size: 1em;">
    <Prism
      v-if="content && language"
      :language="language"
      class="markdown-body"
      >{{ content }}</Prism
    >
  </v-chip>
</template>

<script lang="js">
import Prism from 'vue-prism-component'
// Language imports go here:
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-toml'
import 'prismjs/components/prism-yaml'

export default {
  name: 'codeElement',

  props: {
    content: {},
    language: {},
    inline: {}
  },

  components: {
    Prism
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
// Theme goes here:
@import 'prismjs/themes/prism';

.markdown-body {
  background-color: transparent !important;

  * {
    background-color: transparent !important;
  }
}

.markdown-body pre,
code {
  word-break: break-word !important;
  white-space: pre-wrap !important;
}
</style>
