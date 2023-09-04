<template>
    <form @submit.prevent="onSubmit">
        <input v-model="value" />

        <button type="submit" :disabled="isLoading">Submit</button>
    </form>
</template>
  
  <script>
import { socket } from "@/socket";
import { mapState } from "vuex";


export default {
    name: "MyForm",

    data() {
        return {
            isLoading: false,
            value: "",
        };
    },

    computed:{
        ...mapState(['MsgsModule'])
    },

    methods: {
        onSubmit() {
            this.isLoading = true;
            // console.log(socket);

            socket.emit("message:add", this.value, (result) => {
                let msg = result.msg
                if(result.status == true) this.MsgsModule.msgs.push(msg)
                
                console.log(result.status)
                console.log(result.msg)
                this.isLoading = false;
            });
        },
    },
};
</script>