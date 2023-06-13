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
    <!--
    This example requires updating your template:
    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
    <div>
        <!-- Content area -->
        <!-- <div class="md:pl-64"> -->
        <div class="">
            <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
                <!-- <div class="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
          <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div class="flex-1 flex justify-between px-4 md:px-0">
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0" action="#" method="GET">
                <label for="mobile-search-field" class="sr-only">Search</label>
                <label for="desktop-search-field" class="sr-only">Search</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input name="mobile-search-field" id="mobile-search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search" />
                  <input name="desktop-search-field" id="desktop-search-field" class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search jobs, applicants, and more" type="search" />
                </div>
              </form>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BellIcon class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">View notifications</span>
              </button>
            </div>
          </div>
        </div> -->

                <main class="flex-1">
                    <div class="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                        <div class="pt-10 pb-16">
                            <div class="px-4 sm:px-6 md:px-0">
                                <h1 class="text-3xl font-extrabold text-gray-900">Настройки</h1>
                            </div>
                            <div class="px-4 sm:px-6 md:px-0">
                                <div class="py-6">
                                    <!-- Вкладки -->
                                    <div class="lg:hidden">
                                        <label for="selected-tab" class="sr-only">Select a tab</label>
                                        <select
                                            id="selected-tab"
                                            name="selected-tab"
                                            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                            v-model="currentTab"
                                        >
                                            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current" :value="tab.id">{{ tab.name }}</option>
                                        </select>
                                    </div>

                                    <!--Мобильные вкладки  -->
                                    <div class="hidden lg:block">
                                        <div class="border-b border-gray-200">
                                            <nav class="-mb-px flex space-x-8">
                                                <a
                                                    @click="currentTab = tab.id"
                                                    v-for="tab in tabs"
                                                    :key="tab.id"
                                                    :href="tab.href"
                                                    :class="[
                                                        tab.id == currentTab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                                                    ]"
                                                >
                                                    {{ tab.name }}
                                                </a>
                                            </nav>
                                        </div>
                                    </div>

                                    <!-- Сапбоарды -->
                                    <!-- <div v-if="currentTab == 1">
                                        <SupPage />
                                    </div> -->

                                    <!-- Профиль -->
                                    <div v-if="currentTab == 4">
                                        <ProfileSetting />
                                    </div>

                                    <!-- Статусы -->
                                    <div v-if="currentTab == 5">
                                        <StatusSetting />
                                    </div>

                                    <!-- Пароль -->
                                    <div v-if="currentTab == 2">
                                        <PasswordSetting />
                                    </div>

                                    <!-- Опровещения -->
                                    <div v-if="currentTab == 3">
                                        <NoticeSetting />
                                    </div>

                                    <!-- <div class="mt-10 divide-y divide-gray-200">
                    <div class="space-y-1">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">Account</h3>
                      <p class="max-w-2xl text-sm text-gray-500">Manage how information is displayed on your account.</p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-gray-200">
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt class="text-sm font-medium text-gray-500">Language</dt>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">English</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Обновить</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <dt class="text-sm font-medium text-gray-500">Date format</dt>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">DD-MM-YYYY</span>
                            <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                              <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Обновить</button>
                              <span class="text-gray-300" aria-hidden="true">|</span>
                              <button type="button" class="bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Удалить</button>
                            </span>
                          </dd>
                        </div>
                        <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Automatic timezone </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <Switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-blue-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto']">
                              <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                        <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                          <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Auto-update applicant data </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <Switch v-model="autoUpdateApplicantDataEnabled" :class="[autoUpdateApplicantDataEnabled ? 'bg-blue-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto']">
                              <span aria-hidden="true" :class="[autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                      </dl>
                    </div>
                  </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
// import // Dialog,
// DialogPanel,
// DialogTitle,
//   DialogOverlay,
// Switch,
// SwitchGroup,
// SwitchLabel,
// TransitionChild,
// TransitionRoot,
// "@headlessui/vue";
// import SupPage from "@/admin/pages/SupPage";
import NoticeSetting from "@/admin/components/NoticeSetting";
import ProfileSetting from "@/admin/components/ProfileSetting";
import StatusSetting from "@/admin/components/StatusSetting";
import PasswordSetting from "@/admin/components/PasswordSetting";

import { mapActions, mapState } from "vuex";

//import //   BellIcon,
// BriefcaseIcon,
// ChatIcon,
// CogIcon,
// DocumentSearchIcon,
// HomeIcon,
//   MenuAlt2Icon,
// QuestionMarkCircleIcon,
// UsersIcon,
//   XIcon,
//"@heroicons/vue/outline";

// import { SearchIcon } from '@heroicons/vue/solid'

const tabs = [
    { name: "Профиль", href: "#", id: 4, current: false },
    { name: "Пароль", href: "#", id: 2, current: false },
    { name: "Оповещения", href: "#", id: 3, current: false },
    // { name: "Статусы", href: "#", id: 5, current: false },
];

export default {
    methods: {
        // showMess(data) {
        //     console.log(data);
        // },
        ...mapActions(["getProfile", "onPasswordUpdate"]),
    },

    computed: {
        ...mapState(["ProfilesModule", "AuthModule"]),
    },
    mounted() {
        // console.log('getAllOrders 1')
        this.getProfile();
    },
    components: {
        // Dialog,
        // DialogPanel,
        // DialogTitle,
        // DialogOverlay,
        // Switch,
        // SwitchGroup,
        // SwitchLabel,
        // TransitionChild,
        // TransitionRoot,
        // BellIcon,
        // MenuAlt2Icon,
        // SearchIcon,
        // XIcon,
        // SupPage,
        NoticeSetting,
        ProfileSetting,
        StatusSetting,
        PasswordSetting,
    },
    setup() {
        // const sidebarOpen = ref(false);
        const currentTab = ref(4);
        // const automaticTimezoneEnabled = ref(true);
        // const autoUpdateApplicantDataEnabled = ref(false);

        return {
            // navigation,
            // secondaryNavigation,
            tabs,
            // sidebarOpen,
            // automaticTimezoneEnabled,
            // autoUpdateApplicantDataEnabled,
            currentTab,
            // SupPage,
            NoticeSetting,
            ProfileSetting,
            StatusSetting,
        };
    },
};
</script>
