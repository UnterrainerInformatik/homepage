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
              <v-card
                class="ma-0 pa-0 mt-3 mb-7 elevation-2"
                dense
                v-cloak
                color="secondary"
              >
                <v-layout>
                  <v-flex>
                    <MenuItem
                      v-for="(item, i) in menuItems"
                      :key="i"
                      class="mr-2"
                      :item="item"
                    ></MenuItem>
                  </v-flex>
                  <MenuItem
                    class="justify-end text-right"
                    :item="{
                      text: $t('global.tab.about'),
                      to: '/app/about',
                      icon: 'help_outline'
                    }"
                  ></MenuItem>
                </v-layout>
              </v-card>
              <router-view>Loading...</router-view>
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
import HeaderElement from '@/components/headerElement.vue'
import FooterElement from '@/components/footerElement.vue'
import MenuItem from '@/components/menuItem.vue'

export default {
  name: 'Main',

  components: {
    HeaderElement,
    FooterElement,
    MenuItem
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    menuItems: [],
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

    this.menuItems.push({
      text: this.$t('global.tab.home'),
      to: '/app/home',
      icon: 'home'
    })
    this.menuItems.push({
      text: this.$t('global.tab.throbax.title'),
      startsWith: '/app/throbax/',
      icon: 'videogame_asset',
      subItems: [
        {
          text: this.$t('global.tab.throbax.index'),
          to: '/app/throbax/main',
          icon: 'layers'
        },
        {
          text: this.$t('global.tab.throbax.screenShots'),
          to: '/app/throbax/screenshots',
          icon: 'insert_photo'
        }
      ]
    })
    this.menuItems.push({
      text: this.$t('global.tab.code.title'),
      startsWith: '/app/code/',
      icon: 'code',
      subItems: [
        {
          text: this.$t('global.tab.code.explanation'),
          to: '/app/code/explanation',
          icon: 'house'
        },
        {
          text: this.$t('global.tab.code.coding'),
          to: '/app/code/coding',
          icon: 'accessibility'
        },
        {
          text: this.$t('global.tab.code.git'),
          to: '/app/code/git',
          icon: 'keyboard'
        },
        {
          text: this.$t('global.tab.code.cs'),
          to: '/app/code/cs',
          icon: 'closed_caption'
        },
        {
          text: this.$t('global.tab.code.java'),
          to: '/app/code/java',
          icon: 'free_breakfast'
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
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

.v-navigation-drawer {
  width: $nav_menu_width;
  max-width: calc(100vw - #{$nav_menu_width});
}

.nav-drawer-white {
  color: white;
}
</style>
