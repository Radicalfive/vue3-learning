import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import qs from "qs";

//vue2全局挂载
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
// 创建axios实例
let instance = axios.create({
  baseURL: "http://httpbin.org",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
