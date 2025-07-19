import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:mode',
      name: 'home',
      component: HomeView,
      props: (route) => ({
        mode: route.params.mode,
        page: route.query.page,
        date: route.query.date,
      }),
    },
  ],
})

export default router
