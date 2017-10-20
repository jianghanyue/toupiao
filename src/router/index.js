import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Add from '@/components/Add.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
