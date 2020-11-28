<template>
  <div v-if="content" class="d-flex flex-wrap justify-center">
    <v-card
      class="ma-2 flex-grow-1 flex-shrink-1 d-flex flex-column grey lighten-4"
    >
      <v-card-text>
        <Prism class="gitcode" :language="lang">
          {{ content }}
        </Prism>
      </v-card-text>
    </v-card>
  </div>
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
  name: 'gitCodePage',

  props: {
    lang: {},
    file: {},
    project: {},
    branch: {},
    user: {}
  },

  components: {
    Prism
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
    this.getFile().then((result) => {
      result.text().then((t) => {
        this.content = t
      })
    })
  }
}
</script>

<style lang="scss">
// Theme goes here:
@import 'prismjs/themes/prism-okaidia';
.gitcode {
  all: revert import !important;
  white-space: pre-wrap !important;
  // line-height: 50%;
  * {
    all: revert;
    word-break: break-all !important;
    white-space: pre-wrap !important;
  }

  pre {
    background-color: #505050;
  }
  .token.operator {
    background-color: unset !important;
  }
}

</style>
