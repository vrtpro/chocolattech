<script setup lang="ts">
useHead({
    title: 'Developer',
});

const dev = ref({
    name: 'Falcxxdev',
    avatar: 'https://avatars.githubusercontent.com/u/68645946',
    ghrepo: 'https://github.com/gifaldyazkaa/chocolattech',
    github: 'https://github.com/gifaldyazkaa',
    twitter: 'https://twitter.com/falcxxdev',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="my-4">
            <h1 class="text-xl text-chocolate-800 text-center font-bold">You just discovered a hidden route!</h1>
            <p class="text-sm text-chocolate-700 text-center my-2">
                Let me introduce to you, I'm the developer of this website.
            </p>
        </div>
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex-1">
                <img
                    :src="dev.avatar"
                    :alt="dev.name"
                    class="h-[10rem] m-auto my-4 lg:my-0 rounded-[50%] shadow-md ring-4 ring-chocolate-700 hover:ring-[#ff7fa8] hover:scale-[1.1] p-1 transition-all"
                />
            </div>
            <div class="px-5 lg:py-auto lg:flex lg:w-1/2">
                <div class="mb-4 px-3 lg:my-16 m-auto">
                    <h1
                        class="text-2xl text-chocolate-800 hover:text-[#ff7fa8] text-center font-bold hover:underline transition-all"
                    >
                        <a :href="dev.github" target="_blank" rel="noreferrer">
                            {{ dev.name }} <Icon name="mdi:wrench" class="text-sky-700" width="22" height="22" />
                        </a>
                    </h1>
                    <p class="text-base text-chocolate-700 text-center my-2">
                        Passionate Front-end website developer mastering in Vue & Nuxt ecosystem. Currently studying
                        Avionics (AVE).
                    </p>
                    <p class="text-sm text-chocolate-700 text-center my-2">
                        Highest role on Chocochips Discord server:
                        <span class="bg-orange-500 bg-opacity-70 p-1 px-3 rounded-xl my-3 text-white">
                            Pengawal Kerajaan Chocochips</span
                        >
                    </p>
                    <p class="text-sm text-chocolate-700 text-center my-2">
                        Highest role on YouTube - ChocoLatte Ch:
                        <br class="block md:hidden" />
                        <span class="bg-slate-400 bg-opacity-70 p-1 px-3 rounded-xl my-3 text-sky-700">
                            <Icon name="mdi:wrench" width="18" height="18" />
                            Moderator</span
                        >
                    </p>
                    <div class="text-center">
                        <a
                            class="my-4 text-chocolate-700 hover:text-[#ff7fa8] transition-all"
                            :href="dev.github"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon class="mb-4" name="mdi:github" width="32" height="32" />
                        </a>
                        <a
                            class="my-4 text-chocolate-700 hover:text-[#ff7fa8] transition-all"
                            :href="dev.twitter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon class="mb-4" name="mdi:twitter" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
        </FlexCard>
        <div class="my-4">
            <p class="text-sm text-center text-chocolate-700">
                This website is open-source on
                <a :href="dev.ghrepo" class="hover:text-[#ff7fa8] underline" target="_blank" rel="noreferrer">GitHub</a
                >.
                <br />
                Website is licensed under MIT.
            </p>
        </div>
    </FullScreenCard>
</template>

<style></style>
