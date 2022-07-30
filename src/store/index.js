import { createStore } from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import auth from './modules/auth'

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  },

  orders: [
    // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
    // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
    // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },
    // { name: 'Jane Cooper', dateStart: '00-00-00', dateEnd: '00-00-00', count: 1, note: 'Девяткино',status: 'Завершено' },

  ],
  orderModule: false,
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    auth
  }
  //   plugins: process.env.NODE_ENV !== 'production'
  //     ? [createLogger()]
  //     : []
})