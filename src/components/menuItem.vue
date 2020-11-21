<template>
  <v-btn
    v-if="!item.subItems"
    :to="item.to"
    class="elevation-0"
    active-class="v-btn--active"
    color="grey lighten-2"
    :class="
      (item.endsWith && $route.path.endsWith(item.endsWith)) ||
      (item.startsWith && $route.path.startsWith(item.startsWith))
        ? ' v-btn--active'
        : ''
    "
  >
    <v-icon left v-if="item.icon">{{ item.icon }}</v-icon> {{ item.text }}
  </v-btn>
  <v-menu
    v-else
    offset-y
    v-model="navMenu"
    transition="slide-y-transition"
    z-index="900"
  >
    <template v-slot:activator="{ on: menu, attrs }">
      <v-btn
        class="elevation-0"
        v-bind="attrs"
        v-on="menu"
        active-class="v-btn--active"
        color="grey lighten-2"
        :class="
            (item.endsWith && $route.path.endsWith(item.endsWith)) ||
          (item.startsWith && $route.path.startsWith(item.startsWith))
            ? ' v-btn--active'
            : ''
        "
      >
        <v-icon left v-if="item.icon">{{ item.icon }}</v-icon> {{ item.text }}
        <v-icon>expand_more</v-icon>
      </v-btn>
    </template>
    <v-list>
      <div v-for="(subItem, i) in item.subItems" :key="i">
        <v-list-item :to="subItem.to">
          <v-list-item-title>{{ subItem.text }} <v-icon v-if="subItem.icon" right>{{ subItem.icon }}</v-icon></v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script lang="js">

export default {
  name: 'menuItem',

  props: {
    item: {}
  },

  data: () => ({
    navMenu: false
  }),

  computed: {
  },

  methods: {
  }
}
</script>
