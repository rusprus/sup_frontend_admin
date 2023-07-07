import { createStore } from 'vuex'
import { AuthModule } from './modules/AuthModule'
import { OrdersModule } from './modules/OrdersModule'
import { CalendarModule } from './modules/CalendarModule'
import { SupsModule } from './modules/SupsModule'
import { ProfilesModule } from './modules/ProfilesModule'
import { Globals } from './modules/Globals'


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
    OrdersModule,
    SupsModule,
    ProfilesModule,
    Globals,
  }
})