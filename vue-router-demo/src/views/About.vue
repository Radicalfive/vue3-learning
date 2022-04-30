<template>
  <div class="about">
    <div class="side-bar">
      <router-link to="/about/back">后端</router-link>
      <router-link to="/about/front">前端</router-link>
      <router-link to="/about/android">Android</router-link>
      <router-link to="/about/ios">IOS</router-link>
      <router-link to="/about/artificial">人工智能</router-link>
      <router-link to="/about/sql">数据库</router-link>
      <router-link to="/about/application">程序开发</router-link>
    </div>
    <router-view class="content"> </router-view>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.about {
  display: flex;
}

.side-bar {
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-right: 10px;
  height: 570px;
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
