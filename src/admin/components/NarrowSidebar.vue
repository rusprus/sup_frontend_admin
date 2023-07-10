<template>
    <nav aria-label="Sidebar" class="h-full hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto ">
        <div class="relative w-20 flex flex-col p-3 space-y-3">
            <router-link
                @click="setSidebarNavigation(item.name)"
                v-for="item in Globals.sidebarNavigation"
                :key="item.name"
                :to="item.to"
                :class="[item.current  ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700', 'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']"
            >
                <span class="sr-only">{{ item.name }}</span>
                
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </router-link>
        </div>
    </nav>
</template>

<script>

import { mapState, mapActions } from "vuex";


export default {
    data() {
        return {
            // current: 1,
            // currentPage: 'Dashboard',
            
        };
    },
    methods:{
        ...mapActions(["setSidebarNavigation"])
    },
    computed:{
        ...mapState(["Globals"])
    }
};
</script>

<style></style>
