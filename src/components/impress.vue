<template>
  <div>
    <v-layout class="justify-center mb-4">
      <v-card
        class="secondary pa-0 ma-0 pb-1"
        :width="vueUtils.adaptive(['90%', '70%', '60%', '50%', '40%'])"
      >
        <v-card-title
          class="secondary darken-1 justify-center text-center mb-5"
          v-html="$t('about.impressumTitle')"
        ></v-card-title>
        <v-card-text
          class="justify-justify text-left"
          v-html="$t('about.impressum')"
        ></v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script lang="js">
import vueUtils from '@/utils/vueUtils'
export default {
  name: 'impress',

  props: {
  },

  data: () => ({
    vueUtils
  }),

  computed: {
  },

  methods: {
  }
}
</script>
