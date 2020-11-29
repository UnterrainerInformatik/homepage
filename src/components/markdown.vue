<template>
  <div v-if="content">
    <v-card
      ><v-card-text>
        <div class="markdown-body" v-html="'' + parse(content)"></div> </v-card-text
    ></v-card>
  </div>
</template>

<script lang="js">
import marked from 'marked'
import prism from 'prismjs'

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
  name: 'gitMarkdown',

  props: {
    content: {}
  },

  components: {
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
    parse (value) {
      marked.setOptions({
        highlight: function (code, lang) {
          return prism.highlight(code, prism.languages[lang || 'markup'], lang || 'markup')
        }
      })
      return marked.parse(value)
    }
  }
}
</script>

<style lang="scss">
// Theme goes here:
@import '@/styles/gitHubMarkdown.scss';
@import 'prismjs/themes/prism';

.markdown-body pre {
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace !important;
}
</style>
