import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/perfil',
      name: 'profile',
      component: () => import('../views/profile/ProfileLayoutView.vue')
    },
    {
      path: '/mis-lecturas',
      name: 'my-readings',
      component: () => import('../views/readings/MyReadingsLayoutView.vue')
    },
    {
      path: '/agregar-publicacion',
      name: 'add-posts',
      component: () => import('../views/posts/AddPostsLayoutView.vue')
    },
    {
      path: '/buscaqueda',
      name: 'search',
      component: () => import('../views/search/SearchLayoutView.vue')
    }
  ]
})

export default router
