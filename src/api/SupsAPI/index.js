import { DefaultAPIInstance } from "@/api"
// import axios from "axios";

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
        })
    },

    async updateSup(sup) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/sups/update',
            data: sup
        });
    },

    async updateSupImg(sup) {
        DefaultAPIInstance.responseType = "multipart/form-data"
        return DefaultAPIInstance({
            method: 'post',
            url: '/sups/img',
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