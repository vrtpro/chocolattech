<script setup lang="ts"></script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="var(--gradient)" />
    <div class="container mx-auto p-4 font-lexend">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: linear-gradient(to right, #0ea5e9, #8b5cf6, #f67185);
}
</style>
