import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import From from '../pages/From.vue'

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
  ]
})

export default router
