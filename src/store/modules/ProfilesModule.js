import { ProfilesAPI } from '@/api/ProfilesAPI'

export const ProfilesModule = {
    state: () => ({
        profile: {},
    }),
    actions: {

        updateProfile({ commit }, profile) {
            // console.log(profile)

            ProfilesAPI.updateProfile(profile).then(() => {
                commit('updateProfile', profile)
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

        updateBasic({ state, commit }, { name, age, photo, role, email }) {

            let profile = state.profile

            profile.name = name
            profile.email = email
            profile.age = age
            profile.photo = photo
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