<template>
    <div class="mt-10 divide-y divide-gray-200">
        <div class="space-y-1">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Профиль</h3>
            <p class="max-w-2xl text-sm text-gray-500">Информация для публичного доступа.</p>
        </div>
        <div class="mt-6">
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Имя</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"><input v-model="name" /></span>
                        <span class="ml-4 flex-shrink-0">
                            <button
                                type="button"
                                @click="update"
                                class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Обновить
                            </button>
                        </span>
                    </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-sm font-medium text-gray-500">Фото</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow">
                            <img class="h-8 w-8 rounded-full" src="" :alt="photo" />
                        </span>
                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button
                                type="button"
                                @click="update"
                                class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Обновить
                            </button>
                            <span class="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Удалить
                            </button>
                        </span>
                    </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"><input v-model="email" /></span>
                        <span class="ml-4 flex-shrink-0">
                            <button
                                type="button"
                                @click="update"
                                class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Обновить
                            </button>
                        </span>
                    </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">Роль</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"><input type='number' v-model="role" /></span>
                        <span class="ml-4 flex-shrink-0">
                            <button
                                type="button"
                                @click="update"
                                class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Обновить
                            </button>
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            name: "",
            email: "",
            age: 0,
            photo: "",
            role: 1,
        };
    },
    methods: {
        ...mapActions(["updateBasic"]),
        update() {
            let prof = { name: this.name, email: this.email, age: this.age, photo: this.photo, role: this.role };

            this.updateBasic(prof).then(() => console.log('ok'));
        },
    },
    computed: {
        ...mapState(["ProfilesModule"]),
    },

    mounted() {
        this.name = this.ProfilesModule.profile.name;
        this.email = this.ProfilesModule.profile.email;
        this.age = this.ProfilesModule.profile.age;
        this.photo = this.ProfilesModule.profile.photo;
        this.role = this.ProfilesModule.profile.role;
    },
};
</script>
