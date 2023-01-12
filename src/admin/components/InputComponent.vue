<template>
    <input type="text" v-model="seachStr" :placeholder= filter.name />
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ["filter"],
    data() {
        return {
            seachStr: "",
        };
    },
    watch: {
        seachStr(value) {
            let field = this.filter.field;

            this.setFilter({ field, value });
            this.applyFilters();
        },
    },
    methods: {
        ...mapActions(["applyFilters", "setFilter"]),
    },
};
</script>

<style></style>
