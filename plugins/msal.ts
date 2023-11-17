import {useMSAuth} from "~/composables/useMSAuth";

export default defineNuxtPlugin(async ({ $config }) => {
  const msAuth = useMSAuth();
  await msAuth.initialize();

  return {};
});
