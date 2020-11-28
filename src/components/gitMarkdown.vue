<template>
  <div v-if="content">
    <v-card dark
      ><v-card-text>
        <div class="markdown" v-html="'' + content"></div> </v-card-text
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
    lang: {},
    file: {},
    project: {},
    branch: {},
    user: {}
  },

  components: {
  },

  data: () => ({
    content: undefined
  }),

  computed: {
  },

  methods: {
    async getFile () {
      return fetch(`https://raw.githubusercontent.com/${this.user}/${this.project}/${this.branch}/${this.file}`,
        {
          method: 'GET'
        })
    }
  },

  mounted () {
    if (!this.user || !this.project || !this.branch || !this.file) {
      return
    }

    marked.setOptions({
      highlight: function (code, lang) {
        return prism.highlight(code, prism.languages[lang || 'markup'], lang || 'markup')
      }
    })
    this.getFile().then((result) => {
      result.text().then((t) => {
        this.content = marked.parse(t)
      })
    })
  }
}
</script>

<style lang="scss">
// Theme goes here:
@import 'prismjs/themes/prism-okaidia';

.markdown {
  all: revert import !important;
  white-space: pre-wrap !important;
  line-height: 70%;
  * {
    all: revert;
    word-break: break-word !important;
    white-space: pre-wrap !important;
  }

  code {
    word-break: break-all !important;
  }

  p {
    line-height: 100% !important;
    margin: 5px !important;
    margin-top: 2px !important;
    margin-bottom: 2px !important;
  }

  pre {
    background-color: #505050;
  }
  .token.operator {
    background-color: unset !important;
  }
}

</style>
