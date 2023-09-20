<template>
    <div
        class="col-span-1 justify-center container mx-auto flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm mt-5">
        <div class="flex-1 flex flex-col p-8 relative">

            <div v-if="profileImage">
                <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full ring-4 ring-green-300" :src="profileImage" alt="">
            </div>
            <div class="justify-center items-center flex mx-auto text-gray-600 font-semibold  w-32 h-32 rounded-full bg-blue-200 uppercase :hover:bg-gray-300"
                v-else>
                {{ user?.name?.match(/[A-Z]/g).join("") }}
            </div>

            <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ user?.name }}</h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
                <dt class="sr-only">Name</dt>
                <dd class="text-gray-500 text-sm">{{ user?.username }}</dd>
                <dt class="sr-only">Email</dt>
            </dl>
            <button @click="logout(user.homeAccountId)"
                class="absolute bottom-0 right-0 mr-2 mb-2 bg-gray-100 p-2 rounded-lg shadow hover:bg-red-500 text-gray-500 hover:text-white hover:opacity-60 transition-all duration-500 font-extrabold font-mono">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                </svg>
            </button>
        </div>
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem] animate-pulse"
                viewBox="0 0 1155 678">
                <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
                        y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#38bdf8" />
                        <stop offset="1" stop-color="#f472b6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    </div>
</template>
<script setup>
import { useUserStore } from "../stores/auth";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user, userRole } = storeToRefs(userStore);
const { $msal } = useNuxtApp();
const isAuthenticated = $msal().isAuthenticated();


const profileImage = ref("");

async function logout(accountId) {
    if (accountId) {
        await $msal().signOut(accountId);
    } else {
        console.log("No account id");
    }
}

const getProfileImage = async () => {
    const accessToken = await $msal().acquireTokenSilent({
        scopes: ["User.Read"],
    });
    const response = await fetch(
        "https://graph.microsoft.com/v1.0/me/photo/$value",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    if (response.status != 404) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
    }
};

onMounted(async () => {
    if (isAuthenticated) {
        profileImage.value = await getProfileImage();
        userStore.$patch((state) => {
            state.userImage = profileImage;
        });
    }
});


</script>
  