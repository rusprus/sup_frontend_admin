<template>
    <nav aria-label="Sidebar" class="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
        <div class="relative w-20 flex flex-col p-3 space-y-3">
            <a
                v-for="item in sidebarNavigation"
                :key="item.name"
                :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700', 'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']"
            >
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
        </div>
    </nav>
</template>

<script>
import {
  ArchiveIcon,
  BanIcon,
  FlagIcon,
  InboxIcon,
  PencilAltIcon,
  UserCircleIcon,
} from '@heroicons/vue/outline'

export default {
    data() {
        return {
            sidebarNavigation: [
                { name: "Open", href: "#", icon: InboxIcon, current: true },
                { name: "Archive", href: "/admin/calendar", icon: ArchiveIcon, current: false },
                { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
                { name: "Flagged", href: "#", icon: FlagIcon, current: false },
                { name: "Spam", href: "#", icon: BanIcon, current: false },
                { name: "Drafts", href: "#", icon: PencilAltIcon, current: false },
            ],
        };
    },
};
</script>

<style></style>
