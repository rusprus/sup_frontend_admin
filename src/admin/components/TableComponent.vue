<!--
Структура входных параметров:
listTitle: [
        { field: "client_id", title: "ID" },
        ...
        ]
listItem: [{}, ...];        

-->
<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <template v-for="item in listTitle" :key="item.field">
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <div class="flex">
              <div class="flex">{{ item.title }}</div>
              <div>
                <SwitchVerticalIcon
                  @click="sort(item.field)"
                  class="h-7 w-7 pl-2 cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>
          </th>
        </template>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <TransitionGroup name="flip-list">
        <TableItem v-for="item in listItem" :item="item" :key="item.id" @open="open" />
      </TransitionGroup>
    </tbody>
  </table>
</template>
<script>
import { SwitchVerticalIcon } from "@heroicons/vue/solid";
import TableItem from "@/admin/components/TableItem.vue";

export default {
  components: {
    SwitchVerticalIcon,
    TableItem,
  },
  props: ["listItem", "listTitle"],
  events: ["open", "sort"],
  data() {
    return {};
  },
  setup(props, { emit }) {
    const open = (id) => emit("open", id);
    const sort = (field) => emit("sort", field);
    return {
      open,
      sort,
    };
  },
};
</script>
