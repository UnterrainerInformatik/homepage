<template>
  <v-footer padless>
    <v-card flat tile width="100%" height="50px" class="text-center mt-8">
      <v-card-text
        class="grey--text"
        v-html="`${$t('resource.footerCopyright')} ${new Date().getFullYear()}`"
      ></v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="js">

export default {
  name: 'footerElement',

  props: {
  },

  data: () => ({
  }),

  computed: {
  },

  methods: {
  }
}
</script>
