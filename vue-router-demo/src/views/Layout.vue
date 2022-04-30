<template>
  <div>
    <div class="nav">
      <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">IT技术</router-link>
      </div>
      <div>
        <router-link to="/my">我的</router-link>
        <router-link to="/login">登录</router-link>
        <div class="box">
          <p class="name" v-show="username">{{ username }}</p>
        </div>
      </div>
    </div>
    <hr />
    <router-view class="container"> </router-view>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      username: this.$route.query.username,
    };
  },
  created() {
    console.log(this.$route.query.username);
  },
};
</script>

<style scoped>
.nav {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: space-between;
}

a {
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 30px;
}

hr {
  background-color: #f0f0f0;
}

.router-link-active {
  color: #eb6f5a;
  background-color: #f0f0f0;
}

.container {
  width: 80%;
  margin: 10px auto;
  padding: 12px;
  height: 80vh;
}

.name {
  position: absolute;
  top: 0px;
  right: 280px;
  color: #eb6f5a;
}
</style>
