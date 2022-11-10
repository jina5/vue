import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '../views/HelloView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'
Vue.use(VueRouter)
const isLoggedIn = true
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    //lazy-loading : 첫로딩에 렌더링 하지 않고 해당 라우터가 동작할 때 컴포넌트를 렌더링 한다.
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name : 'hello',
    component : HelloView
  },
  {
    path: '/login',
    name : 'login',
    component : LoginView,
    beforeEnter(to,from,next){
      if (isLoggedIn ===true){
        console.log('이미 로그인 됨')
        next({name :'home'})
      } else {
        next()
      }
    }
  },
  {
    path: '/404',
    name : 'NotFound404',
    component : NotFound404
  },
  {
    path: '/dog/:breed',
    name : 'dog',
    component : DogView
  },
  {
    path:'*',
    redirect : '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next) => {
//   const isLoggedIn = false
//   const authPages = ['hello']
//   const isAuthRequired = authPages.includes(to.name)
//   if (isAuthRequired && !isLoggedIn){ //로그인이 필요한 페이지 & 로그인 되어있지 않음
//     console.log('login으로 이동')
//     next({name : 'login'})
//   } else {
//     console.log('to로 이동')
//     next()
//   }
// })



export default router
