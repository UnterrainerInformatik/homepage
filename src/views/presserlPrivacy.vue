<template>
  <div class="home">
    <Title
      :title="$t('presserlPrivacy.title')"
      :description="$t('presserlPrivacy.description')"
    ></Title>
    <v-layout class="justify-center mb-4">
      <v-card
        class="secondary pa-0 ma-0 pb-1"
        :width="vueUtils.adaptive(['95%', '85%', '75%', '65%', '55%'])"
      >
        <v-card-text
          class="text-left presserl-privacy"
          v-html="$t('presserlPrivacy.body')"
        ></v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import { singleton as vueUtils } from '@/utils/vueUtils'

export default {
  name: 'presserlPrivacy',

  components: {
    Title
  },

  data: () => ({
    vueUtils
  })
}
</script>

<style lang="scss">
@import 'index.scss';

.presserl-privacy h3 {
  margin: 1.2em 0 0.4em;
}
</style>
