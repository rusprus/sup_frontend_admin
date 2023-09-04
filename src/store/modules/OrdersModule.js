import { OrdersAPI } from '@/api/OrdersAPI'
import moment from "moment";
// import {SupsModule}  from './SupsModule'

export const OrdersModule = {
    state: () => ({

        order: {},
        origin: [
            // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', sup_id: 1, note: 'Девяткино',status: 'Завершено' },
        ],
        filtered: [],
        orderModal: false,
        status: {
            1: 'Не выбрано',
            2: 'Планируется',
            3: 'Активен',
            4: 'Завершен',
            5: 'Не подошел',
        },
        activeFilters: [],
        
    }),

    getters:{
        allFilter(state, getters){

         return [
            {
                name: 'Имя клиента',
                id: 1,
                type: "text",
                field: 'name',
                value: '',
            },
            {
                name: 'Срок аренды',
                id: 2,
                type: "dateRange",
                field: 'dateRange',
                value: [],
            }, {
                name: 'Номер сапа',
                id: 3,
                type: "select",
                field: 'sup_id',
                value: null,
                options: getters.optionsForFilter,
                // [
                //     {
                //         name: '2 сап ',
                //         value: 2
                //     },
       
                // ],
            }, {
                name: 'Статус',
                id: 4,
                type: "select",
                field: 'status',
                value: 1,
                options: [
                    {
                        name: 'Не выбрано',
                        value: 1
                    },
                    {
                        name: 'Планируется',
                        value: 2
                    },
                    {
                        name: 'Активен',
                        value: 3
                    },
                    {
                        name: 'Завершен',
                        value: 4
                    },
                    {
                        name: 'Не подошел',
                        value: 5
                    }
                ],
            },
            {
                name: 'Заметки',
                id: 5,
                type: "text",
                field: 'note',
                value: '',
            },
            {
                name: 'Глобальный фильтр',
                id: 6,
                type: "globalFilter",
                field: 'globalFilter',
                value: '',
            },
        ]

    }
    },
    actions: {

        addOrder({ commit }, order) {
            if (order.id == null) {
                OrdersAPI.addOrder(order).then((res) => {
                    commit('addOrder', res)
                })
            }
        },

        getAllOrders({ commit }) {
            console.log('getAllOrders 2')
            OrdersAPI.getAllOrders().then((res) => {
                
                commit('setAllOrders', res)
            })
        },

        updateOrder({ commit, state }, order) {
            let result = state.origin.includes((item) => item.id == order.id)
            if (result !== undefined) {

                OrdersAPI.updateOrder(order).then(() => {
                    console.log('orderUpdated!!!')
                    commit('updateOrder', order)
                })
            }
        },

        deleteOrder({ commit, state }, id) {
            if (id !== null) {
                let order = state.order = state.origin.find((item) => item.id == id)
                OrdersAPI.deleteOrder(order.id).then(() => {
                    commit('deleteOrder', order.id)
                })
            }

        },

        setOrderDefault({ commit }) {
            commit('setOrderDefault')
        },


        toggleModule({ state }, param) {
            if (param == true) state.orderModal = true;
            if (param == false) state.orderModal = false;
        },

        addFilter({ state , getters}, id) {
            let filter = getters.allFilter.find((filter) => filter.id == id);
            if (!state.activeFilters.includes(filter)) state.activeFilters.push(filter);
        },
        deleteFilter({ state }, id) {
            state.activeFilters = state.activeFilters.filter(filter => filter.id !== id)
        },

        setFilter({ state }, { field, value }) {
            if (value == null) return
            let filter = null
            if (field == 'dateRange') {
                filter = state.activeFilters.find(item => item.field == field)
                filter.value[0] = value[0]
                filter.value[1] = value[1]

            } else {
                filter = state.activeFilters.find(item => item.field == field)
                filter.value = value

            }

        },

        applyFilters({ state, dispatch }) {
            state.filtered = state.origin
            state.activeFilters.forEach(function (filter) {
                switch (filter.type) {
                    case 'select': dispatch('selectFilter', { field: filter.field, value: filter.value })
                        break
                    case 'text': dispatch('textFilter', { field: filter.field, value: filter.value })
                        break
                    case 'dateRange': dispatch('dateRangeFilter', { value: filter.value })
                        break
                    case 'globalFilter': dispatch('globalFilter', { value: filter.value })
                        break
                }
            })
        },

        textFilter({ state }, { field, value }) {
            state.filtered = state.filtered.filter(function (item) {
                if (item[field].toLowerCase().includes(value.toLowerCase())) return true
                return false;
            });
        },

        selectFilter({ state }, { field, value }) {
            state.filtered = state.filtered.filter(function (item) {
                if (item[field] == value) return true
                return false;
            });
        },

        dateRangeFilter({ state }, { value }) {
            if (value == null) {
                state.filtered = state.filtered.filter(function () {
                    return true
                })
                return
            }

            let start = moment(value[0]).format(moment.HTML5_FMT.DATE);
            let end = moment(value[1]).format(moment.HTML5_FMT.DATE);

            state.filtered = state.filtered.filter(function (item) {

                let dateStart = moment(item['dateEnd'])
                let dateEnd = moment(item['dateStart'])

                if (dateStart.isBetween(start, end)) return true
                if (dateEnd.isBetween(start, end)) return true

                // if (dateStart.isAfter(start) && dateEnd.isBefore(end)) return true
                if (dateStart.isBefore(start) && dateEnd.isAfter(end)) return true

                return false;
            });
        },
        globalFilter({ state }, {value}) {
            let buf = ''
            state.filtered = state.filtered.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] !== String) buf = String(item[key]).toLowerCase()
             
                    if (buf.includes(value)) return true;
                }
                return false;
            });
        },
    },
    mutations: {

        addOrder(state, order) {
            state.origin.push(order)
        },

        deleteOrder(state, id) {
            let indexOrder = null
            state.origin.forEach((elem, index) => {
                if (elem.id == id) indexOrder = index
            });
            state.origin.splice(indexOrder, 1)
        },

        updateOrder(state, order) {
            let indexOrder = null
            state.origin.forEach((elem, index) => {
                if (elem.id == order.id) indexOrder = index
            });
            state.origin.splice(indexOrder, 1, order)
        },

        setAllOrders(state, orders) {

            state.origin = orders
            state.filtered = orders
        },
        setOrderDefault(state) {
            state.order = {
                id: null,
                name: 'Клиент',
                dateStart: moment(),
                dateEnd: moment(),
                count: 1,
                status: 1,
                note: ''
            }
        },


    }

}