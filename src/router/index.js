import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/pages/Home.vue'
import From from '../components/pages/From.vue'
import taxIncluded from '../components/pages/taxIncluded.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'from',
      path: '/from',
      component: From
    },
    {
      name: 'tax',
      path: '/tax',
      component: taxIncluded
    }
  ]
})

export default router
