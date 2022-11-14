import { OrdersAPI } from '@/api/OrdersAPI'

export const OrdersModule = {
    state: () => ({

        order: {},
        origin: [
            // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
        ],
        filtered: [],
    }),
    actions: {

        getAllOrders({ commit }) {
            OrdersAPI.getAllOrders().then((res) => {
                commit('setAllOrders', res)
            })
        },

        changeOrder({ commit }, order) {
            if (order.id == null) {
                OrdersAPI.addOrder(order).then((res) => {
                    commit('addOrder', res)
                })
            } else {
                OrdersAPI.updateOrder(order).then(() => {
                    commit('updateOrder', order)
                })
            }
        },

        setOrderDefault({ commit }) {
            commit('setOrderDefault')
        },

        deleteOrder({ commit }, id) {
            OrdersAPI.deleteOrder(id).then(() => {
                commit('deleteOrder', id)
            })
        },

        filterOrders({state}, str) {
            state.filtered = state.origin.filter(function (item) {
                for (var key in  item) {
                  if (typeof  item[key] !==  String ) item[key] = String(item[key])
                  if (item[key].indexOf(str) >= 0) return true;
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
                name: 'Unknown',
                dateStart: '2000-01-01',
                dateEnd: '2000-01-01',
                count: 1,
                status: 1,
                note: ''
            }
        },


    }

}