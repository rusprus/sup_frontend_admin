import axios from 'axios'

const loginConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const LoginAPIInstance = axios.create(loginConfig)

const defaultConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token'),
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
}



export const DefaultAPIInstance = axios.create(defaultConfig)


