<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <card :article="item"></card>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
export default {
  name: "article",
  components: {
    Card,
  },
  data() {
    return {
      list: [
        {
          name: "各种各样的动力电池名词",
          title: "到底什么意思-动力电池篇",
          cover:
            "https://pic2.zhimg.com/100/v2-aba46fbb96fdfc1d01a9c1ee5f2fdca5_hd.png",
          desc: "网上选车时满眼的专业名词是否让你困惑？买车时听完销售讲解一脸懵圈？如何像个内行人一样快速识别「专业名词」背后含义？「到底什么意思？」助你读懂这些虚头巴脑的专业名词！本期我们聚焦汽车动力电池。",
        },
        {
          name: "虚拟产品陷阱社会类别曝光房产家居陷阱",
          title: "你的权益，我来守护",
          cover:
            "https://pic4.zhimg.com/100/v2-f17d7b847cca593544948c32aceaf7f7_hd.png",
          desc: "又一年3•15要来了！过去一年，你在消费中遇到过哪些烦心事儿？中新经纬联合知乎，征集投诉线索，曝光不良商家损害消费者权益案例。如果你曾遭遇陷阱，苦于消费纠纷。快来这里吐槽！",
        },
        {
          name: "拾光「知」云南",
          title: "「拾光」照亮生活",
          cover:
            "https://pic2.zhimg.com/100/v2-f4658664e15a9c04c088b0d996964f49_hd.png",
          desc: "我们想要的生活，就在我们居住的城市里，如何在繁忙的城市工作中遇见丰富多元的生活场景，是我们每个人都想得到的答案。而云南，作为国人心生向往的旅居目的地，是如何把最云南的生活方式传递给世人的呢？让我们跟随七彩云南古滇名城拾光社的脚步，遇见「一天新似一天」的生活~ ",
        },
        {
          name: "春天尝鲜指南",
          title: "打开春天的正确姿势",
          cover:
            "https://pic2.zhimg.com/100/v2-f1e65b7cf9cc4fecf20a65d77ee7f7dd_hd.png",
          desc: "俗话说「吃了春分饭，一天长一线」，春分来了，你会做些什么呢？ 是出门游玩，感受沾衣欲湿杏花雨，浅草才能没马蹄？是在家中晒太阳，惬意的杨柳秋千院中，就暖前檐坐，看日高花影重？还是准备好时令美食，跟家人朋友一起尝尝鲜？ 不管是美好的景色，盎然的生机，清新的食材，还是单纯美好的春天，都不可少了你的参与～",
        },
        {
          name: "环学登场史诗故事",
          title: "《艾尔登法环》剧情大揭秘",
          cover:
            "https://pic3.zhimg.com/100/v2-3c38a0f4b03454e76bb603af4e12ac12_hd.png",
          desc: "艾尔登法环延续了 FS 社的一贯风格，碎片化叙事依旧让人着迷，在这些让人细思恐极的细节背后，来一次剧情大揭秘吧！",
        },
      ],
    };
  },
};
</script>

