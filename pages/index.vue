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
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
