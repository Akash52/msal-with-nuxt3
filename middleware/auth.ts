import { useUserStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;

  const { $msal } = await useNuxtApp();
  const accounts = $msal().getAccounts();
  const userStore = useUserStore();
  const accessToken = await $msal().acquireTokenSilent();
  let isAuthenticated = $msal().isAuthenticated() && accessToken;

  if (isAuthenticated) {
    const user = {
      ...accounts[0],
      bearerToken: accessToken,
    };

    localStorage.setItem("user", JSON.stringify(user));

    userStore.$patch((state) => {
      state.user = user;
    });
  }
  if (to.name !== "login" && !isAuthenticated) {
    return navigateTo("/login", { replace: true });
  } else if (to.name === "login" && isAuthenticated) {
    return navigateTo("/", { replace: true });
  } else {
    return;
  }
});
