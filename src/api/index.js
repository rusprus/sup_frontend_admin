import axios from 'axios'

export function getAllOrders() {
  const info = {}
  axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));

  // return { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино', status: 'Завершено' }
    return info
}




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