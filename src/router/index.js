import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthAPI from '@/api/AuthAPI'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/perfil',
      name: 'profile-layout',
      component: () => import('../views/profile/ProfileLayoutView.vue'),
      meta: { 
        title: 'Perfil',
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('../views/profile/ProfileView.vue'),
          meta: { 
            title: 'Perfil',
          },
        },
        {
          path: 'editar',
          name: 'edit-profile',
          component: () => import('../views/profile/EditProfileView.vue'),
        }
      ],
    },
    {
      path: '/mis-lecturas',
      name: 'my-readings',
      component: () => import('../views/readings/MyReadingsLayoutView.vue'),
      meta: { 
        title: 'Mis lecturas',
        requiresAuth: true,
      },
    },
    {
      path: '/agregar-publicacion',
      name: 'add-posts',
      component: () => import('../views/posts/AddPostsLayoutView.vue'),
      meta: { 
        title: 'Agregar publicación',
        requiresAuth: true,
      },
    },
    {
      path: '/busqueda',
      name: 'search',
      component: () => import('../views/search/SearchLayoutView.vue'),
      meta: {
        title: 'Buscar',
        requiresAuth: true,
      },

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
          meta: {
            title: 'Registro',
          },
        },
        {
          path: 'confirmar-cuenta/:token',
          name: 'confirm-account',
          component: () => import('../views/auth/ComfirmAccountView.vue'),
          meta: {
            title: 'Confirmar cuenta',
          },
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
          meta: {
            title: 'Iniciar sesión',
          },
        },
        {
          path: 'olvide-password',
          name: 'forgot-password',
          component: () => import('../views/auth/ForgotPasswordView.vue'),
          meta: {
            title: 'recuperar contraseña',
          },
        },
        {
          path: 'olvide-password/:token',
          name: 'new-password',
          component: () => import('../views/auth/NewPasswordView.vue'),
          meta: {
            title: 'Nueva contraseña',
          },
        }
      ]
    },
  ]
})

routes.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  if (requiresAuth) {
    try {
      await AuthAPI.auth()
      next()
    } catch (error) {
      console.log(error.response.data.msg)
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default routes
