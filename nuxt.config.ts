// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: [
  "nuxt-icon",
  "@pinia/nuxt",
  "@nuxtjs/tailwindcss",
  "nuxt-svgo",
  "@nuxt/content",
 ],
 pinia: {
  autoImports: [
   // automatically imports `defineStore`
   "defineStore", // import { defineStore } from 'pinia'
   ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
  ],
 },
});
