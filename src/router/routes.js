export let routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  { 
    path: '/:path(.*)',
    component: () => import('@/views/NotFound.vue')
  }
]
