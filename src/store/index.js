import { createStore } from 'vuex'
import { AuthModule } from './modules/AuthModule'
import { OrdersModule } from './modules/OrdersModule'
import { ClientsModule } from './modules/ClientsModule'
import { CalendarModule } from './modules/CalendarModule'
import { SupsModule } from './modules/SupsModule'
import { ProfilesModule } from './modules/ProfilesModule'
import { MsgsModule } from './modules/MsgsModule'
import { Globals } from './modules/Globals'


const state = {
  // orderModal: false,
}
const actions = {

}
const mutations = {
  showOrderModal(state, flag) {
    state.orderModal = flag
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
    ClientsModule,
    SupsModule,
    ProfilesModule,
    MsgsModule,
    Globals,
  }
})