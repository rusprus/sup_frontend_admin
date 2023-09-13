import moment from "moment";

export const CalendarModule = {
    namespaced: true,
    state: () => ({

        currentMonth: 0,
        currentYear: 2022,
        allMonth: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        currentDate: moment().format(moment.HTML5_FMT.DATE),
        pointerDate: moment(),
        orders: [
            // { id: 1, name: "Design review", time: "10AM", datetime: "2023-01-03T10:00", href: "#" },
            // { id: 2, name: "Sales meeting", time: "2PM", datetime: "2023-01-03T14:00", href: "#" },
            // { id: 3, name: "Date night", time: "6PM", datetime: "2023-01-08T18:00", href: "#" },
            // { id: 4, name: "Maple syrup museum", time: "3PM", datetime: "2023-01-22T15:00", href: "#" },
            // { id: 5, name: "Hockey game", time: "7PM", datetime: "2023-01-22T19:00", href: "#" },
            // { id: 6, name: "Sam's birthday party", time: "2PM", datetime: "2023-01-25T14:00", href: "#" },
            // { id: 7, name: "Cinema with friends", time: "9PM", datetime: "2023-02-04T21:00", href: "#" },
        ],
        showOrderModal: false,
        togglePeriod: 'month'
    }),
    getters: {
        month(state, getters) {
            let days = [];
            state.currentDate = moment(state.currentDate)
            let pointerDate = state.currentDate.clone();
            pointerDate.startOf("month");
            let index = pointerDate.weekday();
            pointerDate.subtract(index + 1, "days");
            for (let i = 0; i <= index; i++) {
                console.log('OrdersOfDate')
                const date = pointerDate.add(1, "days").format(moment.HTML5_FMT.DATE);
                const orders = getters.ordersOfDate(pointerDate);
                days[i] = {
                    date: date,
                    isCurrentMonth: false,
                    orders: orders,
                };
            }
            let j = 1;
            let daysInMonth = state.currentDate.daysInMonth();
            for (j, index; index < 42; index++, j++) {
                
                if (j <= daysInMonth) {
                    pointerDate.date(j);

                    const date = pointerDate.format(moment.HTML5_FMT.DATE);
                    const orders = getters.ordersOfDate(pointerDate);
                    days[index] = {
                        date: date,
                        isCurrentMonth: true,
                        orders: orders,
                    };
                } else {
                    const date = pointerDate.add(1, "days").format(moment.HTML5_FMT.DATE);
                    const orders = getters.ordersOfDate(pointerDate);
                    days[index] = {
                        date: date,
                        isCurrentMonth: false,
                        orders: orders,
                    };
                }
            }
            return days;
        },

        ordersOfDate:(state, getters, rootState) => (pointerDate) =>{

            
            const pointer = moment(pointerDate).format(moment.HTML5_FMT.DATE);

            return rootState.OrdersModule.origin.filter(function (order) {
                let dateStart = moment(order.dateStart).format(moment.HTML5_FMT.DATE);
                let dateEnd = moment(order.dateEnd).format(moment.HTML5_FMT.DATE);

                // console.log(pointer)
                // console.log(dateStart)
                // console.log(dateEnd)
                // console.log(moment(pointer).isBetween(dateStart, dateEnd, 'day'))
                // console.log('  ')


                // if (pointerDate.isBetween(dateStart, dateEnd)) return true;
                if (moment(pointer).isBetween(dateStart, dateEnd)) return true;
            });


        },

        week(state, getters, rootState) {
            let orders = [];
            state.currentDate = moment(state.currentDate)
            let pointer = state.currentDate.clone();

            let start = pointer.startOf("week").format(moment.HTML5_FMT.DATE);
            let end = pointer.endOf("week").format(moment.HTML5_FMT.DATE)

            orders = rootState.OrdersModule.origin.filter(function (order) {

                let dateStart = moment(order.dateStart)
                let dateEnd = moment(order.dateEnd)

                if (dateStart.isBetween(start, end)) return true
                if (dateEnd.isBetween(start, end)) return true

                if (dateStart.isBefore(start) && dateEnd.isAfter(end)) return true
                return false
            });
            return orders
        },

    },
    actions: {
        setTogglePeriod({ state }, period) {
            state.togglePeriod = period

        },

        async next({ state }) {
            // if (state.togglePeriod == 'day') state.currentDate.add(1, "day");
            if (state.togglePeriod == 'week') state.currentDate.add(1, "week");
            if (state.togglePeriod == 'month') state.currentDate.add(1, "month");
            // if (state.togglePeriod == 'year') state.currentDate.add(1, "year");

            state.currentMonth = state.currentDate.month();
            state.currentYear = state.currentDate.year();
            state.currentDate = state.currentDate.format(moment.HTML5_FMT.DATE)
        },

        async prev({ state }) {
            // if (state.togglePeriod == 'day') state.currentDate.subtract(1, "day");
            if (state.togglePeriod == 'week') state.currentDate.subtract(1, "week");
            if (state.togglePeriod == 'month') state.currentDate.subtract(1, "month");
            // if (state.togglePeriod == 'year') state.currentDate.subtract(1, "year");

            state.currentMonth = state.currentDate.month();
            state.currentYear = state.currentDate.year();
            state.currentDate = state.currentDate.format(moment.HTML5_FMT.DATE)

        },

        today({ state }) {
            state.currentDate = moment()

            state.currentMonth = state.currentDate.month();
            state.currentYear = state.currentDate.year();
            state.currentDate = state.currentDate.format(moment.HTML5_FMT.DATE)
        },

    },

    mutations: {

        setDays(state, days) {
            state.days = days
        },
    },

}