import { DefaultAPIInstance } from "@/api"
import { AuthAPI } from "@/api/AuthAPI"
import { UserRoles } from "@/types/Auth"

export const AuthModule = {
    // namespaced: true,

    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
                userRole: localStorage.getItem('userRole') || UserRoles.Guest
            }
        }
    },

    getters: {
        getUserRole: (state) => state.credentials.userRole,
        isAuthorized: (state) => state.credentials.token !== null
        // Object.prototype.hasOwnProperty.call(localStorage, 'token'),
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token
            localStorage.setItem('token', token)
        },

        setUserRole(state, userRole) {
            state.credentials.userRole = userRole
            localStorage.setItem('userRole', userRole)

        },
        deleteToken(state) {
            state.credentials.token = null
            localStorage.removeItem('token')
        },
        deleteUserRole(state) {
            state.credentials.userRole = null
            localStorage.removeItem('userRole')

        },
    },

    actions: {
        onLogin({ commit }, { login, password }) {
            console.log('action login')
            AuthAPI.login( {login, password }).then((res) => {
                commit('setToken', res.data.token);
                commit('setUserRole', res.data.userRole);
                DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.data.token}`
            })
        },
        onLogout({ commit }) {
            console.log('after login')
            commit('deleteToken')
            commit('deleteUserRole');
            delete DefaultAPIInstance.defaults.headers['authorization']

        }
    }
}