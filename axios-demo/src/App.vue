<template>
  <div id="app">
    <AxiosOne msg="使用axios发起带参数的get请求" />
    <AxiosTwo msg="使用axios GET 请求img" />
    <AxiosThree msg="使用axios GET 请求JSON" />
    <AxiosPost msg="使用axios POST 请求传参" />
    <AxiosAll msg="使用 AxiosAll 发送合并请求" />
    <AxiosFile msg="使用 AxiosFile 下载进度条" />
  </div>
</template>

<script>
import AxiosOne from "./components/AxiosOne.vue";
import AxiosTwo from "./components/AxiosTwo.vue";
import AxiosThree from "./components/AxiosThree.vue";
import AxiosPost from "./components/AxiosPost.vue";
import AxiosAll from "./components/AxiosAll.vue";
import AxiosFile from "@/components/AxiosFile.vue";

export default {
  name: "App",
  components: {
    AxiosOne,
    AxiosTwo,
    AxiosThree,
    AxiosPost,
    AxiosAll,
    AxiosFile,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
