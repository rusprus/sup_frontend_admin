import {
    ArchiveIcon,
    BanIcon,
    FlagIcon,
    InboxIcon,
  //   PencilAltIcon,
    UserCircleIcon,
  } from '@heroicons/vue/outline'

export const Globals = {
    state: () => ({
        apiUrl: 'https://api.spbsupboard.ru/',
        apiUrlWs: 'wss://api.spbsupboard.ru/',

        sidebarNavigation: [
            { name: "Dashboard", to: "/admin", icon: UserCircleIcon, current: false },
            { name: "Orders", to: "/admin/orders", icon: InboxIcon, current: false },
            { name: "Calendar", to: "/admin/calendar", icon: ArchiveIcon, current: false },
            { name: "Sups", to: "/admin/sups", icon: FlagIcon, current: false },
            { name: "Setting", to: "/admin/setting", icon: BanIcon, current: false },
            { name: "Chat", to: "/admin/chat", icon: BanIcon, current: false, children: [] },
            { name: "Clients", to: "/admin/clients", icon: InboxIcon, current: false },
            // { name: "Drafts", to: "#", icon: PencilAltIcon, current: false },
        ],

    }),
    actions:{
        setSidebarNavigation({state}, namePage){
            state.sidebarNavigation.forEach((item)=>{

                item.name == namePage ? item.current = true : item.current = false
                
            } )
        }
    },
}