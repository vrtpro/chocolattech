<script setup lang="ts">
const state = ref(true);
const close = () => {
    state.value = !state.value;
    document.body.classList.remove('overflow-hidden');
};

onMounted(() => {
    if (state.value) {
        document.body.classList.add('overflow-hidden');
    }
});
</script>

<template>
    <div v-if="state" class="fixed z-30 flex flex-col items-center content-center bg-black bg-opacity-40 w-full h-full">
        <div class="mt-2 cursor-pointer text-white hover:text-red-400" @click="close">
            <Icon name="mdi:close-circle-outline" size="2.5em" />
        </div>
        <div class="bg-white mt-10 p-7 rounded-lg">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
