<template>
    <tr @click="openModal(item.id)" class="cursor-pointer">
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
            <!-- <span  class="text-indigo-600 hover:text-indigo-900 cursor-pointer">Изменить</span> -->
        </td>
    </tr>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    components: {},
    props: ["item"],
    computed: {
        ...mapState([
            "orders",
            // 'orderModule'
        ]),
    },
    methods: {
        ...mapActions(["updateOrder", "toggleModule"]),

        openModal(id) {
            this.orders.order = this.orders.origin.find((item) => item.id == id);
            // if (this.orders.order.id !== null) {
            //     this.updateOrder(this.orders.order.id);
            // }
            this.toggleModule(true);
        },
    },
};
</script>
