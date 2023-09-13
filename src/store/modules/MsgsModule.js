// import { SupsAPI } from '@/api/SupsAPI'

export const MsgsModule = {
    namespaced: true,
    state: () => ({
        msgs: [],
    }),
    // getters: {
    //     optionsForFilter(state){

    //         const options = []
                
    //         state.origin.forEach((item)=>{
    //             options.push( {
    //                 name: item.name,
    //                 value: item.id
    //             }) 
    //         })

    //         return options;
    //     },
        
    // },
    actions: {

        // async addMsg({ commit }, sup) {
        //     if (sup.id == undefined) {

        //         const res = await SupsAPI.addSup(sup)
        //         commit('addSup', res.data.sup)
        //     }
        // },

        // async getAllMsg({ commit }) {
        //     const res = await SupsAPI.getAllSups()
        //     commit('setAllSups', res)
        // },

        // async updateSup({ commit, state }, sup) {
        //     let result = state.origin.find((item) => item.id == sup.id)
        //     if (result !== undefined) {
        //         const res = await SupsAPI.updateSup(sup)
        //         res.data.status ? commit('updateSup', res.data.sup) : console.log("fail")
        //     }
        // },

        // async updateSupImg({ commit, state }, sup) {
        //     let result = state.origin.find((item) => item.id == sup.get('id'))
        //     if (result !== undefined) {
        //         const res = await SupsAPI.updateSupImg(sup)
        //         res.data.status ? commit('updateSupImg', res.data.sup) : console.log("fail")
        //     }
        // },

        // async deleteSup({ commit, state }, id) {
        //     if (id !== null) {
        //         let sup = state.sup = state.origin.find((item) => item.id == id)
        //         await SupsAPI.deleteSup(sup.id)
        //         commit('deleteSup', sup.id)
        //     }

        // },

        // setSupDefault({ commit }) {
        //     commit('setSupDefault')
        // },

    },
    mutations: {

        // addSup(state, sup) {
        //     state.origin.push(sup)
        // },

        // deleteSup(state, id) {
        //     let indexSup = null
        //     state.origin.forEach((elem, index) => {
        //         if (elem.id == id) indexSup = index
        //     });
        //     state.origin.splice(indexSup, 1)
        // },

        // updateSup(state, sup) {
        //     let indexSup = null
        //     state.origin.forEach((elem, index) => {
        //         if (elem.id == sup.id) indexSup = index
        //     });
        //     state.origin.splice(indexSup, 1, sup)
        // },

        // updateSupImg(state, sup) {
        //     let indexSup = null
        //     state.origin.forEach((elem, index) => {
        //         if (elem.id == sup.id) indexSup = index
        //     });
        //     state.origin[indexSup].img = sup.img
        //     // state.origin.splice(indexSup, 1, sup)
        // },

        // setAllSups(state, sups) {

        //     state.origin = sups
        //     state.filtered = sups
        // },
        // setSupDefault(state) {
        //     state.sup = {
        //         id: null,
        //         name: 'Клиент',
        //         dateStart: moment(),
        //         dateEnd: moment(),
        //         count: 1,
        //         status: 1,
        //         note: ''
        //     }
        // },


    }

}