<template>
    <div>
        <!-- Сапбоарды -->
        <div class="mt-10 mx-10 divide-y divide-gray-200">
            <div class="flex place-content-between">
                <div class="space-y-1">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Сапбоарды
                    </h3>
                    <p class="max-w-2xl text-sm text-gray-500">
                        Название, комплектация.
                    </p>
                </div>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    @click="openModalAdd"
                >
                    Добавить
                </button>
            </div>

            <!-- Карточка сапборда -->
            <div class="mt-6" v-for="sup in SupsModule.origin" :key="sup.id">
                <dl class="divide-y divide-gray-200">
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt class="text-sm font-medium text-gray-500">
                            Название
                        </dt>
                        <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <span class="flex-grow">{{ sup.name }}</span>
                            <span class="ml-4 flex-shrink-0">
                                <button
                                    @click="openModalUpdate(sup.id)"
                                    type="button"
                                    class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Обновить
                                </button>
                            </span>
                        </dd>
                    </div>
                    <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                    >
                        <dt class="text-sm font-medium text-gray-500">Фото</dt>
                        <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <span class="flex-grow">
                                <img
                                    class="h-8 w-8 rounded-full"
                                    :src="
                                        Globals.apiUrl +
                                        'uploads/' +
                                        ProfilesModule.profile.login +
                                        '/' +
                                        sup.img
                                    "
                                    alt=""
                                />
                            </span>
                            <span
                                class="ml-4 flex-shrink-0 flex items-start space-x-4"
                            >
                                <button
                                    @click="openModalUpdate(sup.id)"
                                    type="button"
                                    class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Обновить
                                </button>
                            </span>
                        </dd>
                    </div>
                    <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                    >
                        <dt class="text-sm font-medium text-gray-500">
                            Модель
                        </dt>
                        <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <span class="flex-grow">
                                {{ sup.model }}
                            </span>
                            <span
                                class="ml-4 flex-shrink-0 flex items-start space-x-4"
                            >
                                <button
                                    @click="openModalUpdate(sup.id)"
                                    type="button"
                                    class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Обновить
                                </button>
                            </span>
                        </dd>
                    </div>
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt class="text-sm font-medium text-gray-500">
                            Статус
                        </dt>
                        <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <span class="flex-grow">{{
                                SupsModule.status[sup.status]
                            }}</span>
                            <span class="ml-4 flex-shrink-0">
                                <button
                                    @click="openModalUpdate(sup.id)"
                                    type="button"
                                    class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Обновить
                                </button>
                            </span>
                        </dd>
                    </div>
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt class="text-sm font-medium text-gray-500"></dt>
                        <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                            <span class="flex-grow"></span>
                            <span class="ml-4 flex-shrink-0">
                                <button
                                    type="button"
                                    class="bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    @click="deleteCurrentSup(sup.id)"
                                >
                                    Удалить сапбоард
                                </button>
                            </span>
                        </dd>
                    </div>
                </dl>
            </div>
            <!--  -->
        </div>

        <!-- Модальное окно добавления сапборда -->
        <TransitionRoot appear :show="isOpenAdd" as="template">
            <Dialog as="div" @close="closeModalAdd" class="relative z-10">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Добавление сапборда
                                </DialogTitle>
                                <form name="supform" novalidate>
                                    <div class="mt-2">
                                        <div class="mb-6">
                                            <label
                                                for="supname"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Название</label
                                            >
                                            <input
                                                v-model="newSup.name"
                                                required
                                                pattern="(\w|\d|\s){1,40}"
                                                type="text"
                                                class="invalid:focus:ring-red-500 invalid:focus:border-red-500 invalid:border-red-600 bg-gray-50 border valid:border-gray-300 text-gray-900 text-sm rounded-lg valid:focus:ring-blue-500 valid:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 valid:dark:border-gray-600 valid:dark:placeholder-gray-400 dark:text-white valid:dark:focus:ring-blue-500 valid:dark:focus:border-blue-500"
                                            />
                                            <p
                                                v-show="error.supname"
                                                class="mt-2 text-sm text-red-600 dark:text-red-500"
                                            >
                                                <span class="font-medium"></span
                                                >Требуемый формат:
                                                [1-9],[aA-zZ],[_, ]
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <label
                                                for="supmodel"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Модель</label
                                            >
                                            <input
                                                v-model="newSup.model"
                                                required
                                                pattern="(\w|\d|\s){1,40}"
                                                type="text"
                                                class="invalid:focus:ring-red-500 invalid:focus:border-red-500 invalid:border-red-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <p
                                                v-show="error.supmodel"
                                                class="mt-2 text-sm text-red-600 dark:text-red-500"
                                            >
                                                <span class="font-medium"></span
                                                >Требуемый формат:
                                                [1-9],[aA-zZ],[_, ]
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <label
                                                for="status"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Статус</label
                                            >
                                            <select
                                                v-model="newSup.status"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option selected disabled>
                                                    Не выбрано
                                                </option>
                                                <option
                                                    v-for="(
                                                        item, index
                                                    ) in SupsModule.status"
                                                    :key="index"
                                                    :value="index"
                                                >
                                                    {{
                                                        SupsModule.status[index]
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-6">
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="supimg"
                                            >Фото</label
                                        >
                                        <input
                                            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            id="newImg"
                                            type="file"
                                        />
                                    </div>
                                    <div class="mt-4 flex flex-row-reverse">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="addNewSup()"
                                        >
                                            Сохранить
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!--  -->

        <!-- Модальное окно обновления сапа-->
        <TransitionRoot appear :show="isOpenUpdate" as="template">
            <Dialog as="div" @close="closeModalUpdate" class="relative z-10">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Добавление сапборда
                                </DialogTitle>
                                <form name="supform" novalidate>
                                    <div class="mt-2">
                                        <div class="mb-6">
                                            <label
                                                for="supname"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Название</label
                                            >
                                            <input
                                                v-model="currentSup.name"
                                                required
                                                pattern="(\w|\d|\s){1,40}"
                                                type="text"
                                                class="invalid:focus:ring-red-500 invalid:focus:border-red-500 invalid:border-red-600 bg-gray-50 border valid:border-gray-300 text-gray-900 text-sm rounded-lg valid:focus:ring-blue-500 valid:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 valid:dark:border-gray-600 valid:dark:placeholder-gray-400 dark:text-white valid:dark:focus:ring-blue-500 valid:dark:focus:border-blue-500"
                                            />
                                            <p
                                                v-show="error.supname"
                                                class="mt-2 text-sm text-red-600 dark:text-red-500"
                                            >
                                                <span class="font-medium"></span
                                                >Требуемый формат:
                                                [1-9],[aA-zZ],[_, ]
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <label
                                                for="supmodel"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Модель</label
                                            >
                                            <input
                                                v-model="currentSup.model"
                                                required
                                                pattern="(\w|\d|\s){1,40}"
                                                type="text"
                                                class="invalid:focus:ring-red-500 invalid:focus:border-red-500 invalid:border-red-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                            <p
                                                v-show="error.supmodel"
                                                class="mt-2 text-sm text-red-600 dark:text-red-500"
                                            >
                                                <span class="font-medium"></span
                                                >Требуемый формат:
                                                [1-9],[aA-zZ],[_, ]
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <label
                                                for="status"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >Статус</label
                                            >
                                            <select
                                                v-model="currentSup.status"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option selected disabled>
                                                    Не выбрано
                                                </option>
                                                <option
                                                    v-for="(
                                                        item, index
                                                    ) in SupsModule.status"
                                                    :key="index"
                                                    :value="index"
                                                >
                                                    {{
                                                        SupsModule.status[index]
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-6">
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="supimg"
                                            >Фото</label
                                        >
                                        <img :src="currentSup.img" alt="" />
                                        <input
                                            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            id="updatedImg"
                                            type="file"
                                            accept="image/jpg"
                                        />
                                    </div>
                                    <div class="mt-4 flex flex-row-reverse">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="
                                                updateCurrentSup(currentSup)
                                            "
                                        >
                                            Сохранить
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!--  -->
    </div>
</template>
<script>
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            newSup: {},
            currentSup: {},
            isOpenAdd: false,
            isOpenUpdate: false,
            error: { supname: false },
            valueimg: "",
            supimg: "",
        };
    },
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
    },

    computed: {
        ...mapState(["SupsModule", "Globals", "ProfilesModule"]),
    },

    methods: {
        ...mapActions([
            "addSup",
            "getAllSups",
            "updateSup",
            "updateSupImg",
            "deleteSup",
            "getProfile",
        ]),
        addNewSup() {
            this.addSup(this.newSup).then(async () => {
                this.newSup = this.SupsModule.origin.at(-1);

                await this.addImg();
                this.newSup = {};
                this.closeModalAdd();
            });
        },
        openModalAdd() {
            this.isOpenAdd = true;
        },
        closeModalAdd() {
            this.isOpenAdd = false;
        },

        async updateCurrentSup() {
            await this.updateSup(this.currentSup);
            await this.updateImg();

            this.closeModalUpdate();
        },

        async addImg() {
            const selectedFile = document.getElementById("newImg").files[0];
            if (selectedFile !== undefined) {
                let form1 = new FormData();
                form1.append("id", this.newSup.id);
                form1.append("img", selectedFile);
                await this.updateSupImg(form1);
            }
        },

        async updateImg() {
            const selectedFile = document.getElementById("updatedImg").files[0];
            if (selectedFile !== undefined) {
                let form1 = new FormData();
                form1.append("id", this.currentSup.id);
                form1.append("sup_img", selectedFile);
                await this.updateSupImg(form1);
            }
        },

        deleteCurrentSup(id) {
            let isTrue = confirm("Уверенны что хотите удалить доску?");
            if (isTrue) {
                this.deleteSup(id);
            }
            this.closeModalAdd();
        },

        closeModalUpdate() {
            this.isOpenUpdate = false;
        },
        openModalUpdate(id) {
            this.currentSup = this.SupsModule.origin.find(
                (item) => item.id == id
            );
            this.isOpenUpdate = true;
        },
        previewFiles() {
            // let form1 = new FormData(document.forms[0]);
            // console.log(form1);
            // console.log(event.target.value);
        },
    },

    watch: {
        isOpenAdd() {
            this.$nextTick(() => {
                Array.prototype.forEach.call(
                    document.forms.supform.elements,
                    (elem) => {
                        if (elem.type !== "button") {
                            elem.addEventListener("input", () => {
                                if (elem.checkValidity()) {
                                    this.error[elem.name] = false;
                                } else {
                                    this.error[elem.name] = true;
                                }
                            });
                        }
                    }
                );
            });
        },
    },

    mounted() {
        this.getAllSups();
        this.getProfile();
    },
};
</script>
