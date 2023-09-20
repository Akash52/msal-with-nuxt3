import { defineStore } from "pinia";
export const useUserStore = defineStore("userdata", {
  state: () => ({
    user: {} as any,
    userImage: null,
  }),
});
