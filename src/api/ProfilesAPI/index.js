import { DefaultAPIInstance } from "@/api"

export const ProfilesAPI = {

    async getProfile() {
        return DefaultAPIInstance
            .get('/profiles/current')
            .then(res => {
                return res.data.profile
            });
    },

    async addProfile(profile) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/profiles/add',
            data: profile
        }).then(res => {
            console.log(res)
            return res.data
        });
    },

    updateProfile(profile) {
        return DefaultAPIInstance({
            method: 'post',
            url: '/profiles/update',
            data: profile
        });
    },

    // deleteProfile(id) {
    //     return DefaultAPIInstance({
    //         method: 'post',
    //         url: '/profiles/delete',
    //         data: { id: id }
    //     });
    // }

}