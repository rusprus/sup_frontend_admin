import { DefaultAPIInstance } from "@/api"

export const OrdersAPI = {

    async getAllOrders() {
        return DefaultAPIInstance
            .get('/orders/all')
            .then(res => {
                return res.data.orders
            });
    },

    async addOrder(order) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/orders/add',
            data: order
        }).then(res => {
            return res.data
        });
    },

    updateOrder(order) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/orders/update',
            data: order
        });
    },

    deleteOrder(id) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/orders/delete',
            data: { id: id }
        });
    }

}