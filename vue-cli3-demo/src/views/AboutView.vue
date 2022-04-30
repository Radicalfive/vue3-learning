<template>
  <div class="about">
    <div v-for="(item, index) in list" :key="index">
      <item :article="item"></item>
    </div>
  </div>
</template>

<script>
import Item from "../components/item.vue";
export default {
  name: "AboutView",
  components: {
    Item,
  },
  data() {
    return {
      list: [
        {
          cover:
            "https://pic2.zhimg.com/100/v2-3524310b9c7293af17c89e017926cfa5_hd.png",
          title: "大众心理健康洞察报告",
          desc: "【简单心理×知乎情感】3月17日简单心理连续第六年发布《大众心理健康洞察报告》，2021年心理健康行业有了哪些新的发展？大众最关心的心理健康议题有哪些？来知乎一起参与讨论~",
        },
        {
          cover: "https://pic3.zhimg.com/100/v2-20ee74557d949db036f7e83fb879ecce_hd.png",
          title: "东航 MU5735 发生飞行事故",
          desc: "2022 年 3 月 21 日东航一架昆明飞广州航班发生飞行事故，机上人员共 132 人，其中旅客 123 人、机组 9 人。",
        },
        {
          cover: "https://pic2.zhimg.com/100/v2-804b28ee8a10f616773cf208363072c1_hd.png",
          title: "湖南生物多样「知」美",
          desc: "湖南位于我国东南腹地，长江中游，东南西三面环山，中部、北部低平，形成向北开口的马蹄形盆地。重峦叠嶂的山脉与洞庭湖、湘江，构建出了湖南生物的多样性。",
        },
        {
          cover: "https://pic1.zhimg.com/100/v2-68fc56fdebee99bad8c3d0e8e144d7f4_hd.png",
          title: "知乎媒体每周看点0314～0320",
          desc: "本周知友最关注的媒体热点问答和视频有哪些？@知乎小红星为你一榜打尽。热门问题\热门问题\热门问题",
        },
        {
          cover: "https://pic3.zhimg.com/100/v2-86dcb780febf41b48c95cba4265f023e_hd.png",
          title: "益生菌冷知识科普",
          desc: "随着季节更替，我们自身的状态也在悄悄地发生变化，身体状态不佳的情况时常发生，但你可能有所不知，这些小状况往往是因为人体微生态不平衡导致的，还好，有进口益生菌守护平衡，它可以全面「菌」衡营养，呵护我们肠道健康～本次专题，带你探索「益生菌」的奇妙世界～",
        },
        {
          cover: "https://pic2.zhimg.com/100/v2-b5f6b3f41156f0ee5b8f8050c8000715_hd.png",
          title: "Redmi K50 新品「全方位深度解析」",
          desc: "3月17日 Redmi 发布会以「狠超想象」为主题带着 Redmi K50 全新亮相，堪称「旗舰焊门员」的它是否能再续硬核全能体验？到底是不是一款「性价比神机」？快来查收 Redmi K50 全方位深度解析，带你抢先见证「焊门奇迹」。",
        },
        {
          cover: "https://pic1.zhimg.com/100/v2-08bb4c2cbc7e9db60f57c044ebb71738_hd.png",
          title: "滋养彼此，孕育新生",
          desc: "父母带孩子来感受世间美好，体味人间温暖；孩子让父母的生活出现新的未知与惊喜，漫漫人生路绽放新的浪漫。爱乐维，以科学营养，从备孕到哺乳，全程精心守护，关爱女性心理健康，帮助母亲和孩子滋养彼此，孕育新生！",
        },
      ],
    };
  },
};
</script>
