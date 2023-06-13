import { SupsAPI } from '@/api/SupsAPI'
import moment from "moment";

export const SupsModule = {
    state: () => ({
        order: {},
        origin: [],
        status: {
            1: "Активно",
            2: "В ремонте",
        }

    }),
    actions: {

        addSup({ commit }, sup) {
            if (sup.id == null) {

                SupsAPI.addSup(sup).then((res) => {

                    commit('addSup', res)
                })
            }
        },

        getAllSups({ commit }) {
            SupsAPI.getAllSups().then((res) => {
                commit('setAllSups', res)
            })
        },

        updateSup({ commit, state }, sup) {
            console.log(sup)
            let result = state.origin.includes((item) => item.id == sup.id)
            if (result !== undefined) {

                SupsAPI.updateSup(sup).then(() => {
                    console.log('supUpdated!!!')
                    commit('updateSup', sup)
                })
            }
        },

        deleteSup({ commit, state }, id) {
            if (id !== null) {
                let sup = state.sup = state.origin.find((item) => item.id == id)
                SupsAPI.deleteSup(sup.id).then(() => {
                    commit('deleteSup', sup.id)
                })
            }

        },

        setSupDefault({ commit }) {
            commit('setSupDefault')
        },

    },
    mutations: {

        addSup(state, sup) {
            state.origin.push(sup)
        },

        deleteSup(state, id) {
            let indexSup = null
            state.origin.forEach((elem, index) => {
                if (elem.id == id) indexSup = index
            });
            state.origin.splice(indexSup, 1)
        },

        updateSup(state, sup) {
            let indexSup = null
            state.origin.forEach((elem, index) => {
                if (elem.id == sup.id) indexSup = index
            });
            state.origin.splice(indexSup, 1, sup)
        },

        setAllSups(state, sups) {

            state.origin = sups
            state.filtered = sups
        },
        setSupDefault(state) {
            state.sup = {
                id: null,
                name: 'Клиент',
                dateStart: moment(),
                dateEnd: moment(),
                count: 1,
                status: 1,
                note: ''
            }
        },


    }

}