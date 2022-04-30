<template>
  <div class="wrapper">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "AxiosFile",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  created() {
    this.$axios({
      method: "post",
      url: "http://47.103.107.137:9000/my-file/banner43.jpg",
      onDownloadProgress(progress) {
        console.log(Math.round((progress.loaded / progress.total) * 100) + "%");
      },
      onUploadProgress: (ProgressEvent) => {
        //对上传进度时间的处理
        console.log(ProgressEvent);
      },
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(154, 117, 75);
  color: #fff;
}
</style>