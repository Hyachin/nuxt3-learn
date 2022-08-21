// 文件名中有global,则为全局路由守卫
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`你从${from.path}来，想去${to.path}`);
  if (to.path == "/demo") {
    alert("页面施工中...");
    console.log("页面施工中...");
    abortNavigation();
    return navigateTo("/");
  }
});
