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
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthLayout.vue'),
      children: [
        {
          path: 'registro',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue'),
        },
        {
          path: 'confirmar-cuenta/:token',
          name: 'confirm-account',
          component: () => import('../views/auth/ComfirmAccountView.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
        {
          path: 'olvide-password',
          name: 'forgot-password',
          component: () => import('../views/auth/ForgotPasswordView.vue'),
        },
        {
          path: 'olvide-password/:token',
          name: 'new-password',
          component: () => import('../views/auth/NewPasswordView.vue'),
        }
      ]
    },
  ]
})

export default router
