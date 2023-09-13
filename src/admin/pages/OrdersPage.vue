<template>
  <OrderModal :show="OrdersModule.orderModal" />
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <div class="flex justify-center m-4">
            <button
              @click="addOrder"
              type="button"
              class="flex-row items-center p-3 border border-transparent rounded-full shadow-sm text-4xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusSmIconSolid class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <br />
          <FilterBar
            :allFilter="allFilter"
            :activeFilters="OrdersModule.activeFilters"
            @add="addFilter"
            @delete="localDeleteFilter"
            @select-param="setParamFilter"
            @select-date-param="setParamFilter"
            @change-param="setParamFilter"
          />
          <TableComponent
            :listItem="listItem"
            :listTitle="listTitle"
            @open="openModal"
            @sort="sortList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBar from "@/admin/components/FilterBar";
import { mapActions, mapState, mapGetters } from "vuex";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";
import OrderModal from "@/admin/components/OrderModal.vue";
import TableComponent from "@/admin/components/TableComponent.vue";
import { sort } from "@/helpers.js";
import moment from "moment";

// import styles from "@tailwindcss/typography/src/styles";

export default {
  components: {
    TableComponent,
    PlusSmIconSolid,
    // SwitchVerticalIcon,
    // PaginationComponent,
    FilterBar,
    OrderModal,
  },

  data() {
    return {
      listTitle: [
        { field: "client_id", title: "ID" },
        { field: "client_id", title: "ФИО" },
        { field: "dateStart", title: "Начало" },
        { field: "dateEnd", title: "Конец" },
        { field: "sup_id", title: "Сап" },
        { field: "status", title: "Статус" },
        { field: "note", title: "Заметки" },
      ],
      columnsForSort: {
        client_id: {
          type: "int",
        },
        dateStart: {
          type: "int",
        },
        dateEnd: {
          type: "int",
        },
        sup_id: {
          type: "int",
        },
        status: {
          type: "int",
        },
        note: {
          type: "text",
        },
        id: {
          type: "int",
        },
      },
      sortDirect: true,
    };
  },

  computed: {
    ...mapState(["OrdersModule", "Globals", "ClientsModule", "SupsModule"]),
    ...mapGetters("OrdersModule", ["allFilter", "filtered"]),
    listItem() {
      return this.filtered.map((item) => {
        return {
          id: item.id,
          client: this.clientNameById(item.client_id),
          dateStart: this.format(item.dateStart),
          dateEnd: this.format(item.dateEnd),
          sup: this.supNameById(item.sup_id),
          status: this.statusNameById(item.status),
          note: item.note,
        };
      });
    },
  },

  methods: {
    ...mapActions("SupsModule", ["getAllSups"]),
    ...mapActions("Globals", ["setSidebarNavigation"]),
    ...mapActions("OrdersModule", [
      "setOrderDefault",
      "toggleModal",
      "addFilter",
      "deleteFilter",
      "setFilter",
    ]),
    ...mapActions("ClientsModule", ["getAllClients"]),
    supNameById(id) {
      return this.SupsModule.origin.find((item) => item.id == id).name;
    },
    statusNameById(id) {
      return this.OrdersModule.status.find((item) => item.id == id).name;
    },
    clientNameById(id) {
      return this.ClientsModule.origin.find((item) => item.id == id)?.fio;
    },
    format(date) {
      return moment(date).format("YYYY-MM-DD HH:mm");
    },
    localDeleteFilter(id) {
      this.deleteFilter(id);
    },
    setParamFilter(param) {
      const { field, value, type } = param;

      this.setFilter({ field, value, type });
    },
    addOrder() {
      this.setOrderDefault().then(() => {
        this.toggleModal(true);
      });
    },
    showOrderModal(param) {
      this.toggleModal(param);
    },
    sortList(param) {
      const { sortDirect, listItem } = sort(
        param,
        this.sortDirect,
        this.columnsForSort,
        this.filtered
      );
      this.sortDirect = sortDirect;
      this.filtered = listItem;
    },

    openModal(id) {
      this.OrdersModule.order = this.OrdersModule.origin.find((item) => item.id == id);
      this.toggleModal(true);
    },
  },
  mounted() {
    this.getAllSups();
    this.getAllClients();
    this.setSidebarNavigation(this.Globals.sidebarNavigation[1].name);
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.8s ease;
}
.active {
  background: blue;
}
</style>
