<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

let state = ref(true);
const close = () => {
    state.value = !state.value;
    console.log(state.value);
};
</script>

<template>
    <div
        v-if="state"
        class="max-w-sm bg-white bg-opacity-30 backdrop-blur-sm p-2 font-lexend rounded-md ring-2 ring-chocolate-500 shadow-sm fixed right-2 top-2 transition-all"
    >
        <div class="text-chocolate-800 cursor-pointer" @click="close">
            <Icon icon="material-symbols:close-rounded" class="absolute right-2" />
        </div>
        <h1 class="text-md text-chocolate-800 font-medium">
            <Icon icon="gridicons:notice-outline" class="inline-block" /> Reminder
        </h1>
        <p class="text-[13px] text-chocolate-800">
            Choco is preparing for her re-debut at February 14, 2023 and this project will be re-writed. Don't miss it
            out!
        </p>
    </div>
</template>

<style scoped></style>
