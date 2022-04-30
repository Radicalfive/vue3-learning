<template>
  <div class="dynamic-arguments">
    <h2>
      模板插值
      <br />
      <input v-model="msg" type="text" />
      <br />
      {{ msg }}
      <hr />
    </h2>
    <h3>
      JavaScript 表达式
      <br />
      字符串 split 操作：{{ msg.split("，")[0] }}
      <br />
      数值计算：{{ num + 1 }}
      <br />
      数组操作：{{ arr[0] }}
      <hr />
    </h3>
    <h3>
      v-bind: 绑定属性
      <br />
      <a v-bind:href="a">radical.top</a>
      <br />
      <a v-bind:[urlKey]="b">radical.top</a>
    </h3>
    <hr />
    <h3>
      v-bind: 简写模式
      <br />
      <a :[urlKey]="a">www.baidu.com</a>
    </h3>
    <hr />
    <h2>
      v-on:[handlerEventNa me] 绑定事件名变量
      <br />
      <button v-on:click="increase">点我++{{ num }}</button>
    </h2>
    <h2>
      v-on:[handlerEventName] 绑定事件名变量
      <br />
      <button v-on:[clickEventName]="increase">点我++{{ num }}</button>
    </h2>
    <h2>
      v-on:[handlerEventName] 简写模式
      <br />
      <button @[clickEventName]="increase">点我++{{ num }}</button>
    </h2>
    <hr />
    <h2>
      v-slot:[slotName] 具名插槽
      <parent>
        <template v-slot:child>
          <child></child>
        </template>
      </parent>
    </h2>
    <h2>
      #[slotName] 简写模式
      <parent>
        <template #[child]>
          <child></child>
        </template>
      </parent>
    </h2>
    <hr />
    <!-- <h2>
      动态指令计算
      <br />
      <a v-bind:[key1 + key2]="a">aaa.com</a>
    </h2> -->
  </div>
</template>

<script>
import parent from "./bbb";
import child from "./aaa";
import { ref } from "vue";
export default {
  name: "DynamicArguments",
  components: {
    parent,
    child,
  },
  setup() {
    let msg = ref("唯有行动才能解除所有的不安");
    let num = ref(0);
    let arr = ref(["radical", "全栈开发", "编程小白养成时。。。"]);
    let a = "radical.top";
    let b = ref("radical.top");
    let urlKey = ref("href");
    let clickEventName = ref("click");
    let child = ref("child");
    let key1 = ref("nam");
    let key2 = ref("e");
    const increase = () => {
      num.value++;
    };
    return {
      msg,
      num,
      arr,
      a,
      b,
      urlKey,
      increase,
      clickEventName,
      child,
      key1,
      key2,
    };
  },
};
</script>

<style scoped>
input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: rgb(0, 194, 113);
}

h2 > button {
  font-size: 12px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  color: #3c90d4;
  border: 1px solid #49aaf8;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

h2 > button:hover {
  background: #36a1f9;
  color: #fff;
}
</style>