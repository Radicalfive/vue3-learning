// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';

// Vue.use(Vuetify);

// export default new Vuetify({
// });

import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHans from "vuetify/es5/locale/zh-Hans"; // 引/入中文语富包
import "typeface-roboto/index.css"; // 引入W网安藏的本她的Roboto字体贸源
import "@mdi/font/css/materialdesignicons.css"; // 引人本地的Material Design Icons资源

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: "zhHans",
  },
  icons: {
    iconfont: "mdi", // 设量使用本他的icon资源
  },
});
