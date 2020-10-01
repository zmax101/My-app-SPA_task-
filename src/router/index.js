import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/create.vue')
    },
    {
      path: '/task/:id',
      name: 'task',
      component: () => import('@/views/task.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('@/views/info.vue')
    }  
  ]
})

export default router
