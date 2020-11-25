<template>
  <div class="home">
    <Title
      :title="$t('main.title')"
      :description="$t('main.description')"
    ></Title>
    <ArticleStream :items="$t('main.servicesBullets')"> </ArticleStream>
  </div>
</template>

<script type="js">
import Title from '@/components/title.vue'
import ArticleStream from '@/components/articleStream.vue'

export default {
  name: 'home',

  components: {
    Title,
    ArticleStream
  },

  data: () => ({
    localeBackingField: '',
    raw: {},
    countAll: 0,
    loading: true
  }),

  watch: {},

  computed: {
    locale: {
      get () {
        return this.$i18n.locale
      },
      set (value) {
        this.localeBackingField = value
      }
    }
  },

  methods: {
    getListFor (section) {
      return this.$i18n.messages[this.$i18n.locale].page.landingPage.state[
        section
      ]
    }
  },

  mounted () {
    this.locale = this.$i18n.locale
  }
}
</script>

<style lang="scss">
@import 'index.scss';

</style>
