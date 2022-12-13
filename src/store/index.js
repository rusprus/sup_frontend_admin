import { createStore } from 'vuex'
import { AuthModule } from './modules/AuthModule'
import { OrdersModule as orders } from './modules/OrdersModule'
import { CalendarModule } from './modules/CalendarModule'


const state = {
  orderModule: false,
}
const actions = {

}
const mutations = {
  showOrderModule(state, flag) {
    state.orderModule = flag
  }
}
const getters = {

}
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    AuthModule,
    CalendarModule,
    orders
  }
})