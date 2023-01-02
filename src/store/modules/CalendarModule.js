import moment from "moment";

export const CalendarModule = {
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
        showOrderModule: false,
        togglePeriod: 'month'
    }),
    getters: {
        month(state, getters) {
            let days = [];
            state.currentDate = moment(state.currentDate)
            state.pointerDate = state.currentDate.clone();
            state.pointerDate.startOf("month");
            let index = state.pointerDate.weekday();
            state.pointerDate.subtract(index + 1, "days");
            for (let i = 0; i <= index; i++) {
                days[i] = {
                    date: state.pointerDate.add(1, "days").format(moment.HTML5_FMT.DATE),
                    isCurrentMonth: false,
                    orders: getters.ordersOfDate,
                };
            }
            let j = 1;
            let daysInMonth = state.currentDate.daysInMonth();
            for (j, index; index < 42; index++, j++) {
                if (j <= daysInMonth) {
                    state.pointerDate.date(j);

                    days[index] = {
                        date: state.pointerDate.format(moment.HTML5_FMT.DATE),
                        isCurrentMonth: true,
                        orders: getters.ordersOfDate,
                    };
                } else {
                    days[index] = {
                        date: state.pointerDate.add(1, "days").format(moment.HTML5_FMT.DATE),
                        isCurrentMonth: false,
                        orders: getters.ordersOfDate,
                    };
                }
            }
            return days;
        },
        week(state, getters) {
            let days = [];
            state.currentDate = moment(state.currentDate)
            state.pointerDate = state.currentDate.clone();
            state.pointerDate.startOf("week");

            for (let i = 0; i < 7; i++) {
                days[i] = {
                    date: state.pointerDate.format(moment.HTML5_FMT.DATE),
                    isCurrentMonth: false,
                    orders: getters.ordersOfDate,
                };
                state.pointerDate.add(1, "days")
                // console.log(state.pointerDate.date())

            }

            console.log(days)
            // console.log( days[1].orders)
            return days;
        },
        ordersOfDate(state, getters, rootState) {
            // console.log('11')
            // return [ {name: 'Ronin'}]
            let date1 = state.pointerDate.format(moment.HTML5_FMT.DATE);
            let result = rootState.orders.origin.filter(function (order) {
                let date2 = moment(order.dateStart).format(moment.HTML5_FMT.DATE);

                if (date1 == date2) return true;
            });
            // result.forEach(element => {
            //     console.log(element.id)

            // });
            // console.log(result[0])

            return result


        },
    },
    actions: {
        setTogglePeriod({ state }, period) {
            state.togglePeriod = period

        },

        async next({ state }) {
            if (state.togglePeriod == 'day') state.currentDate.add(1, "day");
            if (state.togglePeriod == 'week') state.currentDate.add(1, "week");
            if (state.togglePeriod == 'month') state.currentDate.add(1, "month");
            if (state.togglePeriod == 'year') state.currentDate.add(1, "year");

            state.currentMonth = state.currentDate.month();
            state.currentYear = state.currentDate.year();
            state.currentDate = state.currentDate.format(moment.HTML5_FMT.DATE)
        },

        async prev({ state }) {
            if (state.togglePeriod == 'day') state.currentDate.subtract(1, "day");
            if (state.togglePeriod == 'week') state.currentDate.subtract(1, "week");
            if (state.togglePeriod == 'month') state.currentDate.subtract(1, "month");
            if (state.togglePeriod == 'year') state.currentDate.subtract(1, "year");

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