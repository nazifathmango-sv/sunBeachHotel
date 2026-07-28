import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import HomeView from '@/views/home/index.vue'
import AboutView from '@/views/aboutUs/index.vue'
import FacilitiesView from '@/views/facilities/index.vue'
import RoomsView from '@/views/rooms/index.vue'
import LoginView from '@/views/login/index.vue'
import RegisterView from '@/views/register/index.vue'

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject,
    )
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutView,
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: FacilitiesView,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

  ],
})

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  const redirectPath = to.query.redirect?.toString() || '/'
  const redirectQuery = to.query.roomId ? { roomId: to.query.roomId.toString() } : {}

  if ((to.name === 'login' || to.name === 'register') && user) {
    next({ path: redirectPath, query: redirectQuery })
    return
  }

  if (requiresAuth && !user) {
    next({
      name: 'login',
      query: {
        redirect: to.path,
        ...(to.query.roomId ? { roomId: to.query.roomId.toString() } : {}),
      },
    })
    return
  }

  next()
})

export default router
