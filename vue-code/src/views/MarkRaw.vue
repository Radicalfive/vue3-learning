<template>
  <div>
    你好 {{ obj.name }}
    <button @click="update">不能修改数据</button>
  </div>
</template>

<script>
import { readonly } from "vue";
export default {
  name: "MarkRaw",
  data: () => ({
    obj: readonly({ name: "Vue" }),
  }),
  methods: {
    update() {
      this.obj.name = "Radical";
      console.log(this.obj);
    },
  },
};
</script>