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
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
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
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">Добавление заказа</h3>
                                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                </div>
                                <div class="space-x-2 z-10 grid md:grid-cols-1">
                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Имя заказчика </label>
                                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                                            <input
                                                type="text"
                                                v-model="OrdersModule.order.name"
                                                name="first-name"
                                                id="first-name"
                                                autocomplete="given-name"
                                                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Аренда с </label>
                                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                                            <!-- <input
                                                type="datetime"
                                                v-model="OrdersModule.order.dateStart"
                                                name="last-name"
                                                id="last-name"
                                                autocomplete="family-name"
                                                class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            /> -->
                                            <Datepicker v-model="date" @update:modelValue="selectedDate" range teleport-center></Datepicker>
                                        </div>
                                    </div>

                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label for="number" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Номер сапборда </label>
                                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                                            <!-- <input
                                                v-model="OrdersModule.order.sup_id"
                                                id="number"
                                                name="number"
                                                type="number"
                                                autocomplete="number"
                                                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                            /> -->
                                            <select
                                                v-model="OrdersModule.order.sup_id"
                                                class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                            >
                                                <option v-for="option in filteredOptions" :value="option.value" :key="option">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Статус </label>
                                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                                            <select
                                                id="country"
                                                v-model="OrdersModule.order.status"
                                                name="country"
                                                autocomplete="country-name"
                                                class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            >
                                                <!-- <option v-for="option in filteredOptions" :value="option.value" :key="option.value" ></option> -->
                                                <option :value="1">не выбрано</option>
                                                <option :value="2">планируется</option>
                                                <option :value="3">активен</option>
                                                <option :value="4">завершен</option>
                                                <option :value="5">не подошел</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label for="notes" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Заметки </label>
                                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                                            <textarea
                                                v-model="OrdersModule.order.note"
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
// import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { mapActions, mapState } from "vuex";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

export default {
    components: {
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
        Datepicker,
    },
    props: {
        showProp: Boolean,
    },
    data() {
        return {
            options: [
                { text: "1 сап", value: 1 },
                { text: "2 сап", value: 2 },
                { text: "3 сап", value: 3 },
                { text: "4 сап", value: 4 },
            ],
            filteredOptions: [],
            date: [],
        };
    },

    computed: {
        ...mapState(["OrdersModule"]),
    },

    watch: {
        showProp() {
            this.date = [this.OrdersModule.order.dateStart, this.OrdersModule.order.dateEnd];

            this.filteredOptions = this.listFreeSup(this.date);
        },
    },

    methods: {
        ...mapActions(["addOrder", "updateOrder", "deleteOrder", "toggleModule"]),
        close() {
            this.toggleModule(false);
        },
        save() {
            if (this.OrdersModule.order.id !== null) {
                this.updateOrder({
                    id: this.OrdersModule.order.id,
                    name: this.OrdersModule.order.name,
                    dateStart: this.date[0],
                    dateEnd: this.date[1],
                    sup_id: this.OrdersModule.order.sup_id,
                    status: this.OrdersModule.order.status,
                    note: this.OrdersModule.order.note,
                    // count: this.OrdersModule.order.count,
                });
            } else {
                this.addOrder(this.OrdersModule.order);
            }
            this.toggleModule(false);
        },
        delOrder() {
            if (this.OrdersModule.order.id !== null) {
                this.deleteOrder(this.OrdersModule.order.id);
            }
            this.toggleModule(false);
        },
        selectedDate(modelData) {
            this.date = modelData;
            this.filteredOptions = this.listFreeSup(this.date);
        },

        listFreeSup(range) {
            let arr = this.OrdersModule.origin;

            return this.options.filter(function (option) {
                let result = true;

                let filtered = arr.filter(function (order) {
                    return order.sup_id == option.value;
                });

                for (let index = 0; index < filtered.length; index++) {
                    const order = filtered[index];
                    if (moment(order.dateStart) < moment(range[0]) && moment(order.dateEnd) < moment(range[1])) continue;
                    if (moment(order.dateStart) > moment(range[0]) && moment(order.dateEnd) > moment(range[1])) continue;
                    result = false;
                    break;
                }

                return result;
            });
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
