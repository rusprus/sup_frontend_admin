<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="lg:flex lg:h-full lg:flex-col">
        <header class="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
            <h1 class="text-lg font-semibold text-gray-900">
                <time datetime="2022-01">{{ CalendarModule.allMonth[CalendarModule.currentMonth] }} {{ CalendarModule.currentYear }}</time>
            </h1>
            <div class="flex items-center">
                <div class="flex items-center rounded-md shadow-sm md:items-stretch">
                    <button
                        @click="prev"
                        type="button"
                        class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                    >
                        <span class="sr-only">Previous month</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        @click="today"
                        type="button"
                        class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                    >
                        Сегодня
                    </button>
                    <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                    <button
                        @click="next"
                        type="button"
                        class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                    >
                        <span class="sr-only">Next month</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden md:ml-4 md:flex md:items-center">
                    <Menu as="div" class="relative">
                        <MenuButton type="button" class="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                            {{ period[CalendarModule.togglePeriod] }}
                            <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </MenuButton>

                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <MenuItems class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <router-link to="/admin/calendar/day" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">День</router-link>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <router-link to="/admin/calendar/week" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Неделя</router-link>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <router-link to="/admin/calendar/month" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Месяц</router-link>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <router-link to="/admin/calendar/year" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Год</router-link>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                    <div class="ml-6 h-6 w-px bg-gray-300" />
                    <button
                        @click="addOrder"
                        type="button"
                        class="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Добавить аренду
                    </button>
                </div>
                <Menu as="div" class="relative ml-6 md:hidden">
                    <MenuButton class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Open menu</span>
                        <DotsHorizontalIcon class="h-5 w-5" aria-hidden="true" />
                    </MenuButton>

                    <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <MenuItems
                            class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Create event</a>
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Go to today</a>
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Day view</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Week view</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Month view</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Year view</a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </header>
        <!-- <MonthView /> -->

        <router-view name="content"></router-view>
    </div>
</template>

<script>
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import moment from "moment-timezone";
import { mapState, mapActions } from "vuex";

// import MonthView from "@/admin/components/MonthView.vue";

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        DotsHorizontalIcon,
        // MonthView
    },
    data() {
        return {
            period: {
                day: "День",
                week: "Неделя",
                month: "Месяц",
                year: "Год",
            },
        };
    },
    methods: {
        ...mapActions(["next", "prev", "today", "getDateEvents", "setOrderDefault", "toggleModule"]),
        addOrder() {
            this.setOrderDefault();
            this.toggleModule(true);
        },

        // edit(id) {
        //     this.orders.order = this.orders.origin.find((item) => item.id == id);
        //     if (this.order !== null) this.show(true);
        // },
    },
    computed: {
        ...mapState(["CalendarModule"]),
        selectedDay() {
            return this.CalendarModule.days.find((day) => day.isSelected);
        },
    },
    setup() {
        return {
            // selectedDay,
        };
    },
    mounted() {
        // moment.updateLocale("ru", {

        // });
        // moment.locale("ru");
        // moment.tz.setDefault("Europe/Moscow");
        // moment.tz.setDefault("America/Los_Angeles");
        this.CalendarModule.currentDate = moment();
        this.CalendarModule.currentMonth = this.CalendarModule.currentDate.month();
        this.CalendarModule.fullYear = this.CalendarModule.currentDate.year();
    },
};
</script>
