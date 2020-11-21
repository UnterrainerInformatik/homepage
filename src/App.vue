<template>
  <div id="main">
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row class="ma-0 pa-0">
            <v-col class="ma-0 pa-0">
              <v-container class="ma-0 pa-0">
                <img
                  class="ma-0 pa-0 mt-7"
                  width="400"
                  alt="unterrainer-informatik-logo"
                  src="@/assets/logo.png"
              /></v-container>
            </v-col>
            <v-col class="ma-0 pa-0">
              <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0 text-right">
                  <span v-html="$t('resource.linkBarUInf32x32')"></span>
                </v-col>
              </v-row>
              <v-row class="ma-0 pa-0 text-right">
                <v-col class="ma-0 pa-0">
                  <v-btn
                    fab
                    x-small
                    @click="setLanguage('en')"
                    :class="$i18n.locale == 'en' ? 'secondary' : ''"
                    ><img
                      src="@/assets/flag-ukus.png"
                      alt="en"
                      class="ma-0 pa-0"
                    />
                  </v-btn>
                  <v-btn
                    fab
                    x-small
                    @click="setLanguage('de')"
                    :class="
                      'mr-2 ml-4' + ($i18n.locale == ' de' ? 'secondary' : '')
                    "
                    ><img
                      src="@/assets/flag-atde.png"
                      alt="de"
                      class="ma-0 pa-0"
                    />
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card
            class="ma-0 pa-0 mt-3 mb-5 elevation-2"
            dense
            v-cloak
            color="secondary"
          >
            <v-layout>
              <v-flex>
                <MenuItem
                  class="mr-2"
                  :item="{
                    text: $t('global.tab.home'),
                    to: '/app/home',
                    icon: 'home'
                  }"
                ></MenuItem>
                <MenuItem
                  class="mr-2"
                  :item="{
                    text: $t('global.tab.throbax.title'),
                    startsWith: '/app/throbax/',
                    icon: 'videogame_asset',
                    subItems: [
                      {
                        text: $t('global.tab.throbax.index'),
                        to: '/app/throbax/main',
                        icon: 'layers'
                      },
                      {
                        text: $t('global.tab.throbax.screenShots'),
                        to: '/app/throbax/screenshots',
                        icon: 'insert_photo'
                      }
                    ]
                  }"
                ></MenuItem>
                <MenuItem
                  class="mr-2"
                  :item="{
                    text: $t('global.tab.code.title'),
                    startsWith: '/app/code/',
                    icon: 'code',
                    subItems: [
                      {
                        text: $t('global.tab.code.explanation'),
                        to: '/app/code/explanation',
                        icon: 'house'
                      },
                      {
                        text: $t('global.tab.code.cs'),
                        to: '/app/code/cs',
                        icon: 'closed_caption'
                      },
                      {
                        text: $t('global.tab.code.java'),
                        to: '/app/code/java',
                        icon: 'free_breakfast'
                      }
                    ]
                  }"
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
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="js">
import { mapGetters, mapActions } from 'vuex'
import MenuItem from '@/components/menuItem.vue'

export default {
  name: 'Main',

  components: {
    MenuItem
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    }
  }),

  computed: {
    ...mapGetters({
      lastMdAndUp: 'lastMdAndUp'
    }),
    ...mapGetters('gui/tooltips', {
      tooltips: 'tooltips',
      openDelay: 'openDelay'
    })
  },

  methods: {
    setLanguage (language) {
      this.$i18n.locale = language
    },
    goto (destination) {
      if (this.$router.currentRoute.path !== destination) {
        this.$router.push(destination)
      }
    },
    ...mapActions('gui', {
      toggleDrawerVisible: 'toggleDrawerVisible'
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
