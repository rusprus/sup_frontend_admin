import { ClientsAPI } from '@/api/ClientsAPI'

export const ClientsModule = {
    state: () => ({

        client: {},
        origin: [
        ],
        filtered: [],
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

    getters:{
        clientOptionsForFilter(state){

            const options = []
            
            state.origin.forEach((item)=>{
                options.push( {
                    name: item.fio,
                    value: item.id
                }) 
            })

            return options;
        },
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


        toggleClientModal({ state }, param) {
            if (param == true) state.clientModal = true;
            if (param == false) state.clientModal = false;
        },

        // addFilter({ state , getters}, id) {
        //     let filter = getters.allFilter.find((filter) => filter.id == id);
        //     if (!state.activeFilters.includes(filter)) state.activeFilters.push(filter);
        // },
        // deleteFilter({ state }, id) {
        //     state.activeFilters = state.activeFilters.filter(filter => filter.id !== id)
        // },

        // setFilter({ state }, { field, value }) {
        //     if (value == null) return
        //     let filter = null
        //     if (field == 'dateRange') {
        //         filter = state.activeFilters.find(item => item.field == field)
        //         filter.value[0] = value[0]
        //         filter.value[1] = value[1]

        //     } else {
        //         filter = state.activeFilters.find(item => item.field == field)
        //         filter.value = value

        //     }

        // },

        // applyFilters({ state, dispatch }) {
        //     state.filtered = state.origin
        //     state.activeFilters.forEach(function (filter) {
        //         switch (filter.type) {
        //             case 'select': dispatch('selectFilter', { field: filter.field, value: filter.value })
        //                 break
        //             case 'text': dispatch('textFilter', { field: filter.field, value: filter.value })
        //                 break
        //             case 'dateRange': dispatch('dateRangeFilter', { value: filter.value })
        //                 break
        //             case 'globalFilter': dispatch('globalFilter', { value: filter.value })
        //                 break
        //         }
        //     })
        // },

        // textFilter({ state }, { field, value }) {
        //     state.filtered = state.filtered.filter(function (item) {
        //         if (item[field].toLowerCase().includes(value.toLowerCase())) return true
        //         return false;
        //     });
        // },

        // selectFilter({ state }, { field, value }) {
        //     state.filtered = state.filtered.filter(function (item) {
        //         if (item[field] == value) return true
        //         return false;
        //     });
        // },

        // dateRangeFilter({ state }, { value }) {
        //     if (value == null) {
        //         state.filtered = state.filtered.filter(function () {
        //             return true
        //         })
        //         return
        //     }

        //     let start = moment(value[0]).format(moment.HTML5_FMT.DATE);
        //     let end = moment(value[1]).format(moment.HTML5_FMT.DATE);

        //     state.filtered = state.filtered.filter(function (item) {

        //         let dateStart = moment(item['dateEnd'])
        //         let dateEnd = moment(item['dateStart'])

        //         if (dateStart.isBetween(start, end)) return true
        //         if (dateEnd.isBetween(start, end)) return true

        //         // if (dateStart.isAfter(start) && dateEnd.isBefore(end)) return true
        //         if (dateStart.isBefore(start) && dateEnd.isAfter(end)) return true

        //         return false;
        //     });
        // },
        // globalFilter({ state }, {value}) {
        //     let buf = ''
        //     state.filtered = state.filtered.filter(function (item) {
        //         for (var key in item) {
        //             if (typeof item[key] !== String) buf = String(item[key]).toLowerCase()
             
        //             if (buf.includes(value)) return true;
        //         }
        //         return false;
        //     });
        // },
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
            state.filtered = clients
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