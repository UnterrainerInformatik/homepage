<template>
  <v-footer padless color="transparent">
    <v-card flat tile width="100%" height="50px" class="text-center mt-8">
      <v-row align="center">
        <v-col>
          <v-card-text
            class="grey--text"
            v-html="`${$t('resource.footerCopyright')} ${new Date().getFullYear()}`"
          ></v-card-text>
        </v-col>
        <v-col>
          <a rel="me" href="https://det.social/@psilo" target="_blank">
            <v-btn x-small plain>Mastodon</v-btn>
          </a>
        </v-col>
      </v-row>
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
