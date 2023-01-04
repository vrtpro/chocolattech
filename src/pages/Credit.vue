<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Credit</h5>
        </div>
        <div class="muchotexto">
            <p class="font-lexend text-center text-[0.8rem] text-[#665A5A] mx-5">Coming soon.</p>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-[#665A5A]" />
        <div class="text-center">
            <Button class="w-36 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
