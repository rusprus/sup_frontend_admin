<template>
  <!-- <HeaderSection /> -->
  <ContentSection3/>
  <!-- <ContentSection1 /> -->
  <ContentSection2/>
  <ContentPrice />
  <FooterSection />
</template>

<script>
// import HeaderSection from './HeaderSection.vue'
import FooterSection from './FooterSection.vue'
// import ContentSection1 from './ContentSection1.vue'
import ContentSection2 from './ContentSection2.vue'
import ContentSection3 from './ContentSection3.vue'
import ContentPrice from './ContentPrice.vue'
export default {
  name: 'MainPage',
  components: {
    // HeaderSection,
    FooterSection,
    // ContentSection1,
    ContentSection2,
    ContentSection3,
    ContentPrice
  },
  props: {
    msg: String
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
