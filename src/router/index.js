import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"

Vue.use(VueRouter)

function loadViews(views) {
  return () => import(`@/views/${views}.vue`);
}

function loadLayout(layout) {
  return () => import(`@/layouts/${layout}.vue`);
}

const routes = [
  {
    path: '/login',
    component: loadLayout("AuthLayout"),
    children: [
      {
        path: '',
        name: 'login',
        component: loadViews('Login')
      }
    ]
  },
  {
    path: '/',
    component: loadLayout("HomeLayout"),
    redirect: "/dashboard",
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: loadViews('Dashboard')
      },
      {
        path: 'report',
        name: 'report',
        component: loadViews('Report')
      },
      {
        path: 'fuel-price',
        name: 'fuelPrice',
        component: loadViews('FuelPrice')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let withoutAuthRoutes=[
  "/login",
]

// router.beforeEach((to,from,next)=>{
//   if(withoutAuthRoutes.indexOf(to.path) == -1 && !store.getters["loginInfo/isLogged"]){
//     next("/login")
//   }else if(withoutAuthRoutes.indexOf(to.path) >= 0 && store.getters["loginInfo/isLogged"]){
//     next("/")
//   }
//   else{
//     next()
//   }
// });

export default router
