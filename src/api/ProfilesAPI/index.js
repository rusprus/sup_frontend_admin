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

    updateProfileImg(profile) {
        DefaultAPIInstance.responseType = "multipart/form-data"
        return DefaultAPIInstance({
            method: 'post',
            url: '/profiles/img',
            data: profile
        });
    },

}