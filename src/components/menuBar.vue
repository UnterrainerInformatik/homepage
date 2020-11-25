<template>
  <v-container fluid>
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
    <router-view>Loading...</router-view>
    <FooterElement></FooterElement>
  </v-container>
</template>

<script lang="js">
import FooterElement from '@/components/footerElement.vue'
import MenuItem from '@/components/menuItem.vue'

export default {
  name: 'impress',

  components: {
    FooterElement,
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
  }
}
</script>
