<template>
  <span v-if="content">
    <Markdown
      v-if="
        file.toLowerCase().endsWith('.md') ||
        (language &&
          (language.toLowerCase() === 'md' ||
            language.toLowerCase() === 'markdown'))
      "
      :content="content"
    />
    <Code v-else :content="content" :language="language" />
  </span>
</template>

<script lang="js">
import Code from '@/components/code.vue'
import Markdown from '@/components/markdown.vue'

export default {
  name: 'gitRawFile',

  props: {
    file: {},
    project: {},
    branch: {},
    user: {},
    language: {}
  },

  components: {
    Code,
    Markdown
  },

  data: () => ({
    content: undefined
  }),

  computed: {
  },

  methods: {
    async getFile () {
      return fetch(`https://raw.githubusercontent.com/${this.user}/${this.project}/${this.branch || 'master'}/${this.file || 'README.md'}`,
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
