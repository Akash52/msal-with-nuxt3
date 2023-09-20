<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8  h-[80vh]">
    <h2
      class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600 text-center mt-4">
      Welcome to your 365 profile! 🌟
    </h2>
    <UserProfile />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
