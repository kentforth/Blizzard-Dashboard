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
import VueSocketIoExt from "vue-socket.io-extended";
import io from "socket.io-client";

Vue.use(
  VueSocketIoExt,
  io("http://localhost:11050", {
    cors: ["*"],
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
