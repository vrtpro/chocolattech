<script setup lang="ts"></script>

<template>
    <div class="h-[95vh] bg-[#efefef] bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <slot />
        <img
            src="/img/signature.webp"
            alt="Signature"
            class="flex absolute h-16 bottom-[-20px] right-0 md:right-[-30px] -rotate-12 pointer-events-none sign"
        />
    </div>
</template>

<style></style>
