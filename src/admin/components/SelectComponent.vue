<template>
  <select v-model="selected">
    <option disabled value="">{{ filter.name }}</option>

    <option v-for="option in filter.options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["filter"],
  data() {
    return {
      selected: "",
    };
  },
  watch: {
    selected(value) {
      const field = this.filter.field;

      this.setFilter({ field, value, type });
    },
  },

  methods: {
    ...mapActions("OrdersModule", ["setFilter"]),
  },
};
</script>

<style></style>
