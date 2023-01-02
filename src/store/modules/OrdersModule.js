import { OrdersAPI } from '@/api/OrdersAPI'

export const OrdersModule = {
    state: () => ({

        order: {},
        origin: [
            // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
        ],
        filtered: [],
        orderModule: false
    }),
    actions: {

        addOrder( {commit}, order){
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
           let result = state.origin.includes((item)=>item.id == order.id)
            if (result !== undefined) {

                OrdersAPI.updateOrder(order).then(() => {
                    console.log('orderUpdated!!!')
                    commit('updateOrder', order)
                })
            }
        },

        deleteOrder({ commit, state }, id) {
            if(id !== null){
                let order = state.order = state.origin.find((item)=>item.id == id)
                OrdersAPI.deleteOrder(order.id).then(() => {
                    commit('deleteOrder', order.id)
                })
            }
            
        },

        setOrderDefault({ commit }) {
            commit('setOrderDefault')
        },

        filterOrders({ state }, str) {
            state.filtered = state.origin.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] !== String) item[key] = String(item[key])
                    if (item[key].indexOf(str) >= 0) return true;
                }
                return false;
            });
        },
        toggleModule({ state }, param) {
            if(param == true)state.orderModule = true;
            if(param == false)state.orderModule = false;
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
            console.log('setAllOrders')

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