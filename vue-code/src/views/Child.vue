<template>
  <div class="child">
    <h3>子组件</h3>
    <!-- <slot :data="data"></slot> -->
    <slot :obj="obj"></slot>
  </div>
</template>
<script>
export default {
  name: "child",
  data: function () {
    return {
      //   data: ["喜羊羊", "沸羊羊", "懒羊羊", "灰太狼"],
      obj: {
        name: "zhangsan",
      },
    };
  },
};
</script>