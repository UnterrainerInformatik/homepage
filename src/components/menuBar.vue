<template>
  <v-card
    class="ma-0 pa-0 mt-3 mb-7 elevation-2"
    dense
    v-cloak
    color="blue-grey lighten-5"
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
</template>

<script lang="js">
import MenuItem from '@/components/menuItem.vue'

export default {
  name: 'impress',

  components: {
    MenuItem
  },

  props: {
  },

  data: () => ({
    menuItems: []
  }),

  computed: {
  },

  methods: {
  },

  mounted () {
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
    this.menuItems.push({
      text: this.$t('global.tab.cheatSheets'),
      startsWith: '/app/cheatSheets',
      icon: 'emoji_objects',
      subItems: [
        {
          text: this.$t('cheatSheets.sheets.docker.title'),
          to: '/app/cheatSheets?p=docker&l=docker.md',
          endsWith: '/cheatSheets?p=docker&l=docker.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.gpg.title'),
          to: '/app/cheatSheets?p=gpg&l=gpg_cheat_sheet.md',
          endsWith: '/cheatSheets?p=gpg&l=gpg_cheat_sheet.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.hibernation.title'),
          to: '/app/cheatSheets?p=hibernation&l=scheduled_hibernation.md',
          endsWith: '/cheatSheets?p=hibernation&l=scheduled_hibernation.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.keycloak.title'),
          to: '/app/cheatSheets?p=hibernation&l=keycloak_update_from_pre_13.md',
          endsWith: '/cheatSheets?p=hibernation&l=keycloak_update_from_pre_13.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.letsEncrypt.title'),
          to: '/app/cheatSheets?p=letsEncrypt&l=letsencrypt_cheat_sheet.md',
          endsWith: '/cheatSheets?p=letsEncrypt&l=letsencrypt_cheat_sheet.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.linux.title'),
          to: '/app/cheatSheets?p=linux&l=linux_cheat_sheet.md',
          endsWith: '/cheatSheets?p=linux&l=linux_cheat_sheet.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.ssh.title'),
          to: '/app/cheatSheets?p=ssh&l=ssh_cheat_sheet.md',
          endsWith: '/cheatSheets?p=ssh&l=ssh_cheat_sheet.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.ssl.title'),
          to: '/app/cheatSheets?p=ssl&l=ssl_cheat_sheet.md',
          endsWith: '/cheatSheets?p=ssl&l=ssl_cheat_sheet.md',
          icon: 'featured_play_list'
        },
        {
          text: this.$t('cheatSheets.sheets.vnc.title'),
          to: '/app/cheatSheets?p=vnc&l=vnc_cheat_sheet.md',
          endsWith: '/cheatSheets?p=vnc&l=vnc_cheat_sheet.md',
          icon: 'featured_play_list'
        }
      ]
    })
  }
}
</script>
