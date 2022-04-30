<template>
  <v-container>
    <v-row>
      <v-col class="md-6" v-for="(item, index) in list" :key="index">
        <web-site
          :url="item.url"
          :logoImg="item.logoImg"
          :title="item.title"
          :subTitle="item.subTitle"
        ></web-site>
      </v-col>
    </v-row>
    <div app>
      <web-card></web-card>
      <web-card1></web-card1>
    </div>
    <v-bottom-navigation :value="value" color="blue-grey" horizontal app>
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer app color="blue-grey lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="blue-grey lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import WebCard from "../components/WebCard.vue";
import WebCard1 from "../components/WebCard1.vue";
import WebSite from "../components/WebSite.vue";
export default {
  name: "Home",
  components: {
    WebSite,
    WebCard,
    WebCard1,
  },
  data() {
    return {
      list: [
        {
          url: 'https://www.aliyun.com/"',
          logoImg:
            "https://ossstored.oss-cn-shanghai.aliyuncs.com/avatar-boy/11.jpg",
          title: "radical",
          subTitle: "若见识过天高海阔，怎甘愿拘泥于城墙之内？",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg:
            "https://ossstored.oss-cn-shanghai.aliyuncs.com/avatar-boy/06.jpeg",
          title: "中国boy",
          subTitle: "唯有行动才能解除所有的不安",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg:
            "https://ossstored.oss-cn-shanghai.aliyuncs.com/avatar-boy/R-C%20(7).jpg",
          title: "法外狂徒",
          subTitle: "和理想平等交易，和喧嚣保持距离",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg:
            "https://ossstored.oss-cn-shanghai.aliyuncs.com/avatar-boy/R-C.jpg",
          title: "诗酒趁年华",
          subTitle: "不要被眼下的舒适所迷惑，你要做的是一直努力",
        },
      ],
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    };
  },
};
</script>
