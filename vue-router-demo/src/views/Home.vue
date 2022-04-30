<template>
  <div class="home">
    <div class="side-bar">
      <router-link to="/home/article/1">文章1</router-link>
      <router-link to="/home/article/2">文章2</router-link>
      <router-link to="/home/news">新闻</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.home {
  display: flex;
}

.side-bar {
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-right: 10px;
  height: 80vh;
  background-color: #fff;
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
  flex: 1;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>
