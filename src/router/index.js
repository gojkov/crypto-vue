import Vue from 'vue'
import Router from 'vue-router'
import Crypto from '@/components/Crypto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Crypto',
      component: Crypto
    }
  ]
})
