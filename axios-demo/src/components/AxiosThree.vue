<template>
  <div class="wrapper">
    <h2>{{ msg }}</h2>
    <!-- 显示json数据 -->
    <h3>{{ obj.title }}</h3>
    <h3>{{ obj.author }}</h3>
    <div v-for="(item, index) in obj.slides" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AxiosThree",
  props: {
    msg: String,
  },
  data() {
    return {
      obj: {},
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "http://httpbin.org/json",
    }).then((response) => {
      // console.log(response.data);
      this.obj = response.data.slideshow;
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(103, 219, 92);
  color: #fff;
}
</style>