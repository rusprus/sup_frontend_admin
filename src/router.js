import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/rent/MainPage.vue'
import WalkPage from '@/pages/walk/WalkPage.vue'
import NavComponent from '@/components/NavComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
import AdminPage from '@/admin/main/AdminPage.vue'
import LoginForm from '@/components/LoginForm.vue'
import CalendarPage from '@/admin/main/CalendarPage.vue'
import TopNav from '@/admin/components/TopNav.vue'
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
        path: '/rent',
        name: 'Rent',
        components: {
            nav: NavComponent,
            content: MainPage,
            footer: FooterSection
        },
        beforeEnter: authGuard

    },
    {
        path: '/',
        name: 'Home',
        components: {
            nav: NavComponent,
            content: WalkPage,
            footer: FooterSection
        },
        alias: '/b',
        // beforeEnter: authGuard
    },
    {
        path: '/login',
        name: 'Login',
        components: {
            nav: NavComponent,
            content: LoginForm,
            footer: FooterSection
        },
    },
    {
        path: '/admin',
        name: 'Admin',
        components: {
                // nav: TopNav,
                content: AdminPage,
        },
        beforeEnter: managerAuthGuard
    },
    {
        path: '/admin/calendar',
        name: 'Calendar',
        components: {
            content: CalendarPage,
        },
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
