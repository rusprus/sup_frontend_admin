<template>
  <!-- <HeaderSection /> -->
  <!-- <NavComponent @click="scrollFix('#price')" /> -->
  <NavComponent />
  <!-- @click="scrollFix('#price') -->
  <ContentSection3/>
  <!-- <ContentSection1 /> -->
  <ContentSection2/>
  <a id="price"></a>
  <ContentPrice />
  <!-- <StepSection /> -->
  <MapComponent />
  <a id="contacts"></a>

  <ContactsSection/>

  <FooterSection />
</template>

<script>
// import HeaderSection from './HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
// import ContentSection1 from './ContentSection1.vue'
import ContentSection2 from './ContentSection2.vue'
import ContentSection3 from './ContentSection3.vue'
import ContentPrice from './ContentPrice.vue'
import ContactsSection from './ContactsSection.vue'
import MapComponent from '@/components/MapComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
export default {
  name: 'MainPage',
  components: {
    // HeaderSection,
    FooterSection,
    // ContentSection1,
    ContentSection2,
    ContentSection3,
    ContentPrice,
    ContactsSection,
    MapComponent,
    NavComponent
  },
  props: {
    msg: String
  },
  //    mounted: function()
  // {
  //   // From testing, without a brief timeout, it won't work.
  //   setTimeout(() => this.scrollFix(this.$route.hash), 1);
  // },
  methods: {
    scrollFix: function(hashbang)
    {
      alert('clik')
      location.hash = hashbang;
    }
  }
}
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
