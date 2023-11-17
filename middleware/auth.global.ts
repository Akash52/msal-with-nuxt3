import {useMSAuth} from "~/composables/useMSAuth";
import {useAppUser} from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;
  if (to.name === "/login") return;

  const msAuth = useMSAuth();
  const accounts = msAuth.getAccounts();
  const userStore = useAppUser();
  const accessToken = await msAuth.acquireTokenSilent();
  let isAuthenticated = msAuth.isAuthenticated() && accessToken;

  if (isAuthenticated) {
    const user = {
      ...accounts[0],
      bearerToken: accessToken,
    };

    localStorage.setItem("user", JSON.stringify(user));
    userStore.value.user = user;
  }
  if (to.name !== "login" && !isAuthenticated) {
    return navigateTo("/login", { replace: true });
  } else if (to.name === "login" && isAuthenticated) {
    return navigateTo("/", { replace: true });
  } else {
    return;
  }
});
