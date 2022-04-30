<template>
  <div class="barrages-drop">
    <button @click="addToList">点击</button>
    <h1>this is why we play</h1>
    <vue-baberrage
      :isShow="barrageIsShow"
      :barrageList="barrageList"
      :maxWordCount="maxWordCount"
      :throttleGap="throttleGap"
      :loop="barrageLoop"
      :boxHeight="boxHeight"
      :boxWidth="boxWidth"
      :messageHeight="messageHeight"
      :lanesCount="lanesCount"
      style="border: 1px solid red; width: 800px; height: 400px"
    >
    </vue-baberrage>
  </div>
</template>

<script>
import { MESSAGE_TYPE } from "vue-baberrage";
export default {
  name: "App",
  data() {
    return {
      barrageIsShow: true, //是否展示弹幕
      messageHeight: 3, //消息高度(测试不生效)
      barrageLoop: false, //是否循环播放
      maxWordCount: 2, //弹幕字数(测试不生效)
      lanesCount: 2, //固定弹幕(测试不生效)
      boxWidth: 800, //弹幕宽度
      boxHeight: 100, //弹幕高度(测试不生效)
      throttleGap: 500, //消息间隔
      barrageList: [], //弹幕列表，格式为数组
    };
  },
  methods: {
    addToList() {
      let list = [
        {
          id: 1,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "湖人总冠军",
          time: 1,
          barrageStyle: "yibai",
        },
        {
          id: 2,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第二条弹幕",
          time: 2,
          barrageStyle: "erbai",
        },
        {
          id: 3,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第三条弹幕",
          time: 3,
          barrageStyle: "sanbai",
        },
        {
          id: 4,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第四条弹幕",
          time: 4,
          barrageStyle: "sibai",
        },
        {
          id: 5,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第五条弹幕",
          time: 5,
          barrageStyle: "wubai",
        },
        {
          id: 6,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第六条弹幕",
          time: 6,
          barrageStyle: "liubai",
        },
        {
          id: 7,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第七条弹幕",
          time: 7,
          barrageStyle: "qibai",
        },
        {
          id: 8,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第八条弹幕",
          time: 8,
          barrageStyle: "babai",
        },
        {
          id: 9,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第九条弹幕",
          time: 9,
          barrageStyle: "jiubai",
        },
        {
          id: 10,
          avatar: "https://www.liurulan.cn/ball.png",
          msg: "第十条弹幕",
          time: 10,
          barrageStyle: "yiqian",
        },
      ];
      list.forEach((v) => {
        this.barrageList.push({
          id: v.id, //弹幕ID
          avatar: v.avatar, //头像
          msg: v.msg, //弹幕消息
          time: v.time, //屏幕展示时间
          type: MESSAGE_TYPE.NORMAL, //类型
          barrageStyle: v.barrageStyle, //自定义样式
        });
      });
    },
  },
};
</script>

<style>
.yibai {
  margin-top: 100px;
}
.erbai {
  margin-top: 120px;
}
.sanbai {
  margin-top: 140px;
}
.sibai {
  margin-top: 160px;
}
.wubai {
  margin-top: 180px;
}
.liubai {
  margin-top: 200px;
}
.qibai {
  margin-top: 220px;
}
.babai {
  margin-top: 240px;
}
.jiubai {
  margin-top: 260px;
}
.yiqian {
  margin-top: 300px;
}
</style>