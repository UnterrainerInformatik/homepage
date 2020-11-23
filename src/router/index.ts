import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/app/home'
  },
  {
    path: '/app/home',
    alias: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/app/throbax/main',
    name: 'throbax_main',
    component: () => import('../views/throbaxMain.vue')
  },
  {
    path: '/app/throbax/screenshots',
    name: 'throbax_screenshots',
    component: () => import('../views/throbaxScreenshots.vue')
  },
  {
    path: '/app/code/explanation',
    name: 'code_explanation',
    component: () => import('../views/codeExplanation.vue')
  },
  {
    path: '/app/code/git',
    name: 'git_cheat_sheet',
    component: () => import('../views/gitCheatSheet.vue')
  },
  {
    path: '/app/code/coding',
    name: 'coding',
    component: () => import('../views/coding.vue')
  },
  {
    path: '/app/code/cs',
    name: 'code_cs',
    component: () => import('../views/codeCs.vue')
  },
  {
    path: '/app/code/java',
    name: 'code_java',
    component: () => import('../views/codeJava.vue')
  },
  {
    path: '/app/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/*',
    component: () => import('../views/page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
