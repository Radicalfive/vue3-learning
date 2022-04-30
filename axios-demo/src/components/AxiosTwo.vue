<template>
  <div class="wrapper">
    <h2>{{ msg }}</h2>
    <img :src="imgUrl" alt="图片" />
  </div>
</template>

<script>
export default {
  name: "AxiosTwo",
  props: {
    msg: String,
  },
  data() {
    return {
      imgUrl: "",
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "http://httpbin.org/image/png",
      responseType: "blob",
    }).then((response) => {
      // console.log(response);
      this.imgUrl = window.URL.createObjectURL(response.data);
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(4, 171, 232);
  color: #fff;
}
.wrapper img {
  width: 50%;
  height: 50%;
}
</style>