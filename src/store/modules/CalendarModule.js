import moment from "moment";

export const CalendarModule = {
    state: () => ({

        currentMonth: 0,
        fullYear: 2022,
        allMonth: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        currentDate: {},
        events: [
            // { id: 1, name: "Design review", time: "10AM", datetime: "2023-01-03T10:00", href: "#" },
            // { id: 2, name: "Sales meeting", time: "2PM", datetime: "2023-01-03T14:00", href: "#" },
            // { id: 3, name: "Date night", time: "6PM", datetime: "2023-01-08T18:00", href: "#" },
            // { id: 4, name: "Maple syrup museum", time: "3PM", datetime: "2023-01-22T15:00", href: "#" },
            // { id: 5, name: "Hockey game", time: "7PM", datetime: "2023-01-22T19:00", href: "#" },
            // { id: 6, name: "Sam's birthday party", time: "2PM", datetime: "2023-01-25T14:00", href: "#" },
            // { id: 7, name: "Cinema with friends", time: "9PM", datetime: "2023-02-04T21:00", href: "#" },
        ],
        days: [],
        show: false
    }),
    actions: {

        // getAllOrders({ commit }) {
        //     OrdersAPI.getAllOrders().then((res) => {
        //         commit('setAllOrders', res)
        //     })
        // },

        async nextMonth({ state, dispatch, commit }) {
            state.currentDate.add(1, "month");
            state.currentMonth = state.currentDate.month();
            state.fullYear = state.currentDate.year();
            commit('setDays', await dispatch('makeArray', state.currentDate));
        },

        async prevMonth({ state, dispatch, commit }) {
            state.currentDate.subtract(1, "month");
            state.currentMonth = state.currentDate.month();
            state.fullYear = state.currentDate.year();
            commit('setDays', await dispatch('makeArray', state.currentDate));
        },

        async initMonth({state, dispatch, commit}){
            commit('setDays', await dispatch('makeArray', state.currentDate));
        },

        async makeArray({  dispatch }, currentDate) {
            console.log('makeArray')

            let days = [];
            let pointDate = currentDate.clone();
            pointDate.startOf("month");
            let index = pointDate.weekday();
            pointDate.subtract(index + 1, "days");
            for (let i = 0; i <= index; i++) {
                days[i] = {
                    date: pointDate.add(1, "days").format(moment.HTML5_FMT.DATE),
                    isCurrentMonth: false,
                    events: await dispatch('getDateEvents', pointDate),
                };
            }
            let j = 1;
            let daysInMonth = currentDate.daysInMonth();
            for (j, index; index < 42; index++, j++) {
                if (j <= daysInMonth) {
                    pointDate.date(j);

                    days[index] = {
                        date: pointDate.format(moment.HTML5_FMT.DATE),
                        isCurrentMonth: true,
                        events: await dispatch('getDateEvents', pointDate),
                    };
                } else {
                    days[index] = {
                        date:  pointDate.add(1, "days").format(moment.HTML5_FMT.DATE),
                        isCurrentMonth: false,
                        events: await dispatch('getDateEvents', pointDate),
                    };
                }
            }
            return days;
        },
        getDateEvents({ rootState }, pointDate) {
            let date1 = pointDate.format(moment.HTML5_FMT.DATE);
            return rootState.orders.origin.filter(function (order) {
                let date2 = moment(order.dateStart).format(moment.HTML5_FMT.DATE);

                if (date1 == date2) return true;
            });
        },
    },
    getters:{
        async daysGetter({rootState, state,  commit, dispatch}){
            commit('setDays', await dispatch('makeArray', state.currentDate));
            return state.days;
        }
    },
    mutations: {

        setDays(state, days){
            state.days = days
        }

    }

}