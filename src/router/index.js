import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { userAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
  ],
})
// Защита роутов
router.beforeEach((to) => {
  const auth = userAuthStore()
  // Если пользовать не авторизован и пытается зайти на каталог или корзину
  if ((to.path === '/cart' || to.path === '/catalog') && !auth.isAuthenticated) {
    return '/' // Перенаправить на главную
  }
})

export default router
