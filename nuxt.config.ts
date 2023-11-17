export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  plugins: [{ src: "~/plugins/msal.ts", mode: "client" }],

  modules: ["nuxt-headlessui"],
  css: ["~/assets/css/main.css"],

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
