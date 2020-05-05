import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Timeline from '../views/Timeline.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: SignIn
      }
    ]
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
