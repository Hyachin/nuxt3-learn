<template>
  <div class="">
    index
    <br />
    <NuxtLink to="/demo">go to demo</NuxtLink>
    <br />
    <NuxtLink to="/user/1">go to user with param id = 1</NuxtLink>
    <br />
    <NuxtLink to="/father/son/grandson">try nested routes</NuxtLink>
    <br />
    <NuxtLink to="/tryLazy">try lazy-loading component</NuxtLink>
    <br />
    <NuxtLink to="/tryComposables">try composables</NuxtLink>
    <br />
    <NuxtLink to="/articleList">try fetch data</NuxtLink>
    <br />
    <NuxtLink to="/you">try per-route guard </NuxtLink>
  </div>
</template>

<script setup>
// 实际项目中每个页面都需要配置 根据页面内容不同替换不同的数据 以便搜索引擎检索
useHead({
  title: "Nuxt3快速入门-首页",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "description", content: "Nuxt3快速入门代码指南" },
    { name: "keywords", content: "Nuxt3" },
  ],
});
</script>

<style scoped></style>
