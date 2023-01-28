<script setup lang="ts">
_initHead();
</script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="#6E5050" />
    <div class="container mx-auto p-4 font-lexend">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(8px);
}
</style>
