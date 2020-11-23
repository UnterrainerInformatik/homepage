<template>
  <div class="home">
    <Title
      :title="$t('about.title')"
      :description="$t('about.description')"
    ></Title>

    <PeopleStream :items="$t('about.members')"></PeopleStream>

    <div class="d-flex flex-wrap justify-center">
      <v-card class="mt-6" max-width="1200" min-width="400px" color="secondary">
        <v-card-text>{{ $t('about.contactPrelude') }}</v-card-text>
        <v-card-text>
          <v-btn
            style="cursor: url(/cursor_mail.png), auto"
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
    <Title
      :title="$t('about.resourcesTitle')"
      sub="true"
    ></Title>
    <ArticleStream :items="$t('about.resources')"></ArticleStream>
    <v-divider class="my-6"></v-divider>
    <Impress></Impress>
  </div>
</template>

<script lang="js">
import Title from '@/components/title.vue'
import Impress from '@/components/impress.vue'
import ArticleStream from '@/components/articleStream.vue'
import PeopleStream from '@/components/peopleStream.vue'

export default {
  name: 'about',

  components: {
    Title,
    PeopleStream,
    ArticleStream,
    Impress
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
  word-break: break-word;
  word-wrap: break-word;
}
</style>
