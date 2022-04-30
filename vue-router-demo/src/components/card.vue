<template>
  <div class="card">
    <img :src="article.cover" />
    <div class="content">
      <h2 class="">
        {{ article.title }}
      </h2>
      <p class="desc">
        {{ article.desc }}
      </p>
      <h3>By Robin Darnell</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: ["article"],
};
</script>
<style  scoped>
.card {
  display: flex;
  margin: 12px;
  box-shadow: 5px 5px 5px rgba(97, 96, 96, 0.5);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 5px 5px 5px rgba(90, 87, 87, 0.5);
  -webkit-box-shadow: 5px 5px 5px rgba(93, 92, 92, 0.5);
  padding: 3px;
}

img {
  height: auto;
  width: 40%;
  padding-right: 18px;
}
.content {
  padding: 10px;
}
.desc {
  color: #b4b4b4;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
