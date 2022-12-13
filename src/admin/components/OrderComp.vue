<template>
    <h1>{{ orders }}</h1>
    <!-- <input  @input="$emit('click2', $event.target.value)" class="border-2"/> -->
    <!-- <input  v-model="client" class="border-2"/> -->
    <!-- <CustomInput class="border-2" :model-value="client" @update:modelValue="client=$event"/> -->
    <CustomInput class="border-2" v-model="client" />
    <p>{{ client }}</p>
</template>

<script>
import CustomInput from './CustomInput.vue'
export default {
    name: 'OrderComp',
    props: ['orders'],
    components:{
        CustomInput
    },
    data(){
        return {
            client: 'client'
        }
    },
    computed:{
        // client(){
        //     return this.$props.orders
        // }
    }
}

</script>