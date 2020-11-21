import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'md'
  },
  rtl: false,
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#0277BD',
        secondary: '#E0E0E0',
        accent: '#00897B',
        error: '#e91e63',
        warning: '#ff5722',
        info: '#ffc107',
        success: '#8bc34a'
      }
    }
  }
})
