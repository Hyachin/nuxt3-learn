<template>
  <NuxtLayout name="default">
    <template #header>公共头部</template>
    <div>
      <hello-world />
      <NuxtPage></NuxtPage>
    </div>
    <template #footer
      >公共底部:
      <NuxtLink to="/">go to index</NuxtLink>
    </template>
  </NuxtLayout>
</template>
