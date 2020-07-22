import Vue from 'vue'
import VueRouter from 'vue-router'
import Regist from '../views/Regist'
import Log from '../views/Log'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  }
]

const router = new VueRouter({
  routes
})

export default router
