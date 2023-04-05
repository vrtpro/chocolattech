<script setup lang="ts">
useHead({
    title: 'Commision',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">Chocomission</h1>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Anime style price list</h2>
            <p class="text-base text-chocolate-700">
                ❥ Headshot - Bust Up 100k / $30
                <br />
                ❥ Half body - 150k / $50
                <br />
                ❥ Full body - 200k / $75
                <br /><br />
                ❥ 2 Commercial use
            </p>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Terms of Service</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li>Give the referrence</li>
                <li>Pay after sketch</li>
                <li>3 Revision</li>
                <li>Must include credit to the artist</li>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Work samples</h2>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-3 mt-4">
                <div class="grid-card group">
                    <img class="object-cover object-center m-auto" src="/img/art/art_1.jpg" alt="Sample" />
                </div>
                <div class="grid-card group bg-[#c9ecff]">
                    <img class="object-cover object-center m-auto" src="/img/art/art_2.jpg" alt="Sample" />
                </div>
                <div class="grid-card group bg-[#edcaf4]">
                    <img class="object-cover object-center m-auto" src="/img/art/art_3.jpg" alt="Sample" />
                </div>
            </div>
            <h2 class="text-lg text-chocolate-600 font-semibold my-4">Check out more information on Komisign</h2>
            <a
                href="https://komisign.carrd.co/"
                target="_blank"
                rel="noreferrer nofollow me"
                class="button w-full lg:w-96"
            >
                <Icon
                    name="material-symbols:open-in-new-rounded"
                    class="block flex-grow-0 shrink-0"
                    width="32"
                    height="32"
                />
                <span class="flex-grow flex-shrink text-left w-full">Komisign Commision</span>
            </a>
        </div>
    </FullScreenCard>
</template>

<style scoped></style>
