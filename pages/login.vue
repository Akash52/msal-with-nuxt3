<template>
    <LoginScreen />
</template>
<script setup>
definePageMeta({
    middleware: ["auth"],
});
</script>
  