import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
  ]
})

export default router
