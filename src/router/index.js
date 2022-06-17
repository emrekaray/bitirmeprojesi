import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase'
import ToplantiEkle from '../views/toplantiEkle.vue'
import ToplantiGuncelle from '../views/toplantiGuncelle.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        requiresAuth: true
    }
},
{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/toplantiEkle',
    name: 'ToplantiEkle',
    component: ToplantiEkle
},
{
    path: '/toplantiGuncelle/:id',
    name: 'ToplantiGuncelle',
    component: ToplantiGuncelle,
    props: true
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
    }

    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
    }

    next();
})

export default router