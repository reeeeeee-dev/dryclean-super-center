import { createRouter, createWebHistory } from 'vue-router'
import { mainPages, servicesPages } from './routes'
import HomeView from '@/views/HomeView.vue'
import BlogPostView from '@/views/BlogPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...mainPages,
    ...servicesPages,
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/blog/:postName',
      component: BlogPostView,
      props: true
    }
  ]
})

export default router
