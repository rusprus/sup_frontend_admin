<template>
  <button @click="connect()">Connect</button>
  <button @click="disconnect()">Disconnect</button>
</template>

<script>
import { socket } from "@/socket";
import { mapState } from "vuex";

export default {
  name: "ConnectionManager",

  computed: {
    ...mapState(["MsgsModule"]),
  },

  methods: {
    connect() {
      socket.connect();

      let room = "";
      socket.emit("message:get-all", room, (result) => {
        if (result.status == true) {
          this.MsgsModule.msgs = JSON.parse(result.msgs);
        }
        console.log(result);
      });
    },
    disconnect() {
      socket.disconnect();
    },
  },
};
</script>
