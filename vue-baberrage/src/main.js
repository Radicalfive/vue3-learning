import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import swal from "sweetalert";
import vueBaberrage from "vue-baberrage";
import VueSocketIO from "vue-socket.io";

createApp(App)
  .use(store)
  .use(router)
  .use(swal)
  .use(vueBaberrage)
  .use(
    VueSocketIO({
      connection: `ws://localhost:8888/socket/1`,
    })
  )
  .mount("#app");
