<!--CommentItem.vue-->
<template>
  <div className="comment">
    <div className="user">
      <span>{{ props.comment.username }} </span>：
    </div>
    <div>{{ props.comment.content }}</div>
    <!-- 添加删除⼊⼝ -->
    <span className="delete" @click="deleteCom">
      <img src="../assets/delete.png" />
    </span>
  </div>
</template>

<script>
// import { onMounted } from "vue";
export default {
  name: "CommentItem",
  props: {
    comment: Object,
    deleteFun: Function,
    index: Number,
  },
  setup(props) {
    // 删除点击事件
    const deleteCom = () => {
      if (props.deleteFun) {
        props.deleteFun(props.idnex);
      }
    };
    return {
      props,
      deleteCom,
    };
  },
};
</script>

<style>
.comment {
  position: relative;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 55px;
  font-size: 16px;
}
.comment span {
  color: #00a3cf;
  font-style: italic;
}
.delete {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  display: none;
}
.delete img {
  width: 15px;
}
.comment:hover .delete {
  display: inline;
}
</style>
