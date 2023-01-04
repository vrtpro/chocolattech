<script setup lang="ts">
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import { main, payment } from '../content';
</script>

<template>
    <Card>
        <div class="profile text-center mt-6 mb-6">
            <h5 class="font-noto_jp font-bold text-slate-700 text-lg">{{ main.name }} - Commision</h5>
        </div>
        <div class="muchotexto font-lexend text-center text-chocolate-700 mx-5">
            <div class="pricelist">
                <h5 class="text-[1.050rem] font-bold">Anime style pricelist</h5>
                <p class="text-[0.9rem] my-2">
                    Headshot - Bust Up 100k / 30$
                    <br />
                    Halfbody - 150k / 50$
                    <br />
                    Fullbody - 200k / 75$
                </p>
                <p class="text-[0.9rem] my-2">Commercial use 2x</p>
            </div>
            <div class="tos">
                <h5 class="text-[1.050rem] font-bold">Terms of Service</h5>
                <ul class="text-[0.9rem] my-2 list-disc m-16 text-left">
                    <li>Give the referrence</li>
                    <li>Pay after sketch</li>
                    <li>3 Revision</li>
                    <li>Must include credit to the artist</li>
                </ul>
            </div>
            <div class="pay_to">
                <h5 class="text-[1.050rem] font-bold mb-5">Pay here</h5>
                <div class="text-center text-white">
                    <Button class="w-48" name="Pay" icon="uiw:pay" :dest="{ name: 'Donation' }" />
                </div>
            </div>
            <div class="art_example mt-5">
                <img
                    class="w-[10rem] h-[10rem] object-cover mb-3 rounded-full inline-block"
                    src="/vite_assets/img/art/art_1.jpg"
                    alt="Art example"
                />
                <img
                    class="w-[10rem] h-[10rem] object-cover mb-3 rounded-full inline-block"
                    src="/vite_assets/img/art/art_2.jpg"
                    alt="Art example"
                />
                <img
                    class="w-[10rem] h-[10rem] object-cover mb-3 rounded-full inline-block"
                    src="/vite_assets/img/art/art_3.jpg"
                    alt="Art example"
                />
            </div>
        </div>
        <div class="border-[0.5px] mx-5 my-5 border-chocolate-800" />
        <div class="text-center">
            <Button class="w-56 text-white mb-2" name="Waiting List" icon="fluent-mdl2:waitlist-confirm" dest="/" />
            <br />
            <Button class="w-56 text-white" name="Back" icon="ic:round-keyboard-arrow-left" dest="/" />
        </div>
    </Card>
</template>

<style scoped></style>
