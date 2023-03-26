<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">


    <main class="mt-40">
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <!-- <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" /> -->
                <img class="h-full w-full object-cover contrast-50" src="@/assets/dog.jpg" alt="Sup dog" />
                <!-- <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" /> -->
                <div class="absolute inset-0 blur-lg mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Аренда SUP-бордов </span>
                  <span class="block text-yellow-300">в Петербург</span>
                </h1>
                <!-- <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">Доставка в назначенное место и время по Спб.</p> -->
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <a href="#contacts" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-500 bg-yellow-300 hover:bg-indigo-50 sm:px-8"> Арендовать </a>
                    <!-- <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a> -->
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <!-- <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Trusted by over 5 very average small businesses</p>
            <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
              </div>
              <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script>
// import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  // MenuIcon,
  QuestionMarkCircleIcon,
  // XIcon,
} from '@heroicons/vue/outline'
// import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon,
  },
  { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: 'Стоимость', href: '#price' },
  { name: 'Комплектация', href: '#set' },
  { name: 'Контакты', href: '#contacts' },
  { name: '+7-921-930-10-78', href: 'tel:+79219301078' },
]

export default {
  components: {
    // Popover,
    // PopoverButton,
    // PopoverGroup,
    // PopoverPanel,
    // ChevronDownIcon,
    // MenuIcon,
    // XIcon,
  },
  setup() {
    return {
      solutions,
      navigation,
    }
  },
}
</script>