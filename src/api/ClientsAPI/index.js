import { DefaultAPIInstance } from "@/api"

export const ClientsAPI = {

    async getAllClients() {
        console.log('getAllClients 3')
        return DefaultAPIInstance
            .get('/clients/all')
            .then(res => {
                console.log(res)
                return res.data.clients
            });
    },

    async addClient(client) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/clients/add',
            data: client
        }).then(res => {
            return res.data
        });
    },

    updateClient(client) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/clients/update',
            data: client
        });
    },

    deleteClient(id) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/clients/delete',
            data: { id: id }
        });
    }

}