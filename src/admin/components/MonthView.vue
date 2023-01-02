<template>
    <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        
        <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
            <div class="bg-white py-2">П<span class="sr-only sm:not-sr-only">н</span></div>
            <div class="bg-white py-2">В<span class="sr-only sm:not-sr-only">т</span></div>
            <div class="bg-white py-2">С<span class="sr-only sm:not-sr-only">р</span></div>
            <div class="bg-white py-2">Ч<span class="sr-only sm:not-sr-only">т</span></div>
            <div class="bg-white py-2">П<span class="sr-only sm:not-sr-only">т</span></div>
            <div class="bg-white py-2">С<span class="sr-only sm:not-sr-only">б</span></div>
            <div class="bg-white py-2">В<span class="sr-only sm:not-sr-only">с</span></div>
        </div>
        <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
            <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                <div v-for="day in month" :key="day.date" :class="[day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500', 'relative py-2 px-3']">
                    <time :datetime="day.date" :class="day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white' : undefined">{{
                        day.date.split("-").pop().replace(/^0/, "")
                    }}</time>
                    <ol v-if="day.orders.length > 0" class="mt-2">
                        <li v-for="order in day.orders.slice(0, 2)" :key="order.id">
                            <a @click="update(order.id)" class="group flex cursor-pointer">
                                <p class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                                    {{ order.name }}
                                </p>
                                <!-- <time :datetime="order.dateStart" class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">{{ order.dateStart }}</time> -->
                                <div class="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">{{ order.sup_id }} сап</div>
                            </a>
                        </li>
                        <li v-if="day.orders.length > 2" class="text-gray-500">+ {{ day.orders.length - 2 }} more</li>
                    </ol>
                </div>
            </div>
            <div class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                <button
                    v-for="day in month"
                    :key="day.date"
                    type="button"
                    :class="[
                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                        (day.isSelected || day.isToday) && 'font-semibold',
                        day.isSelected && 'text-white',
                        !day.isSelected && day.isToday && 'text-indigo-600',
                        !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                        !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500',
                        'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10',
                    ]"
                    @click="selectDay(day)"
                    class="cursor-pointer"
                >
                    <time
                        :datetime="day.date"
                        :class="[
                            day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full',
                            day.isSelected && day.isToday && 'bg-indigo-600',
                            day.isSelected && !day.isToday && 'bg-gray-900',
                            'ml-auto',
                        ]"
                        >{{ day.date.split("-").pop().replace(/^0/, "") }}</time
                    >
                    <p class="sr-only">{{ day.orders.length }} orders</p>
                    <div v-if="day.orders.length > 0" class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                        <div v-for="order in day.orders" :key="order.id" class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div v-if="selectedDay?.orders.length > 0" class="py-10 px-4 sm:px-6 lg:hidden">
        <ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
            <li v-for="order in selectedDay.orders" :key="order.id" class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                <div class="flex-auto">
                    <p class="font-semibold text-gray-900">{{ order.name }}</p>
                    <time :datetime="order.datetime" class="mt-2 flex items-center text-gray-700">
                        <ClockIcon class="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {{ order.dateStart }}
                    </time>
                </div>
                <a
                    :href="order.id"
                    class="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                    >Edit<span class="sr-only">, {{ order.name }}</span></a
                >
            </li>
        </ol>
        
    </div>
</template>

<script>
import { ClockIcon } from "@heroicons/vue/solid";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    components: {
        ClockIcon,
    },
    data() {
        return {
            // days: [],
            selectedDay: null,
            show: false,
        };
    },
    methods: {
        ...mapActions(["setTogglePeriod", "toggleModule"]),
        selectDay(day) {
            console.log(day);
            this.selectedDay = day;
        },
        update(id){
             this.orders.order = this.orders.origin.find((item) => item.id == id);
            // if (this.orders.order !== null) this.toggleModule(true)

            this.toggleModule(true)
            
        }
    },
    computed: {
        ...mapState(["CalendarModule", "orders"]),
        ...mapGetters(["month"]),
    },
    mounted() {
        this.setTogglePeriod("month");
    },
};
</script>

<style></style>
