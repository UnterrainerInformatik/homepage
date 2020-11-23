<template>
  <v-row class="ma-0 pa-0">
    <v-col class="ma-0 pa-0">
      <v-container class="ma-0 pa-0">
        <img
          class="ma-0 pa-0 mt-7"
          width="400"
          alt="unterrainer-informatik-logo"
          src="@/assets/logo.png"
      /></v-container>
    </v-col>
    <v-col class="ma-0 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0 text-right">
          <span v-html="$t('resource.linkBarUInf32x32')"></span>
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0 text-right">
        <v-col class="ma-0 pa-0">
          <v-btn
            fab
            x-small
            @click="setLanguage('en')"
            :class="$i18n.locale == 'en' ? ' secondary' : ''"
            ><img src="@/assets/flag-ukus.png" alt="en" class="ma-0 pa-0" />
          </v-btn>
          <v-btn
            fab
            x-small
            @click="setLanguage('de')"
            :class="'mr-2 ml-4' + ($i18n.locale == 'de' ? ' secondary' : '')"
            ><img src="@/assets/flag-atde.png" alt="de" class="ma-0 pa-0" />
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="js">

export default {
  name: 'header',

  props: {
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
    setLanguage (language) {
      this.$i18n.locale = language
      localStorage.setItem('language', language)
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';

.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
