<template>
    <NavComponent />
    <!-- <router-view name="content"></router-view> -->
    <router-view></router-view>
    <FooterSection />
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
    name: "LandingLayout",
    components: {
        NavComponent,
        FooterSection,
    },
    props: {},
    methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
