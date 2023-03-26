<template>
    <Datepicker v-model="date" @update:modelValue="selectedDate" range teleport-center></Datepicker>
</template>

<script>
import { mapActions } from "vuex";
import Datepicker from "@vuepic/vue-datepicker";
export default {
  components:{
    Datepicker
  },
    props: ["filter"],
    data() {
        return {
            date: [],
        };
    },
    watch: {
        date(value) {
          
            let field = this.filter.field;
            this.setFilter({ field,  value });
            this.applyFilters();
        },
    },
    methods: {
        ...mapActions(["applyFilters", "setFilter"]),
         selectedDate(modelData) {
            this.date = modelData;
            // this.filteredOptions = this.listFreeSup(this.date);
        },
    },
};
</script>

<style></style>
