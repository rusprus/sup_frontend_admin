import axios from 'axios'

const loginConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'https://api.spbsupboard.ru',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'https://api.spbsupboard.ru'
  }
}

export const LoginAPIInstance = axios.create(loginConfig)

const defaultConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'https://api.spbsupboard.ru',
  headers: {
    'Content-Type': 'application/json',
    'XAuthorization': localStorage.getItem('token'),
    // 'Access-Control-Allow-Origin': process.env.VUE_APP_BASE_URL,
    'Access-Control-Allow-Origin':'https://api.spbsupboard.ru'
  }
}



export const DefaultAPIInstance = axios.create(defaultConfig)


