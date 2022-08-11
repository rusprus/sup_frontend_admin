import axios from 'axios'

export async function getAllOrders() {
  return axios
    .get('http://localhost:3000/orders')
    .then(res => {
      return res.data.orders
    });
}

export async function addOrder(order) {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/orders/add',
    data: order
  }).then(res => {
    return res.data
  });
}

export function updateOrder(order) {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/orders/update',
    data: order
  });
}

export function deleteOrder(id) {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/orders/delete',
    data: { id: id }
  });
}

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
    'Content-Type': 'application/json'
  }
}

export const DefaultAPIInstance = axios.create(defaultConfig)





// const data = require('./mock-data')
// const LATENCY = 16

// export function getAllMessages (cb) {
//   setTimeout(() => {
//     cb(data)
//   }, LATENCY)
// }

// export function createMessage ({ text, thread }, cb) {
//   const timestamp = Date.now()
//   const id = 'm_' + timestamp
//   const message = {
//     id,
//     text,
//     timestamp,
//     threadID: thread.id,
//     threadName: thread.name,
//     authorName: 'Evan'
//   }
//   setTimeout(function () {
//     cb(message)
//   }, LATENCY)
// }