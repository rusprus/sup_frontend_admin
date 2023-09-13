<template>
  <tr @click="openModal(item.id)" class="cursor-pointer">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ item.fio }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ item.tlg }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ item.notes }}
    </td>
    <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ supNameById(item.sup_id) }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ ClientsModule.status[item.status] }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ item.note }}
        </td> -->
    <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
           <span  class="text-indigo-600 hover:text-indigo-900 cursor-pointer">Изменить</span> 
        </td> -->
  </tr>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {},
  props: ["item"],
  computed: {
    ...mapState([
      "ClientsModule",
      // "SupsModule"
    ]),
  },
  methods: {
    ...mapActions("ClientsModule", ["updateClient", "toggleModal"]),

    openModal(id) {
      this.ClientsModule.client = this.ClientsModule.origin.find((item) => item.id == id);
      this.toggleModal(true);
    },
    // supNameById(id){
    // return this.SupsModule.origin.find((item)=>item.id == id).name
    // },
  },
  mounted() {
    // console.log(this.ClientsModule.status)
  },
};
</script>
