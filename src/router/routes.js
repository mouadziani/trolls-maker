export let routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
  },
  { 
    path: '/:path(.*)',
    component: () => import('@/views/NotFound.vue')
  }
]
