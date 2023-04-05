<script setup lang="ts">
const state = ref(true);
const close = () => {
    state.value = !state.value;
};
</script>

<template>
    <div
        v-if="state"
        class="bg-red-500 text-[#efefef] bg-opacity-80 backdrop-blur rounded-xl shadow-lg ring-4 ring-red-600 m-2 w-80 md:w-96 p-4 bottom-4 right-4 fixed z-20"
    >
        <div class="right-4 fixed cursor-pointer" @click="close">
            <Icon name="mdi:close-circle-outline" size="1.3em" />
        </div>
        <slot />
    </div>
</template>

<style scoped></style>
