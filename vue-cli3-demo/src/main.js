import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'  // 安装axios后引入

// Vue.prototype.$axios = axios  // 将axios挂载到原型上方便使用

createApp(App).use(router).mount('#app')
