import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/loginpage.vue'
import Meeting from '../views/meetingpage.vue'


const routes = [{
    path: '/',
    name: 'LoginPage',
    component: Login
},

{
    path: '/main',
    name: 'MeetingPage',
    component: Meeting
},


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router