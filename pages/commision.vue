<script setup lang="ts">
useHead({
    title: 'Commision',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">Chocomission</h1>

            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Work samples</h2>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 mt-4">
                <div class="grid-card group">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_nao.png"
                        alt="Sample"
                    />
                </div>
                <div class="grid-card group">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_edited_my_love_finish.png"
                        alt="Sample"
                    />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-4 mt-4">
                <div class="grid-card group bg-[#FFD19A]">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_euria_ava_1.png"
                        alt="Sample"
                    />
                </div>
                <div class="grid-card group bg-[#8fc298]">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_renomz_1.2.png"
                        alt="Sample"
                    />
                </div>
                <div class="grid-card group bg-[#4f53b9]">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_bu_dok_astrid1.2.png"
                        alt="Sample"
                    />
                </div>
                <div class="grid-card group bg-[#A896C9]">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/choco_rakki1.2.png"
                        alt="Sample"
                    />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-1 mt-4">
                <div class="grid-card object-center group bg-[#FFC7ED]">
                    <img
                        class="object-cover object-center m-auto pointer-events-none"
                        src="http://cdn.hoshiro.space/choco/chocomission_1.png"
                        alt="Sample"
                        width="256"
                        height="256"
                    />
                </div>
            </div>
            <h2 class="text-lg text-chocolate-600 font-semibold my-4">Check out more information on Komisign</h2>
            <a
                href="https://komisign.carrd.co/"
                target="_blank"
                rel="noreferrer nofollow me"
                class="button w-full lg:w-80 mb-2 lg:mb-0 lg:mr-2"
            >
                <Icon
                    name="material-symbols:open-in-new-rounded"
                    class="block flex-grow-0 shrink-0"
                    width="32"
                    height="32"
                />
                <span class="flex-grow flex-shrink text-left w-full">Komisign Commision</span>
            </a>
            <a
                href="https://twitter.com/ChocoLatteCh_"
                target="_blank"
                rel="noreferrer nofollow me"
                class="button w-full lg:w-64"
            >
                <Icon name="ri:twitter-x-fill" class="block flex-grow-0 shrink-0" width="32" height="32" />
                <span class="flex-grow flex-shrink text-left w-full">Twitter DM</span>
            </a>
        </div>
    </FullScreenCard>
</template>

<style scoped></style>
