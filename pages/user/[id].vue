<template>
  <div class="">
    <!-- [id] id占位 [[name]] name 是可选的 -->
    用户id - {{ id }}
    <br />
    <NuxtLink to="/">go to index</NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
let id = ref(route.params.id);
</script>

<style scoped></style>
