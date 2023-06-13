import { DefaultAPIInstance } from "@/api"

export const SupsAPI = {

    async getAllSups() {
        return DefaultAPIInstance
            .get('/sups/all')
            .then(res => {
                return res.data.sups
            });
    },

    async addSup(sup) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/sups/add',
            data: sup
        }).then(res => {
            console.log(res)
            return res.data
        });
    },

    updateSup(sup) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/sups/update',
            data: sup
        });
    },

    deleteSup(id) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/sups/delete',
            data: { id: id }
        });
    }

}