import { LoginAPIInstance, DefaultAPIInstance } from "@/api";

export const AuthAPI = {
    /**
     * 
     * @param {string} login 
     * @param {string} password 
     * @returns 
     */
    login({ login, password }) {
        const url = '/login';
        const data = { login, password };
        console.log('in api')
        console.log(data)
        return LoginAPIInstance.post(url, data);
    },
    logout() {
        const url = '/logout';
        return DefaultAPIInstance.post(url);
    }
}