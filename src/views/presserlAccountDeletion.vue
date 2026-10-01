<template>
  <div class="home">
    <Title
      :title="$t('presserlAccountDeletion.title')"
      :description="$t('presserlAccountDeletion.description')"
    ></Title>
    <v-layout class="justify-center mb-4">
      <v-card
        class="secondary pa-0 ma-0 pb-1"
        :width="vueUtils.adaptive(['95%', '85%', '75%', '65%', '55%'])"
      >
        <v-card-text
          class="text-left presserl-account-deletion"
          v-html="$t('presserlAccountDeletion.body')"
        ></v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import { singleton as vueUtils } from '@/utils/vueUtils'

export default {
  name: 'presserlAccountDeletion',

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

.presserl-account-deletion h3 {
  margin: 1.2em 0 0.4em;
}
</style>
