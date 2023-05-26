// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["nuxt-icon", "@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-chatgpt"],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
 chatgpt: {
  apiKey: process.env.NUXT_API_SECRET,
 },
 pinia: {
  autoImports: [
   // automatically imports `defineStore`
   "defineStore", // import { defineStore } from 'pinia'
  ],
 },
});
