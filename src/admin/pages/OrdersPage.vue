<template>
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
                    <!-- Пагинация -->
                    <!-- <PaginationComponent :pageCount="pageCount" :pageNumber="pageNumber" @change-page="changePage" /> -->
                    <br />

                    <OrderFilter />
                    <!--  -->
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Имя заказчика</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[0])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Аренда с</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[1])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Аренда по</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[2])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Номер сапа</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[3])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Статус</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[4])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div class="flex">
                                        <div class="flex">Заметки</div>
                                        <div><SwitchVerticalIcon @click="sort(columns[5])" class="h-7 w-7 pl-2 cursor-pointer" aria-hidden="true" /></div>
                                    </div>
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <TransitionGroup name="flip-list">
                                <OrderItem v-for="item in OrdersModule.filtered" :item="item" :key="item.id" />
                            </TransitionGroup>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderItem from "@/admin/components/OrderItem.vue";
// import PaginationComponent from "@/admin/components/PaginationComponent"; 
import OrderFilter from "@/admin/components/OrderFilter"; 
import { mapActions, mapState } from "vuex";
import { PlusSmIcon as PlusSmIconSolid, SwitchVerticalIcon } from "@heroicons/vue/solid";
// import styles from "@tailwindcss/typography/src/styles";

export default {
    components: {
        OrderItem,
        PlusSmIconSolid,
        SwitchVerticalIcon,
        // PaginationComponent,
        OrderFilter
        // OrderModal,
    },

    data() {
        return {
            columns: ["name", "dateStart", "dateEnd", "sup_id", "status", "notes"],
            sortDirect: true,
            pageNumber: 1, // по умолчанию 0
            size: 10,
        };
    },

    computed: {
        ...mapState(["OrdersModule"]),
        paginatedData() {
            const start = (this.pageNumber - 1) * this.size,
                end = start + this.size;
            return this.OrdersModule.filtered.slice(start, end);
        },
        pageCount() {
            let l = this.OrdersModule.filtered.length,
                s = this.size;
            return Math.ceil(l / s);
        },
    },
    watch: {
        pageCount() {
            this.pageNumber = 1;
        },
    },

    methods: {
        ...mapActions(["setOrderDefault", "toggleModule"]),
        addOrder() {
            this.setOrderDefault();
            this.toggleModule(true)
        },
        showOrderModal(param) {
            this.toggleModule(param)
        },
        sort(param) {
            this.sortDirect = !this.sortDirect;
            if (param === this.columns[1] || param === this.columns[2] || param === this.columns[3] || param === this.columns[4]) {
                if (this.sortDirect) {
                    this.OrdersModule.filtered.sort((a, b) => (a[param] > b[param] ? 1 : -1));
                } else {
                    this.OrdersModule.filtered.sort((a, b) => (a[param] < b[param] ? 1 : -1));
                }
            }
            if (param === this.columns[0] || param === this.columns[5]) {
                if (this.sortDirect) {
                    this.OrdersModule.filtered.sort((a, b) => a[param].localeCompare(b[param]));
                } else {
                    this.OrdersModule.filtered.sort((a, b) => b[param].localeCompare(a[param]));
                }
            }
        },
        nextPage() {
            if (this.pageNumber < this.pageCount) this.pageNumber++;
        },
        prevPage() {
            if (this.pageNumber > 1) this.pageNumber--;
        },
        setPage(num) {
            console.log("set");
            if (num > 0 && num <= this.pageCount) this.pageNumber = num;
        },
        changePage(nextPrev) {
            console.log("changePage");
            if (nextPrev == "next") this.nextPage();
            if (nextPrev == "prev") this.prevPage();
            console.log("changePage2");
            if (typeof nextPrev == "number") this.setPage(nextPrev);
        },
    },
    setup() {
        return {
            // people,
        };
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
