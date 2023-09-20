export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  plugins: [{ src: "~/plugins/msal.ts", mode: "client" }],

  modules: ["@pinia/nuxt", "nuxt-headlessui"],
  css: ["~/assets/css/main.css"],

  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  runtimeConfig: {
    public: {
      clientId: process.env.CLIENTID,
      authority: process.env.AUTHORITY,
      redirectUri: process.env.REDIRECT_URI,
      postLogoutRedirectUri: process.env.POSTLOGOUT_REDIRECT_URI,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
