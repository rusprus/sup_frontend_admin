<template>
    <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {{ item.name }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.dateStart }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.dateEnd }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.count }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.status }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.note }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <span @click="updateOrder(item.id)"  class="text-indigo-600 hover:text-indigo-900 cursor-pointer">Изменить</span>
        </td>
    </tr>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    components:{
    },
    props: ['item'],
    computed: {
        ...mapState([
            'orders',
            'orderModule'
        ]),
    },
    methods: {
        ...mapMutations(['showOrderModule']),

        updateOrder(id) {
            this.orders.order = this.orders.origin.find((item)=>item.id == id)
            // this.$store.state.orderModule = true
            console.log('orderItem')
            this.$emit('showOrderModule', true)
            // this.showOrderModule(true)
            // console.log( this.orderModule )

        }
    }
}
</script>