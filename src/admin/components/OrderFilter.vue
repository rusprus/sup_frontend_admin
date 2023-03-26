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
<template>
    <div class="bg-white">
        <FilterModal :showProp="showProp" @update-show="showProp = false" />
        <!-- Filters -->
        <section aria-labelledby="filter-heading">
            <!-- Active filters -->
            <div class="bg-gray-100 flex justify-between">
                <div class="max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                    <h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Фильтры
                        <span class="sr-only">, active</span>
                    </h3>

                    <div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

                    <div class="mt-2 sm:mt-0 sm:ml-4">
                        <div class="-m-1 flex flex-wrap items-center">
                            <span
                                v-for="filter in OrdersModule.activeFilters"
                                :key="filter.id"
                                class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                            >
                                <!-- <span v-html="filter.type"></span> -->
                                <!-- <span>
                                    <select v-if="filter.type == 'select'" v-model="selected">
                                        <option v-for="option in filter.options" :value="option.value " :key="option.value">
                                            {{ option.name }}
                                        </option>
                                    </select>   
                                </span> -->

                                <span>
                                    <SelectComponent v-if="filter.type == 'select'"  :filter="filter"/>
                                    <InputComponent v-if="filter.type == 'text' || filter.type == 'globalFilter'"  :filter="filter"/>
                                    <DateComponent v-if="filter.type == 'dateRange'"  :filter="filter"/>
                                </span>

                                <button type="button" class="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500">
                                    <!-- <span class="sr-only">Remove filter for {{ filter.name }}</span> -->
                                    <svg @click="del(filter.id)" class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="mt-2 sm:mt-0 sm:ml-4">
                        <div class="-m-1 flex flex-wrap items-center">
                            <span
                                @click="showProp = true"
                                class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900 cursor-pointer"
                            >
                                <span>Добавить </span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="max-w-7xl  py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                    <h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500">Добавить</h3>
                     </div> -->
            </div>
        </section>
    </div>
</template>

<script>
// import { ref } from "vue";
import {} from "@headlessui/vue";
import FilterModal from "@/admin/components/FilterModal"; 
import SelectComponent from "@/admin/components/SelectComponent";  
import InputComponent from "@/admin/components/InputComponent";  
import DateComponent from "@/admin/components/DateComponent";  
import { mapActions, mapState } from "vuex";

export default {
    components: {
        FilterModal,
        SelectComponent,
        InputComponent,
        DateComponent
        // Dialog,
        // DialogOverlay,
        // Disclosure,
        // DisclosureButton,
        // DisclosurePanel,
        // Menu,
        // MenuButton,
        // MenuItem,
        // MenuItems,
        // Popover,
        // PopoverButton,
        // PopoverGroup,
        // PopoverPanel,
        // TransitionChild,
        // TransitionRoot,
        // ChevronDownIcon,
        // XIcon,
    },
    data() {
        return {
            showProp: false,
            selected: 'Не выбрано'
        };
    },
    computed: {
        ...mapState(["OrdersModule"]),
    },
    methods: {
        ...mapActions(["deleteFilter", "applyFilters"]),
        del(id) {
            this.deleteFilter(id);
            this.applyFilters()
        },
    },
    mounted() {
        this.showProp = false;
    },
};
</script>
