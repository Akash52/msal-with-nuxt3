<template>
    <div class="isolate bg-white h-screen flex flex-col items-center justify-center -mt-10 sm:-mt-20 lg:-mt-32">
        <h2
            class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-gray-700 text-center mt-4">
            Microsoft Authentication Library (MSAL) with Nuxt 3
        </h2>

        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem] animate-pulse"
                viewBox="0 0 1155 678">
                <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
                        y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#f87171" />
                        <stop offset="1" stop-color="#f67196" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="relative px-6 lg:px-8">
            <div class="isolate">
                <div class="relative px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl py-32 sm:py-40 lg:py-41">
                        <div class="text-center flex flex-col justify-center items-center">
                            <img src="/assets/Microsoft_logo.svg.png"
                                class="h-24 w-24  ring-4 ring-blue-200 sm:h-32 sm:w-32 oject-cover hover:opacity-75 transition-all duration-300" />
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" />
                            <div class="mt-10 flex items-center justify-center gap-x-6">

                                <button type="submit"
                                    class="bg-orange-500 text-white py-2 px-4 rounded font-medium flex items-center gap-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
                                    @click="login">
                                    <span>Login with Microsoft 365</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem] animate-pulse"
                    viewBox="0 0 1155 678">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177"
                            y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#f87171" />
                            <stop offset="1" stop-color="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { $msal } = useNuxtApp();

async function login() {
    await $msal().signIn();
}
</script>
  