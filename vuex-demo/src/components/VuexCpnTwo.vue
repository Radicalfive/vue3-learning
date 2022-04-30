<template>
  <div>
    <h2 style="color: #49aaf8">VuexCpnTwo</h2>
    <!-- <div>计数值：{{ counter }}</div> -->
    <!-- 1. counter值不同步 -->
    <!-- <button @click="counter++">+1</button>
    <button @click="counter--">-1</button> -->

    <!-- 2. 使用Vuex的全局状态数据,实现两个组件的counter同步 -->
    <!-- <div>计数值：{{ $store.state.counter }}</div>
    <button @click="$store.state.counter++">+1</button>
    <button @click="$store.state.counter--">-1</button> -->

    <!-- 3. mutataions的基本使用 -->
    <!-- <div>计数值：{{ $store.state.counter }}</div>
    <button @click="$store.commit('add')">+1</button>
    <button @click="$store.commit('sub')">-1</button> -->

    <!-- 4. 带参数的mutataions -->
    <!-- <div>计数值：{{ $store.state.counter }}</div>
    <button @click="$store.commit('add', 5)">+5</button>
    <button @click="$store.commit('sub', 5)">-5</button> -->

    <!-- 5. 通过payload封装多个参数 -->
    <!-- <div>计数值：{{ $store.state.counter }}</div>
    <button @click="$store.commit('add', { num: 5, multiple: 2 })">+5</button>
    <button @click="$store.commit('sub', { num: 5, multiple: 2 })">-5</button> -->

    <!-- 6.使用常量引用函数 -->
    <h3>计数值：{{ $store.state.counter }}</h3>
    <button @click="addCounter()" class="animated-fill-button">+10</button>
    <button @click="subCounter()" class="animated-fill-button">-10</button>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnTwo",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.$store.commit(COUNTER_ADD, { num: 5, multiple: 2 });
    },
    subCounter() {
      this.$store.commit(COUNTER_SUB, { num: 5, multiple: 2 });
    },
  },
};
</script>


<style scoped>
.animated-fill-button {
  margin-right: 30px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  color: #49aaf8;
  border: 1px solid #49aaf8;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

.animated-fill-button:hover {
  background: #49aaf8;
  color: #fff;
}
</style>