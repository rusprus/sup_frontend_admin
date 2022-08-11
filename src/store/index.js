import { createStore } from 'vuex'
import { AuthModule } from './modules/AuthModule'
import orders from './modules/orders'

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
    orders
  }
})