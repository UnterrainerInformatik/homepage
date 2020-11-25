<template>
  <div>
    <Title
      :title="$t('codeC.title')"
      :description="$t('codeC.description')"
    ></Title>
    <GitHubRepoStream gitHubUserName="UnterrainerInformatik" language="c#">
    </GitHubRepoStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import GitHubRepoStream from '@/components/gitHubRepoStream.vue'

export default {
  name: 'codeCs',

  components: {
    Title,
    GitHubRepoStream
  },

  data: () => ({
  }),

  watch: {},

  computed: {
  },

  methods: {
  }

}
</script>

<style lang="scss">
@import 'index.scss';

</style>
