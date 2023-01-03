<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <img
                class="w-[5.75rem] mb-3 rounded-full inline-block"
                src="/vite_assets/img/profile.jpg"
                alt="Profile Picture"
            />
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Backstory</h5>
        </div>
        <div class="muchotexto">
            <p class="font-lexend text-[0.8rem] text-[#665A5A] mx-5">
                A princess from Sweets Kingdom. She has the power to become a cat. The princess accidentally enters the
                portal to the virtual world so her powers are lost and become a fully human! How she will back to her
                world?
            </p>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-[#665A5A]" />
        <div class="text-center">
            <Button class="w-36 text-white bg-[#857171]" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
