<template>
  <div class="home">
    <Title
      :title="$t('codeJava.title')"
      :description="$t('codeJava.description')"
    ></Title>
    <GitHubRepoStream gitHubUserName="UnterrainerInformatik" language="java">
    </GitHubRepoStream>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import GitHubRepoStream from '@/components/gitHubRepoStream.vue'

export default {
  name: 'codeJava',

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

.v-card__text, .v-card__title {
  word-break: break-word;
  word-wrap: break-word;
}
</style>
