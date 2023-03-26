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
          <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden" @click="sidebarOpen = true">
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
              <button type="button" class="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
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
                                    <!-- Tabs -->
                                    <div class="lg:hidden">
                                        <label for="selected-tab" class="sr-only">Select a tab</label>
                                        <select
                                            id="selected-tab"
                                            name="selected-tab"
                                            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                                            v-model="currentTab"
                                        >
                                            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current" :value="tab.id">{{ tab.name }}</option>
                                        </select>
                                    </div>

                                    <!--  -->
                                    <div class="hidden lg:block">
                                        <div class="border-b border-gray-200">
                                            <nav class="-mb-px flex space-x-8">
                                                <a
                                                    @click="currentTab = tab.id"
                                                    v-for="tab in tabs"
                                                    :key="tab.id"
                                                    :href="tab.href"
                                                    :class="[
                                                        tab.id == currentTab ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                                                    ]"
                                                >
                                                    {{ tab.name }}
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                   

                                    <!-- Сапбоарды -->
                                    <div class="mt-10 divide-y divide-gray-200" v-if="currentTab == 1">
                                        <div class="space-y-1">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Сапбоарды</h3>
                                            <p class="max-w-2xl text-sm text-gray-500">Название, комплектация.</p>
                                        </div>
                                        <div class="mt-6">
                                            <dl class="divide-y divide-gray-200">
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">Сап №1</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt class="text-sm font-medium text-gray-500">Photo</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">
                                                            <img
                                                                class="h-8 w-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                            <span class="text-gray-300" aria-hidden="true">|</span>
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Удалить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                    <!-- Статусы -->
                                    <div class="mt-10 divide-y divide-gray-200" v-if="currentTab == 1">
                                        <div class="space-y-1">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Статусы</h3>
                                            <p class="max-w-2xl text-sm text-gray-500">Списки используемых статусов.</p>
                                        </div>
                                        <div class="mt-6">
                                            <dl class="divide-y divide-gray-200">
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">Не выбрано</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt class="text-sm font-medium text-gray-500">Photo</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">
                                                            <img
                                                                class="h-8 w-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                            <span class="text-gray-300" aria-hidden="true">|</span>
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Удалить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                    <!-- Пароль -->
                                    <div class="mt-10 divide-y divide-gray-200" v-if="currentTab == 2">
                                        <div class="space-y-1">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Пароль</h3>
                                            <p class="max-w-2xl text-sm text-gray-500">Здесь можно обновить пароль.</p>
                                        </div>
                                        <div class="mt-6">
                                            <dl class="divide-y divide-gray-200">
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt class="text-sm font-medium text-gray-500">Пароль</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">*********</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                    <!-- Опровещения -->
                                    <div class="mt-10 divide-y divide-gray-200" v-if="currentTab == 3">
                                        <div class="space-y-1">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Оповещения</h3>
                                            <p class="max-w-2xl text-sm text-gray-500">Здесь можно насроить оповещения.</p>
                                        </div>
                                        <div class="mt-6">
                                            <dl class="divide-y divide-gray-200">
                                                <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Присылать оповещения на почту </SwitchLabel>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <Switch
                                                            v-model="sendMessageEmailEnabled"
                                                            :class="[
                                                                sendMessageEmailEnabled ? 'bg-purple-600' : 'bg-gray-200',
                                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto',
                                                            ]"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                :class="[
                                                                    sendMessageEmailEnabled ? 'translate-x-5' : 'translate-x-0',
                                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                                                                ]"
                                                            />
                                                        </Switch>
                                                    </dd>
                                                </SwitchGroup>
                                                <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Присылать оповещения в Telegramm </SwitchLabel>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <Switch
                                                            v-model="sendMessageTelegrammEnabled"
                                                            :class="[
                                                                sendMessageTelegrammEnabled ? 'bg-purple-600' : 'bg-gray-200',
                                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto',
                                                            ]"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                :class="[
                                                                    sendMessageTelegrammEnabled ? 'translate-x-5' : 'translate-x-0',
                                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                                                                ]"
                                                            />
                                                        </Switch>
                                                    </dd>
                                                </SwitchGroup>
                                            </dl>
                                        </div>
                                    </div>

                                    <!-- Профиль -->
                                    <div class="mt-10 divide-y divide-gray-200" v-if="currentTab == 4">
                                        <div class="space-y-1">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">Профиль</h3>
                                            <p class="max-w-2xl text-sm text-gray-500">Информация для публичного доступа.</p>
                                        </div>
                                        <div class="mt-6">
                                            <dl class="divide-y divide-gray-200">
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt class="text-sm font-medium text-gray-500">Name</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">Chelsea Hagon</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt class="text-sm font-medium text-gray-500">Photo</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">
                                                            <img
                                                                class="h-8 w-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                            <span class="text-gray-300" aria-hidden="true">|</span>
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Удалить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">chelsea.hagon@example.com</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                                                    <dt class="text-sm font-medium text-gray-500">Job title</dt>
                                                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span class="flex-grow">Human Resources Manager</span>
                                                        <span class="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Обновить
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
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
                              <button type="button" class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Обновить</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <dt class="text-sm font-medium text-gray-500">Date format</dt>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">DD-MM-YYYY</span>
                            <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                              <button type="button" class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Обновить</button>
                              <span class="text-gray-300" aria-hidden="true">|</span>
                              <button type="button" class="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Удалить</button>
                            </span>
                          </dd>
                        </div>
                        <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Automatic timezone </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <Switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto']">
                              <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                        <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                          <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Auto-update applicant data </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <Switch v-model="autoUpdateApplicantDataEnabled" :class="[autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto']">
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
import {
    //   Dialog,
    //   DialogOverlay,
    Switch,
    SwitchGroup,
    SwitchLabel,
    //   TransitionChild,
    //   TransitionRoot,
} from "@headlessui/vue";
import {
    //   BellIcon,
    BriefcaseIcon,
    ChatIcon,
    CogIcon,
    DocumentSearchIcon,
    HomeIcon,
    //   MenuAlt2Icon,
    QuestionMarkCircleIcon,
    UsersIcon,
    //   XIcon,
} from "@heroicons/vue/outline";
// import { SearchIcon } from '@heroicons/vue/solid'

const navigation = [
    { name: "Home", href: "#", icon: HomeIcon, current: false },
    { name: "Jobs", href: "#", icon: BriefcaseIcon, current: false },
    { name: "Applications", href: "#", icon: DocumentSearchIcon, current: false },
    { name: "Messages", href: "#", icon: ChatIcon, current: false },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Settings", href: "#", icon: CogIcon, current: true },
];
const secondaryNavigation = [
    { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    { name: "Logout", href: "#", icon: CogIcon },
];
const tabs = [
    { name: "Основное", href: "#", id: 1, current: true },
    { name: "Пароль", href: "#", id: 2, current: false },
    { name: "Оповещения", href: "#", id: 3, current: false },
    { name: "Профиль", href: "#", id: 4, current: false },
    //   { name: 'Billing', href: '#', current: false },
    //   { name: 'Team Members', href: '#', current: false },
];

export default {
    components: {
        // Dialog,
        // DialogOverlay,
        Switch,
        SwitchGroup,
        SwitchLabel,
        // TransitionChild,
        // TransitionRoot,
        // BellIcon,
        // MenuAlt2Icon,
        // SearchIcon,
        // XIcon,
    },
    setup() {
        const sidebarOpen = ref(false);
        const automaticTimezoneEnabled = ref(true);
        const autoUpdateApplicantDataEnabled = ref(false);
        const sendMessageEmailEnabled = ref(false);
        const sendMessageTelegrammEnabled = ref(false);
        const currentTab = ref(1);

        return {
            navigation,
            secondaryNavigation,
            tabs,
            sidebarOpen,
            automaticTimezoneEnabled,
            autoUpdateApplicantDataEnabled,
            sendMessageEmailEnabled,
            sendMessageTelegrammEnabled,
            currentTab,
        };
    },
};
</script>
