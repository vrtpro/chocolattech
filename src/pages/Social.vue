<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main, sns } from '../content';
import { Icon } from '@iconify/vue';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h5 class="font-lexend font-bold text-slate-700 text-lg">{{ main.name }} - SNS</h5>
        </div>
        <div class="links">
            <ul class="buttons gap-3 flex flex-row flex-wrap text-white">
                <li v-for="social in sns" :key="social.name" class="max-w-full">
                    <a class="button" :href="social.dest" target="_blank" rel="noreferrer">
                        <Icon :icon="social.icon" class="block flex-grow-0 shrink-0" width="32" height="32" />
                        <span class="flex-grow flex-shrink text-left w-full">{{ social.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-chocolate-800" />
        <div class="text-center">
            <Button class="w-36 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
