<script setup lang="ts">
useHead({
    title: 'Home',
});
</script>

<template>
    <FullScreenCard class="lg:flex h-auto">
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
                <h1 class="text-3xl text-chocolate-800 text-center font-bold">Choco Latte チョコラテ</h1>
                <h2 class="text-md text-slate-400 text-center font-bold italic">/ chocolatte /</h2>
                <p class="text-base text-chocolate-700 my-3 text-center">
                    Hello everyone, my name is Choco Latte. I will be your virtual friend from now on and in the future.
                    Nice to meet you, my virtual best friend!
                </p>
            </div>
        </div>
        <div class="lg:hidden p-2 block lg:py-16 lg:flex-1">
            <!-- TESTING PURPOSES ONLY. DOWNLOAD ASSETS & CHANGE TO LOCAL PATH! -->
            <img
                src="https://cdn.discordapp.com/attachments/953176156000104539/954697424960638976/Choco_with_Mahjong.png"
                alt="Model"
                class="h-[32rem] m-auto"
            />
        </div>
    </FullScreenCard>
</template>
<style></style>
