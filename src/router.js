import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/rent/MainPage.vue'
import WalkPage from '@/pages/walk/WalkPage.vue'
import NavComponent from '@/components/NavComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
import AdminPage from '@/admin/main/AdminPage.vue'
import LoginForm from '@/components/LoginForm.vue'



const routes = [
    {
        path: '/rent',
        components: {
            nav: NavComponent,
            content: MainPage,
            footer: FooterSection
        }
    },
    {
        path: '/',
        components: {
            nav: NavComponent,
            content: WalkPage,
            footer: FooterSection
        },
        alias: '/b'
    },
    {
        path: '/login',
        components: {
            nav: NavComponent,
            content: LoginForm,
            footer: FooterSection
        }
    },
    {
        path: '/admin',
        components: {
            content: AdminPage,
        }
    },
]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    // history: createWebHashHistory(),
    // mode: 'history',
    scrollBehavior(to) {

        if (to.hash) {
            return {
                el: to.hash,
                  behavior: 'smooth',
            }
        }
    },
    history: createWebHistory(),
    routes
})