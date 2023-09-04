import { reactive } from "vue";
import { io } from "socket.io-client";

// import { computed } from 'vue'
// import { useStore } from 'vuex'
import store from './store'

// import { mapState } from "vuex";

// const AuthModule = ...mapState(["AuthModule"]),


// const store = useStore()

const token = store.state.AuthModule.credentials.token;

export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
const URL = "https://api.spbsupboard.ru";
export const socket = io(URL,
    {
        // autoConnect: false,
        extraHeaders: {
            // xauthorization: this.$store.state.AuthModule.credentials.token,
            xauthorization: token,
        },
    }
);



socket.on("connect", () => {
    state.connected = true;
    let room = "";
    socket.emit("message:get-all", room, (result) => {
      if (result.status == true) {
        store.state.MsgsModule.msgs = JSON.parse(result.msgs);
      }
    //   console.log(result);
    });
});

socket.on("disconnect", () => {
    state.connected = false;
});

socket.on("foo", (...args) => {
    state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
    state.barEvents.push(args);
});

