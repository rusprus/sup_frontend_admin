import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/rent/MainPage.vue'
import WalkPage from '@/pages/walk/WalkPage.vue'
import NavComponent from '@/components/NavComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
import AdminPage from '@/admin/main/AdminPage.vue'
import LoginForm from '@/components/LoginForm.vue'
import { UserRoles } from './types/Auth'


// const isAuthorized = localStorage.hasOwnProperty('token');
const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token')

const authGuard = function (to, from, next){
    if(!isAuthorized) next({name:'Login'});
    else next()
}

const managerAuthGuard = function (to, from, next){
    if(!isAuthorized) next({name:'Login'});
    else if (localStorage.getItem('userRole') !== UserRoles.Moderator) next({name: 'Home'});
    else next()
}

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
        name: 'Home',
        components: {
            nav: NavComponent,
            content: WalkPage,
            footer: FooterSection
        },
        alias: '/b',
        beforeEnter: authGuard
    },
    {
        path: '/login',
        components: {
            nav: NavComponent,
            content: LoginForm,
            footer: FooterSection
        },
        name: 'Login'
    },
    {
        path: '/admin',
        components: {
            content: AdminPage,
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