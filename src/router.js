import { createRouter, createWebHistory } from 'vue-router'

import LandingLayout from '@/pages/rent/LandingLayout.vue'
import AdminLayout from '@/admin/pages/AdminLayout.vue'

import LandingPage from "@/pages/rent/LandingPage.vue";
import OrdersPage from "@/admin/pages/OrdersPage.vue";
import AdminPage from '@/admin/pages/AdminPage.vue'
import CalendarPage from '@/admin/pages/CalendarPage.vue'
import LoginPage from '@/components/LoginPage.vue'

// import WalkPage from '@/pages/walk/WalkPage.vue'

import { UserRoles } from './types/Auth'


// const isAuthorized = localStorage.hasOwnProperty('token');

const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token')

const authGuard = function (to, from, next) {
    if (!isAuthorized) next({ name: 'Login' });
    else next()
}

const managerAuthGuard = function (to, from, next) {
    if (!isAuthorized) next({ name: 'Login' });
    else if (localStorage.getItem('userRole') !== JSON.stringify(UserRoles.Moderator)) next({ name: 'Home' });
    else next()

}


const routes = [
    {
        path: '/',
        name: 'LandingLayout',
        component: LandingLayout,
        children: [
            {
                path: '',
                components: {
                    content: LandingPage,
                },
            },
            {
                path: 'login',
                name: 'Login',
                components: {
                    content: LoginPage,
                },
            },

        ],
        beforeEnter: authGuard
    },
    {
        path: '/admin',
        name: 'AdminLayout',
        component: AdminLayout,
        children: [
            {
                path: '',
                name: 'AdminPage',
                components: {
                    content: AdminPage,
                },
            },
            {
                path: 'orders',
                name: 'OrdersPage',
                components: {
                    content: OrdersPage,
                },
            },
            {
                path: 'calendar',
                name: 'CalendarPage',
                components: {
                    content: CalendarPage,
                },
            },
        ],
        beforeEnter: managerAuthGuard
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
