import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import helloWorld from "./components/HelloWorld.vue";

import drag from "./drag";

const app = createApp(App); // 创建 app
app.component("hello-world", helloWorld); //注册全局组件
app.directive("drag", drag); // 注册全局指令

app.use(store).use(router).mount("#app");
