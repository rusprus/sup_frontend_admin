<template>
  <NavComponent @click2="scrollFix($event)" />
  <HeaderComponent />
  <a id="set"></a>
  <Route1Component />
  <Route2Component />
  <a id="price"></a>
  <PriceComponent />
  <a id="gallery"></a>
  <GalleryComponent />
  <a id="contacts"></a>
  <ContactsComponent />

  <FooterSection />
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
import Route1Component from './Route1Component.vue'
import Route2Component from './Route2Component.vue'
import PriceComponent from './PriceComponent.vue'
import ContactsComponent from './ContactsComponent.vue'
import GalleryComponent from './GalleryComponent.vue'
export default {
  name: 'MainPage',
  components: {
    NavComponent,
    HeaderComponent,
    Route1Component,
    Route2Component,
    PriceComponent,
    ContactsComponent,
    GalleryComponent,
    FooterSection,

  },
  props: {
    msg: String
  },
  methods: {
    scrollFix: function (hashbang) {
      console.log(hashbang)
      location = hashbang;
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
