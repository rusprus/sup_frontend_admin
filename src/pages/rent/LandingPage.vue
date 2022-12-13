<template>
    <div>
        <HeaderSection2 />
        <ContentSection2 />
        <a id="price"></a>
        <ContentPrice />
        <MapComponent />
        <a id="contacts"></a>

        <ContactsSection />
    </div>
</template>

<script>
import ContentSection2 from "@/components/ContentSection2.vue";
import HeaderSection2 from "@/components/HeaderSection2.vue";
import ContentPrice from "@/components/ContentPrice.vue";
import ContactsSection from "@/components/ContactsSection.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
    name: "LendingPage",
    components: {
        ContentSection2,
        HeaderSection2,
        ContentPrice,
        ContactsSection,
        MapComponent,
    },
};
</script>

<style></style>
