import { LoginAPIInstance, DefaultAPIInstance } from "@/api";

export const AuthAPI = {
    /**
     * 
     * @param {string} login 
     * @param {string} password 
     * @returns 
     */
    login({ login, password }) {
        const url = '/auth//login';
        const data = { login, password };
        // console.log('in api')
        // console.log(data)
        return LoginAPIInstance.post(url, data);
    },
    logout() {
        const url = '/auth//logout';
        return DefaultAPIInstance.post(url);
    },
    register({ login, password, name, email }) {
        // alert('register send')
        // alert(login + '' + password)
        const url = '/auth/signup';
        const data = { login, password, name, email };
        return DefaultAPIInstance.post(url, data);
    }

}