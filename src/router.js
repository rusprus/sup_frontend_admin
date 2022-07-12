import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/rent/MainPage.vue'
import WalkPage from '@/pages/walk/WalkPage.vue'


const routes = [
    { path: '/rent', component: MainPage },
    { path: '/', component: WalkPage }
]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})