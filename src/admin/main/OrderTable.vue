<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div class="flex justify-center m-4">
                        <button @click="addOrder" type="button"
                            class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <PlusSmIconOutline class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Имя заказчика</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Аренда с</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Аренда до</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Количество сапов </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Статус </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Заметки </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <OrderItem v-for="item in orders" :item="item" :key="item.email" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import OrderItem from './OrderItem.vue'
import OrderItem from './OrderItem.vue'
import { mapState, mapMutations } from 'vuex'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/vue/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/vue/outline'


export default {
    component: {
        OrderItem,
        PlusSmIconOutline,
        PlusSmIconSolid,
    },
    // computed: mapState([
    //     // проксирует в this.count доступ к store.state.count
    //     'orders', 'people'
    // ]),

    computed: {
        ...mapState([
            // проксирует в this.count доступ к store.state.count
            'orders'
        ]),

    },


    methods: {
        ...mapMutations([
            'addOrder' // `this.add()` будет вызывать `this.$store.commit('increment')`
        ]),
        addOrder() {
            // alert('addOrder')
            // this.people.push({ name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' })
            this.$store.state.orderModule = true
        }
    },
    setup() {
        return {
            // people,
        };
    },
    components: { OrderItem }
}
</script>