import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const index = resolve => require(['@/views/index'], resolve)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Home',
    component: index
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  // 页面切换时，自定义title
  document.title = to.meta.title || 'mobile-project'
  next()
})

export default router
