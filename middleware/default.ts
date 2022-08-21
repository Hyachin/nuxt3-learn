// 路由独享守卫，需要在页面中配置middleware

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("我只守卫you");
});
