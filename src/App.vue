<template>
  <div id="main">
    <v-app>
      <v-main>
        <v-container fluid>
          <HeaderElement></HeaderElement>
        </v-container>
        <v-row>
          <v-col
            class="hidden-sm-and-down"
            :cols="vueUtils.adaptive([0, 0, 1, 2, 3])"
          >
          </v-col>
          <v-col :cols="vueUtils.adaptive([12, 12, 10, 8, 6])">
            <v-container fluid>
              <MenuBar></MenuBar>
              <router-view :key="$route.fullPath">Loading...</router-view>
              <FooterElement></FooterElement>
            </v-container>
          </v-col>
          <v-col
            class="hidden-sm-and-down"
            :cols="vueUtils.adaptive([0, 0, 1, 2, 3])"
          >
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="js">
import vueUtils from '@/utils/vueUtils'
import { mapGetters } from 'vuex'
import MenuBar from '@/components/menuBar.vue'
import HeaderElement from '@/components/headerElement.vue'
import FooterElement from '@/components/footerElement.vue'

export default {
  name: 'App',

  components: {
    MenuBar,
    HeaderElement,
    FooterElement
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    vueUtils: vueUtils
  }),

  computed: {
    ...mapGetters('gui/tooltips', {
      tooltips: 'tooltips',
      openDelay: 'openDelay'
    })
  },

  methods: {
  },

  mounted () {
    let lang = localStorage.getItem('language')
    if (lang == null || lang === undefined) {
      lang = 'en'
    }
    this.$i18n.locale = lang
  }
}
</script>

<style lang="scss">
@import 'styles/index.scss';

.v-application {
  font-family: Arial, Helvetica, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: Arial, Helvetica, sans-serif !important;
  }
}

.v-app {
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.v-card__text,
.v-card__title {
  word-break: break-word;
  word-wrap: break-word;
}
</style>
