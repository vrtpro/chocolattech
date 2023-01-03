<script setup lang="ts">
import { main } from '../content';
</script>

<template>
    <div class="card">
        <slot />
        <div class="footer text-center my-7">
            <span class="font-lexend text-[0.7rem] text-[#665A5A]">{{ main.footer }}</span>
        </div>
    </div>
</template>

<style scoped></style>
