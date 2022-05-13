import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/loginpage.vue'


const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
