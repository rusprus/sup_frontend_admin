<template>
    <div class="mt-10 divide-y divide-gray-200">
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
                            v-model="note_eml"
                            :class="[
                                note_eml ? 'bg-blue-600' : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto',
                            ]"
                        >
                            <span
                                aria-hidden="true"
                                :class="[note_eml ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']"
                            />
                        </Switch>
                    </dd>
                </SwitchGroup>
                <SwitchGroup as="div" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <SwitchLabel as="dt" class="text-sm font-medium text-gray-500" passive> Присылать оповещения в Telegramm </SwitchLabel>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <Switch
                            v-model="note_tlg"
                            :class="[
                                note_tlg ? 'bg-blue-600' : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto',
                            ]"
                        >
                            <span
                                aria-hidden="true"
                                :class="[note_tlg ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']"
                            />
                        </Switch>
                    </dd>
                </SwitchGroup>
            </dl>
        </div>
    </div>
</template>

<script>
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            note_eml: false,
            note_tlg: false,
        };
    },
    methods: {
        ...mapActions(["updateNotes"]),
        // changeNote(){
        //      this.updateNotes({ note_eml: this.note_eml, note_tlg: this.note_tlg }).then(() => {
        //         console.log("note обновлен");
        //     });
        // },
    },
    computed: {
        ...mapState(["ProfilesModule"]),
    },
    watch: {
        note_eml() {
            this.updateNotes({ note_eml: this.note_eml, note_tlg: this.note_tlg }).then(() => {
                console.log("note_eml обновлен");
            });
        },
        note_tlg() {
            this.updateNotes({ note_eml: this.note_eml, note_tlg: this.note_tlg }).then(() => {
                console.log("note_tlg обновлен");
            });
        },
    },

    mounted() {
        this.note_eml = this.ProfilesModule.profile.note_eml;
        this.note_tlg = this.ProfilesModule.profile.note_tlg;
    },
    components: {
        Switch,
        SwitchGroup,
        SwitchLabel,
    },
    setup() {
        return {
            Switch,
            SwitchGroup,
            SwitchLabel,
        };
    },
};
</script>
