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
    <html class="h-full bg-gray-100">
    <body class="h-full overflow-hidden">
    ```
  -->
    <div class="h-full flex flex-col">

        <!-- <OrderModal :showProp="OrdersModule.orderModal" /> -->

        <TopNav  class="fixed z-50 right-0 left-0" />

        <div class="min-h-0 flex-1 mt-16 flex overflow-hidden">
         
            <NarrowSidebar class="fixed  h-full left-0" /> 
            
            <!-- Main area -->
            <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex md:ml-20">
                <!-- Primary column -->
                <section
                    aria-labelledby="primary-heading"
                    class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
                >
                    <h1 id="primary-heading" class="sr-only">Home</h1>
                    <!-- Your content -->

                    <!-- <router-view name="content"></router-view> -->
                    <router-view></router-view>
                </section>

                <!-- Secondary column (hidden on smaller screens) -->
                <!-- <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first"> -->
                <!-- <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto"> -->
                <!-- Your content -->
                <!-- <h1>Secondary column</h1> -->

                <!-- </div> -->
                <!-- </aside> -->
            </main>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

import { mapActions, mapState } from "vuex";

import TopNav from "@/admin/components/TopNav.vue";

import NarrowSidebar from "@/admin/components/NarrowSidebar.vue";
// import OrderModal from "@/admin/components/OrderModal.vue";
import moment from "moment";

// const user = {
//   name: 'Whitney Francis',
//   email: 'whitneyfrancis@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   {
//     name: 'Inboxes',
//     href: '#',
//     children: [
//       { name: 'Technical Support', href: '#' },
//       { name: 'Sales', href: '#' },
//       { name: 'General', href: '#' },
//     ],
//   },
//   { name: 'Reporting', href: '#', children: [] },
//   { name: 'Settings', href: '#', children: [] },
// ]
// const sidebarNavigation = [
//   { name: 'Open', href: '#', icon: InboxIcon, current: true },
//   { name: 'Archive', href: '/admin/calendar', icon: ArchiveIcon, current: false },
//   { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
//   { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
//   { name: 'Spam', href: '#', icon: BanIcon, current: false },
//   { name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

export default {
    components: {
        TopNav,
        NarrowSidebar,
        // OrderModal,
    },
    methods: {
        // showMess(data) {
        //     console.log(data);
        // },
        ...mapActions(["getAllOrders", "getAllSups", "getProfile"]),
    },
    computed: {
        ...mapState(["OrdersModule"]),
    },
    mounted() {
        // console.log('getAllOrders 1')
        this.getAllOrders();
        this.getAllSups();
        this.getProfile();
        moment.locale("ru");
    },
    setup() {
        onMounted(() => {});

        const mobileMenuOpen = ref(false);

        return {
            // user,
            // navigation,
            // sidebarNavigation,
            // userNavigation,
            mobileMenuOpen,
        };
    },
};
</script>
