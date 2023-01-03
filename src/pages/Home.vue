<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main, routes } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <img
                class="w-[5.75rem] mb-3 rounded-full inline-block"
                src="/vite_assets/img/profile.jpg"
                alt="Profile Picture"
            />
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }}</h5>
        </div>
        <div class="links">
            <ul class="buttons gap-3 flex flex-row flex-wrap text-white">
                <li v-for="route in routes" :key="route.name" class="max-w-full">
                    <Button :name="route.name" :icon="route.icon" :dest="route.dest" />
                </li>
            </ul>
        </div>
    </Card>
</template>

<style scoped></style>
