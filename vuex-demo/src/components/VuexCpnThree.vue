<template>
  <div>
    <!-- 正确触发 -->
    <div>
      <h3>VuexCpnThree组件</h3>
      <label for="firstName">firstName</label>
      <!-- <input v-model="$store.state.firstName" type="text" id="firstName" /> -->
      <input v-model="firstName" type="text" id="firstName" />

      <label for="lastName">lastname</label>
      <input v-model="lastName" type="text" id="lastName" />

      <div class="nav">
        <button @click="demoAction()" class="animated-fill-button">
          触发异步操作
        </button>
        fullName: {{ $store.state.firstName }} {{ $store.state.lastName }}
      </div>
    </div>
  </div>
</template>

<script>
import { HANDLE_FIRST, HANDLE_LAST } from "../store/mutation-types";
export default {
  name: "VuexCpnThree",
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(newVal) {
        this.$store.commit(HANDLE_FIRST, newVal);
      },
    },
    lastName: {
      get() {
        return this.$store.state.lastName;
      },
      set(newVal) {
        this.$store.commit(HANDLE_LAST, newVal);
      },
    },
  },
  methods: {
    demoAction() {
      this.$store.dispatch("submitActions", "okok").then((res) => {
        alert(res);
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
/* 黑色作为网页的背景色 */
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #f6f6f6;
}

/* 文字大小，居中 */
h3 {
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #49aaf8;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  height: 45px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  padding: 5px;
  margin: 8px;
  font-size: 14px;
  font-weight: 300;
}

.nav {
  font-size: 16px;
  height: 70px;
  line-height: 70px;
}

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