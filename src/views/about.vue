<template>
  <div class="home">
    <Title
      :title="$t('about.title')"
      :description="$t('about.description')"
    ></Title>

    <PeopleStream :items="$t('about.members')"></PeopleStream>

    <div class="d-flex flex-wrap justify-center">
      <v-card class="mt-6" maxwidth="1200" min-width="400px" color="secondary">
        <v-card-text>{{ $t('about.contactPrelude') }}</v-card-text>
        <v-card-text>
          <v-btn
            small
            block
            color="primary"
            :href="`mailto:${$t('about.email')}?subject=${$t(
              'about.emailSubject'
            )}&body=${$t('about.emailBody')}`"
          >
            {{ $t('about.email') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
    <v-divider class="my-6"></v-divider>

  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import PeopleStream from '@/components/peopleStream.vue'

export default {
  name: 'about',

  components: {
    Title,
    PeopleStream
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

.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
