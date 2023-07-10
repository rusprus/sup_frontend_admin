<template>
    <tr @click="openModal(item.id)" class="cursor-pointer">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {{ item.name }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ format(item.dateStart) }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ format(item.dateEnd) }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ supNameById(item.sup_id) }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ OrdersModule.status[item.status] }}
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
import moment from "moment";

export default {
    components: {},
    props: ["item"],
    computed: {
        ...mapState([
            "OrdersModule",
            "SupsModule"
        ]),
    },
    methods: {
        ...mapActions(["updateOrder", "toggleModule"]),

        openModal(id) {
            this.OrdersModule.order = this.OrdersModule.origin.find((item) => item.id == id);
            this.toggleModule(true);
        },
        supNameById(id){
            return this.SupsModule.origin.find((item)=>item.id == id).name
        },
        format(date) {
            return moment(date).format("YYYY-MM-DD HH:mm");
        },
    },
    mounted() {
        // console.log(this.OrdersModule.status)
    },
};
</script>
