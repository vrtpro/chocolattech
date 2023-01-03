<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main, payment } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6">
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Donation</h5>
        </div>
        <div class="img">
            <img src="/vite_assets/img/chocoin.png" alt="Chocoin" />
        </div>
        <div class="links">
            <ul class="buttons gap-3 flex flex-row flex-wrap text-white">
                <li v-for="pay in payment" :key="pay.name" class="max-w-full">
                    <a class="button" :href="pay.dest">
                        <span class="flex-grow flex-shrink text-center w-full">{{ pay.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-[#665A5A]" />
        <div class="text-center">
            <Button class="w-36 text-white bg-[#857171]" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
