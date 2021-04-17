import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
