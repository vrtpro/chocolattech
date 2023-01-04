<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - 404</h5>
        </div>
        <div class="muchotexto text-chocolate-700 font-lexend my-10">
            <h2 class="mx-5 text-3xl">(ರ⁠_⁠ರ)</h2>
            <h3 class="mx-5 text-xl">I don't know what is going on.</h3>
            <p class="font-lexend text-[0.8rem] mx-5">
                Good luck searching for it though.
                <br />
                Here is a useless number that Google has no result for.
                <span class="text-[#929292]">Try Bing. Just Kidding.</span>
            </p>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-chocolate-800" />
        <div class="text-center">
            <Button class="w-36 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
