import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

export const routes = [
  {
    path: '/',
    name: '首頁',
    component: HomeView
  },
  {
    path: '/about',
    name: '關於我',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/project',
    name: '作品集',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/connection',
    name: '聯絡我',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Connection.vue')
  },
  {//路徑如果沒有被引用到的話就會被倒到這邊 
    path:'/:pathMatch(.*)*',name:'404',component:NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to, from, next) => {//換頁時一直保持置頂
	window.scrollTo(0, 0);
});

export default router
