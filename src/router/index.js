// Router define
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  // {
  //   name: 'home',
  //   path: '/',
  //   component: () => import('@/views/Home.vue')
  // },
  {
    name: 'wedding-invitation',
    path: '/wedding-invitation',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
