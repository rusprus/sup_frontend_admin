import { ProfilesAPI } from '@/api/ProfilesAPI'

export const ProfilesModule = {
    namespaced: true,
    state: () => ({
        profile: {},
    }),
    actions: {

        updateProfile({ commit }, profile) {

            ProfilesAPI.updateProfile(profile).then(() => {
                commit('updateProfile', profile)
            })
        },

        async updateProfileImg({ commit }, profile) {
            ProfilesAPI.updateProfileImg(profile).then((res) => {
                commit('setProfileImg', res.data.photo)
            })
        },

        updateNotes({ state, commit }, { note_eml, note_tlg }) {

            let profile = state.profile

            profile.note_eml = note_eml
            profile.note_tlg = note_tlg

            ProfilesAPI.updateProfile(profile).then(() => {
                commit('setProfile', profile)
            })
        },

        updateBasic({ state, commit }, { name, age, role, email }) {

            let profile = state.profile

            profile.name = name
            profile.email = email
            profile.age = age
            // profile.photo = photo
            profile.role = role

            ProfilesAPI.updateProfile(profile).then(() => {
                commit('setProfile', profile)
            })
        },

        getProfile({ commit }) {

            ProfilesAPI.getProfile().then((profile) => {
                commit('setProfile', profile)
            })
        },


    },
    mutations: {

        updateProfile(state, profile) {
            state.profile = profile
        },

        setProfile(state, profile) {

            state.profile = profile
        },

        setProfileImg(state, photo) {

            state.profile.photo = photo
        },
        // setProfileDefault(state) {
        //     state.profile = {
        //         id: null,
        //         login: 'default',
        //         password: 123,
        //         email: 'default@gmail.com',
        //         role: "guest",
        //         name: 'default',
        //         age: 25,
        //         photo: "default.jpg",
        //     }
        // },


    }

}