import "./firebase";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
// import bootstrap from "bootstrap";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import { createPopper } from '@popperjs/core';

// import "./firebaseInit";

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      // bootstrap,
      // BootstrapVue,
      // IconsPlugin,
      render: h => h(App)
    }).$mount("#app");
  }
});
