<template>
  <div class="wrapper">
    <h2>{{ msg }}</h2>
    <h3>{{ firstName }}---{{ lastName }}</h3>
    <h3>{{ firstName1 }}---{{ lastName1 }}</h3>
  </div>
</template>

<script>
export default {
  name: "AxiosPost",
  props: { msg: String },
  data() {
    return {
      firstName: "",
      lastName: "",
      firstName1: "",
      lastName1: "",
    };
  },
  created() {
    this.$axios({
      method: "post",
      url: "http://httpbin.org/post",
      Headers: {
        "content-type": "application/json", //默认就是json格式
      },
      data: {
        firstName: "ddd",
        lastName: "ooo",
      },
    }).then((response) => {
      // console.log(typeof response.data.data);
      let resObj = JSON.parse(response.data.data);
      // console.log(resObj);
      this.firstName = resObj.firstName;
      this.lastName = resObj.lastName;
    });

    //使用表单数据格式传参，使用qs库对象 -> 表单格式
    let obj = {
      firstName1: "法外",
      lastName1: "狂徒",
    };
    // 使用表单数据格式传参
    this.$axios({
      method: "post",
      url: "http://httpbin.org/post",
      Headers: {
        "content-type": "application/x-www-form-urlencoded", //默认就是json格式
      },
      data: this.$qs.stringify(obj),
    }).then((response) => {
      console.log(response);
      let resObj = response.data.form;
      // console.log(resObj);
      this.firstName1 = resObj.firstName1;
      this.lastName1 = resObj.lastName1;
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(25, 224, 238);
  color: #fff;
}
</style>