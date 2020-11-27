import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*Styles*/
import "./assets/scss/styles.scss";
import "./assets/scss/global.scss";

/*APEX CHART*/
import "@/plugins/apexcharts";

/*SOCKET IO*/
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

const socket = io("http://localhost:11050");
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
