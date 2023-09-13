/* origin:  { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', sup_id: 1, note: 'Девяткино',status: 'Завершено' }, */

import { OrdersAPI } from '@/api/OrdersAPI'
import moment from "moment";
import { applyFilters, setParamFilter, addFilter as localAddFilter , deleteFilter as localDeleteFilter  } from "@/helpers";
// import {SupsModule}  from './SupsModule'

export const OrdersModule = {
    namespaced: true,
    state: () => ({

        order: {},
        origin: [],
        orderModal: false,
        status: [
            { id: 1, name: 'Не выбрано' },
            { id: 2, name: 'Планируется' },
            { id: 3, name: 'Активен' },
            { id: 4, name: 'Завершен' },
            { id: 5, name: 'Не подошел' },
        ],
        activeFilters: [],

    }),

    getters: {
        filtered(state){
            return applyFilters(state.activeFilters, state.origin)
        },

        allFilter(state, getters, rootState, rootGetters) {

            return [
                {
                    name: 'Имя клиента',
                    id: 1,
                    type: "select",
                    field: 'client_id',
                    value: null,
                    options: rootGetters['ClientsModule/options'],
                },
                {
                    name: 'Срок аренды',
                    id: 2,
                    type: "dateRange",
                    field: ['dateStart', 'dateEnd'],
                    value: [],
                }, {
                    name: 'Номер сапа',
                    id: 3,
                    type: "select",
                    field: 'sup_id',
                    value: null,
                    options: rootGetters['SupsModule/options'],
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
                // {
                //     name: 'Глобальный фильтр',
                //     id: 6,
                //     type: "globalFilter",
                //     field: 'globalFilter',
                //     value: '',
                // },
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
            OrdersAPI.getAllOrders().then((res) => {
                commit('setAllOrders', res)
            })
        },

        updateOrder({ commit, state }, order) {
            let result = state.origin.includes((item) => item.id == order.id)
            if (result !== undefined) {

                OrdersAPI.updateOrder(order).then(() => {
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
        toggleModal({ state }, param) {
            if (param == true) state.orderModal = true;
            if (param == false) state.orderModal = false;
        },

        addFilter({ state, getters }, id) {
            state.activeFilters = localAddFilter( getters.allFilter, state.activeFilters, id)
        },
        deleteFilter({ state }, id) {
            state.activeFilters = localDeleteFilter(state.activeFilters, id)
        },
        setFilter({ state }, { field, value, type }) {
            state.activeFilters = setParamFilter(state.activeFilters, field, value, type)
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
            // state.filtered = orders
        },
        setOrderDefault(state) {
            state.order = {
                id: null,
                // uid: '',
                // client_id: '',
                // sup_id: 'Клиент',
                dateStart: moment(),
                dateEnd: moment(),
                note: '',
                status: 1,
            }
        },


    }

}