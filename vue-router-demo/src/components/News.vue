<template>
  <div class="news">
    <div class="side-bar">
      <router-link to="/home/news/back">后端</router-link>
      <router-link to="/home/news/front">前端</router-link>
      <router-link to="/home/news/android">Android</router-link>
      <router-link to="/home/news/ios">IOS</router-link>
      <router-link to="/home/news/artificial">人工智能</router-link>
      <router-link to="/home/news/sql">数据库</router-link>
      <router-link to="/home/news/application">程序开发</router-link>
    </div>
    <router-view class="content"> </router-view>
  </div>
</template>

<script>
export default {
  name: "news",
};
</script>

<style scoped>
.news {
  height: 50px;
  line-height: 50px;
  background-color: #333;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: space-between;
}

a {
  background-color: #f6f6f6;
  color: #505050;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: center;
}
.router-link-active {
  background-color: #f0f0f0;
  color: #ea6f5a;
  border-radius: 5%;
}
.content {
  max-width: 1142px;
  margin: 10px auto;
  background-color: #fff;
  padding: 10px;
  height: 80vh;
}
</style>
