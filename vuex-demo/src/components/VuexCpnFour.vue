<template>
  <div class="nav">
    <!-- <label for="firstName">firstName</label>
    <input v-model="$store.state.firstName" type="text" id="firstName" />

    <label for="lastName">firstName</label>
    <input v-model="$store.state.lastName" type="text" id="lastName" /> -->

    <hr />
    <h3>VuexCpnFour组件</h3>
    <div class="box">fullName: {{ $store.getters.fullName }}</div>
  </div>
</template>

<script>
export default {
  name: "VuexCpnFour",
};
</script>

<style scoped>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #f6f6f6;
}
/* 文字大小，居中 */
div h3 {
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #49aaf8;
}

.nav {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}
</style>