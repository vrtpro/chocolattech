<script setup lang="ts">
useHead({
    title: 'Live Schedule',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2">
            <h1 class="text-3xl text-chocolate-700 font-bold text-center">Live Schedule</h1>
            <FullScreenCard class="lg:w-[50rem] h-auto m-auto schedule">
                <div>
                    <img
                        src="https://cdn.discordapp.com/attachments/898543182189559880/1080883498266661015/nostream.webp"
                        alt="Weekly schedule"
                        class="rounded-xl shadow-md hover:ring-2 ring-chocolate-700 transition-all"
                    />
                    <p class="text-chocolate-700 text-sm mt-3">
                        Schedule for unknown (little chance to stream)
                        <br />
                        Last updated on <code class="text-[#ff93b5] font-bold">Mon Jun 12 2023 19:21:00 GMT+7</code>
                    </p>
                    <a
                        href="https://www.youtube.com/@ChocoLatteCh"
                        target="_blank"
                        rel="noreferrer nofollow me"
                        class="button w-full lg:w-96 my-3"
                    >
                        <Icon name="mdi:youtube" class="block flex-grow-0 shrink-0" width="32" height="32" />
                        <span class="flex-grow flex-shrink text-left w-full">Watch past stream on YouTube</span>
                    </a>
                </div>
            </FullScreenCard>
        </div>
    </FullScreenCard>
</template>

<style>
.schedule .sign {
    display: none;
}
</style>
