<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="lg:flex lg:h-full lg:flex-col">
        <OrderModule :show="show" @close="showOrderModule(false)" /> 
        <header class="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
            <h1 class="text-lg font-semibold text-gray-900">
                <!-- <time datetime="2022-01">{{ allMonth[currentMonth] }} {{ fullYear }}</time> -->
            </h1>
            <div class="flex items-center">
                <div class="flex items-center rounded-md shadow-sm md:items-stretch">
                    <button
                        @click="prevMonth"
                        type="button"
                        class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                    >
                        <span class="sr-only">Previous month</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                    >
                        Today
                    </button>
                    <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                    <button
                        @click="nextMonth"
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
                            Month view
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
                    <div class="ml-6 h-6 w-px bg-gray-300" />
                    <button
                        type="button"
                        class="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add event
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
        <MonthView />
      
    </div>
</template>

<script>
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import moment from "moment";
import { mapState, mapActions } from "vuex";
import OrderModule from "@/admin/components/OrderModule.vue";
import MonthView from "@/admin/components/MonthView.vue";


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
        OrderModule,
        MonthView
    },
    data() {
        return {
            // currentMonth: 0,
            // fullYear: 2022,
            // allMonth: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            // currentDate: {},
            // events: [
                // { id: 1, name: "Design review", time: "10AM", datetime: "2023-01-03T10:00", href: "#" },
                // { id: 2, name: "Sales meeting", time: "2PM", datetime: "2023-01-03T14:00", href: "#" },
                // { id: 3, name: "Date night", time: "6PM", datetime: "2023-01-08T18:00", href: "#" },
                // { id: 4, name: "Maple syrup museum", time: "3PM", datetime: "2023-01-22T15:00", href: "#" },
                // { id: 5, name: "Hockey game", time: "7PM", datetime: "2023-01-22T19:00", href: "#" },
                // { id: 6, name: "Sam's birthday party", time: "2PM", datetime: "2023-01-25T14:00", href: "#" },
                // { id: 7, name: "Cinema with friends", time: "9PM", datetime: "2023-02-04T21:00", href: "#" },
            // ],
            // days: [],
            show: false
        };
    },
    methods: {
        ...mapActions(['nextMonth', 'prevMonth', 'initMonth', 'getDateEvents']),
        // nextMonth() {
        //     this.currentDate.add(1, "month");
        //     this.currentMonth = this.currentDate.month();
        //     this.fullYear = this.currentDate.year();
        //     this.makeArray(this.currentDate);
        // },
        // prevMonth() {
        //     this.currentDate.subtract(1, "month");
        //     this.currentMonth = this.currentDate.month();
        //     this.fullYear = this.currentDate.year();
        //     this.makeArray(this.currentDate);
        // },
        // makeArray(currentDate) {
        //     this.days = [];
        //     let pointDate = currentDate.clone();
        //     pointDate.startOf("month");
        //     let index = pointDate.weekday();
        //     pointDate.subtract(index + 1, "days");
        //     for (let i = 0; i <= index; i++) {
        //         this.days[i] = {
        //             date: this.dateToStr(pointDate.add(1, "days")),
        //             isCurrentMonth: false,
        //             events: this.getDateEvents(pointDate),
        //         };
        //     }
        //     let j = 1;
        //     let daysInMonth = currentDate.daysInMonth();
        //     for (j, index; index < 42; index++, j++) {
        //         if (j <= daysInMonth) {
        //             pointDate.date(j);

        //             this.days[index] = {
        //                 date: this.dateToStr(pointDate),
        //                 isCurrentMonth: true,
        //                 events: this.getDateEvents(pointDate),
        //             };
        //         } else {
        //             this.days[index] = {
        //                 date: this.dateToStr(pointDate.add(1, "days")),
        //                 isCurrentMonth: false,
        //                 events: this.getDateEvents(pointDate),
        //             };
        //         }
        //     }
        // },
        // getDateEvents(pointDate) {
        //     let date1 = pointDate.format(moment.HTML5_FMT.DATE);
        //     return this.orders.origin.filter(function (order) {
        //         let date2 = moment(order.dateStart).format(moment.HTML5_FMT.DATE);

        //         if (date1 == date2) return true;
        //     });
        // },

        // dateToStr(temp) {
        //     return this.padStr(temp.year()) + "-" + this.padStr(1 + temp.month()) + "-" + this.padStr(temp.date());
        //     //  + this.padStr(temp.getHours()) + this.padStr(temp.getMinutes()) + this.padStr(temp.getSeconds());
        // },
        // padStr(i) {
        //     return i < 10 ? "0" + i : "" + i;
        // },
        edit(id){
            this.orders.order = this.orders.origin.find((item)=>item.id == id)
            if(this.order !== null) this.showOrderModule(true)
        },
        showOrderModule(param){
            this.show = param
        },
    },
    computed: {
        // ...mapState(["orders", 'currentMonth', 'fullYear', 'allMonth', 'currentDate', 'events', 'days']),
        ...mapState(['CalendarModule']),
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
        moment.updateLocale("ru", {
           
        });
        this.CalendarModule.currentDate = moment();
        this.CalendarModule.currentMonth = this.CalendarModule.currentDate.month();
        this.CalendarModule.fullYear = this.CalendarModule.currentDate.year();
        // this.makeArray(this.CalendarModule.currentDate);
        this.initMonth(this.CalendarModule.currentDate)

    },
};
</script>
