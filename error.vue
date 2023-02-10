<script setup lang="ts">
defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="#6E5050" />
    <div class="container mx-auto p-4 font-lexend">
        <FullScreenCard class="h-auto">
            <div class="font-lexend text-center">
                <h1 class="text-chocolate-800 text-7xl font-bold">{{ error.statusCode }}</h1>
                <h2 class="text-chocolate-700 text-3xl font-bold">Oops</h2>
                <p class="text-chocolate-700 text-base">{{ error.message }}</p>
                <button class="button w-56 my-4" @click="handleClearError">
                    <Icon name="material-symbols:home" class="block flex-grow-0 shrink-0" width="32" height="32" />
                    <span class="flex-grow flex-shrink text-left w-full">Go back Home</span>
                </button>
            </div>
        </FullScreenCard>
    </div>
</template>

<style></style>
