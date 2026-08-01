import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import AboutView from '@/views/aboutUs/index.vue'
import FacilitiesView from '@/views/facilities/index.vue'
import RoomsView from '@/views/rooms/index.vue'

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
    },
  ],
})

export default router
