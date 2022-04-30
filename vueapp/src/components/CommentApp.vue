<!--CommentApp.vue-->
<template>
  <div class="container">
    <CommentInput @inputinfo="receiveInfo" />
    <CommentList :custom="Comments" :deleteFunction="deleteFunction" />
  </div>
</template>
<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { ref, onBeforeMount } from "vue";
export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList,
  },
  setup() {
    const Comments = ref([]);
    // 加载sessionStroage中的帖子
    const loadData = () => {
      const loadCommnet = sessionStorage.getItem("comment");
      if (loadCommnet) {
        // 获取值的时候，再将其转换回来
        Comments.value = JSON.parse(loadCommnet);
        console.log(loadCommnet);
      }
    };
    const saveDate = (comments) => {
      // 我们就需要将数据全部转换为字符串格式，然后再进行存储;
      sessionStorage.setItem("commnet", JSON.stringify(comments.value));
    };
    const receiveInfo = (e) => {
      if (!e.username) return alert("请输入用户名！");
      if (!e.content) return alert("请输入评论！");
      Comments.value.push(e);
      // 每次Comments修改时，都会重新进行存储
      saveDate(Comments);
    };
    // 帖⼦的索引信息 index 从 Comment 组件传达到 CommentApp 组件
    const deleteFunction = (index) => {
      // 检测⼀下是否正确可以获得
      console.log("删除帖⼦位置" + index);
      Comments.value.splice(index, 1);
      saveDate(Comments);
    };
    // 挂载前调用获取数据函数
    onBeforeMount(() => {
      loadData();
    });

    return {
      loadData,
      saveDate,
      receiveInfo,
      Comments,
      deleteFunction,
    };
  },
};
</script>

<style>
.container {
  width: 560px;
  margin: 10px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  padding: 20px;
}
</style>