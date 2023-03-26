import { DefaultAPIInstance } from "../../api"
import { AuthAPI } from "@/api/AuthAPI"
import { UserRoles } from "@/types/Auth"

export const AuthModule = {
    // namespaced: true,

    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
                userRole: localStorage.getItem('userRole') || UserRoles.Guest,
                authMessage: localStorage.getItem('authMessage') || null,
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
        setMessage(state, authMessage) {
            state.credentials.authMessage = authMessage
            localStorage.setItem('authMessage', authMessage)
        },
    },

    actions: {
        onLogin({ commit }, { login, password }) {
            console.log('action login')
            AuthAPI.login({ login, password }).then((res) => {
                if(res.data.error === undefined){
                    commit('setToken', 'Bearer ' + res.data.token);
                    commit('setUserRole', res.data.userRole);

                    localStorage.setItem('token', 'Bearer ' + res.data.token);
                    localStorage.setItem('userRole', res.data.userRole);

                    DefaultAPIInstance.defaults.headers.common['authorization'] = `Bearer ${res.data.token}`

                    // console.log(DefaultAPIInstance.defaults.headers.common['authorization'])
                }else{
                    commit('setMessage', res.data.error);
                }
               
            }).catch((err)=>{
                console.log(err)
            })
        },
        onLogout({ commit }) {
            console.log('after login')
            commit('deleteToken')
            commit('deleteUserRole');
            delete DefaultAPIInstance.defaults.headers['authorization']

        },
        onRegister( context, { login, password, name, email }) {
            // alert('action register')
            // alert(login + ' ' + password)
            // console.log('action register')
            AuthAPI.register({ login, password, name, email }).then((response) => {
                // commit('setToken', res.data.token);
                // commit('setUserRole', res.data.userRole);
                DefaultAPIInstance.defaults.headers['authorization'] = `${response.data.token}`
            })
        },
    }
}