<template>
    <div class="mt-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- <h2 class="text-lg leading-6 font-medium text-gray-900">Панель управления заказами</h2> -->
            <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Card -->
                <div v-for="card in cards" :key="card.name" @click="goto(card.href)" class="bg-white overflow-hidden shadow rounded-lg cursor-pointer">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <component :is="card.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">
                                        {{ card.name }}
                                    </dt>
                                    <dd>
                                        <div class="text-lg font-medium text-gray-900">
                                            {{ card.amount }}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="bg-gray-50 px-5 py-3">
                        <div class="text-sm">
                            <router-link :to="card.href" class="font-medium text-cyan-700 hover:text-cyan-900"> View all </router-link>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ScaleIcon } from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";


const cards = [
    { name: "Список заказов", href: "/admin/orders", icon: ScaleIcon, amount: "" },
    { name: "Список клиентов", href: "/admin/clients", icon: ScaleIcon, amount: "" },
    { name: "Календарь заказов", href: "/admin/calendar", icon: ScaleIcon, amount: "" },
    { name: "Настройки", href: "/admin/setting", icon: ScaleIcon, amount: "" },
    // More items...
];
export default {
    methods: {
        ...mapActions(["setSidebarNavigation"]),
        goto(adr){
            this.$router.push(adr)
        }
    },
    computed:{
        ...mapState(["Globals"])
    },

    mounted(){
        this.setSidebarNavigation(this.Globals.sidebarNavigation[0].name)
    },

    setup() {
        return {
            cards,
        };
    },
};
</script>
