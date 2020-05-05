import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
