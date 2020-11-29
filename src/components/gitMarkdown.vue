<template>
  <Markdown :content="content" />
</template>

<script lang="js">
import Markdown from '@/components/markdown.vue'

export default {
  name: 'gitMarkdown',

  props: {
    file: {},
    project: {},
    branch: {},
    user: {}
  },

  components: {
    Markdown
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
