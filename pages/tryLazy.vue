<template>
  <div class="">
    <TestNormal />
    <button @click="handleClick">显示/隐藏</button>
    <LazyText v-if="show" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const handleClick = () => {
  show.value = !show.value;
};
</script>

<style scoped></style>
