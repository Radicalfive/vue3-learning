<template>
  <div class="todo-list">
    <div class="header">todoList</div>

    <input type="text" v-model="name" placeholder="请输入名字" class="mr-1" />
    <input type="text" v-model="gender" placeholder="请输入性别" class="mr-1" />
    <button @click="add" class="mr-1">添加</button>
    <button @click="update" class="mr-1">更新</button>
    <button @click="clear">清空数组</button>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>姓名：{{ item.name }}</span>
        <span>性别：{{ item.gender }}</span>
        <div class="btn-div">
          <button @click="edit(index)">编辑</button>
          <button @click="del(index)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      list: [
        {
          name: "aaa",
          gender: "male",
        },
      ],
      name: "",
      gender: "",
    };
  },
};
</script>
