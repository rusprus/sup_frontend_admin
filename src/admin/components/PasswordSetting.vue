<template>
    <div class="mt-10 divide-y divide-gray-200">
        <div class="space-y-1">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Пароль</h3>
            <p class="max-w-2xl text-sm text-gray-500">Здесь можно обновить пароль.</p>
        </div>
        <div class="mt-6">
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 grid grid-cols-3 sm:gap-4">
                    <!-- <div class="text-sm font-medium text-gray-500">Пароль</div> -->
                    <!-- <div class="text-sm font-medium text-gray-500"></div> -->
                    <div class="sm:grid sm:grid-cols-2  gap-4 col-span-2"  >
                        <input class="flex-grow" placeholder="Старый пароль" v-model="oldPass" />
                        <input class="flex-grow" placeholder="Новый пароль" v-model="newPass" />
                    </div>

                    <div class="col-span-1 mt-1 flex text-sm text-gray-900 sm:mt-0 flex-row-reverse">
                        <span class="ml-4 flex-shrink-0 ">
                            <button
                                @click="setPass()"
                                type="button"
                                class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Обновить
                            </button>
                        </span>
                    </div>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            oldPass: null,
            newPass: null,
        };
    },
    methods: {
        ...mapActions(["onPasswordUpdate"]),
        setPass() {
            if (this.oldPass !== null && this.oldPass !== null) {
                this.onPasswordUpdate({ oldPass: this.oldPass, newPass: this.newPass }).then(() => {
                    this.oldPass = null;
                    this.newPass = null;
                });
            }
        },
    },
};
</script>
