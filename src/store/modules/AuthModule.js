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
        isAuthorized: (state) => state.credentials.userRole == UserRoles.Moderator
    },

    actions: {
        async onLogin({ commit }, { login, password }) {
            await AuthAPI.login({ login, password }).then((res) => {
                if (res.data.status !== false) {

                    commit('setToken', 'Bearer ' + res.data.token);
                    commit('setUserRole', res.data.userRole);

                } else {
                    commit('setMessage', res.data.error);
                }

            }).catch((err) => {
                console.log(err)
            })
        },
        onLogout({ commit }) {
            commit('deleteToken')
            commit('deleteUserRole');
        },
        onRegister({ commit }, { login, password, name, email }) {

            AuthAPI.register({ login, password, name, email }).then((res) => {
                commit('setToken', 'Bearer ' + res.data.token);
                commit('setUserRole', res.data.userRole);
                // DefaultAPIInstance.defaults.headers['authorization'] = `${res.data.token}`
            })
        },
        onPasswordUpdate(context,{ oldPass, newPass } ) {

            AuthAPI.updatePass({ oldPass, newPass }).then((res) => {
                // alert(res.data.status)
                if(res.data.status){
                    alert('Пароль обновлен')
                }else{
                    alert('Ошибка обновления')
                } 
                
                // commit('setToken', 'Bearer ' + res.data.token);
                // commit('setUserRole', res.data.userRole);
                // DefaultAPIInstance.defaults.headers['authorization'] = `${res.data.token}`
            })
        },
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token
            localStorage.setItem('token', token)
            // DefaultAPIInstance.defaults.headers.common['Authorization'] = `${token}`
            DefaultAPIInstance.defaults.headers.common['xauthorization'] = token
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
    }
 
}