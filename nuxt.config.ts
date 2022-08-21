import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'shortcut icon external nofollow"',
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
});
