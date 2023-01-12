<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!-- <p>Helow</p> -->
    <div class="flex h-full flex-col">
        <!-- <p v-for="day of week" :key="day">{{ day.date }}</p> -->
        <div ref="container" class="flex flex-auto flex-col overflow-auto bg-white">
            <div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
                <div ref="containerNav" class="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
                    <div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                        <template v-for="(day, index) of weekNumber" :key="index">
                            <button type="button" class="flex flex-col items-center pt-2 pb-3">
                                {{ dateWeek(day) }}
                                <span class="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">{{ dateDay(day) }}</span>
                            </button>
                        </template>
                    </div>

                    <div class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                        <div class="col-end-1 w-14" />
                        <template v-for="(day, index) of weekNumber" :key="index">
                            <div class="flex items-center justify-center py-3">
                                <span
                                    >{{ dateWeek(day) }} <span class="items-center justify-center font-semibold text-gray-900">{{ dateDay(day) }}</span></span
                                >
                            </div>
                        </template>
                    </div>
                </div>
                <div class="flex flex-auto">
                    <div class="sticky left-0 w-14 flex-none bg-white ring-1 ring-gray-100" />
                    <div class="grid flex-auto grid-cols-1 grid-rows-1">
                        <!-- Horizontal lines -->
                        <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100" style="grid-template-rows: repeat(10, minmax(3.5rem, 1fr))">
                            <div ref="containerOffset" class="row-end-1 h-7" />
                            <div>
                                <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1 Сап</div>
                            </div>
                            <!-- <div /> -->
                            <div>
                                <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2 Сап</div>
                            </div>
                            <!-- <div /> -->
                            <div>
                                <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3 Сап</div>
                            </div>
                            <!-- <div /> -->
                            <div>
                                <div class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4 Сап</div>
                            </div>
                            <!-- <div /> -->
                        </div>

                        <!-- Vertical lines -->
                        <div class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                            <div class="col-start-1 row-span-full" />
                            <div class="col-start-2 row-span-full" />
                            <div class="col-start-3 row-span-full" />
                            <div class="col-start-4 row-span-full" />
                            <div class="col-start-5 row-span-full" />
                            <div class="col-start-6 row-span-full" />
                            <div class="col-start-7 row-span-full" />
                            <div class="col-start-8 row-span-full w-8" />
                        </div>

                        <!-- Rent OrdersModule -->
                        <ol
                            class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:pr-8"
                            style="grid-template-rows: 1.75rem repeat(10, minmax(0, 1fr)) auto; grid-template-columns: repeat(28, minmax(1.7rem, 1fr))"
                        >
                            <!-- <li class="relative mt-px flex sm:col-start-3 sm:col-end-6 " style="grid-row: 4 / span 6"> -->

                            <!-- <template v-for="day of week" :key="day"> -->
                            <li v-for="order of week" :key="order" class="relative mt-px flex" :style="gridArea(order)">
                                <a
                                    @click="update(order.id)"
                                    class="cursor-pointer group absolute inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5"
                                    :class="fieldOrder(order.sup_id)"
                                >
                                    <p class="order-1 font-semibold" :class="nameOrder(order.sup_id)">{{ order.name }}</p>
                                    <p class="" :class="dataOrder(order.sup_id)">
                                        <time :datetime="order.dateStart"> {{ dateYMDT(order.dateStart) + " --- " + dateYMDT(order.dateEnd) }}</time>
                                    </p>
                                </a>
                            </li>
                            <!-- </template> -->
                            <!-- <template v-for="day of week" :key="day">
                                <li v-for="order of day.OrdersModule" :key="order" class="relative mt-px flex" :style="gridArea(order)">
                                    <a
                                        @click="update(order.id)"
                                        class="cursor-pointer group absolute inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5"
                                        :class="fieldOrder(order.sup_id)"
                                    >
                                        <p class="order-1 font-semibold" :class="nameOrder(order.sup_id)">{{ order.name }}</p>
                                        <p class="" :class="dataOrder(order.sup_id)">
                                            <time :datetime="order.dateStart"> {{ dateYMDT(order.dateStart) + " --- " + dateYMDT(order.dateEnd) }}</time>
                                        </p>
                                    </a>
                                </li>
                            </template> -->
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
import moment from "moment-timezone";

export default {
    data() {
        return {
            shortMonth: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        };
    },
    components: {},
    computed: {
        ...mapState(["OrdersModule", "CalendarModule"]),
        ...mapGetters(["week"]),
        weekNumber() {
            let days = [];
            let clonDate = moment(this.CalendarModule.currentDate);
            clonDate.startOf("week");
            for (let i = 0; i < 7; i++) {
                days[i] = clonDate.format(moment.HTML5_FMT.DATE);
                clonDate.add(1, "days");
            }
            return days;
        },
    },
    methods: {
        ...mapActions(["setTogglePeriod", "toggleModule"]),
        dateYMDT(date) {
            // return moment(date).format(moment.HTML5_FMT.DATE);
            return moment(date).format("DD MMMM HH:mm");
        },
        dateDay(date) {
            return moment(date).format("DD");
        },
        dateWeek(date) {
            return this.shortMonth[moment(date).weekday()];
        },
        gridArea(order) {
            let startY = order.sup_id + 1;
            let endY = order.sup_id + 1;

            let startWeek = moment(this.CalendarModule.currentDate).startOf("week").format(moment.HTML5_FMT.DATE);
            let endWeek = moment(this.CalendarModule.currentDate).endOf("week").format(moment.HTML5_FMT.DATE);

            let startX = 1;
            if (moment(order.dateStart).isBetween(startWeek, endWeek)) {
                // console.log(moment(order.dateStart).weekday());
                startX = moment(order.dateStart).weekday() * 4 + 1;

                let hour = moment(order.dateStart).hour();

                startX = 7 <= hour && hour < 11 ? startX + 0 : startX;
                startX = 11 <= hour && hour < 15 ? startX + 1 : startX;
                startX = 15 <= hour && hour < 19 ? startX + 2 : startX;
                startX = 19 <= hour && hour <= 23 ? startX + 3 : startX;

                hour = 0;
            }

            ///

            // let endX = this.week.findIndex((item) => item.dateEnd == moment(order.dateEnd).format(moment.HTML5_FMT.DATE));

            // console.log(startWeek);
            // console.log(endWeek);
            // console.log(moment(order.dateEnd).format(moment.HTML5_FMT.DATE));

            let endX = 29;
            // endX = moment(order.dateEnd).weekday() * 4 + 1;

            if (moment(order.dateEnd).isBetween(startWeek, endWeek)) {
                // console.log(moment(order.dateEnd).weekday());
                endX = moment(order.dateEnd).weekday() * 4 + 1;

                let hour = moment(order.dateEnd).hour();

                endX = 7 <= hour && hour < 11 ? endX + 0 : endX;
                endX = 11 <= hour && hour < 15 ? endX + 1 : endX;
                endX = 15 <= hour && hour < 19 ? endX + 2 : endX;
                endX = 19 <= hour && hour <= 23 ? endX + 3 : endX;

                hour = 0;
            }

            // if (endX == 0 || endX == -1) {
            //     endX = 29;
            // } else {
            //     endX = endX * 4 + 1;
            // }

            // console.log(endX);
            return {
                gridArea: startY + " /  " + startX + " / " + endY + " / " + endX + "",
            };
        },
        fieldOrder(id) {
            let listColor = ["bg-blue-50", "bg-blue-50", "bg-pink-50", "bg-gray-100", "bg-green-50"];
            let listHoverColor = ["hover:bg-blue-100", "hover:bg-blue-100", "hover:bg-pink-100", "hover:bg-gray-200", "hover:bg-green-100"];

            let color = listColor.find((color, index) => index == id);
            let hover = listHoverColor.find((color, index) => index == id);

            return [color, hover];
        },
        nameOrder(id) {
            let listColor = ["text-blue-700", "text-blue-700", "text-pink-700", "text-gray-700", "text-green-700"];
            let color = listColor.find((color, index) => index == id);

            return [color];
        },

        dataOrder(id) {
            let listColor = ["text-blue-500", "text-blue-500", "text-pink-500", "text-gray-500", "text-green-500"];
            let listHoverColor = ["group-hover:text-blue-700", "group-hover:text-blue-700", "group-hover:text-pink-700", "group-hover:text-gray-700", "group-hover:text-green-700"];

            let color = listColor.find((color, index) => index == id);
            let hover = listHoverColor.find((color, index) => index == id);

            return [color, hover];
        },

        update(id) {
            this.OrdersModule.order = this.OrdersModule.origin.find((item) => item.id == id);
            this.toggleModule(true);
        },
    },

    mounted() {
        this.setTogglePeriod("week");
    },
    setup() {
        const container = ref(null);
        const containerNav = ref(null);
        const containerOffset = ref(null);

        onMounted(() => {
            // Set the container scroll position based on the current time.
            const currentMinute = new Date().getHours() * 60;
            container.value.scrollTop = ((container.value.scrollHeight - containerNav.value.offsetHeight - containerOffset.value.offsetHeight) * currentMinute) / 1440;
        });

        return {
            container,
            containerNav,
            containerOffset,
        };
    },
};
</script>
