import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import BaseLayout from '../views/BaseLayout.vue'
import Posts from '../views/Posts.vue'
import MyPage from '../views/MyPage.vue'

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
    path: '',
    // name: 'timeline',
    component: BaseLayout,
    children: [
      {
        path: 'posts',
        name: 'posts',
        component: Posts
      },
      {
        path: 'my-page',
        name: 'my-page',
        component: MyPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
