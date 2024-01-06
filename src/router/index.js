import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ArticleVIew from '@/views/articles/ArticleView.vue'
import ArticleDetailView from '@/views/articles/ArticleDetailView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleVIew
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: ArticleDetailView,
      props: true
    },
    // redirect
    {
      path: '/all-articles',
      redirect: '/articles'
    },
    // Not Found page | 404
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
