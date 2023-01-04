<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h2 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Model</h2>
        </div>
        <div class="model__traveler mb-2">
            <h4 class="font-lexend font-semibold text-[1.050rem] text-center text-[#665A5A] mb-2">
                Traveler - Original model
            </h4>
            <p class="font-lexend text-center text-[0.8rem] text-[#665A5A] mx-5">
                Choco loves making friends with everyone. Sometimes she will run away from castle to meet her friends.
                To make her more freely she will use this costume.
            </p>
            <img src="/vite_assets/img/traveler_origin.png" alt="Traveler model" />
        </div>
        <div class="model__princess mb-2">
            <h4 class="font-lexend font-semibold text-[1.050rem] text-center text-[#665A5A] mb-2">
                Princess model - 2022 Project
            </h4>
            <p class="font-lexend text-center text-[0.8rem] text-[#665A5A] mx-5">To be Announced @ 2022</p>
            <img src="/vite_assets/img/princess_model.png" alt="Princess model" />
        </div>
        <div class="model__loli">
            <h4 class="font-lexend font-semibold text-[1.050rem] text-center text-[#665A5A] mb-2">Loli model</h4>
            <p class="font-lexend text-center text-[0.8rem] text-[#665A5A] mx-5">To be Announced</p>
            <img src="/vite_assets/img/loli_model.png" alt="Loli model" />
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-[#665A5A]" />
        <div class="text-center">
            <Button class="w-36 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
