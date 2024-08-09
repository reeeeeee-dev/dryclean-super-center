export const mainPages = [
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
  }
]

export const servicesPages = [
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
  },
  {
    path: '/bedding',
    name: 'Bedding',
    component: () => import('@/views/BeddingView.vue')
  },
  {
    path: '/linens',
    name: 'Linens',
    component: () => import('@/views/LinensView.vue')
  },
  {
    path: '/shirts',
    name: 'Shirts',
    component: () => import('@/views/ShirtsView.vue')
  },
  {
    path: '/uniforms',
    name: 'Uniforms & Lab Coats',
    component: () => import('@/views/UniformsView.vue')
  }
]
