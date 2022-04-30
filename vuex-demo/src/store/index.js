import Vue from "vue";
import Vuex from "vuex";

//使用vuex
Vue.use(Vuex);

import {
  COUNTER_ADD,
  COUNTER_SUB,
  HANDLE_FIRST,
  HANDLE_LAST,
} from "./mutation-types";

//创建store对象
const store = new Vuex.Store({
  state: {
    counter: 300,
    firstName: "",
    lastName: "",
  },
  mutations: {
    // 1.  mutations基础使用
    // add(state) {
    //   state.counter++;
    // },
    // sub(state) {
    //   state.counter--;
    // },

    //2. mutations携带参数
    // add(state, num) {
    //   state.counter += num;
    // },
    // sub(state) {
    //   state.counter -= num;
    // },

    // 3.通过payload封装多个参数
    // add(state, payload) {
    //   state.counter = state.counter + payload.num * payload.multiple;
    // },
    // sub(state, payload) {
    //   state.counter = state.counter - payload.num * payload.multiple;
    // },

    // 4. 通过常量引用函数
    [COUNTER_ADD](state, payload) {
      state.counter = state.counter + payload.num * payload.multiple;
    },
    [COUNTER_SUB](state, payload) {
      state.counter = state.counter - payload.num * payload.multiple;
    },
    [HANDLE_FIRST](state, payload) {
      state.firstName = payload;
    },
    [HANDLE_LAST](state, payload) {
      state.lastName = payload;
    },
    submitMutations(state) {
      state.firstName = "zhang";
    },
  },
  actions: {
    // submitActions(context) {
    // 模拟异步
    //   setTimeout(() => {
    //     context.commit("submitMutations");
    //   }, 1000);
    // },
    submitActions(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("submitMutations");
          resolve("异步操作完成" + payload + "over");
        }, 1000);
      });
    },
    demoActions({ commit }) {
      setTimeout(() => {
        commit("submitMutations");
      }, 1000);
    },
  },
  // 全局计算属性
  getters: {
    fullName(state) {
      return state.firstName + state.lastName;
    },
  },
  modules: {},
});

//导出对象
export default store;
