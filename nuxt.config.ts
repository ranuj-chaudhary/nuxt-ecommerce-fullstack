import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    databaseUrl: process.env.NUXT_DATABASE_URL,
    directUrl: process.env.NUXT_DIRECT_URL,
    public: {

    }
  }
  

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxt/icon"],
})