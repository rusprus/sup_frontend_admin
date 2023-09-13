import { ClientsAPI } from '@/api/ClientsAPI'
import { applyFilters, setParamFilter, addFilter as localAddFilter , deleteFilter as localDeleteFilter  } from "@/helpers";

export const ClientsModule = {
    namespaced: true,
    state: () => ({

        client: {},
        origin: [
        ],
        clientModal: false,
        status: {
            1: 'Не выбрано',
            2: 'Планируется',
            3: 'Активен',
            4: 'Завершен',
            5: 'Не подошел',
        },
        activeFilters: [],


    }),

    getters: {
        filtered(state){
            return applyFilters(state.activeFilters, state.origin)
        },

        options(state) {

            const options = []

            state.origin.forEach((item) => {
                options.push({
                    name: item.fio,
                    value: item.id
                })
            })

            return options;
        },

        allFilter() {
            // state, getters, rootState, rootGetters
            return [
                // {
                //     name: 'Имя клиента',
                //     id: 1,
                //     type: "select",
                //     field: 'manager_id',
                //     value: null,
                //     options: rootGetters['ClientsModule/options']
                // },
                {
                    name: 'ФИО',
                    id: 2,
                    type: "text",
                    field: 'fio',
                    value: '',
                }, {
                    name: 'Телеграмм',
                    id: 3,
                    type: "text",
                    field: 'tlg',
                    value: '',
                },
                {
                    name: 'Заметки',
                    id: 4,
                    type: "text",
                    field: 'notes',
                    value: '',
                },
                // {
                //     name: 'Глобальный фильтр',
                //     id: 6,
                //     type: "globalFilter",
                //     field: 'globalFilter',
                //     value: '',
                // },
            ]

        }
    },
    actions: {

        addClient({ commit }, client) {
            if (client.id == null) {
                ClientsAPI.addClient(client).then((res) => {
                    commit('addClient', res)
                })
            }
        },

        getAllClients({ commit }) {
            console.log('getAllClients 2')
            ClientsAPI.getAllClients().then((res) => {

                commit('setAllClients', res)
            })
        },

        updateClient({ commit, state }, client) {
            let result = state.origin.includes((item) => item.id == client.id)
            if (result !== undefined) {

                ClientsAPI.updateClient(client).then(() => {
                    console.log('clientUpdated!!!')
                    commit('updateClient', client)
                })
            }
        },

        deleteClient({ commit, state }, id) {
            if (id !== null) {
                let client = state.client = state.origin.find((item) => item.id == id)
                ClientsAPI.deleteClient(client.id).then(() => {
                    commit('deleteClient', client.id)
                })
            }

        },

        setClientDefault({ commit }) {
            commit('setClientDefault')
        },


        toggleModal({ state }, param) {
            if (param == true) state.clientModal = true;
            if (param == false) state.clientModal = false;
        },

        addFilter({ state, getters }, id) {
            state.activeFilters = localAddFilter( getters.allFilter, state.activeFilters, id)
        },
        deleteFilter({ state }, id) {
            state.activeFilters = localDeleteFilter(state.activeFilters, id)
        },
        setFilter({ state }, { field, value, type }) {
            state.activeFilters = setParamFilter(state.activeFilters, field, value, type)
        },

    },
    mutations: {

        addClient(state, client) {
            state.origin.push(client)
        },

        deleteClient(state, id) {
            let indexClient = null
            state.origin.forEach((elem, index) => {
                if (elem.id == id) indexClient = index
            });
            state.origin.splice(indexClient, 1)
        },

        updateClient(state, client) {
            let indexClient = null
            state.origin.forEach((elem, index) => {
                if (elem.id == client.id) indexClient = index
            });
            state.origin.splice(indexClient, 1, client)
        },

        setAllClients(state, clients) {

            state.origin = clients
            // state.filtered = clients
        },
        setClientDefault(state) {
            state.client = {
                id: null,
                manager_id: null,
                fio: '',
                tlg: '',
                notes: ''
            }
        },


    }

}