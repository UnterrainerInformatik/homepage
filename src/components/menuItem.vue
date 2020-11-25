<template>
  <!-- Span is necessary since v-if or v-else element doesn't get parents classes. -->
  <span>
    <v-btn
      v-if="!item.subItems"
      :to="item.to"
      v-bind="$attrs"
      v-on="$listeners"
      active-class="v-btn--active"
      color="blue-grey lighten-5"
      :class="getActiveClass(item)"
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
      <template v-slot:activator="{ on, menuAttrs }">
        <v-btn
          v-bind="{ ...menuAttrs, ...$attrs }"
          v-on="{ ...on, ...$listeners }"
          active-class="v-btn--active"
          color="blue-grey lighten-5"
          :class="getActiveClass(item)"
        >
          <v-icon left v-if="item.icon">{{ item.icon }}</v-icon> {{ item.text }}
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list>
        <div v-for="(subItem, i) in item.subItems" :key="i">
          <v-list-item :to="subItem.to">
            <v-list-item-title
              ><v-icon v-if="subItem.icon" left>{{ subItem.icon }}</v-icon>
              {{ subItem.text }}</v-list-item-title
            >
          </v-list-item>
        </div>
      </v-list>
    </v-menu>
  </span>
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
    getActiveClass (item) {
      return 'elevation-0' +
      ((item.endsWith && this.$route.path.endsWith(item.endsWith)) ||
      (item.startsWith && this.$route.path.startsWith(item.startsWith))
        ? ' v-btn--active'
        : '')
    }
  }
}
</script>
