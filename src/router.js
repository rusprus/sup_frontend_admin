import { createRouter, createWebHistory } from 'vue-router'

import LandingLayout from '@/pages/rent/LandingLayout.vue'
import AdminLayout from '@/admin/pages/AdminLayout.vue'

import LandingPage from "@/pages/rent/LandingPage.vue"
import OrdersPage from "@/admin/pages/OrdersPage.vue"
// import AdminPage from '@/admin/pages/AdminPage.vue'
import CalendarPage from '@/admin/pages/CalendarPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import DayView from '@/admin/components/DayView.vue'
import WeekView from '@/admin/components/WeekView.vue'
import MonthView from '@/admin/components/MonthView.vue'
import YearView from '@/admin/components/YearView.vue'

import ListPage from '@/admin/pages/ListPage.vue'
// import StatPage from '@/admin/pages/StatPage.vue'
import SettingPage from '@/admin/pages/SettingPage.vue'
import SupPage from '@/admin/pages/SupPage.vue'


// import WalkPage from '@/pages/walk/WalkPage.vue'

import { UserRoles } from './types/Auth'


// const isAuthorized = localStorage.hasOwnProperty('token');



// const authGuard = function (to, from, next) {
//     if (!isAuthorized) next({ name: 'Login' });
//     else next()
// }

const managerAuthGuard = function (to, from, next) {
    const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token')
    
    console.log('check auth 1')
    if (!isAuthorized)
    {
        console.log('check auth 2')
        next({ name: 'Login' });
    } 
    else if (localStorage.getItem('userRole') !== JSON.stringify(UserRoles.Moderator)) {
        console.log('Авторизован');
        // next({ name: 'AdminLayout' });
        // next({ name: 'LandingLayout' });
        next();
    }

    //  next({ name: 'AdminLayout' });
    else {
        console.log('check auth 3')
        next()
    }


}


const routes = [
    // { path: '/', redirect: '/lend' },
    {
        path: '/',
        name: 'LandingLayout',
        component: LandingLayout,
        children: [
            {
                path: '',
                name: 'LandingLayoutInit',
                component: LandingPage,

            },
            {
                path: 'login',
                name: 'Login',
                component: LoginPage,

                // beforeEnter: authGuard
            },

        ],
    },
    {
        path: '/admin',
        name: 'AdminLayout',
        component: AdminLayout,
        children: [
            {
                path: '',
                name: 'ListPage',
                component: ListPage,

            },
            {
                path: 'orders',
                name: 'OrdersPage',
                component: OrdersPage,

            },
            {
                path: 'calendar',
                name: 'CalendarPage',
                component: CalendarPage,

                children: [
                    {
                        path: '',
                        name: 'MonthViewInit',
                        components: {
                            content: MonthView,
                        },
                    },
                    {
                        path: 'day',
                        name: 'DayView',
                        components: {
                            content: DayView,
                        },
                    },
                    {
                        path: 'week',
                        name: 'WeekView',
                        components: {
                            content: WeekView,
                        },
                    },
                    {
                        path: 'month',
                        name: 'MonthView',
                        components: {
                            content: MonthView,
                        },
                    },
                    {
                        path: 'year',
                        name: 'YearView',
                        components: {
                            content: YearView,
                        },
                    }
                ]
            },
            {
                path: 'sups',
                name: 'SupPage',
                component: SupPage,

            },
            {
                path: 'setting',
                name: 'SettingPage',
                component: SettingPage,

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
