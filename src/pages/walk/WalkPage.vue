<template>
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
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import Route1Component from './Route1Component.vue'
import Route2Component from './Route2Component.vue'
import PriceComponent from './PriceComponent.vue'
import ContactsComponent from './ContactsComponent.vue'
import GalleryComponent from './GalleryComponent.vue'
export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    Route1Component,
    Route2Component,
    PriceComponent,
    ContactsComponent,
    GalleryComponent,

  },
  props: {
    msg: String
  },
  methods: {
    scrollFix: function (hashbang) {
      alert(hashbang)
      // location.hash = hashbang;
    },
    consLog(){
      alert('!!')
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
