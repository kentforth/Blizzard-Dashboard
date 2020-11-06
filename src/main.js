import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './assets/scss/styles.scss'
import './assets/scss/global.scss'

import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)


Vue.config.productionTip = false;

new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount("#app");
