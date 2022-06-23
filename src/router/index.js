import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatOda from '../views/ChatOda.vue'
import anasayfa from '../views/anaSayfa.vue'
import { auth } from '../firebase/config';
import ToplantiEkle from '../views/toplantiEkle.vue'
import ToplantiGuncelle from '../views/toplantiGuncelle.vue'
import admin from '../views/adminGiris.vue'
import adminHome from '../views/adminHome.vue'


const authKontrol = (to, from, next) => {

    const kullanici = auth.currentUser;

    if (!kullanici) {
        next({ name: 'Home' })
    } else {
        next()
    }

}


const chatKontrol = (to, from, next) => {

    const kullanici = auth.currentUser;

    if (kullanici) {
        next({ name: 'ChatOda' })
    } else {
        next()
    }

}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
},
{
    path: '/chat',
    name: 'ChatOda',
    component: ChatOda,
    beforeEnter: authKontrol
},
{
    path: '/main',
    name: 'anaSayfa',
    component: anasayfa,
    beforeEnter: authKontrol
},
{
    path: '/toplantiEkle',
    name: 'ToplantiEkle',
    component: ToplantiEkle,
    beforeEnter: authKontrol
},
{
    path: '/toplantiGuncelle/:id',
    name: 'ToplantiGuncelle',
    component: ToplantiGuncelle,
    props: true,
    beforeEnter: authKontrol

},
{
    path: '/admin',
    name: 'adminPanel',
    component: admin
},
{
    path: '/adminHome',
    name: 'adminhome',
    component: adminHome,
},


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router