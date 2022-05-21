import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/loginpage.vue'
import Register from '../views/registerpage.vue'


const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: Register
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
