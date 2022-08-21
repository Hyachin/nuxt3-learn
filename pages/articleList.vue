<template>
  <div class="articleList">
    <div class="articleItem" v-for="item in list" :key="item.id">
      <img class="avatar" :src="item.author.avatar_url" alt="" />
      <span class="title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
// https://v3.nuxtjs.org/guide/features/data-fetching
import { ref } from "vue";
// 没有特殊配置要求用useFetch就可以
const { data } = await useFetch("https://cnodejs.org/api/v1/topics", {
  params: {
    tab: "good",
    limit: 10,
  },
});
let list = ref(data._rawValue.data);
</script>

<style scoped>
.articleList .articleItem .avatar {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
