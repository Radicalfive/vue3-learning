<template>
  <div>
    <div class="scroll">
      <div class="header">
        <button href="#" class="btn">知乎</button>
        <button href="#" class="btn">首页</button>
        <button href="#" class="btn">会员</button>
        <button href="#" class="btn">发现</button>
        <button href="#" class="btn">等你来答</button>
        <input type="text" />
        <button href="#" class="btn">提问</button>
      </div>
      <div class="nav" :class="navBarFixed == true ? 'navBarWrap' : ''">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/todoList">todoList</router-link> |
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarFixed: false,
    };
  },

  components: {},

  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },

  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      //  当滚动超过 90 时，实现吸顶效果
      if (scrollTop > 90) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
};
</script>

<style lang="less">
.scroll {
  height: 150px;
}
.header {
  height: 40px;
  background: blue;
  text-align: left;
  color: #fff;
}
.nav {
  padding: 1px;
  width: 100%;
  box-sizing: border-box;
  background: #7e7e7e;
  text-align: center;
  height: 60px;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
