<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <a name="contacts"></a>
    <div class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Контакты</h2>
        <p class="mt-6 max-w-2xl text-xl text-gray-500">Для аренды позвоните ли напишите в мессенджер.</p>

        <!-- Tiers -->
        <div class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div
                class="relative cursor-pointer p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div class="flex-1" @click="openWhatsapp">
                    <!-- <h3 class="text-xl font-semibold text-gray-900"></h3> -->
                    <svg class="w-24 h-24 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                        </path>
                    </svg>

                    <p class="mt-4 flex items-baseline text-gray-900">
                        <span class="text-5xl font-extrabold tracking-tight"></span>
                        <span class="ml-1 text-xl font-semibold">WhatsApp</span>
                    </p>
                    <!-- <p class="mt-6 text-gray-500">89214835160</p> -->
                </div>
            </div>
            <div
                class="relative cursor-pointer p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div class="cursor-pointer flex-1" @click="openTelegram">
                    <!-- <h3 class="text-xl font-semibold text-gray-900"></h3> -->
                    <svg class="w-24 h-24 text-gray-400 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512">
                        <path
                            d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z">
                        </path>
                    </svg>

                    <p class="mt-4 flex items-baseline text-gray-900">
                        <span class="text-5xl font-extrabold tracking-tight"></span>
                        <span class="ml-1 text-xl font-semibold">Telegram</span>
                    </p>
                    <!-- <p class="mt-6 text-gray-500">89214835160</p> -->
                </div>
            </div>
            <div
                class="relative cursor-pointer p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div class="flex-1" @click="openPhone">
                    <!-- <h3 class="text-xl font-semibold text-gray-900"></h3> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>

                    <p class="mt-4 flex items-baseline text-gray-900">
                        <span class="text-5xl font-extrabold tracking-tight"></span>
                        <span class="ml-1 text-xl font-semibold">Телефон</span>
                    </p>
                    <p class="mt-6 text-gray-500">+7-921-930-10-78</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { CheckIcon } from '@heroicons/vue/outline'

const pricing = {
    tiers: [
        {
            title: "WhatsUp",
            price: `<svg
  class="w-6 h-6 text-green-400 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  ></path>
</svg>`,
            frequency: "",
            description: "The essentials to provide your best work for clients.",
            // features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            cta: "Арендовать",
            mostPopular: false,
        },
        {
            title: "Telegram",
            price: 850,
            frequency: "",
            description: "A plan that scales with your rapidly growing business.",
            features: [
                // '25 products',
                // 'Up to 10,000 subscribers',
                // 'Advanced analytics',
                // '24-hour support response time',
                // 'Marketing automations',
            ],
            cta: "Арендовать",
            mostPopular: false,
        },
        // {
        //   title: 'Суточная аренда',
        //   price: 3000,
        //   frequency: '/сутки',
        //   description: 'Dedicated support and infrastructure for your company.',
        //   // features: [
        //   //   'Unlimited products',
        //   //   'Unlimited subscribers',
        //   //   'Advanced analytics',
        //   //   '1-hour, dedicated support response time',
        //   //   'Marketing automations',
        //   //   'Custom integrations',
        //   // ],
        //   cta: 'Арендовать',
        //   mostPopular: false,
        // },
    ],
};

export default {
    components: {
        // CheckIcon,
    },
    methods: {
        openWhatsapp() {
            window.ym(89320586, "reachGoal", "clickContactButton");
            window.location.replace("https://api.whatsapp.com/send/?phone=79214835160");
        },
        openTelegram() {
            window.ym(89320586, "reachGoal", "clickContactButton");
            window.location.replace("tg://resolve?domain=SPB_Ruslan_Yakupov");
        },
        openPhone() {
            window.ym(89320586, "reachGoal", "clickContactButton");
            window.location.replace("tel:+79219301078");
        },
    },
    setup() {
        return {
            pricing,
        };
    },
};
</script>
