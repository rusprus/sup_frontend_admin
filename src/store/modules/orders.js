import * as api from '../../api'

export default {
    state: () => ({

        order: {},
        orders: [
            // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
        ],
    }),
    actions: {

        getAllOrders({ commit }) {
            api.getAllOrders().then((res) => {
                commit('setAllOrders', res)
            })
        },

        changeOrder({ commit }, order) {
            if (order.id == null) {
                api.addOrder(order).then((res) => {
                    commit('addOrder', res)
                })
            } else {
                api.updateOrder(order).then(() => {
                    commit('updateOrder', order)
                })
            }
        },

        setOrderDefault({ commit }) {
            commit('setOrderDefault')
        },

        deleteOrder({ commit }, id) {
            api.deleteOrder(id).then(() => {
                commit('deleteOrder', id)
            })
        }
    },
    mutations: {

        addOrder(state, order) {
            state.orders.push(order)
        },
        deleteOrder(state, id) {
            let indexOrder = null
            state.orders.forEach((elem, index) => {
                if (elem.id == id) indexOrder = index
            });
            state.orders.splice(indexOrder, 1)
        },

        updateOrder(state, order) {
            let indexOrder = null
            state.orders.forEach((elem, index) => {
                if (elem.id == order.id) indexOrder = index
            });
            state.orders.splice(indexOrder, 1, order)
        },

        setAllOrders(state, orders) {
            state.orders = orders
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