import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Main pages
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/locations',
      name: 'Locations',
      component: () => import('@/views/LocationsView.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/ServicesView.vue')
    },
    {
      path: '/legal',
      name: 'Legal',
      component: () => import('@/views/LegalView.vue')
    },

    //Content pages
    {
      path: '/dry-cleaning',
      name: 'Dry Cleaning',
      component: () => import('@/views/DryCleaningView.vue')
    },
    {
      path: '/tailoring',
      name: 'Tailoring',
      component: () => import('@/views/TailoringView.vue')
    },
    {
      path: '/laundry',
      name: 'Laundry',
      component: () => import('@/views/LaundryView.vue')
    },
    {
      path: '/formalwear',
      name: 'Wedding & Formalwear',
      component: () => import('@/views/FormalwearView.vue')
    }
  ]
})

export default router
