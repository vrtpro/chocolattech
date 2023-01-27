<script setup lang="ts">
useHead({
    title: 'Home',
});
</script>

<template>
    <FullScreenCard class="lg:flex">
        <div class="hidden p-2 lg:block lg:py-16 lg:flex-1">
            <!-- TESTING PURPOSES ONLY. DOWNLOAD ASSETS & CHANGE TO LOCAL PATH! -->
            <img
                src="https://cdn.discordapp.com/attachments/953176156000104539/954697424960638976/Choco_with_Mahjong.png"
                alt="Model"
                class="h-[30rem] m-auto"
            />
        </div>
        <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
            <div class="my-4 lg:mt-28">
                <h1 class="text-2xl text-chocolate-800 text-center font-bold">Choco Berry チョコラテ</h1>
                <h2 class="text-md text-slate-400 text-center font-bold italic">/ chocoberri /</h2>
                <p class="text-base text-chocolate-700 my-3 text-center">
                    A princess from Sweets Kingdom. She has power to become a cat. The princess accidentally enter a
                    portal to the virtual world, so her power are lost and become a fully human! How she will back to
                    her world?
                </p>
            </div>
        </div>
        <div class="lg:hidden p-2 block lg:py-16 lg:flex-1">
            <!-- TESTING PURPOSES ONLY. DOWNLOAD ASSETS & CHANGE TO LOCAL PATH! -->
            <img
                src="https://cdn.discordapp.com/attachments/953176156000104539/954697424960638976/Choco_with_Mahjong.png"
                alt="Model"
                class="h-[30rem] m-auto"
            />
        </div>
    </FullScreenCard>
</template>
<style></style>
