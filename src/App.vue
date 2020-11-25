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
            <MenuBar></MenuBar>
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

export default {
  name: 'App',

  components: {
    MenuBar,
    HeaderElement
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

code {
  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
    'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
    monospace !important;
  color: #202070 !important;
  background-color: #d1d1d1 !important;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  padding-left: 2px !important;
  padding-right: 2px !important;
  margin: 0px !important;
  font-size: 75% !important;
  text-align: left !important;
  text-justify: none !important;
  white-space: pre-wrap;
  margin: 0px !important;
  padding: 0px !important;
}
pre {
  text-align: left !important;
  white-space: pre-wrap;
  margin: 0px !important;
  padding: 0px !important;
}
</style>
