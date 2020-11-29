<template>
  <div class="home">
    <Title
      :title="$t(`cheatSheets.title`)"
      :description="$t(`cheatSheets.description`)"
    ></Title>
    <Title
      v-if="name"
      :key="name"
      sub="true"
      :title="$t(`cheatSheets.sheets.${name}.title`)"
      :description="$t(`cheatSheets.sheets.${name}.description`)"
    ></Title>
    <GitRawFile
      v-if="link"
      :key="link"
      user="UnterrainerInformatik"
      branch="master"
      project="cheatsheets"
      :file="link"
    >
    </GitRawFile>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import GitRawFile from '@/components/gitRawFile.vue'

export default {
  name: 'gitCheatSheet',

  components: {
    Title,
    GitRawFile
  },

  data: () => ({
    name: '',
    link: ''
  }),

  watch: {},

  computed: {
  },

  methods: {
  },

  mounted () {
    this.name = this.$route.query.p
    this.link = this.$route.query.l
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
