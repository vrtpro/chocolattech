<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main } from '../content';
import { Icon } from '@iconify/vue';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Merchandise</h5>
        </div>
        <div class="merchlist font-lexend text-center text-[#665A5A] mx-5">
            <h5 class="text-[1.050rem] text-center font-bold">Phone case & Acrylic keychain Choco Latte</h5>
            <p class="font-lexend text-center text-[0.8rem] text-[#665A5A] mx-5 mb-2">Pre order @ Tokopedia</p>
            <img class="mb-5" src="/vite_assets/img/merch_1.jpg" alt="Merch 1" />
            <a class="button w-[12rem] text-white my-2" href="https://tokopedia.com/erfolganime">
                <Icon icon="material-symbols:shopping-cart" class="block flex-grow-0 shrink-0" width="32" height="32" />
                <span class="flex-grow flex-shrink text-left w-full">Buy here!</span>
            </a>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-[#665A5A]" />
        <div class="text-center">
            <Button class="w-36 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
