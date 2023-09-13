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
  <TransitionRoot as="template" :show="showProp" class="z-50">
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
                    Добавление клиента
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
                      ФИО
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        v-model="ClientsModule.client.fio"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Телеграмм
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        v-model="ClientsModule.client.tlg"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
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
                        v-model="ClientsModule.client.notes"
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
                    @click="delClient"
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
// import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    showProp: Boolean,
  },
  data() {
    return {
      filteredOptions: [],
      date: [],
    };
  },

  computed: {
    ...mapState(["ClientsModule", "SupsModule"]),
  },

  watch: {
    // showProp() {
    //     this.date = [this.ClientsModule.client.dateStart, this.ClientsModule.client.dateEnd];
    //     this.filteredOptions = this.listFreeSup(this.date);
    // },
  },

  methods: {
    ...mapActions("ClientsModule", [
      "addClient",
      "updateClient",
      "deleteClient",
      "toggleModal",
    ]),
    close() {
      this.toggleModal(false);
    },
    save() {
      if (this.ClientsModule.client.id !== null) {
        this.updateClient({
          id: this.ClientsModule.client.id,
          manager_id: this.ClientsModule.client.manager_id,
          fio: this.ClientsModule.client.fio,
          tlg: this.ClientsModule.client.tlg,
          notes: this.ClientsModule.client.notes,
          // count: this.ClientsModule.client.count,
        });
      } else {
        this.addClient(this.ClientsModule.client);
      }
      this.toggleModal(false);
    },
    delClient() {
      if (this.ClientsModule.client.id !== null) {
        this.deleteClient(this.ClientsModule.client.id);
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
