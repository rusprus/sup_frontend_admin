import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getAuth, onAuthStateChanged } from "firebase/auth";


import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyB37qj4AKW00kjruCBlJXtOHZa-lGDPtco",

    authDomain: "suprent-6dfcc.firebaseapp.com",

    projectId: "suprent-6dfcc",

    storageBucket: "suprent-6dfcc.appspot.com",

    messagingSenderId: "115338970938",

    appId: "1:115338970938:web:b315cd36ba698eaca1f203",

    measurementId: "G-YCR8N2FWTN"

};


// Initialize Firebase

initializeApp(firebaseConfig);


//   const analytics = getAnalytics(firebase);

const auth = getAuth();


let app

onAuthStateChanged(auth, (user) => {
    if (!user) {
        app = createApp(App)
        app.use(router)
        app.use(store)
        app.mount('#app')
    }

})

