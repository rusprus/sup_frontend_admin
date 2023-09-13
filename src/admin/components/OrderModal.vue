<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
module.exports = {
// ...
plugins: [
  // ...
  require('@tailwindcss/forms'),
],
  }
  ```
-->

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="show" class="z-50">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="close">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
          >
            <div>
              <form class="space-x-2 z-10">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Добавление заказа
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div class="space-x-2 z-10 grid md:grid-cols-1">
                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Заказчик
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <ComboBox :listItem="listClient" v-model:item="localClient" />
                    </div>
                  </div>

                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Аренда с
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <Datepicker v-model="dateRange" range teleport-center></Datepicker>
                    </div>
                  </div>

                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="number"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Номер сапборда
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <ComboBox :listItem="listFreeSup" v-model:item="localSup" />
                    </div>
                  </div>

                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Статус
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <ComboBox :listItem="listStatus" v-model:item="localStatus" />
                    </div>
                  </div>

                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="notes"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Заметки
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea
                        v-model="modalOrder.note"
                        rows="5"
                        cols="10"
                        name="notes"
                        id="notes"
                        autocomplete="notes"
                        class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div class="pt-5">
                <div class="flex justify-end">
                  <button
                    type="button"
                    @click="delOrder"
                    class="bg-white py-2 px-4 border border-gray-Save300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Удалить
                  </button>
                  <button
                    type="button"
                    @click="close"
                    class="bg-white py-2 px-4 border border-gray-Save300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Отменить
                  </button>
                  <button
                    type="button"
                    @click="save"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
/* eslint-disable */
// import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { mapActions, mapState } from "vuex";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";
import ComboBox from "@/admin/components/ComboBox";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    Datepicker,
    ComboBox,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      modalOrder: {},
      localSup: {},
      localClient: {},
      localStatus: {},
      dateRange: [],
    };
  },

  computed: {
    ...mapState(["OrdersModule", "SupsModule", "ClientsModule"]),
    listClient() {
      return this.ClientsModule.origin.map((item, index, array) => {
        return { id: item.id, name: item.fio };
      });
    },
    listFreeSup() {
      return this.SupsModule.origin
        .filter((sup) => {
          let result = true;

          let filtered = this.OrdersModule.origin.filter((order) => {
            return order.sup_id == sup.id;
          });

          for (let index = 0; index < filtered.length; index++) {
            const order = filtered[index];
            if (this.modalOrder.id == order.id) continue;
            if (
              moment(order.dateStart) < moment(this.dateRange[0]) &&
              moment(order.dateEnd) < moment(this.dateRange[1])
            )
              continue;
            if (
              moment(order.dateStart) > moment(this.dateRange[0]) &&
              moment(order.dateEnd) > moment(this.dateRange[1])
            )
              continue;
            result = false;
            break;
          }

          return result;
        })
        .map((item) => {
          return { id: item.id, name: item.name };
        });
    },
    listStatus() {
      return this.OrdersModule.status;
    },
  },

  watch: {
    show() {
      this.modalOrder = this.OrdersModule.order;

      this.dateRange = [this.modalOrder.dateStart, this.modalOrder.dateEnd];

      const status = this.OrdersModule.status.find(
        (item) => item.id === this.modalOrder.status
      );
      if (status) {
        this.localStatus = {
          id: status.id,
          name: status.name,
        };
      } else {
        this.localStatus = {
          id: null,
          name: null,
        };
      }

      const sup = this.SupsModule.origin.find(
        (item) => item.id === this.modalOrder.sup_id
      );
      if (sup) {
        this.localSup = {
          id: sup.id,
          name: sup.name,
        };
      } else {
        this.localSup = {
          id: null,
          name: null,
        };
      }

      const client = this.ClientsModule.origin.find(
        (item) => item.id === this.modalOrder.client_id
      );
      if (client) {
        this.localClient = {
          id: client.id,
          name: client.fio,
        };
      } else {
        this.localClient = {
          id: null,
          name: null,
        };
      }
    },
  },

  methods: {
    ...mapActions("OrdersModule", [
      "addOrder",
      "updateOrder",
      "deleteOrder",
      "toggleModal",
    ]),
    close() {
      this.toggleModal(false);
    },
    save() {
      if (this.modalOrder.id !== null) {
        this.updateOrder({
          id: this.modalOrder.id,
          client_id: this.localClient.id,
          sup_id: this.localSup.id,
          dateStart: this.dateRange[0],
          dateEnd: this.dateRange[1],
          status: this.localStatus.id,
          note: this.modalOrder.note,
        });
      } else {
        this.addOrder({
          client_id: this.localClient.id,
          sup_id: this.localSup.id,
          dateStart: this.dateRange[0],
          dateEnd: this.dateRange[1],
          status: this.localStatus.id,
          note: this.modalOrder.note,
        });
      }
      this.toggleModal(false);
    },
    delOrder() {
      if (this.modalOrder.id !== null) {
        this.deleteOrder(this.modalOrder.id);
      }
      this.toggleModal(false);
    },
  },

  mounted() {
    this.close();
  },
  setup() {
    return {};
  },
};
</script>
