<template>
  <input type="text" v-model="seachStr" :placeholder="filter.name" />
</template>

<script>
// import { mapActions } from "vuex";
import { ref, watch } from "vue";
export default {
  props: ["filter"],
  emits: ["input"],
  // data() {
  //     return {
  //         seachStr: "",
  //     };
  // },
  //   watch: {
  //     seachStr(value) {
  //       let field = this.filter.field;

  //       this.setFilter({ field, value });
  //       this.applyFilters();
  //     },
  //   },
  //   methods: {
  // ...mapActions(["applyFilters", "setFilter"]),
  //   },

  setup(props, { emit }) {
    const seachStr = ref("");

    watch(seachStr, (seachStr) => {
      emit("input", seachStr);
    });

    return {
      seachStr,
    };
  },
};
</script>

<style></style>
