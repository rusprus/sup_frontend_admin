<template>
    <div class="mt-10 divide-y divide-gray-200">
        <div class="space-y-1 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Статусы сапборда</h3>
            <p class="max-w-2xl text-sm text-gray-500">Списки используемых статусов.</p>
        </div>
        <div class="" v-for="status in statuses" :key="status.id">
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-sm font-medium text-gray-500">Название</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"> {{ status.name }} </span>
                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Обновить
                            </button>
                            <span class="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Удалить
                            </button>
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
        <!--  -->
        <div class="space-y-1 mb-6 pt-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Статусы заказа</h3>
            <p class="max-w-2xl text-sm text-gray-500">Списки используемых статусов.</p>
        </div>
        <div class="" v-for="status in statuses" :key="status.id">
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-sm font-medium text-gray-500">Название</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"> {{ status.name }} </span>
                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Обновить
                            </button>
                            <span class="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Удалить
                            </button>
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
// import { ref } from "vue";

const statuses = [
    { id: 1, name: "Не выбрано" },
    { id: 2, name: "Активен" },
    { id: 3, name: "В ремонте" },
];

export default {
    setup() {
        // const currentTab = ref(1);
        return {
            statuses,
            // currentTab
        };
    },
};
</script>
