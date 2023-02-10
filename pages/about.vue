<script setup lang="ts">
useHead({
    title: 'About',
});

const _sns = ref([
    { name: 'YouTube', icon: 'mdi:youtube', url: 'https://www.youtube.com/channel/UCOrmSFsEeZsMd464vcBTILg' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/ChocoLatteCh_' },
    { name: 'Facebook', icon: 'mdi:facebook', url: 'https://www.facebook.com/ChocoLatte.Channel' },
    { name: 'TikTok', icon: 'ic:baseline-tiktok', url: 'https://www.tiktok.com/@chocolattech_' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/chocolattech_' },
    { name: 'Twitch', icon: 'mdi:twitch', href: 'https://www.twitch.tv/chocolattech' },
    { name: 'Discord server', icon: 'ic:baseline-discord', href: 'https://discord.gg/cVmy5bTaTs' },
]);
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="lg:flex">
            <div class="p-2 lg:py-9 lg:flex-1">
                <h1 class="text-3xl text-chocolate-700 font-bold">About</h1>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">Everything in General</h2>
                <p class="text-base text-chocolate-700">
                    A princess from Sweets Kingdom. She has power to become a cat. She accidentally enter a portal to
                    the virtual world, so her power are lost and become a fully human! How she will back to her world?
                    <br /><br />
                    Choco is native Indonesian-based Virtual YouTuber. She can speak Indonesian & English. Currently
                    affilated with
                    <a href="https://twitter.com/ProjectTsukimi" class="underline" target="_blank" rel="noreferrer"
                        >Tsukimi Project</a
                    >. <br />
                    She is mostly doing random things on YouTube Live. such as Playing Games (Genshin Impact is
                    most-played game), Karaoke, QnA, Reviews, etc.
                    <br /><br />
                    Her fan name is Chocochips. Mostly pronounced by her like <span class="italic">/ chococip /</span>,
                    and Chocochips is a base-role for regular member in discord server.
                </p>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">Rules for viewers</h2>
                <p class="text-base text-chocolate-700">
                    ❥ Please be respect to other viewers!
                    <br />
                    ❥ Do not spam!
                    <br />
                    ❥ Do not say a rude words!
                    <br />
                    ❥ Do not say hatespeech, harassment, racism words in the stream chat!
                    <br />
                    ❥ Do not backseating unless Choco ask for it!
                </p>
            </div>
            <div class="p-2 lg:py-9 lg:flex lg:w-1/2">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">History</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">February 13, 2022</h2>
                    <p class="text-base text-chocolate-700">Started first LIVE2D debut on YouTube and Twitch.</p>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">May 16, 2022</h2>
                    <p class="text-base text-chocolate-700">Reached 1k subscribers on YouTube.</p>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">February 14, 2023 [Upcoming]</h2>
                    <p class="text-base text-chocolate-700">Re-debut with new-look LIVE2D model & birthday party.</p>
                    <p class="text-sm text-center text-chocolate-700 my-2">and more things in future . . .</p>
                </div>
            </div>
        </div>
        <div class="p-2">
            <h1 class="text-3xl text-chocolate-800 font-bold">SNS</h1>
            <div class="lg:grid grid-cols-1 lg:gap-2 md:grid-cols-3 mt-4">
                <a
                    v-for="sns in _sns"
                    :href="sns.url"
                    target="_blank"
                    rel="noreferrer nofollow me"
                    class="button w-full my-1"
                >
                    <Icon :name="sns.icon" class="block flex-grow-0 shrink-0" width="32" height="32" />
                    <span class="flex-grow flex-shrink text-left w-full">{{ sns.name }}</span>
                </a>
            </div>
        </div>
    </FullScreenCard>
</template>

<style></style>
