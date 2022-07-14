import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/rent/MainPage.vue'
import WalkPage from '@/pages/walk/WalkPage.vue'
import NavComponent from '@/components/NavComponent.vue'
import FooterSection from '@/components/FooterSection.vue'


const routes = [
    {
        path: '/rent',
        components: {
            content: MainPage,
            nav: NavComponent,
            footer: FooterSection
        }
    },
    {
        path: '/',
        components: {
            content: WalkPage,
            nav: NavComponent,
            footer: FooterSection
        },
        alias: '/b'
    }
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