<template>
  <!-- <NavComponent @click="scrollFix('#price')" /> -->
  <ContentSection3/>
  <ContentSection2/>
  <a id="price"></a>
  <ContentPrice />
  <!-- <StepSection /> -->
  <MapComponent />
  <a id="contacts"></a>

  <ContactsSection/>
</template>

<script>
import ContentSection2 from './ContentSection2.vue'
import ContentSection3 from './ContentSection3.vue'
import ContentPrice from './ContentPrice.vue'
import ContactsSection from './ContactsSection.vue'
import MapComponent from '@/components/MapComponent.vue'
export default {
  name: 'MainPage',
  components: {
    ContentSection2,
    ContentSection3,
    ContentPrice,
    ContactsSection,
    MapComponent
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
