<template>
  <div id="app" class="main">
    <vuex-cpn-one></vuex-cpn-one>
    <vuex-cpn-two></vuex-cpn-two>
    <vuex-cpn-three></vuex-cpn-three>
    <vuex-cpn-four></vuex-cpn-four>
  </div>
</template>

<script>
import VuexCpnOne from "./components/VuexCpnOne.vue";
import VuexCpnTwo from "./components/VuexCpnTwo.vue";
import VuexCpnThree from "./components/VuexCpnThree.vue";
import VuexCpnFour from "./components/VuexCpnFour.vue";

export default {
  name: "App",
  components: {
    VuexCpnOne,
    VuexCpnTwo,
    VuexCpnThree,
    VuexCpnFour,
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 5px;
  color: #2c3e50;
  margin-top: 10px;
}
.main {
  background-color: #f6f6f6;
}
</style>
