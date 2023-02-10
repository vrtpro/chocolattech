<script setup lang="ts">
const props = defineProps(['name', 'icon', 'dest']);
</script>

<template>
    <RouterLink class="button" :to="props.dest">
        <Icon :name="props.icon" class="block flex-grow-0 shrink-0" width="32" height="32" />
        <span class="flex-grow flex-shrink text-left w-full">{{ props.name }}</span>
    </RouterLink>
</template>

<style scoped></style>
